import { Section01Cover } from "@/components/sections/Section01Cover";
import { Section02Skills } from "@/components/sections/Section02Skills";
import { Section03Demo } from "@/components/sections/Section03Demo";
import { Section04Problem } from "@/components/sections/Section04Problem";
import { Section05Story } from "@/components/sections/Section05Story";
import { Section06Solution } from "@/components/sections/Section06Solution";
import { Section07Mission } from "@/components/sections/Section07Mission";
import { Section08Personas } from "@/components/sections/Section08Personas";
import { Section09Stories } from "@/components/sections/Section09Stories";
import { Section10Flow } from "@/components/sections/Section10Flow";
import { Section11DesignSystem } from "@/components/sections/Section11DesignSystem";
import { Section12Features } from "@/components/sections/Section12Features";
import { Section13Logo } from "@/components/sections/Section13Logo";
import { Section14Results } from "@/components/sections/Section14Results";
import { Section15Reflection } from "@/components/sections/Section15Reflection";

export default function Home() {
  return (
    <main className="relative">
      <Section01Cover />
      <Section02Skills />
      <Section03Demo />
      <Section04Problem />
      <Section05Story />
      <Section06Solution />
      <Section07Mission />
      <Section08Personas />
      <Section09Stories />
      <Section10Flow />
      <Section11DesignSystem />
      <Section12Features />
      <Section13Logo />
      <Section14Results />
      <Section15Reflection />
    </main>
  );
}
