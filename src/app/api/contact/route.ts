import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// ─── Schéma de validation Zod ────────────────────────────────────────────────
const ContactSchema = z.object({
  name: z.string().min(2, 'Nom trop court.'),
  businessName: z.string().optional(),
  email: z.email('Email invalide.'),
  phone: z.string().optional(),
  city: z.string().optional(),
  projectType: z.string().min(1, 'Type de projet requis.'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Message trop court (min. 10 caractères).'),
  // honeypot — doit rester vide
  _hp: z.string().max(0).optional(),
});

// ─── Template HTML de l'email interne AVIX ────────────────────────────────────
function buildInternalEmail(data: z.infer<typeof ContactSchema>): string {
  const date = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Paris',
  });

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 16px;font-weight:600;color:#475569;width:160px;vertical-align:top;border-bottom:1px solid #f1f5f9;">${label}</td><td style="padding:8px 16px;color:#0f172a;border-bottom:1px solid #f1f5f9;">${value}</td></tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#1d4ed8 0%,#0891b2 100%);padding:32px 32px 24px;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
        <span style="font-size:24px;font-weight:800;color:#fff;letter-spacing:-0.5px;">AVIX</span>
        <span style="font-size:12px;color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.15);padding:2px 10px;border-radius:99px;">Nouvelle demande</span>
      </div>
      <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">Nouvelle demande de devis</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">${date}</p>
    </div>

    <!-- Infos contact -->
    <div style="padding:24px 32px 0;">
      <h2 style="font-size:13px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">Coordonnées</h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
        ${row('Nom', data.name)}
        ${row('Établissement', data.businessName || '')}
        ${row('Email', `<a href="mailto:${data.email}" style="color:#1d4ed8;">${data.email}</a>`)}
        ${row('Téléphone', data.phone ? `<a href="tel:${data.phone}" style="color:#1d4ed8;">${data.phone}</a>` : '')}
        ${row('Ville', data.city || '')}
      </table>
    </div>

    <!-- Projet -->
    <div style="padding:24px 32px 0;">
      <h2 style="font-size:13px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">Projet</h2>
      <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0;">
        ${row('Type de projet', data.projectType)}
        ${row('Budget', data.budget || '')}
      </table>
    </div>

    <!-- Message -->
    <div style="padding:24px 32px;">
      <h2 style="font-size:13px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1px;margin:0 0 12px;">Message</h2>
      <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px 20px;color:#1e293b;line-height:1.7;white-space:pre-wrap;">${data.message}</div>
    </div>

    <!-- Footer -->
    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#94a3b8;">Reçu depuis le formulaire de contact · <a href="https://www.avix-digital.com" style="color:#1d4ed8;">avix-digital.com</a></p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Template HTML de l'email de confirmation au prospect ────────────────────
function buildConfirmationEmail(name: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;">
  <div style="max-width:560px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    
    <div style="background:linear-gradient(135deg,#1d4ed8 0%,#0891b2 100%);padding:32px;text-align:center;">
      <span style="font-size:32px;font-weight:800;color:#fff;letter-spacing:-1px;">AVIX</span>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">Visibilité locale · Vendée & alentours</p>
    </div>

    <div style="padding:40px 32px;">
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#0f172a;">Bonjour ${name},</h1>
      <p style="margin:0 0 16px;color:#475569;line-height:1.7;font-size:15px;">
        Merci pour votre demande ! Nous avons bien reçu votre message concernant votre projet.
      </p>
      <p style="margin:0 0 24px;color:#475569;line-height:1.7;font-size:15px;">
        Nous revenons vers vous <strong style="color:#0f172a;">sous 24 à 48h</strong> pour discuter ensemble des meilleures solutions pour votre activité.
      </p>

      <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:20px 24px;margin-bottom:24px;">
        <p style="margin:0 0 8px;font-weight:600;color:#0369a1;font-size:14px;">En attendant, vous pouvez nous joindre directement :</p>
        <p style="margin:0;color:#0c4a6e;font-size:14px;">📞 <a href="tel:+33778071403" style="color:#1d4ed8;">07 78 07 14 03</a></p>
        <p style="margin:4px 0 0;color:#0c4a6e;font-size:14px;">📧 <a href="mailto:avix.digital.contact@gmail.com" style="color:#1d4ed8;">avix.digital.contact@gmail.com</a></p>
      </div>

      <p style="margin:0;color:#94a3b8;font-size:13px;">Bonne journée,<br><strong style="color:#0f172a;">L'équipe AVIX</strong></p>
    </div>

    <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:16px 32px;text-align:center;">
      <p style="margin:0;font-size:12px;color:#94a3b8;">AVIX · Vendée 85 · <a href="https://www.avix-digital.com" style="color:#1d4ed8;">avix-digital.com</a></p>
    </div>
  </div>
</body>
</html>`;
}

// ─── Route POST ───────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Honeypot — si rempli, on renvoie un succès silencieux
    if (body._hp && body._hp.length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 2. Validation Zod
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message || 'Données invalides.';
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    // 3. Vérification clé API
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL || 'avix.digital.contact@gmail.com';
    const fromEmail = process.env.FROM_EMAIL || 'AVIX <onboarding@resend.dev>';

    if (!resendApiKey) {
      // Mode dev sans clé : on log et on répond succès pour tester le form
      console.log('📧 [DEV — sans clé Resend] Formulaire soumis :', data);
      return NextResponse.json(
        { success: true, message: 'Reçu (mode dev — configurez RESEND_API_KEY).' },
        { status: 200 }
      );
    }

    const resend = new Resend(resendApiKey);

    // 4. Email interne AVIX
    const { error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      replyTo: data.email,
      subject: `Nouvelle demande de devis — AVIX — ${data.name}`,
      html: buildInternalEmail(data),
    });

    if (sendError) {
      console.error('Resend error (email interne):', sendError);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer." },
        { status: 500 }
      );
    }

    // 5. Email de confirmation au prospect (non bloquant)
    resend.emails
      .send({
        from: fromEmail,
        to: [data.email],
        subject: 'Votre demande a bien été reçue — AVIX',
        html: buildConfirmationEmail(data.name),
      })
      .catch((err) => console.warn('Confirmation email failed (non-bloquant):', err));

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
