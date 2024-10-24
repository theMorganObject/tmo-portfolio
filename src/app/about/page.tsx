import Accordion from '@/components/accordion/Accordion';
import { morganObjects } from '../../../lib/morganObjects';

// COLORS FOR ACCORDION SELECTOR COMPONENT
const colors = ['#5c940d', '#1864ab', '#e03131', '#343a40'];

export default function About() {
  return (
    <section className='min-h-screen font-sans'>
      <Accordion data={morganObjects} colors={colors} />
    </section>
  );
}
