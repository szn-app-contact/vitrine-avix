import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, city, email, phone, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message || !projectType) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'avix.digital.contact@gmail.com';

    if (!resendApiKey) {
      // Dev mode: log and return success without sending
      console.log('📧 [DEV MODE] Contact form submission:', {
        name, company, city, email, phone, projectType, budget, message
      });
      return NextResponse.json(
        { success: true, message: 'Message reçu (mode développement).' },
        { status: 200 }
      );
    }

    // Send with Resend
    const emailBody = `
Nouvelle demande de contact AVIX
================================

Nom : ${name}
Entreprise : ${company || 'Non renseignée'}
Ville : ${city || 'Non renseignée'}
Email : ${email}
Téléphone : ${phone || 'Non renseigné'}
Type de projet : ${projectType}
Budget approximatif : ${budget || 'Non renseigné'}

Message :
${message}

================================
Envoyé depuis avix-digital.com
    `.trim();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AVIX Contact <noreply@avix-digital.com>',
        to: [contactEmail],
        reply_to: email,
        subject: `[AVIX] Nouvelle demande — ${projectType} — ${name}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Votre message a bien été envoyé.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Une erreur inattendue est survenue.' },
      { status: 500 }
    );
  }
}
