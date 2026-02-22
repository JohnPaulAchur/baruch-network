import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  Heart,
  Users,
  Calendar,
  Play,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react'

const stats = [
  { number: '15+', label: 'Years of Ministry' },
  { number: '5,000+', label: 'Lives Touched' },
  { number: '20+', label: 'Outreach Programs' },
  { number: '12', label: 'Countries Reached' },
]

const ministryHighlights = [
  {
    icon: BookOpen,
    title: 'Word & Teaching',
    description: 'In-depth Bible teaching that equips believers with the knowledge and understanding of God\'s Word.',
    image: '/images/bible-study.jpg',
  },
  {
    icon: Heart,
    title: 'Outreach & Missions',
    description: 'Reaching communities locally and globally with the love of Christ through compassion and service.',
    image: '/images/ppl.PNG',
  },
  {
    icon: Users,
    title: 'Fellowship & Growth',
    description: 'Building genuine community through small groups, mentorship, and meaningful relationships.',
    image: '/images/community.jpg',
  },
]

const upcomingEvents = [
  { date: '02', month: 'MAR', title: 'Sunday Worship Service', time: '9:00 AM & 11:00 AM' },
  { date: '05', month: 'MAR', title: 'Midweek Bible Study', time: '7:00 PM' },
  { date: '08', month: 'MAR', title: 'Community Outreach Day', time: '10:00 AM' },
  { date: '15', month: 'MAR', title: 'Youth Conference 2026', time: '9:00 AM - 5:00 PM' },
]

const latestSermons = [
  { title: 'Walking in Faith', speaker: 'Pastor Clinton Baruch', date: 'Feb 23, 2026', series: 'Foundations of Faith' },
  { title: 'The Power of Prayer', speaker: 'Pastor Clinton Baruch', date: 'Feb 16, 2026', series: 'Spiritual Disciplines' },
  { title: 'Grace That Transforms', speaker: 'Minister David', date: 'Feb 9, 2026', series: 'Amazing Grace' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section - Full Screen Immersive */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <img
          src="/images/cong.PNG"
          // src="/images/hero-worship.jpg"
          alt="Church worship service with dramatic lighting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full border border-accent/10 animate-float opacity-30" />
        <div className="absolute bottom-32 left-10 h-48 w-48 rounded-full border border-accent/10 animate-float opacity-20" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
          <p className="animate-fade-up mb-6 text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">
            Welcome to
          </p>
          <h1 className="animate-fade-up stagger-1 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-[6.5rem] tracking-tight">
            Clinton Baruch
            <span className="block italic text-accent">Network</span>
          </h1>
          <p className="animate-fade-up stagger-2 mx-auto mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/60 font-sans md:text-lg">
            Spreading the Word of God, transforming lives, and building
            a community rooted in faith, hope, and love.
          </p>
          <div className="animate-fade-up stagger-3 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-105 font-sans"
            >
              Discover Our Story
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/events"
              className="group inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:border-accent hover:text-accent font-sans"
            >
              <Play className="h-4 w-4" />
              Watch Sermons
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex h-12 w-7 items-start justify-center rounded-full border border-primary-foreground/20 p-2">
            <div className="h-2.5 w-1 animate-bounce rounded-full bg-accent/80" />
          </div>
        </div>
      </section>

      {/* Stats Marquee Bar */}
      <section className="border-y border-border bg-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-6 py-10 ${
                i < stats.length - 1 ? 'border-r border-primary-foreground/5' : ''
              }`}
            >
              <p className="text-4xl font-bold text-accent font-serif md:text-5xl">{stat.number}</p>
              <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/40 font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome / Mission Section */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
                Our Mission
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-[1.1] text-foreground md:text-5xl lg:text-6xl text-balance">
                A Ministry Built on
                <span className="italic text-primary"> the Foundation</span> of God's Word
              </h2>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground font-sans">
                Clinton Baruch Ministries exists to proclaim the Gospel of Jesus Christ,
                equip believers for the work of the ministry, and demonstrate the love of God
                to a world in need. Through teaching, outreach, and community, we seek to
                impact lives and transform communities for the glory of God.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 font-sans"
              >
                Read Our Full Story
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src="/images/pastor.jpeg"
                  alt="Church community gathering in fellowship"
                  className="h-[500px] w-full object-cover img-zoom"
                />
              </div>
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl bg-foreground p-6 shadow-2xl md:-bottom-8 md:-left-8">
                <p className="text-sm italic leading-relaxed text-primary-foreground/80 font-serif">
                  "For where two or three gather in my name, there am I with them."
                </p>
                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-accent font-sans">
                  Matthew 18:20
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ministry Highlights - Editorial Cards */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
                What We Do
              </p>
              <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl text-balance">
                Our Ministry Focus
              </h2>
            </div>
            <Link
              to="/ministries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 font-sans"
            >
              View All Ministries
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {ministryHighlights.map((item, i) => (
              <Link
                to="/ministries"
                key={item.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-card transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-card-foreground">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground font-sans">
                    {item.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-accent font-sans">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
                Mark Your Calendar
              </p>
              <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
                Upcoming Events
              </h2>
            </div>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 font-sans"
            >
              View All Events
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-16 flex flex-col gap-4">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-start gap-6 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg sm:flex-row sm:items-center"
              >
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-foreground text-primary-foreground">
                  <span className="text-2xl font-bold leading-none font-serif">{event.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent font-sans">{event.month}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground font-sans">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    {event.time}
                  </p>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Sermons - Dark Section */}
      <section className="relative bg-foreground py-28 lg:py-36 overflow-hidden">
        <img
          src="/images/sermon-stage.jpg"
          alt="Modern church stage setup"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
              Latest Messages
            </p>
            <h2 className="mt-4 text-4xl font-bold text-primary-foreground md:text-5xl">
              Recent Sermons
            </h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {latestSermons.map((sermon, idx) => (
              <div
                key={idx}
                className="group cursor-pointer rounded-3xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-primary-foreground/10"
              >
                <div className="flex h-48 items-center justify-center rounded-2xl bg-primary/20 overflow-hidden">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 ml-1" />
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent font-sans">{sermon.series}</p>
                  <h3 className="mt-3 text-xl font-bold text-primary-foreground">{sermon.title}</h3>
                  <p className="mt-3 text-sm text-primary-foreground/40 font-sans">
                    {sermon.speaker} &middot; {sermon.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link
              to="/events"
              className="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-4 text-sm font-semibold text-accent-foreground transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 font-sans"
            >
              View All Sermons
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Scripture Banner */}
      <section className="bg-primary py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto h-px w-16 bg-accent" />
          <blockquote className="mt-10 text-2xl font-medium leading-relaxed text-primary-foreground md:text-3xl lg:text-4xl italic">
            {"\"For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.\""}
          </blockquote>
          <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
            Jeremiah 29:11
          </p>
          <div className="mx-auto mt-10 h-px w-16 bg-accent" />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
            Stay Connected
          </p>
          <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">
            Join Our Community
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground font-sans">
            Subscribe to receive weekly devotionals, ministry updates,
            and event announcements straight to your inbox.
          </p>
          <form
            className="mx-auto mt-10 flex max-w-lg flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-border bg-card px-6 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary hover:shadow-lg font-sans"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
