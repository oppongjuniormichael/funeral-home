export function buildMailtoLink({
  to,
  itemCode,
  itemName,
  quantity,
  type,
}: {
  to: string;
  itemCode: string;
  itemName: string;
  quantity: number;
  type: "booking" | "rental";
}) {
  const subject = encodeURIComponent(
    `${type === "booking" ? "Booking" : "Rental"} Request — ${itemCode} — ${itemName}`
  );
  const body = encodeURIComponent(
    `Hello,\n\nI would like to ${type === "booking" ? "book" : "rent"} the following item:\n\n` +
      `Item: ${itemName}\nCode: ${itemCode}\nQuantity: ${quantity}\n\n` +
      `Please confirm availability and next steps.\n\nThank you.`
  );
  return `mailto:${to}?subject=${subject}&body=${body}`;
}

export function formatPrice(price: number): string {
  // Display amounts in Ghana Cedi (GHS)
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
  }).format(price);
}

export const ADMIN_EMAIL = "info@donkorandsons.com";

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
  let total = 0;
  items.forEach((it, idx) => {
    const line = `${idx + 1}. ${it.name} (${it.code}) — Qty: ${it.quantity}`;
    if (typeof it.price === "number") {
      total += it.price * it.quantity;
      body += `${line} — Price: ${formatPrice(it.price)}%0D%0A`;
    } else {
      body += `${line}%0D%0A`;
    }
  });

  if (total > 0) body += `%0D%0ATotal (est): ${formatPrice(total)}%0D%0A`;

  if (user.message) body += `%0D%0AMessage:%0D%0A${encodeURIComponent(user.message)}%0D%0A`;

  body += `%0D%0APlease confirm availability and next steps.%0D%0A%0D%0AThank you.`;

  return `mailto:${to}?subject=${subject}&body=${body}`;
}
