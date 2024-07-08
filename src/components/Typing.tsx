/** @format */

import React from "react";
import Typed from "typed.js";

interface TypingProps {
  s: string[];
}

export default function Typing({ s }: TypingProps) {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: s,
      typeSpeed: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [s]);

  return (
    <div>
      <span ref={el} />
    </div>
  );
}
