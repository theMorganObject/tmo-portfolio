import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section className="min-h-screen bg-lime-700/20 pt-10">
      <h2 className="mt-20 flex justify-center font-reey text-3xl text-lime-9/90 mb-6">
        Contact
      </h2>
      <ContactForm />
    </section>
  );
}
