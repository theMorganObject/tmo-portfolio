import { workSamples } from "../../lib/worksamples";
import WorkSample from "../components/WorkSample";

export default function Home() {
  const fullName = `Morgan Padraic O'Shaughnessey`;
  return (
    <section className="min-h-screen flex flex-col items-center p-4">
      <p className="mt-24 mb-4 text-xs text-red-9/90 xs:text-sm xs:mt-28 xs:mb-6 sm:text-base sm:mt-28 sm:mb-8 md:text-lg md:mt-32 md:mb-12 lg:text-xl">
        Front End Developer | Scrum Master
      </p>
      <h1 className="text-base text-lime-7 leading-loose mb-8 xs:text-xl xs:mb-10 sm:text-4xl md:text-5xl md:mb-14 lg:text-6xl">
        <span className="font-reey">{fullName}</span>
      </h1>
      <ul className="grid gap-y-2 grid-rows-4 grid-cols-8 text-xs xs:gap-y-4 sm:text-base md:text-xl lg:text-2xl">
        {workSamples.map((sample, index) => (
          <WorkSample
            key={sample.id}
            href={sample.href}
            siteName={sample.siteName}
            description={sample.description}
            position={index + 1}
          />
        ))}
      </ul>
    </section>
  );
}
