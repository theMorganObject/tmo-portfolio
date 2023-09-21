import styles from "./Page.module.css";
import WorkSample from "@/components/WorkSample";
import MoshaltoLogo from "@/components/MoshaltoLogo";
import { workSamples } from "../data/worksamples";

export default function Home() {
  const fullName = `Morgan Padraic O'Shaughnessey`;
  return (
    <main className="relative flex flex-col items-center p-4">
      <MoshaltoLogo />
      <h1
        className={`text-2xl text-lime-7 ${styles.fancyFont} leading-loose mt-40 mb-14 xs:text-xl xs:mb-10 sm:text-4xl md:text-5xl lg:text-6xl`}
      >
        {fullName}
      </h1>
      <ul className="grid gap-y-4 grid-rows-4 grid-cols-8 text-sm sm:text-lg md:text-xl lg:text-2xl">
        {workSamples.map((sample, index) => (
          <WorkSample
            key={sample.id}
            href={sample.href}
            siteName={sample.siteName}
            description={sample.description}
            className={styles.position}
            position={index + 1}
          />
        ))}
      </ul>
    </main>
  );
}
