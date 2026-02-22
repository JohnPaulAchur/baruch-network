import { Link } from 'react-router-dom'
import { BookOpen, Heart, Users, Music, Baby, GraduationCap, Globe, HandHeart, ArrowRight, ArrowUpRight } from 'lucide-react'

const ministries = [
  { icon: BookOpen, title: 'Word & Teaching', description: 'In-depth, verse-by-verse Bible teaching that equips every believer with a strong foundation in the Word of God.', schedule: 'Sundays & Wednesdays', image: '/images/bible-study.jpg' },
  { icon: Music, title: 'Worship & Arts', description: 'Leading the congregation into the presence of God through anointed praise, worship, drama, dance, and creative arts.', schedule: 'Sundays & Special Events', image: '/images/hero-worship.jpg' },
  { icon: Users, title: 'Men\'s Fellowship', description: 'A brotherhood committed to spiritual growth, accountability, and service through Bible studies, retreats, and community projects.', schedule: 'First Saturday Monthly', image: '/images/community.jpg' },
  { icon: Heart, title: 'Women\'s Ministry', description: 'Empowering women to discover their identity in Christ and walk in their God-given purpose through fellowship and prayer.', schedule: 'Second Saturday Monthly', image: '/images/prayer.jpg' },
  { icon: GraduationCap, title: 'Youth Ministry', description: 'Engaging the next generation with God\'s Word through Bible study, mentorship, leadership development, and social activities.', schedule: 'Fridays at 6:00 PM', image: '/images/youth.jpg' },
  { icon: Baby, title: 'Children\'s Ministry', description: 'A fun, safe, and nurturing environment where children learn about God through age-appropriate teaching and activities.', schedule: 'Sundays During Service', image: '/images/community.jpg' },
  { icon: Globe, title: 'Missions & Outreach', description: 'Taking the Gospel beyond our walls through local community outreach, international missions, and humanitarian aid.', schedule: 'Monthly Outreach Events', image: '/images/outreach.jpg' },
  { icon: HandHeart, title: 'Benevolence & Care', description: 'Meeting practical needs through food drives, clothing donations, financial assistance, and counseling support.', schedule: 'Ongoing Year-Round', image: '/images/prayer.jpg' },
]

export default function Ministries() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/outreach.jpg" alt="Church ministries" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">Get Involved</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight text-balance">
            Our <span className="italic text-accent">Ministries</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-primary-foreground/50 font-sans md:text-lg">
            Discover the many ways you can connect, serve, and grow at Clinton Baruch Ministries.
          </p>
        </div>
      </section>

      {/* Ministries Grid */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {ministries.map((ministry, i) => (
              <div key={ministry.title} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={ministry.image} alt={ministry.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-accent">
                      <ministry.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{ministry.title}</h3>
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent font-sans">{ministry.schedule}</p>
                    </div>
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground font-sans">{ministry.description}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 font-sans">
                    Get Involved <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground md:text-5xl">Ready to Serve?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/60 font-sans">
            We believe every believer has gifts and talents meant to be used for the Kingdom. Find your place and start making a difference today.
          </p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg font-sans">
            Contact Us to Volunteer <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
