import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
  return (
    <section className='flex flex-col items-center justify-center w-full h-full space-y-8 py-6 mb-8'>
      <h1 className='text-4xl font-bold text-center'>Let&apos;s Connect!</h1>
      <p className='text-lg max-w-md'>
        Whether you&apos;re looking to collaborate, discuss a project, or just
        share ideas, I&apos;d love to hear from you! Please feel free to
        introduce yourself and let me know how I can help.
      </p>
      <ContactForm />
    </section>
  );
}
