import { useEffect } from "react";
import Router from "./router";

function App() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll(
        "section, .destination-card, .service-card, .package-card, .honeymoon-card, .vehicle-card, .srv-card, .value-card, .tg-card, .tg-profile, .why-card"
      )
    );

    targets.forEach((node, index) => {
      const element = node as HTMLElement;
      element.classList.add("reveal-item");
      element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 80, 320)}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return <Router />;
}

export default App;

