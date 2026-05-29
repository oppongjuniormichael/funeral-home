import emailjs from "emailjs-com";
import type { RequestItem } from "@/context/RequestContext";

const PUBLIC_KEY = () => process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
const SERVICE_ID = () => process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";

export function initEmailJS() {
  if (typeof window !== "undefined") {
    emailjs.init(PUBLIC_KEY());
  }
}

interface BookingData {
  name: string;
  email: string;
  mobile: string;
  whatsapp: string;
  message: string;
  items: RequestItem[];
}

export async function sendBookingEmail(bookingData: BookingData) {
  const itemsList = bookingData.items
    .map((item, idx) => `${idx + 1}. ${item.name} (${item.code}) — Qty: ${item.quantity}`)
    .join("\n");

  const templateParams = {
    to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "info@donkorandsons.com",
    customer_name: bookingData.name,
    customer_email: bookingData.email,
    customer_mobile: bookingData.mobile,
    customer_whatsapp: bookingData.whatsapp,
    message: bookingData.message,
    items_list: itemsList,
    items_count: bookingData.items.length,
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID(),
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      templateParams,
      PUBLIC_KEY()
    );
    return { success: true, messageId: response.status };
  } catch (error: unknown) {
    const msg =
      error && typeof error === "object" && "text" in error
        ? (error as { text: string }).text
        : String(error);
    console.error("Error sending booking email:", msg);
    throw new Error(msg);
  }
}

export async function sendContactEmail(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) {
  const templateParams = {
    to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "info@donkorandsons.com",
    customer_name: name,
    customer_email: email,
    customer_phone: phone,
    subject: subject,
    message: message,
  };

  try {
    const response = await emailjs.send(
      SERVICE_ID(),
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "",
      templateParams,
      PUBLIC_KEY()
    );
    return { success: true, messageId: response.status };
  } catch (error: unknown) {
    const msg =
      error && typeof error === "object" && "text" in error
        ? (error as { text: string }).text
        : String(error);
    console.error("Error sending contact email:", msg);
    throw new Error(msg);
  }
}
