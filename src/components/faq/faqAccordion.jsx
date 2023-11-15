"use client";

import { useState } from "react";

export default function FaqAccordion(item) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section
      className={isShowing ? "faq-question question-open" : "faq-question"}
      key={item.key}
    >
      <a onClick={toggle}>
        <p className="faq-question-semiheader">{item.title}</p>
      </a>
      <p className="question-text">{item.text}</p>
    </section>
  );
}
