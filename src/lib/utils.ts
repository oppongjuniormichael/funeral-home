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
  // Display amounts in Ghana Cedi (GHS)
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export function buildBulkMailtoLink({
  to,
  items,
  user,
}: {
  to: string;
  items: Array<{ code: string; name: string; quantity: number; price?: number }>;
  user: { name?: string; email?: string; mobile?: string; whatsapp?: string; message?: string };
}) {
  const subject = encodeURIComponent(`Rental Request — ${user.name ?? "Customer"}`);

  let body = `Hello,%0D%0A%0D%0AI would like to request the following items:%0D%0A%0D%0A`;
  if (user.name) body += `Name: ${user.name}%0D%0A`;
  if (user.email) body += `Email: ${user.email}%0D%0A`;
  if (user.mobile) body += `Mobile: ${user.mobile}%0D%0A`;
  if (user.whatsapp) body += `WhatsApp: ${user.whatsapp}%0D%0A`;

  body += `%0D%0AItems:%0D%0A`;
  items.forEach((it, idx) => {
    const line = `${idx + 1}. ${it.name} (${it.code}) — Qty: ${it.quantity}`;
    body += `${line}%0D%0A`;
  });

  if (user.message) body += `%0D%0AMessage:%0D%0A${encodeURIComponent(user.message)}%0D%0A`;

  body += `%0D%0APlease confirm availability and next steps.%0D%0A%0D%0AThank you.`;

  return `mailto:${to}?subject=${subject}&body=${body}`;
}
