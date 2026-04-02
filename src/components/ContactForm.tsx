"use client";

import { useState, type FormEvent, useEffect } from "react";
import { Loader } from "lucide-react";
import { sendSmsViaHubtel } from "@/lib/hubtel";
import { showToast } from "@/lib/toast";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const adminPhone = process.env.NEXT_PUBLIC_ADMIN_PHONE || "";

      // Send SMS only to admin (no emails)
      if (adminPhone) {
        const smsMessage = `New Contact: ${form.name} (${form.email}, ${form.phone}) - ${form.subject}. Message: ${form.message}`;
        await sendSmsViaHubtel(adminPhone, smsMessage);
      } else {
        throw new Error("Admin phone not configured");
      }

      showToast("success", "Message sent successfully! We'll get back to you soon.");

      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      showToast("error", "Failed to send message. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-accent/60 bg-surface px-4 py-3 text-sm text-text placeholder:text-text-muted/50 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary">Name</label>
          <input
            type="text"
            required
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary">Email</label>
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary">Phone</label>
          <input
            type="tel"
            placeholder="+233 (0) 00 000 0000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-primary">Subject</label>
          <input
            type="text"
            required
            placeholder="How can we help?"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={inputClass}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-primary">Message</label>
        <textarea
          required
          rows={5}
          placeholder="Tell us more about your needs..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass + " resize-none"}
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-primary hover:bg-gold/90 hover:shadow-lg transition-all disabled:opacity-50"
      >
        {isSubmitting && <Loader size={16} className="animate-spin" />}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
