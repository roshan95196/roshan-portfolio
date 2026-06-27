import { contactSchema } from "@/lib/validations";
import { escapeHtml, getResendConfig } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;
    const { apiKey, contactEmail, fromEmail } = getResendConfig();

    if (!apiKey || !contactEmail || apiKey === "re_your_api_key_here") {
      return Response.json(
        {
          error:
            "Email service is not configured. Please email me directly instead.",
          code: "NOT_CONFIGURED",
        },
        { status: 503 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);

      const resendMessage =
        typeof error === "object" && error !== null && "message" in error
          ? String(error.message)
          : "";

      const isTestingRestriction =
        resendMessage.includes("only send testing emails") ||
        resendMessage.includes("verify a domain");

      return Response.json(
        {
          error: isTestingRestriction
            ? "Testing mode: emails can only be sent to your Resend account email. Verify a domain for production."
            : "Failed to send message. Please try again later.",
        },
        { status: 500 }
      );
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
