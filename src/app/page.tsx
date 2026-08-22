"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./page.module.css";
import { Icon, type IconName } from "./icons";
import { Timeline } from "@/components/ui/timeline";

type Tile = {
  key: string;
  variant: "indigo" | "clay";
  fill?: boolean;
  colClass: keyof typeof styles;
  kicker?: string;
  icon?: IconName;
  title: string;
  body: string;
};

const tiles: Tile[] = [
  {
    key: "founder",
    variant: "indigo",
    colClass: "tFounder",
    kicker: "Founded & Grew",
    title: "H3 Product Design Futures — Credit Karma",
    body: "Built a team from nothing to explore what product design becomes next — horizon work, not roadmap work.",
  },
  {
    key: "gopher",
    variant: "clay",
    fill: true,
    colClass: "tGopher",
    icon: "sprout",
    title: "The Gopher War",
    body: "New house, new vegetable garden, and an unresolved war with the gophers and squirrels who are currently winning. I remain optimistic. This is unearned.",
  },
  {
    key: "thinking",
    variant: "indigo",
    colClass: "tThinking",
    kicker: "Method",
    title: "Design Thinking as an Innovation Engine",
    body: "Not a poster on a wall — a working belief that how you frame a problem determines what you're capable of solving.",
  },
  {
    key: "fandom",
    variant: "clay",
    colClass: "tFandom",
    icon: "star",
    title: "Star Wars & Kendrick",
    body: "Deep enough to have opinions, not deep enough to be insufferable about them.",
  },
  {
    key: "podcasts",
    variant: "clay",
    colClass: "tPodcasts",
    icon: "headphones",
    title: "Podcasts, Constantly",
    body: "The soundtrack to commutes, dishes, and gopher-trap installation.",
  },
  {
    key: "vision",
    variant: "indigo",
    colClass: "tVision",
    kicker: "Gravity",
    title: "0→1, Vision-Stage Work",
    body: "I do my best work before there's a pattern to follow yet — just a direction worth pointing toward.",
  },
  {
    key: "craft",
    variant: "clay",
    colClass: "tCraft",
    icon: "mic",
    title: "The Craft Behind the Bit",
    body: "Stand-up comedy and record-making fascinate me the same way — watching someone rewrite a bit or a verse forty times until it sounds like it took no effort at all.",
  },
  {
    key: "facilitator",
    variant: "indigo",
    colClass: "tFacilitator",
    kicker: "Practice",
    title: "Empathy-First Facilitation",
    body: "I made myself an expert at getting a room to understand the human on the other side of the problem before we design anything.",
  },
  {
    key: "golf",
    variant: "clay",
    colClass: "tGolf",
    icon: "golf",
    title: "Golf, Loosely",
    body: "I play. I am not good. I keep going anyway.",
  },
  {
    key: "son",
    variant: "clay",
    colClass: "tSon",
    icon: "figure",
    title: "Main Character, Age 2",
    body: "My son. Runs the household narrative now, and I'm not mad about it.",
  },
];

type RoleEntry = {
  role: string;
  org: string;
  meta: string;
  body?: string;
};

function RoleBlock({ role, org, meta, body }: RoleEntry) {
  return (
    <div className={styles.roleBlock}>
      <h4 className={styles.roleTitle}>{role}</h4>
      <div className={styles.roleMeta}>
        {org} · {meta}
      </div>
      {body ? <p className={styles.roleBody}>{body}</p> : null}
    </div>
  );
}

type CareerEra = {
  title: string;
  accent: "indigo" | "clay";
  content: ReactNode;
};

const careerTimeline: CareerEra[] = [
  {
    title: "2012–2015",
    accent: "indigo",
    content: (
      <>
        <RoleBlock
          role="Art Director → Web Editor"
          org="The Daily Aztec, San Diego State University"
          meta="Jun 2012 – May 2014"
          body="Directed a team of seven designers across 116 issues, then led the shift from daily to biweekly print with expanded online coverage and a move to WordPress."
        />
        <RoleBlock
          role="Graphic Design / Marketing Assistant"
          org="Dye Precision, Inc."
          meta="Apr 2013 – May 2014"
          body="Designed seasonal catalogs for Pro-Tec, Dye Snow, and Dye Paintball."
        />
        <RoleBlock
          role="Junior UI/UX Designer"
          org="Parallel 6"
          meta="Jan 2014 – Nov 2015"
          body="Took client web and mobile products from wireframes to high-fidelity prototypes."
        />
      </>
    ),
  },
  {
    title: "2015–2018",
    accent: "clay",
    content: (
      <RoleBlock
        role="Visual Designer"
        org="Renovate America"
        meta="Nov 2015 – Dec 2018"
        body="Replatformed renovateamerica.com into a componentized system and contributed to a full company rebrand, including an integrated summer marketing campaign."
      />
    ),
  },
  {
    title: "2019–2020",
    accent: "indigo",
    content: (
      <RoleBlock
        role="Product Visual Designer (Contract)"
        org="Intuit"
        meta="Jan 2019 – Aug 2020"
        body="End-to-end visual design across Turbo, Mint, and Marketplace, extending the Intuit Design System's mobile pattern library."
      />
    ),
  },
  {
    title: "2020–2022",
    accent: "clay",
    content: (
      <>
        <RoleBlock
          role="Senior Product Designer"
          org="Intuit"
          meta="Aug 2020 – Jun 2022"
          body="Design lead for Mint Coach, Intuit's first expert-assisted financial coaching product, from 0→1 through pilot and scale — 47 prototypes deep, and founder of the team that built the Mint Design System Figma library."
        />
        <RoleBlock
          role="Principal Product Designer"
          org="Intuit"
          meta="Jun 2022 – Jul 2022"
          body="A brief step up before moving to Credit Karma."
        />
      </>
    ),
  },
  {
    title: "2022–2026",
    accent: "indigo",
    content: (
      <RoleBlock
        role="Senior → Staff Product Designer II"
        org="Credit Karma"
        meta="Jul 2022 – Jun 2026"
        body="Designed the Net Worth feature set and Prime-segment experiences, then led Credit Karma's first Product Futures Team — shaping shipped features like Left After Bills and putting concepts like a debt-management tool and a paycheck agent on the roadmap."
      />
    ),
  },
  {
    title: "2026 — Now",
    accent: "clay",
    content: (
      <RoleBlock role="Senior Staff Product Designer" org="Intuit" meta="Jun 2026 – Present" />
    ),
  },
];

export default function Home() {
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bentoRef.current;
    if (!container) return;

    const tileEls = container.querySelectorAll<HTMLElement>("[data-tile]");

    if (!("IntersectionObserver" in window)) {
      tileEls.forEach((el) => el.classList.add(styles.isVisible));
      return;
    }

    const revealer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            revealer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    tileEls.forEach((el) => revealer.observe(el));
    return () => revealer.disconnect();
  }, []);

  return (
    <>
      <div className={styles.paperTexture} />

      <section className={styles.hero}>
        <div className={styles.heroGridLines} />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <span className={styles.brandMark}>VE</span>Process &amp; Something Wilder
          </div>
          <h1 className={styles.name}>
            Victor
            <br />
            <em>runs a rigorous practice — and a losing garden.</em>
          </h1>
          <p className={styles.heroSub}>
            Senior Staff Product Designer at Intuit. Currently scaling Free Credit Karma Tax.
          </p>
        </div>
        <div className={styles.scrollCue}>
          <span>scroll</span>
          <span className={styles.arrow}>&darr;</span>
        </div>
      </section>

      <div className={styles.swatchStrip}>
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.storyKicker}>
        <h2 className={styles.storyKickerLabel}>The work, and everything else</h2>
      </div>

      <div className={styles.bento} ref={bentoRef}>
        {tiles.map((tile) => (
          <div
            key={tile.key}
            data-tile
            className={[
              styles.tile,
              tile.variant === "indigo" ? styles.tileIndigo : styles.tileClay,
              tile.fill ? styles.tileFill : "",
              styles[tile.colClass],
            ].join(" ")}
          >
            {tile.icon ? (
              <Icon name={tile.icon} className={styles.tileIcon} />
            ) : (
              <span className={styles.tileKicker}>{tile.kicker}</span>
            )}
            <h3 className={styles.tileTitle}>{tile.title}</h3>
            <p className={styles.tileBody}>{tile.body}</p>
          </div>
        ))}
      </div>

      <div className={styles.storyKicker}>
        <h2 className={styles.storyKickerLabel}>The long version</h2>
      </div>

      <Timeline data={careerTimeline} />

      <section className={styles.typeMoment}>
        <div className={styles.earned}>Between the practice and the garden —</div>
        <div className={styles.depthWord}>I earned my depth.</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footLeft}>VICTOR ESCOTO — AI PROTOTYPING COHORT, AUG 2026</div>
        <div className={styles.footRight}>still growing — like everything else here</div>
      </footer>
    </>
  );
}
