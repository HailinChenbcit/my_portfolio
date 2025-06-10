import { ContactForm } from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
          Get in Touch
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Have a question or want to work together? I&apos;d love to hear from you.
        </p>
        <div className="w-full max-w-[600px]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
