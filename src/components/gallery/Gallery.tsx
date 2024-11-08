// TODO: refactor https://trello.com/c/nHqjH8nM

import Card from './Card';
import { workSamples } from '../../../lib/worksamples';
import { skillsMapping } from '../../../lib/skillsMapping';

function Gallery() {
  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap sm:justify-center'>
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
            cardText={sample.cardText}
            skillData={skillData}
            imagePath={sample.imagePath}
            alt={sample.alt}
            id={sample.id}
          />
        );
      })}
    </div>
  );
}

export default Gallery;
