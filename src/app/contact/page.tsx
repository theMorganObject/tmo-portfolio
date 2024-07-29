import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <section className='min-h-screen bg-lime-13 font-sans'>
      <h2 className='pt-32 mb-16 flex justify-center font-reey text-lime-0 text-4xl md:text-5xl md:mb-20'>
        Contact
      </h2>
      <ContactForm />
    </section>
  );
}
