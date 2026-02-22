import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Heart, MessageSquare, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [activeForm, setActiveForm] = useState('contact')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/community.jpg" alt="Church community" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">Get in Touch</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight text-balance">
            Contact <span className="italic text-accent">&</span> Prayer
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-primary-foreground/50 font-sans md:text-lg">
            We would love to hear from you. Whether you have a question, need prayer, or want to plan a visit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Sidebar */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Information</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-sans">Visit us, call us, or send us a message anytime.</p>

              <div className="mt-10 flex flex-col gap-8">
                {[
                  { icon: MapPin, title: 'Address', content: '123 Faith Avenue\nCity, State 12345' },
                  { icon: Phone, title: 'Phone', content: '(555) 123-4567' },
                  { icon: Mail, title: 'Email', content: 'info@clintonbaruch.org' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground font-sans whitespace-pre-line">{item.content}</p>
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-accent">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Service Times</h3>
                    <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground font-sans">
                      <p>Sunday: 9:00 AM & 11:00 AM</p>
                      <p>Wednesday: 7:00 PM</p>
                      <p>Friday: 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-3">
              {/* Form Tabs */}
              <div className="mb-10 flex rounded-full border border-border p-1">
                {[{ key: 'contact', label: 'Contact Us', icon: MessageSquare }, { key: 'prayer', label: 'Prayer Request', icon: Heart }].map((tab) => (
                  <button key={tab.key} type="button" onClick={() => { setActiveForm(tab.key); setSubmitted(false) }} className={`flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 font-sans ${activeForm === tab.key ? 'bg-foreground text-accent' : 'text-muted-foreground hover:text-foreground'}`}>
                    <tab.icon className="h-4 w-4" />{tab.label}
                  </button>
                ))}
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-20 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    <CheckCircle className="h-10 w-10 text-accent" />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-card-foreground">
                    {activeForm === 'contact' ? 'Message Sent!' : 'Prayer Request Received'}
                  </h3>
                  <p className="mt-4 max-w-md text-sm text-muted-foreground font-sans">
                    {activeForm === 'contact' ? 'Thank you for reaching out. We will get back to you as soon as possible.' : 'Thank you for sharing your prayer request. Our prayer team is committed to lifting your needs before the Lord.'}
                  </p>
                </div>
              ) : activeForm === 'contact' ? (
                <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-card-foreground">Send Us a Message</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-sans">Fill out the form below and we will respond within 24-48 hours.</p>
                  <div className="mt-8 flex flex-col gap-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">First Name <span className="text-destructive">*</span></label>
                        <input type="text" required placeholder="John" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Last Name <span className="text-destructive">*</span></label>
                        <input type="text" required placeholder="Doe" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Email <span className="text-destructive">*</span></label>
                      <input type="email" required placeholder="john@example.com" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Subject <span className="text-destructive">*</span></label>
                      <select required defaultValue="" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans">
                        <option value="" disabled>Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Plan a Visit</option>
                        <option>Volunteer Opportunity</option>
                        <option>Partnership / Collaboration</option>
                        <option>Media / Speaking Request</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Message <span className="text-destructive">*</span></label>
                      <textarea required rows={5} placeholder="How can we help you?" className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                    </div>
                  </div>
                  <button type="submit" className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-foreground py-5 text-[13px] font-bold uppercase tracking-wider text-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground font-sans">
                    <Send className="h-4 w-4" />Send Message
                  </button>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-10 shadow-sm">
                  <h3 className="text-2xl font-bold text-card-foreground">Submit a Prayer Request</h3>
                  <p className="mt-2 text-sm text-muted-foreground font-sans">Share your prayer needs. Our dedicated team will intercede on your behalf.</p>
                  <div className="mt-8 flex flex-col gap-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Your Name <span className="text-destructive">*</span></label>
                        <input type="text" required placeholder="Your name" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                      </div>
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Email</label>
                        <input type="email" placeholder="your@email.com" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                      </div>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Prayer Category</label>
                      <select defaultValue="" className="mt-2 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans">
                        <option value="" disabled>Select a category</option>
                        <option>Health & Healing</option>
                        <option>Family & Relationships</option>
                        <option>Financial Provision</option>
                        <option>Spiritual Growth</option>
                        <option>Guidance & Direction</option>
                        <option>Salvation of a Loved One</option>
                        <option>Praise & Thanksgiving</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Your Prayer Request <span className="text-destructive">*</span></label>
                      <textarea required rows={6} placeholder="Share your prayer request here..." className="mt-2 w-full resize-none rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="anonymous" className="mt-1 h-4 w-4 rounded border-border accent-accent" />
                      <label htmlFor="anonymous" className="text-sm text-muted-foreground font-sans">Keep my request anonymous</label>
                    </div>
                  </div>
                  <button type="submit" className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-foreground py-5 text-[13px] font-bold uppercase tracking-wider text-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground font-sans">
                    <Heart className="h-4 w-4" />Submit Prayer Request
                  </button>
                  <p className="mt-5 text-center text-xs italic text-muted-foreground font-serif">
                    {"\"The prayer of a righteous person is powerful and effective.\" - James 5:16"}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-foreground md:text-5xl">Frequently Asked Questions</h2>
          <div className="mt-16 flex flex-col gap-4">
            {[
              { q: 'What should I expect on my first visit?', a: 'A warm welcome, uplifting worship, and a powerful message from God\'s Word. Services are approximately 90 minutes and casual dress is perfectly fine.' },
              { q: 'Do you have programs for children and youth?', a: 'Yes! We have dedicated children\'s ministry during Sunday services and a vibrant youth program on Friday evenings, led by trained volunteers.' },
              { q: 'How can I get involved in the ministry?', a: 'We have many areas where you can serve. Fill out a contact form or speak with any of our leaders to find the right fit for you.' },
              { q: 'Are prayer requests kept confidential?', a: 'Absolutely. All prayer requests are treated with the utmost confidentiality. You can also submit your request anonymously.' },
            ].map((faq, idx) => (
              <details key={idx} className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:shadow-md">
                <summary className="flex cursor-pointer items-center justify-between text-base font-bold text-card-foreground font-sans list-none">
                  {faq.q}
                  <span className="ml-4 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45 text-xl font-sans">+</span>
                </summary>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground font-sans">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
