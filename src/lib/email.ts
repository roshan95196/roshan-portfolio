export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  return { apiKey, contactEmail, fromEmail };
}

export function isResendConfigured(): boolean {
  const { apiKey, contactEmail } = getResendConfig();
  return Boolean(
    apiKey &&
      contactEmail &&
      apiKey !== "re_your_api_key_here" &&
      !apiKey.startsWith("re_your_")
  );
}
