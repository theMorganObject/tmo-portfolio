import Accordion from "@/components/accordion/Accordion";
import { morganObjects } from "../../../lib/morganObjects";

const colors = ["#5c940d", "#1864ab", "#e03131", "#343a40"];

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-red-4/20 pt-10">
      <h2 className="font-reey flex justify-center text-3xl text-lime-9/90 mt-20 mb-10">
        About
      </h2>
      <Accordion data={morganObjects} colors={colors} />
    </section>
  );
}
