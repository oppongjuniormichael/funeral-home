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
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export const ADMIN_EMAIL = "info@donkorandsons.com";
