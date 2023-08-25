import styles from "./Page.module.css";
import WorkSample from "@/components/WorkSample";
import MoshaltoLogo from "@/components/MoshaltoLogo";

const workSamples = [
  {
    id: 1,
    siteName: "Omnifood",
    description: "AI meal plan service",
    href: "https://omnifood-morgan-oshaughnessey.netlify.app/",
  },
  {
    id: 2,
    siteName: "Forkify",
    description: "Recipe app",
    href: "https://forkify-morgan-oshaughnessey-v2.netlify.app/",
  },
  {
    id: 3,
    siteName: "Mapty",
    description: "Exercise App",
    href: "https://mapty-portfolio-app.netlify.app/",
  },
  {
    id: 4,
    siteName: "Bankist",
    description: "Banking App",
    href: "https://bankist-app-morgan-oshaughnessey.netlify.app/",
  },
];

export default function Home() {
  return (
    <main className="relative flex flex-col items-center p-4">
      <MoshaltoLogo />
      <h1
        className={`text-2xl text-lime-7 ${styles.fancyFont} leading-loose mt-40 mb-14 xs:text-xl xs:mb-10 sm:text-4xl md:text-5xl lg:text-6xl`}
      >
        Morgan Padraic O&apos;Shaughnessey
      </h1>
      <ul className="grid gap-y-4 grid-rows-4 grid-cols-8 text-sm sm:text-lg md:text-xl lg:text-2xl">
        {workSamples.map((sample, index) => (
          <WorkSample
            key={sample.id}
            href={sample.href}
            siteName={sample.siteName}
            description={sample.description}
            className={styles.position}
            position={index}
          />
        ))}
      </ul>
    </main>
  );
}
