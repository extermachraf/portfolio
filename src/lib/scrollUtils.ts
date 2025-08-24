"use client";

/**
 * Smoothly scrolls to an element with the specified ID
 */
export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 0; // Adjust this if you have a fixed header
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  }
}

/**
 * Gets the active section based on scroll position
 */
export function getActiveSection(): string {
  const sections = document.querySelectorAll<HTMLElement>("section[id]");
  const scrollPosition = window.scrollY + 200; // Offset for better UX

  let active = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute("id") || "";

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      active = sectionId;
    }
  });

  return active;
}
