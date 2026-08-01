import { NextResponse } from "next/server";
import { Resend } from "resend";
import { renderQuoteEmail } from "@/lib/email-template";

const TO_EMAIL = "wesplixcode@gmail.com";

type ContactPayload = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  source?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return NextResponse.json(
      { error: "El servicio de correo no está configurado." },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Solicitud inválida." },
      { status: 400 }
    );
  }

  const { name, email, service, message, source } = body;

  if (!name?.trim() || !email?.trim() || !/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json(
      { error: "Nombre y correo válidos son requeridos." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  const subject = `Nueva cotización de ${name}${service ? ` — ${service}` : ""}`;

  const html = renderQuoteEmail({ name, email, service, message, source });

  try {
    const { error } = await resend.emails.send({
      from: "Wesplix Media <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Error enviando correo con Resend:", error);
      return NextResponse.json(
        { error: "No se pudo enviar el correo." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error inesperado enviando correo:", err);
    return NextResponse.json(
      { error: "No se pudo enviar el correo." },
      { status: 500 }
    );
  }
}
