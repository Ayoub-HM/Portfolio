import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_APP_PASSWORD;

    if (!emailUser || !emailPass || emailPass === "YOUR_GMAIL_APP_PASSWORD") {
      console.warn("Mail environment variables are not configured correctly.");
      // Return 500 so the frontend can catch it, or return 200 for testing mode.
      // Since the user MUST configure this, let's return 500 to show an error if it's not set.
      return NextResponse.json({ error: "Server email not configured. Please set EMAIL_APP_PASSWORD in .env.local" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${emailUser}>`, // Must send from authenticated user to prevent silent drops
      to: "ayoubhammou77@gmail.com", // Send directly to the user's box
      replyTo: email,
      subject: `Nouveau message de contact : ${name}`,
      text: `Vous avez reçu un nouveau message de ${name} (${email}).\n\nMessage:\n${message}`,
      html: `
        <h3>Nouveau message de contact Portfolio</h3>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
