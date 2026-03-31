"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X, Trash, Plus, Minus } from "lucide-react";
import { useRequest } from "@/context/RequestContext";
import { buildBulkMailtoLink, ADMIN_EMAIL, formatPrice } from "@/lib/utils";

export default function RequestDrawer() {
  const { items, updateQuantity, removeItem, clear, drawerOpen, openDrawer, closeDrawer } = useRequest();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("No items selected.");
      return;
    }
    const mailto = buildBulkMailtoLink({
      to: ADMIN_EMAIL,
      items,
      user: { name, email, mobile, whatsapp, message },
    });
    // Open mail client
    window.location.href = mailto;
    // optional cleanup
    clear();
    closeDrawer();
  };

  return (
    <>
      {/* Floating button (only on furniture & funeral shop pages when cart not empty) */}
      {(() => {
        const pathname = usePathname();
        const showFloatingButton =
          items.length > 0 &&
          (pathname?.startsWith("/services/furniture-shop") || pathname?.startsWith("/services/rentals"));
        return (
          showFloatingButton && (
            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={() => openDrawer()}
                className="flex items-center gap-2 rounded-full bg-gold px-4 py-3 shadow-lg text-primary font-semibold"
                aria-label="Open cart drawer"
              >
                Cart ({items.length})
              </button>
            </div>
          )
        );
      })()}

      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/40" onClick={() => closeDrawer()} />
          <aside className="w-full max-w-md bg-white p-6 overflow-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-primary">Cart</h3>
              <button onClick={() => closeDrawer()} aria-label="Close">
                <X />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Selected Items</h4>
                {items.length === 0 ? (
                  <p className="text-sm text-text-muted mt-2">No items selected.</p>
                ) : (
                  <ul className="space-y-3 mt-3">
                    {items.map((it) => (
                      <li key={it.code} className="flex items-center gap-3">
                        {it.image ? (
                          <div className="w-16 h-12 relative rounded overflow-hidden">
                            <Image src={it.image as any} alt={it.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className="w-16 h-12 bg-accent/20 rounded" />
                        )}
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-primary">{it.name}</div>
                          <div className="text-xs text-text-muted">{it.code}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(it.code, it.quantity - 1)}
                            className="p-1 rounded bg-accent/20"
                            aria-label="Decrease"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-[30px] text-center">{it.quantity}</span>
                          <button
                            onClick={() => updateQuantity(it.code, it.quantity + 1)}
                            className="p-1 rounded bg-accent/20"
                            aria-label="Increase"
                          >
                            <Plus size={14} />
                          </button>
                          <button onClick={() => removeItem(it.code)} className="p-1 text-red-500" aria-label="Remove">
                            <Trash size={16} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-sm block mb-1">Full name</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded border px-3 py-2" required />
                </div>
                <div>
                  <label className="text-sm block mb-1">Email</label>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full rounded border px-3 py-2" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-sm block mb-1">Mobile</label>
                    <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="w-full rounded border px-3 py-2" />
                  </div>
                  <div>
                    <label className="text-sm block mb-1">WhatsApp</label>
                    <input value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} className="w-full rounded border px-3 py-2" />
                  </div>
                </div>
                <div>
                  <label className="text-sm block mb-1">Message (optional)</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full rounded border px-3 py-2" rows={3} />
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div>
                    <div className="text-sm text-text-muted">Estimated total</div>
                    <div className="font-semibold text-lg">{formatPrice(total)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button type="button" onClick={() => { clear(); }} className="px-4 py-2 rounded border text-sm">Clear</button>
                    <button type="submit" className="px-4 py-2 rounded bg-gold text-primary font-semibold">Send Request</button>
                  </div>
                </div>
              </form>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
