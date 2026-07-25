"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { RevealItem } from "@/components/Reveal";
import { Expandable } from "@/components/Expandable";

const stats = [
  {
    number: "68%",
    label: "of new students report feeling socially isolated in their first semester",
  },
  {
    number: "12",
    label: "the average number of regular spots a person visits in their own city",
  },
  {
    number: "4",
    label: "locations the average tourist visits beyond standard attractions",
  },
  {
    number: "88%",
    label:
      "of physical spaces are inaccessible for people with disabilities — and 75% of the accessible ones lack public information or mapping",
    highlight: true,
  },
];

export function Section04Problem() {
  const [poppedIndex, setPoppedIndex] = useState<number | null>(null);

  return (
    <Section
      id="problem"
      index="04"
      title="Problem Statement"
      className="min-h-[860px] flex flex-col justify-center py-16 md:py-0"
    >
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <RevealItem>
            <h2 className="font-bold text-4xl md:text-6xl leading-[0.95]">
              The city is full of places.
              <br />
              You just don&apos;t know where to start.
            </h2>
          </RevealItem>
          <RevealItem>
            <Expandable trigger="the full picture">
              <p>
                Every year thousands of students arrive in new cities, tourists
                land with no local knowledge, and even long-time residents stay
                locked in the same three spots. Not because there&apos;s nothing
                to do — but because finding the right place takes effort most
                people don&apos;t have.
              </p>
              <p>
                The problem isn&apos;t the city. It&apos;s the gap between
                arriving somewhere and actually feeling at home there. New
                environments create isolation. Isolation kills spontaneity. And
                without spontaneity, people stop going out altogether.
              </p>
            </Expandable>
          </RevealItem>
        </div>

        <div className="flex flex-col items-end py-4">
          {stats.map((stat, i) => (
            <RevealItem
              key={stat.number}
              onClick={() => setPoppedIndex((prev) => (prev === i ? null : i))}
              className={`relative w-[85%] max-w-[340px] rounded-2xl px-6 py-5 shadow-xl border cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-[72px] ${
                stat.highlight ? "border-coral/40" : "border-hairline"
              }`}
              style={{
                ...(i === 0 ? {} : { marginTop: "-4rem", marginRight: `${i * 6}%` }),
                background: stat.highlight
                  ? "color-mix(in srgb, var(--color-coral) 15%, transparent)"
                  : "color-mix(in srgb, var(--color-card) 15%, transparent)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                transform: poppedIndex === i ? "translateY(-72px)" : undefined,
              }}
            >
              <p
                className={`font-display text-6xl leading-none ${
                  stat.highlight ? "text-black" : "text-coral"
                }`}
              >
                {stat.number}
              </p>
              <p
                className={`text-sm mt-3 max-w-[240px] ${
                  stat.highlight ? "text-black/80" : "text-ink-soft"
                }`}
              >
                {stat.label}
              </p>
            </RevealItem>
          ))}
        </div>
      </div>
    </Section>
  );
}
