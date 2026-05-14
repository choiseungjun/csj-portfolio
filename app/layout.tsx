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
  title: "Seungjun Choi — Frontend",
  description:
    "사용자와 맞닿은 UI의 본질부터, 동료들이 편하게 일하는 환경까지 — 팀의 생산성을 높이는 9년차 프론트엔드 개발자.",
  openGraph: {
    title: "Seungjun Choi — Frontend",
    description:
      "사용자와 맞닿은 UI의 본질부터, 동료들이 편하게 일하는 환경까지 — 팀의 생산성을 높이는 9년차 프론트엔드 개발자.",
    url: "https://sssjunn.vercel.app",
    siteName: "Seungjun Choi Portfolio",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seungjun Choi — Frontend",
    description:
      "사용자와 맞닿은 UI의 본질부터, 동료들이 편하게 일하는 환경까지 — 팀의 생산성을 높이는 9년차 프론트엔드 개발자.",
  },
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
