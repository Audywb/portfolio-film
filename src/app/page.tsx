import Hello from "@/components/Hero/HelloCard";
import Timeline from "@/components/Timeline/Timeline";
import CardSection from "@/components/Card/SectionCard";
import Tools from "@/components/Card/toolsCard";
import Projects from "@/components/Card/Projects";
import ContactComponent from "@/components/Contact";
import { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Audy",
};

export default function Home() {
  return (
    <Fragment>
      <Hello />
      <h2 className="text-3xl font-bold text-center my-8 text-primary">
        Experience
      </h2>
      <div className="flex justify-center">
        <Timeline />
      </div>
      <CardSection />
      <Tools />
      <Projects />
      <div className="border-t-2 pt-4">
        <ContactComponent />
      </div>
    </Fragment>
  );
}
