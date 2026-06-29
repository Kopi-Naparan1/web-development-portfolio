import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  const SUBJECT = "Web Dev Portfolio Website Message";
  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      replyTo: email,
      to: "kopinaparan13@gmail.com",
      subject: SUBJECT,
      html: `
        <h2>New Message!</h2>

        <h3>Name:</h3>
        <p>${name}</p>

        <h3>Email:</h3>
        <p>${email}</p>

        <h3>Message:</h3>

        <p>${message}</p>

        <p>NOTE TO SELF: Respond Professionally</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Failed to send the email" },
      { status: 500 },
    );
  }
}
