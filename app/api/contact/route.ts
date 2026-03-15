import { NextRequest, NextResponse } from "next/server";
import * as z from "zod";
import sendgridMail from "@sendgrid/mail";

const contactSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().min(10),
});

// Environment variable must already be set on deployment
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || "";
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || "";
const TO_EMAIL = "hi@chirag.co"; // Owner's contact

if (SENDGRID_API_KEY) {
  sendgridMail.setApiKey(SENDGRID_API_KEY);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.parse(body);

    if (!SENDGRID_API_KEY || !SENDGRID_FROM_EMAIL) {
      return NextResponse.json({ ok: false, error: "Contact unavailable." }, { status: 500 });
    }

    await sendgridMail.send({
      to: TO_EMAIL,
      from: SENDGRID_FROM_EMAIL,
      replyTo: parsed.email,
      subject: `[Mailvibe] Contact: ${parsed.subject}`,
      text: `
        New Mailvibe contact form inquiry

        Name: ${parsed.firstName} ${parsed.lastName}
        Email: ${parsed.email}
        Subject: ${parsed.subject}

        Message:
        ${parsed.message}
      `,
      html: `
        <h2>Mailvibe Contact Form</h2>
        <p><strong>Name:</strong> ${parsed.firstName} ${parsed.lastName}</p>
        <p><strong>Email:</strong> ${parsed.email}</p>
        <p><strong>Subject:</strong> ${parsed.subject}</p>
        <pre>${parsed.message}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Form error" }, { status: 400 });
  }
}