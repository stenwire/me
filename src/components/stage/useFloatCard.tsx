import { ReactNode, useEffect, useRef, useState } from "react";

/** A card that trails the cursor while `content` is set (desktop only — hidden via CSS on touch). */
export const useFloatCard = () => {
  const [content, setContent] = useState<ReactNode | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const w = 190;
      const h = el.offsetHeight || 150;
      el.style.left = `${Math.min(e.clientX + 22, window.innerWidth - w - 12)}px`;
      el.style.top = `${Math.min(e.clientY + 22, window.innerHeight - h - 12)}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const card = (
    <div ref={ref} className={`float-art ${content ? "show" : ""}`} aria-hidden="true">
      {content}
    </div>
  );

  return { setContent, card };
};
