import { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  //useEffect only runs client side - prevents server side hydration errors
  useEffect(() => {
    //sets the ref.current value to whatever
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  //ternary for whether it's client side or not
  return mounted ? createPortal(children, ref.current) : null;
}
