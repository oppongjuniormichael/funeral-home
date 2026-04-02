/**
 * Send SMS via Hubtel API
 * @param phoneNumber - Recipient phone number (format: 233XXXXXXXXXX or +233XXXXXXXXXX)
 * @param message - SMS content
 */
export async function sendSmsViaHubtel(phoneNumber: string, message: string) {
  try {
    const clientId = process.env.NEXT_PUBLIC_HUBTEL_CLIENT_ID || "";
    const clientSecret = process.env.NEXT_PUBLIC_HUBTEL_CLIENT_SECRET || "";
    const senderId = process.env.NEXT_PUBLIC_HUBTEL_SENDER_ID || "DonkorAndSons";

    if (!clientId || !clientSecret) {
      console.warn("Hubtel credentials (Client ID/Secret) not configured");
      return { success: false, error: "Hubtel credentials not configured" };
    }

    // Format phone number: remove + and ensure it's just digits
    const formattedPhone = phoneNumber.replace(/\D/g, "");

    // Build URL with query parameters
    const url = new URL("https://sms.hubtel.com/v1/messages/send");
    url.searchParams.append("clientid", clientId);
    url.searchParams.append("clientsecret", clientSecret);
    url.searchParams.append("from", senderId);
    url.searchParams.append("to", formattedPhone);
    url.searchParams.append("content", message);

    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (response.ok) {
      console.log("SMS sent successfully via Hubtel:", data);
      return { success: true, messageId: data.messageId };
    } else {
      console.error("Error sending SMS via Hubtel:", data);
      return { success: false, error: data.message || "Failed to send SMS" };
    }
  } catch (error) {
    console.error("Error in sendSmsViaHubtel:", error);
    throw error;
  }
}

/**
 * Send booking notification SMS to admin
 */
export async function sendBookingNotificationSms(customerName: string, itemCount: number, adminPhone: string) {
  const message = `New Booking Alert: ${customerName} has submitted a booking request for ${itemCount} item(s). Please check your email for details.`;
  return sendSmsViaHubtel(adminPhone, message);
}
