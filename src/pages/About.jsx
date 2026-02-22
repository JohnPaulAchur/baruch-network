import { Link } from 'react-router-dom'
import { Target, Eye, Heart, BookOpen, Users, Globe, ArrowRight, ArrowUpRight } from 'lucide-react'

const values = [
  { icon: BookOpen, title: 'Biblical Truth', description: 'We stand firm on the authority of Scripture as the infallible Word of God and the foundation for all we believe and do.' },
  { icon: Heart, title: 'Compassion', description: 'We demonstrate the love of Christ through acts of kindness, mercy, and genuine concern for every person.' },
  { icon: Users, title: 'Community', description: 'We cultivate authentic relationships and foster a sense of belonging where everyone is valued and welcomed.' },
  { icon: Globe, title: 'Great Commission', description: 'We are passionate about reaching the lost and making disciples of all nations through word and deed.' },
]

const leaders = [
  { name: 'Pastor Clinton Baruch', role: 'Senior Pastor & Founder', image: '/images/pastor.jpg', bio: 'Pastor Clinton is a passionate minister of the Gospel with over 15 years of experience. Called by God at a young age, he has dedicated his life to teaching the Word and building community.' },
  { name: 'Minister Grace Baruch', role: 'Associate Minister', image: '/images/community.jpg', bio: 'Minister Grace serves alongside Pastor Clinton with a heart for worship, women\'s ministry, and community outreach.' },
  { name: 'Elder James Thompson', role: 'Elder & Outreach Director', image: '/images/outreach.jpg', bio: 'Elder James leads the outreach and missions department, coordinating local community service projects and international mission partnerships.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/community.jpg" alt="Church community" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">About Us</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight text-balance">
            Our Story <span className="italic text-accent">&</span> Mission
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-primary-foreground/50 font-sans md:text-lg">
            Learn about our journey, our mission, and the people who make Clinton Baruch Ministries a beacon of hope.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-3xl border border-border bg-card p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-8 text-3xl font-bold text-card-foreground md:text-4xl">Our Mission</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground font-sans">
                Clinton Baruch Ministries exists to proclaim the Gospel of Jesus Christ to all people, equip believers for the work of the ministry, and demonstrate the love of God through service, compassion, and community transformation. We are committed to raising a generation of Spirit-filled believers who walk in the fullness of their calling.
              </p>
            </div>
            <div className="group rounded-3xl border border-border bg-card p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 lg:p-14">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mt-8 text-3xl font-bold text-card-foreground md:text-4xl">Our Vision</h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground font-sans">
                To see every believer walking in the knowledge of God's Word, empowered by the Holy Spirit, and actively engaged in fulfilling the Great Commission. We envision a world where communities are transformed by the power of the Gospel, where the broken are made whole, and where the love of Christ is tangibly experienced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img src="/images/pastor.jpeg" alt="Pastor Clinton Baruch" className="h-[600px] w-full object-cover img-zoom" />
              </div>
              <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full border-2 border-accent/20" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">Our Story</p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] text-foreground md:text-5xl text-balance">
                A Ministry Born from <span className="italic text-primary">Obedience</span>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground font-sans">
                Clinton Baruch Ministries was founded out of a deep conviction to serve God and His people. What began as a small home Bible study has grown into a vibrant ministry touching lives across communities and nations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground font-sans">
                Pastor Clinton Baruch answered the call to ministry with a simple yet profound mandate: to teach the Word of God faithfully and to love people unconditionally. Over the years, the ministry has expanded to include outreach programs, youth development, publications, and global missions.
              </p>
              <blockquote className="mt-8 border-l-2 border-accent pl-6">
                <p className="text-lg italic leading-relaxed text-foreground font-serif">
                  "We don't just preach the Gospel - we live it. Every life we touch, every community we serve, is an opportunity to demonstrate God's love in action."
                </p>
                <cite className="mt-4 block text-[11px] font-bold uppercase tracking-[0.2em] text-accent not-italic font-sans">
                  - Pastor Clinton Baruch
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">What We Stand For</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Our Core Values</h2>
          </div>
          <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="text-center group">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-accent transition-transform duration-300 group-hover:scale-110">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-foreground py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">Our Leaders</p>
            <h2 className="mt-4 text-4xl font-bold text-primary-foreground md:text-5xl">Leadership Team</h2>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {leaders.map((leader) => (
              <div key={leader.name} className="group overflow-hidden rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 transition-all duration-300 hover:border-accent/30">
                <div className="h-72 overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary-foreground">{leader.name}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-accent font-sans">{leader.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/50 font-sans">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold text-primary-foreground md:text-5xl">Join Our Community</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/60 font-sans">
            Whether you're new to the faith or a seasoned believer, there is a place for you at Clinton Baruch Ministries.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg font-sans">
              Plan Your Visit <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/ministries" className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-10 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-accent hover:text-accent font-sans">
              Explore Ministries
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
