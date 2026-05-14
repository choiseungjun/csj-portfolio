export type Skill = { label: string; level: 2 | 3 };
export type SkillGroup = { label: string; items: Skill[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Core",
    items: [
      { label: "TypeScript", level: 3 },
      { label: "JavaScript", level: 3 },
      { label: "HTML", level: 3 },
      { label: "CSS", level: 3 },
      { label: "TSX", level: 3 },
      { label: "JSX", level: 3 },
    ],
  },
  {
    label: "Framework",
    items: [
      { label: "React", level: 3 },
      { label: "Next.js", level: 3 },
      { label: "Vue", level: 2 },
    ],
  },
  {
    label: "Styling",
    items: [
      { label: "Tailwind CSS", level: 3 },
      { label: "Emotion", level: 3 },
      { label: "Sass", level: 3 },
      { label: "CSS Variables", level: 3 },
      { label: "Material UI", level: 2 },
    ],
  },
  {
    label: "Tooling",
    items: [
      { label: "Vite", level: 3 },
      { label: "Webpack", level: 2 },
      { label: "Storybook", level: 3 },
      { label: "ESLint", level: 3 },
      { label: "Nextra", level: 2 },
      { label: "Vercel", level: 3 },
      { label: "Supabase", level: 2 },
    ],
  },
  {
    label: "Practice",
    items: [
      { label: "Design System", level: 3 },
      { label: "Coding Conventions", level: 3 },
      { label: "Code Review", level: 3 },
      { label: "Mentoring", level: 2 },
      { label: "Accessibility", level: 2 },
    ],
  },
  {
    label: "AI",
    items: [
      { label: "Claude (Team Pro)", level: 3 },
      { label: "Figma Plugin", level: 3 },
      { label: "Storybook MCP", level: 2 },
    ],
  },
];
