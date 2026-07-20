import { useEffect } from "react";
import type { PortfolioStyle } from "../lib/config";
import { whatsappUrl } from "../lib/config";

type Props = {
  style: PortfolioStyle | null;
  onClose: () => void;
};

export function PortfolioLightbox({ style, onClose }: Props) {
  useEffect(() => {
    if (!style) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [style, onClose]);

  if (!style) return null;

  return (
    <div
      className="lightbox-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Ensaio ${style.label}`}
      onClick={onClose}
    >
      <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox-close"
          aria-label="Fechar"
          onClick={onClose}
        >
          ×
        </button>

        <div className="lightbox-header">
          <span className="lightbox-eyebrow">Portfólio</span>
          <h3>{style.label}</h3>
          <p>{style.description}</p>
        </div>

        <div className="lightbox-grid">
          {style.images.map((img, i) => (
            <figure key={i} className="lightbox-figure">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <div className="lightbox-footer">
          <a
            className="button button-primary"
            href={whatsappUrl(style.whatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Gostei desse <span aria-hidden="true">✓</span>
          </a>
          <span className="lightbox-microcopy">
            Imagens demonstrativas criadas com IA
          </span>
        </div>
      </div>
    </div>
  );
}