import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <section className='flex flex-col items-center justify-center w-full h-full py-6'>
      <h1 className='text-4xl font-bold text-center mb-4'>
        Let&apos;s Connect!
      </h1>
      <p className='text-sm max-w-md mb-4'>
        Whether you&apos;re looking to collaborate, discuss a project, or just
        share ideas, I&apos;d love to hear from you! Please feel free to
        introduce yourself and let me know how I can help.
      </p>
      <ContactForm />
    </section>
  );
}
