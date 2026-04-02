import emailjs from "emailjs-com";
import type { RequestItem } from "@/context/RequestContext";

export function initEmailJS() {
  if (typeof window !== "undefined") {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
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
  try {
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

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      templateParams
    );

    console.log("Email sent successfully:", response);
    return { success: true, messageId: response.status };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export async function sendContactEmail(
  name: string,
  email: string,
  phone: string,
  subject: string,
  message: string
) {
  try {
    const templateParams = {
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL || "info@donkorandsons.com",
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      subject: subject,
      message: message,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "",
      templateParams
    );

    console.log("Contact email sent to admin:", response);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact email:", error);
    throw error;
  }
}

export async function sendContactConfirmationEmail(
  customerEmail: string,
  customerName: string
) {
  try {
    const templateParams = {
      to_email: customerEmail,
      customer_name: customerName,
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      process.env.NEXT_PUBLIC_EMAILJS_CONTACT_CONFIRMATION_TEMPLATE_ID || "",
      templateParams
    );

    console.log("Contact confirmation email sent to customer:", response);
    return { success: true };
  } catch (error) {
    console.error("Error sending contact confirmation:", error);
    throw error;
  }
}
