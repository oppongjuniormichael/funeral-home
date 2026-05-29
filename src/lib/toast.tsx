"use client";

import { createRoot } from "react-dom/client";

function Toast({ type, message }: { type: "success" | "error"; message: string }) {
  const bg = type === "success" ? "bg-green-600" : "bg-red-600";
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium text-white shadow-lg ${bg}`}
      style={{ animation: "fadeInUp 0.25s ease" }}
    >
      {type === "success" ? "✓" : "✕"} {message}
      <style>{`@keyframes fadeInUp{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}`}</style>
    </div>
  );
}

export function showToast(type: "success" | "error", message: string, duration = 4000) {
  if (typeof window === "undefined") return;

  const container = document.createElement("div");
  document.body.appendChild(container);

  const root = createRoot(container);
  root.render(<Toast type={type} message={message} />);

  setTimeout(() => {
    root.unmount();
    container.remove();
  }, duration);
}
