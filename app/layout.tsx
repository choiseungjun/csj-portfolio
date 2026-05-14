import type { Metadata } from "next";
import { pretendard } from "@/lib/fonts";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { KeyboardHandler } from "@/components/KeyboardHandler";
import { ShortcutsPill } from "@/components/Shortcuts/ShortcutsPill";
import { ShortcutsOverlay } from "@/components/Shortcuts/ShortcutsOverlay";
import { DiscoveryBalloon } from "@/components/Shortcuts/DiscoveryBalloon";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata: Metadata = {
  title: "최승준 · Seungjun Choi — Frontend Engineer",
  description:
    "9년차 시니어 프론트엔드 엔지니어. 디자인 시스템과 컨벤션으로 팀이 멀리 가게 만드는 코드베이스를 만듭니다.",
};

const themeBootstrap = `
try {
  var t = localStorage.getItem('theme-v2');
  if (t) document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

export default function RootLayout({
  children,
  drawer,
}: {
  children: React.ReactNode;
  drawer: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      data-theme="light"
      className={pretendard.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <div className={styles.app}>
          <Sidebar />
          <main className={styles.content}>{children}</main>
        </div>
        {drawer}
        <ShortcutsPill />
        <ShortcutsOverlay />
        <DiscoveryBalloon />
        <KeyboardHandler />
      </body>
    </html>
  );
}
