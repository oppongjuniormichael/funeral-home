export const ADMIN_EMAIL = "info@donkorandsons.com";

interface MailtoOptions {
  to: string;
  subject?: string;
  body?: string;
}

export function buildMailtoLink({ to, subject = "", body = "" }: MailtoOptions): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  
  const queryString = params.toString();
  return `mailto:${to}${queryString ? `?${queryString}` : ""}`;
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}
