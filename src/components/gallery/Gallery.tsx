import Card from './Card';
import { workSamples } from '../../../lib/worksamples';
import { skillsMapping } from '../../../lib/skillsMapping';

function Gallery() {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-4'>
      {workSamples.map((sample) => {
        const skillData = sample.skills.map((skill) => ({
          skill,
          //@ts-ignore
          ...skillsMapping[skill],
        }));

        return (
          <Card
            key={sample.id}
            siteName={sample.siteName}
            longDescription={sample.longDescription}
            skillData={skillData}
            imagePath={sample.imagePath}
            alt={sample.alt}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
