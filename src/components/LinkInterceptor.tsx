"use client";

import { useEffect } from "react";

export default function LinkInterceptor() {
  useEffect(() => {
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Intercept same-page hash links on the homepage '/'
      const isHashLink = href.startsWith("#") || (href.startsWith("/#") && window.location.pathname === "/");
      if (isHashLink) {
        const hash = href.includes("#") ? href.substring(href.indexOf("#")) : "";
        const id = hash.replace("#", "");
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            event.preventDefault();
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", hash);
            return;
          }
        }
      }

      // Check if it's a custom protocol
      if (
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.startsWith("sms:") ||
        href.startsWith("whatsapp:")
      ) {
        event.preventDefault();
        window.open(href, "_system");
        return;
      }

      // Check if it is a WhatsApp web/API link
      if (
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("whatsapp.com/send")
      ) {
        event.preventDefault();
        window.open(href, "_system");
        return;
      }

      // Intercept external HTTP/HTTPS links to open in system browser
      if (href.startsWith("http://") || href.startsWith("https://")) {
        try {
          const url = new URL(href);
          const isInternal =
            url.hostname === window.location.hostname ||
            url.hostname === "localhost" ||
            url.hostname === "127.0.0.1";

          if (!isInternal) {
            event.preventDefault();
            window.open(href, "_system");
          }
        } catch (e) {
          console.error("Error parsing link URL:", e);
        }
      }
    };

    // Use capturing phase to intercept click before standard navigation
    document.addEventListener("click", handleLinkClick, true);
    return () => {
      document.removeEventListener("click", handleLinkClick, true);
    };
  }, []);

  return null;
}
