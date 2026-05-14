export const THEME_KEY = "theme-v2";
export const THEME_EVENT = "theme-changed";

export type Theme = "light" | "dark";

export function getTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return (
    (document.documentElement.getAttribute("data-theme") as Theme) || "light"
  );
}

export function setTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {}
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: t }));
}

export function toggleTheme() {
  setTheme(getTheme() === "dark" ? "light" : "dark");
}
