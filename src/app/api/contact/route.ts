import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// ─── Schéma Zod ───────────────────────────────────────────────────────────────
const ContactSchema = z.object({
  name:         z.string().min(2,  'Nom trop court.'),
  businessName: z.string().optional(),
  email:        z.email('Email invalide.'),
  phone:        z.string().optional(),
  city:         z.string().optional(),
  projectType:  z.string().min(1,  'Type de projet requis.'),
  budget:       z.string().optional(),
  message:      z.string().min(10, 'Message trop court (min. 10 caractères).'),
  _hp:          z.string().max(0).optional(), // honeypot
});

// ─── Template email interne AVIX ──────────────────────────────────────────────
function buildInternalEmail(data: z.infer<typeof ContactSchema>): string {
  const date = new Date().toLocaleString('fr-FR', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
    hour:    '2-digit',
    minute:  '2-digit',
    timeZone: 'Europe/Paris',
  });

  // Valeur affichée ou "—" si vide
  const val = (v?: string) => (v && v.trim() ? v.trim() : '—');

  const row = (label: string, content: string) => `
    <tr>
      <td style="padding:10px 16px;font-weight:600;color:#64748b;width:170px;vertical-align:top;border-bottom:1px solid #f1f5f9;white-space:nowrap;">${label}</td>
      <td style="padding:10px 16px;color:#0f172a;border-bottom:1px solid #f1f5f9;">${content}</td>
    </tr>`;

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;">
<div style="max-width:620px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <!-- Header -->
  <div style="background:linear-gradient(135deg,#1d4ed8 0%,#0891b2 100%);padding:28px 32px 22px;">
    <div style="font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;margin-bottom:6px;">
      AVIX <span style="font-size:12px;font-weight:500;background:rgba(255,255,255,0.2);padding:2px 10px;border-radius:99px;vertical-align:middle;">Nouvelle demande</span>
    </div>
    <div style="color:rgba(255,255,255,0.85);font-size:13px;">${date}</div>
  </div>

  <!-- Coordonnées client -->
  <div style="padding:24px 32px 0;">
    <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">Coordonnées client</div>
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">
      ${row('Nom &amp; Prénom',       val(data.name))}
      ${row('Établissement',          val(data.businessName))}
      ${row('Email',                  `<a href="mailto:${data.email}" style="color:#1d4ed8;">${data.email}</a>`)}
      ${row('Téléphone',              data.phone ? `<a href="tel:${data.phone}" style="color:#1d4ed8;">${data.phone}</a>` : '—')}
      ${row('Ville / Commune',        val(data.city))}
    </table>
  </div>

  <!-- Projet -->
  <div style="padding:20px 32px 0;">
    <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">Projet</div>
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:10px;overflow:hidden;border:1px solid #e2e8f0;">
      ${row('Type de projet',  val(data.projectType))}
      ${row('Budget approximatif', val(data.budget))}
    </table>
  </div>

  <!-- Message -->
  <div style="padding:20px 32px 28px;">
    <div style="font-size:11px;font-weight:700;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:10px;">Message du client</div>
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:16px 20px;color:#1e293b;line-height:1.75;white-space:pre-wrap;font-size:14px;">${data.message}</div>
  </div>

  <!-- Footer -->
  <div style="background:#f1f5f9;border-top:1px solid #e2e8f0;padding:14px 32px;text-align:center;">
    <p style="margin:0;font-size:11px;color:#94a3b8;">
      Source : formulaire de contact AVIX — /contact &nbsp;·&nbsp;
      <a href="https://www.avix-digital.com" style="color:#1d4ed8;">avix-digital.com</a>
    </p>
  </div>

</div>
</body>
</html>`;
}

// ─── Template email confirmation prospect ─────────────────────────────────────
function buildConfirmationEmail(name: string): string {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:system-ui,-apple-system,sans-serif;">
<div style="max-width:560px;margin:32px auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

  <div style="background:linear-gradient(135deg,#1d4ed8 0%,#0891b2 100%);padding:32px;text-align:center;">
    <div style="font-size:30px;font-weight:800;color:#fff;letter-spacing:-1px;">AVIX</div>
    <div style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">Visibilité locale · Vendée &amp; alentours</div>
  </div>

  <div style="padding:40px 32px;">
    <h1 style="margin:0 0 16px;font-size:20px;font-weight:700;color:#0f172a;">Bonjour ${name},</h1>
    <p style="margin:0 0 14px;color:#475569;line-height:1.7;font-size:15px;">
      Merci pour votre demande ! Nous avons bien reçu votre message.
    </p>
    <p style="margin:0 0 28px;color:#475569;line-height:1.7;font-size:15px;">
      Nous revenons vers vous <strong style="color:#0f172a;">sous 24 à 48h</strong> pour discuter ensemble de votre projet.
    </p>
    <div style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:18px 22px;margin-bottom:28px;">
      <div style="font-weight:600;color:#0369a1;font-size:13px;margin-bottom:8px;">En attendant, vous pouvez nous joindre :</div>
      <div style="color:#0c4a6e;font-size:14px;">📞 <a href="tel:+33778071403" style="color:#1d4ed8;">07 78 07 14 03</a></div>
      <div style="color:#0c4a6e;font-size:14px;margin-top:4px;">📧 <a href="mailto:avix.digital.contact@gmail.com" style="color:#1d4ed8;">avix.digital.contact@gmail.com</a></div>
    </div>
    <p style="margin:0;color:#94a3b8;font-size:13px;">Bonne journée,<br><strong style="color:#0f172a;">L'équipe AVIX</strong></p>
  </div>

  <div style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:14px 32px;text-align:center;">
    <p style="margin:0;font-size:11px;color:#94a3b8;">AVIX · Vendée 85 · <a href="https://www.avix-digital.com" style="color:#1d4ed8;">avix-digital.com</a></p>
  </div>

</div>
</body>
</html>`;
}

// ─── Route POST ───────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  try {
    // ── LOG 1 : body brut reçu ─────────────────────────────────────────────────
    const body = await request.json();
    console.log('[AVIX /api/contact] Body reçu :', JSON.stringify({
      name:        body.name,
      businessName: body.businessName,
      email:       body.email,
      phone:       body.phone,
      city:        body.city,
      projectType: body.projectType,
      budget:      body.budget,
      message:     body.message ? `${String(body.message).slice(0, 60)}…` : '',
      _hp:         body._hp,
    }));

    // ── Honeypot ───────────────────────────────────────────────────────────────
    if (body._hp && body._hp.length > 0) {
      console.log('[AVIX /api/contact] Honeypot déclenché — spam bloqué silencieusement.');
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // ── Validation Zod ─────────────────────────────────────────────────────────
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      const issues = parsed.error.issues.map(i => `${i.path.join('.')}: ${i.message}`);
      console.warn('[AVIX /api/contact] Validation échouée :', issues);
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || 'Données invalides.' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    console.log('[AVIX /api/contact] Validation OK — champs reçus :', {
      name:        data.name,
      businessName: data.businessName || '(vide)',
      email:       data.email,
      phone:       data.phone || '(vide)',
      city:        data.city || '(vide)',
      projectType: data.projectType,
      budget:      data.budget || '(vide)',
      messageLength: data.message.length,
    });

    // ── Clé API ────────────────────────────────────────────────────────────────
    const resendApiKey  = process.env.RESEND_API_KEY;
    const contactEmail  = process.env.CONTACT_EMAIL  || 'avix.digital.contact@gmail.com';
    const fromEmail     = process.env.FROM_EMAIL     || 'AVIX <onboarding@resend.dev>';

    console.log('[AVIX /api/contact] Config :', {
      hasApiKey:    !!resendApiKey,
      contactEmail,
      fromEmail,
    });

    if (!resendApiKey) {
      console.warn('[AVIX /api/contact] ⚠️  RESEND_API_KEY manquante — aucun email envoyé.');
      return NextResponse.json(
        { error: 'Erreur de configuration serveur. Contactez-nous directement à avix.digital.contact@gmail.com.' },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    // ── Email interne AVIX ─────────────────────────────────────────────────────
    console.log(`[AVIX /api/contact] Envoi email interne vers ${contactEmail}…`);
    const { data: sentData, error: sendError } = await resend.emails.send({
      from:     fromEmail,
      to:       [contactEmail],
      replyTo:  data.email,          // ← répondre clique = répond au client
      subject:  `Nouvelle demande de devis — AVIX — ${data.name}`,
      html:     buildInternalEmail(data),
    });

    if (sendError) {
      console.error('[AVIX /api/contact] ❌ Resend error (email interne) :', JSON.stringify(sendError));
      return NextResponse.json(
        { error: "Erreur lors de l'envoi. Veuillez réessayer ou nous écrire à avix.digital.contact@gmail.com." },
        { status: 500 }
      );
    }

    console.log('[AVIX /api/contact] ✅ Email interne envoyé. ID Resend :', sentData?.id);

    // ── Email de confirmation au prospect (non bloquant) ───────────────────────
    resend.emails
      .send({
        from:    fromEmail,
        to:      [data.email],
        subject: 'Votre demande a bien été reçue — AVIX',
        html:    buildConfirmationEmail(data.name),
      })
      .then(r => {
        if (r.error) {
          console.warn('[AVIX /api/contact] ⚠️  Email confirmation prospect échoué :', JSON.stringify(r.error));
        } else {
          console.log('[AVIX /api/contact] ✅ Email confirmation envoyé au prospect. ID :', r.data?.id);
        }
      })
      .catch(err => console.warn('[AVIX /api/contact] ⚠️  Email confirmation exception :', err));

    return NextResponse.json(
      { success: true, message: 'Votre message a bien été envoyé.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('[AVIX /api/contact] ❌ Erreur inattendue :', error);
    return NextResponse.json(
      { error: 'Une erreur inattendue est survenue. Veuillez réessayer.' },
      { status: 500 }
    );
  }
}
