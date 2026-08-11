"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

/**
 * In-page link that scrolls on every activation.
 *
 * A hash link only scrolls when the hash actually changes, so once the URL is
 * already `#apply` the control silently does nothing on later clicks. Scroll
 * explicitly instead, and keep the real href so the link still works without
 * JavaScript, on middle click, and in a new tab.
 */
export function SectionLink({ href, onClick, ...props }: ComponentProps<typeof Link>) {
  const id = typeof href === "string" ? href.split("#")[1] : undefined;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (!id || event.defaultPrevented) return;
    // Leave modified clicks to the browser: new tab, new window, download.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();

    // No behavior argument, so CSS scroll-behavior decides. The global
    // reduced-motion query already resolves that to an instant jump.
    target.scrollIntoView();

    // Native hash navigation moves focus to the target; preserve that so the
    // next Tab continues from the section rather than the link.
    if (!target.hasAttribute("tabindex")) {
      target.setAttribute("tabindex", "-1");
    }
    target.focus({ preventScroll: true });

    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
  }

  return <Link href={href} onClick={handleClick} {...props} />;
}
