"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X, Trash, Plus, Minus, ShoppingCart, User, MessageSquare, Send } from "lucide-react";
import { useRequest } from "@/context/RequestContext";
import { showToast } from "@/lib/toast";

const WHATSAPP_NUMBER = "233203915510";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function RequestDrawer() {
  const { items, updateQuantity, removeItem, clear, drawerOpen, openDrawer, closeDrawer } = useRequest();
  const pathname = usePathname();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      showToast("error", "No items selected.");
      return;
    }

    if (!name.trim()) {
      showToast("error", "Please enter your full name.");
      return;
    }

    const itemLines = items
      .map((it, i) => `  ${i + 1}. ${it.name} (Code: ${it.code}) — Qty: ${it.quantity}`)
      .join("\n");

    const lines = [
      "━━━━━━━━━━━━━━━━━━━━━━",
      "📋 *NEW ORDER REQUEST*",
      "━━━━━━━━━━━━━━━━━━━━━━",
      "",
      "👤 *Customer Details*",
      `• Name: ${name.trim()}`,
      ...(phone.trim() ? [`• Phone: ${phone.trim()}`] : []),
      "",
      "🛒 *Requested Items*",
      itemLines,
      "",
      `📦 *Total Items:* ${items.reduce((sum, it) => sum + it.quantity, 0)}`,
      ...(message.trim() ? ["", "💬 *Additional Notes*", message.trim()] : []),
      "",
      "━━━━━━━━━━━━━━━━━━━━━━",
      "Sent via Donkor & Sons Website",
    ];

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank");

    showToast("success", "Opening WhatsApp — your order is ready to send!");
    setName("");
    setPhone("");
    setMessage("");
    clear();
    setTimeout(() => closeDrawer(), 1500);
  };

  const showFloatingButton =
    items.length > 0 &&
    (pathname?.startsWith("/services/furniture-shop") || pathname?.startsWith("/services/rentals"));

  const totalQty = items.reduce((sum, it) => sum + it.quantity, 0);

  return (
    <>
      {showFloatingButton && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => openDrawer()}
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-3 shadow-lg text-primary font-semibold hover:bg-gold/90 transition-all"
            aria-label="Open cart drawer"
          >
            <ShoppingCart size={18} />
            Order ({items.length})
          </button>
        </div>
      )}

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/50" onClick={() => closeDrawer()} />

          <aside className="w-full max-w-md bg-white flex flex-col shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-primary text-white shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingCart size={20} />
                <div>
                  <h3 className="font-heading text-lg font-bold leading-tight">Your Order</h3>
                  <p className="text-xs text-white/60">{items.length} item{items.length !== 1 ? "s" : ""} · {totalQty} qty total</p>
                </div>
              </div>
              <button
                onClick={() => closeDrawer()}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

              {/* Selected Items */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                  Selected Items
                </h4>
                {items.length === 0 ? (
                  <p className="text-sm text-text-muted py-4 text-center">No items selected.</p>
                ) : (
                  <ul className="space-y-3">
                    {items.map((it) => (
                      <li key={it.code} className="flex items-center gap-3 rounded-xl border border-accent/40 bg-surface p-3">
                        {it.image ? (
                          <div className="w-14 h-12 relative rounded-lg overflow-hidden shrink-0">
                            <Image
                              src={it.image as string}
                              alt={it.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-12 bg-accent/20 rounded-lg shrink-0" />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-bold text-primary truncate">{it.name}</div>
                          <div className="text-xs text-text-muted mt-0.5">Code: {it.code}</div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => updateQuantity(it.code, it.quantity - 1)}
                            className="h-6 w-6 flex items-center justify-center rounded bg-accent/30 hover:bg-accent/60 transition-colors"
                            aria-label="Decrease"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-6 text-center text-sm font-semibold">{it.quantity}</span>
                          <button
                            onClick={() => updateQuantity(it.code, it.quantity + 1)}
                            className="h-6 w-6 flex items-center justify-center rounded bg-accent/30 hover:bg-accent/60 transition-colors"
                            aria-label="Increase"
                          >
                            <Plus size={12} />
                          </button>
                          <button
                            onClick={() => removeItem(it.code)}
                            className="h-6 w-6 flex items-center justify-center rounded text-red-400 hover:bg-red-50 transition-colors ml-1"
                            aria-label="Remove"
                          >
                            <Trash size={13} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-accent/40" />

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
                  Your Details
                </h4>

                {/* Full Name */}
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-bold text-primary mb-1.5">
                    <User size={14} className="text-gold" />
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-accent/60 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all placeholder:text-text-muted/50"
                    placeholder="e.g. Kwame Mensah"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-bold text-primary mb-1.5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5 text-gold">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.86 9.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.77 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    Phone Number <span className="text-text-muted font-normal text-xs">(optional)</span>
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-lg border border-accent/60 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all placeholder:text-text-muted/50"
                    placeholder="e.g. 024 307 9555"
                    type="tel"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-1.5 text-sm font-bold text-primary mb-1.5">
                    <MessageSquare size={14} className="text-gold" />
                    Additional Notes <span className="text-text-muted font-normal text-xs">(optional)</span>
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-accent/60 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all placeholder:text-text-muted/50 resize-none"
                    rows={3}
                    placeholder="Any special requirements, dates, or questions..."
                  />
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => clear()}
                    className="px-4 py-2.5 rounded-lg border border-accent/60 text-sm font-semibold text-text-muted hover:bg-accent/20 transition-all"
                  >
                    Clear All
                  </button>
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white font-bold hover:bg-[#1ebe5d] active:scale-95 transition-all shadow-md shadow-[#25D366]/20"
                  >
                    {WA_ICON}
                    <Send size={14} />
                    Send Order via WhatsApp
                  </button>
                </div>
              </form>
            </div>

            {/* Footer note */}
            <div className="shrink-0 px-6 py-3 bg-surface border-t border-accent/30 text-center">
              <p className="text-xs text-text-muted">
                Your order details will be pre-filled in WhatsApp for you to review and send.
              </p>
            </div>

          </aside>
        </div>
      )}
    </>
  );
}
