import JSON5 from "json5";

export interface ResumeExperience {
  role: string;
  org: string;
  meta: string;
  bullets: string[];
}

export interface ResumeJam {
  name: string;
  meta: string;
  desc: string;
}

export interface ResumeModeData {
  role: string;
  tagline: string;
  experience: ResumeExperience[];
  projects?: string[];
  jams?: ResumeJam[];
  skills: string[];
  skillsLabel: string;
  showJams: boolean;
  showProjects: boolean;
}

export interface ResumeData {
  be: ResumeModeData;
  gd: ResumeModeData;
}

const CV_URL = "https://cv.gameweaver.dev";

export async function getResumeData(): Promise<ResumeData | null> {
  try {
    const res = await fetch(CV_URL, { next: { revalidate: 86400 } });
    if (!res.ok) return null;

    const html = await res.text();
    const match = html.match(/const\s+DATA\s*=\s*(\{[\s\S]*?\})\s*;/);
    if (!match) return null;

    const parsed = JSON5.parse(match[1]);
    if (!parsed?.be || !parsed?.gd) return null;

    return parsed as ResumeData;
  } catch {
    return null;
  }
}
