import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <section className='min-h-screen bg-lime-13 font-sans pt-10 pb-6'>
      <h2 className='mt-20 flex justify-center font-reey text-3xl text-lime-3'>
        Contact
      </h2>
      <ContactForm />
    </section>
  );
}
