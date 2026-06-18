import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // ==========================================
    // Cloudflare Turnstile captcha ellenőrzése
    // ==========================================
    const token = formData.get('captchaToken') as string
    
    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
        headers: { 'Content-Type': 'application/json' },
      }
    )
    
    const verification = await verifyResponse.json() as { success: boolean }
    
    if (!verification.success) {
      return NextResponse.json(
        { error: 'Captcha ellenőrzés sikertelen. Kérjük, próbálja újra.' },
        { status: 400 }
      )
    }

    // ==========================================
    // Adatok kinyerése
    // ==========================================
    const institution = formData.get('institution') as string || 'Nincs megadva'
    const contactName = formData.get('contactName') as string || 'Nincs megadva'
    const email = formData.get('email') as string || 'Nincs megadva'
    const phone = formData.get('phone') as string || 'Nincs megadva'
    const manufacturer = formData.get('manufacturer') as string || 'Nincs megadva'
    const deviceType = formData.get('deviceType') as string || 'Nincs megadva'
    const probeType = formData.get('probeType') as string || 'Nincs megadva'
    const description = formData.get('description') as string || 'Nincs megadva'
    const urgent = formData.get('urgent') === 'true' ? '⚠️ IGEN – SÜRGŐS' : 'Nem'

    // ==========================================
    // Fájlok feldolgozása
    // ==========================================
    const attachments: { filename: string; content: Buffer }[] = []
    const fileEntries = formData.getAll('attachment') as File[]
    
    for (const file of fileEntries) {
      if (file && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer())
        attachments.push({
          filename: file.name,
          content: buffer,
        })
      }
    }

    // ==========================================
    // Email küldése Resend-del
    // ==========================================
    const resend = new Resend(process.env.RESEND_API_KEY)

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #0F4C81; padding: 20px; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">📋 Új hibabejelentés érkezett</h1>
          <p style="color: #D6E8F7; margin: 5px 0 0 0; font-size: 14px;">uhfej.hu űrlap</p>
        </div>
        
        <div style="background: #F8FAFB; padding: 20px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #6B7280; width: 160px;">Intézmény neve:</td>
              <td style="padding: 8px 0; color: #1F2937; font-weight: 500;">${institution}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Kapcsolattartó:</td>
              <td style="padding: 8px 0; color: #1F2937; font-weight: 500;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Email:</td>
              <td style="padding: 8px 0; color: #1F2937;"><a href="mailto:${email}" style="color: #0F4C81;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Telefonszám:</td>
              <td style="padding: 8px 0; color: #1F2937;"><a href="tel:${phone}" style="color: #0F4C81;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Gyártó:</td>
              <td style="padding: 8px 0; color: #1F2937; font-weight: 500;">${manufacturer}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Készülék típusa:</td>
              <td style="padding: 8px 0; color: #1F2937;">${deviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Ultrahang fej típusa:</td>
              <td style="padding: 8px 0; color: #1F2937; font-weight: 500;">${probeType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Sürgősségi:</td>
              <td style="padding: 8px 0; color: ${urgent.includes('IGEN') ? '#DC2626' : '#1F2937'}; font-weight: 500;">${urgent}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6B7280;">Csatolmányok:</td>
              <td style="padding: 8px 0; color: #1F2937;">${attachments.length > 0 ? attachments.map(a => a.filename).join(', ') : 'Nincs csatolmány'}</td>
            </tr>
          </table>
          
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 16px 0;" />
          
          <h3 style="color: #1F2937; font-size: 16px; margin: 0 0 8px 0;">Hiba leírása:</h3>
          <p style="color: #4B5563; line-height: 1.6; margin: 0; white-space: pre-wrap;">${description}</p>
        </div>
        
        <div style="text-align: center; padding: 12px; color: #9CA3AF; font-size: 12px;">
          Ezt az emailt az uhfej.hu weboldal hibabejelentő űrlapja generálta.
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'uhfej.hu <info@uhfej.hu>',
      to: 'info@uhfej.hu',
      subject: `Hibabejelentés – ${contactName} (${institution})`,
      html: emailHtml,
      attachments: attachments.map(a => ({
        filename: a.filename,
        content: a.content.toString('base64'),
      })),
    })

    return NextResponse.json({ success: true })
    
  } catch (error) {
    console.error('Hiba a beküldés során:', error)
    return NextResponse.json(
      { error: 'Hiba történt a beküldés során. Kérjük, próbálja újra később.' },
      { status: 500 }
    )
  }
}
