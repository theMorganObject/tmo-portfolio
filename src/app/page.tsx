import { workSamples } from "../../lib/worksamples";
import WorkSample from "../components/WorkSample";

export default function Home() {
  const fullName = `Morgan Padraic O'Shaughnessey`;
  return (
    <section className="min-h-screen flex flex-col items-center p-4">
      <p className="mt-32 mb-12 text-xl text-red-9/90">
        Front End Developer | Scrum Master
      </p>
      <h1 className="text-2xl text-lime-7 leading-loose mb-14 xs:text-xl xs:mb-10 sm:text-4xl md:text-5xl lg:text-6xl">
        <span className="font-reey">{fullName}</span>
      </h1>
      <ul className="grid gap-y-4 grid-rows-4 grid-cols-8 text-sm sm:text-lg md:text-xl lg:text-2xl">
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
