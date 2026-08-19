"use client";

import { useEffect, useRef } from "react";
import styles from "./page.module.css";
import { Icon, type IconName } from "./icons";

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
            <em>runs a rigorous practice —and a losing garden.</em>
          </h1>
          <p className={styles.heroSub}>
            Senior Staff Product Designer. Founder of a Product Design Futures team. Everything
            else on this page is the evidence.
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
        <div
          className={`${styles.tile} ${styles.tileIndigo} ${styles.tileFill} ${styles.tileRole}`}
          data-tile
        >
          <span className={styles.tileKicker}>Currently</span>
          <h3 className={styles.tileTitle}>Senior Staff Product Designer, Intuit</h3>
        </div>

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

      <section className={styles.typeMoment}>
        <div className={styles.earned}>Between the practice and the garden —</div>
        <div className={styles.depthWord}>I earned my depth.</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footLeft}>
          V.01 — INTRODUCE YOURSELF, VISUALLY — AI PROTOTYPING COHORT, AUG 2026
        </div>
        <div className={styles.footRight}>still growing — like everything else here</div>
      </footer>
    </>
  );
}
