export const SHORTCUTS_EVENT = "shortcuts-toggle";

export function dispatchShortcutsToggle(open?: boolean) {
  window.dispatchEvent(
    new CustomEvent(SHORTCUTS_EVENT, { detail: { open } })
  );
}
