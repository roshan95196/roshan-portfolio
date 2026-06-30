import type { ContactFormData } from "@/lib/validations";

export type EmailProvider = "mailto" | "gmail" | "outlook" | "yahoo";

export function buildEmailContent(data: ContactFormData) {
  const subject = `Portfolio contact from ${data.name}`;
  const body = data.message;
  return { subject, body };
}

export function getEmailComposeUrl(
  provider: EmailProvider,
  to: string,
  subject: string,
  body: string
): string {
  const encodedTo = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  switch (provider) {
    case "gmail":
      return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
    case "outlook":
      return `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
    case "yahoo":
      return `https://compose.mail.yahoo.com/?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
    case "mailto":
    default:
      return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
  }
}

export function openEmailClient(
  provider: EmailProvider,
  to: string,
  data: ContactFormData
) {
  const { subject, body } = buildEmailContent(data);
  const url = getEmailComposeUrl(provider, to, subject, body);

  if (provider === "mailto") {
    window.location.href = url;
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
