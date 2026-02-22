import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, MapPin, Play, Download, ArrowRight } from 'lucide-react'

const events = [
  { id: 1, title: 'Sunday Worship Service', date: 'Every Sunday', time: '9:00 AM & 11:00 AM', location: 'Main Sanctuary', description: 'Join us for powerful worship and the preaching of God\'s Word.', category: 'weekly' },
  { id: 2, title: 'Midweek Bible Study', date: 'Every Wednesday', time: '7:00 PM', location: 'Fellowship Hall', description: 'A deeper dive into the Scriptures with interactive teaching.', category: 'weekly' },
  { id: 3, title: 'Friday Night Prayer', date: 'Every Friday', time: '6:30 PM', location: 'Prayer Room', description: 'An evening of corporate prayer, intercession, and seeking God.', category: 'weekly' },
  { id: 4, title: 'Youth Conference 2026', date: 'March 15, 2026', time: '9:00 AM - 5:00 PM', location: 'Main Sanctuary', description: 'A full-day conference for young people featuring worship and workshops.', category: 'special' },
  { id: 5, title: 'Community Outreach Day', date: 'March 8, 2026', time: '10:00 AM', location: 'Community Center', description: 'Serving our community with food distribution and free health screenings.', category: 'special' },
  { id: 6, title: 'Easter Revival Service', date: 'April 5, 2026', time: '10:00 AM', location: 'Main Sanctuary', description: 'A special Easter celebration with extended worship and a powerful message.', category: 'special' },
]

const sermons = [
  { id: 1, title: 'Walking in Faith', speaker: 'Pastor Clinton Baruch', date: 'Feb 23, 2026', series: 'Foundations of Faith', duration: '45 min' },
  { id: 2, title: 'The Power of Prayer', speaker: 'Pastor Clinton Baruch', date: 'Feb 16, 2026', series: 'Spiritual Disciplines', duration: '52 min' },
  { id: 3, title: 'Grace That Transforms', speaker: 'Minister David', date: 'Feb 9, 2026', series: 'Amazing Grace', duration: '38 min' },
  { id: 4, title: 'Living with Purpose', speaker: 'Pastor Clinton Baruch', date: 'Feb 2, 2026', series: 'Kingdom Living', duration: '47 min' },
  { id: 5, title: 'The Armor of God', speaker: 'Elder James Thompson', date: 'Jan 26, 2026', series: 'Spiritual Warfare', duration: '41 min' },
  { id: 6, title: 'A Heart of Worship', speaker: 'Minister Grace Baruch', date: 'Jan 19, 2026', series: 'True Worship', duration: '35 min' },
]

export default function Events() {
  const [activeTab, setActiveTab] = useState('events')
  const [eventFilter, setEventFilter] = useState('all')

  const filteredEvents = eventFilter === 'all' ? events : events.filter((e) => e.category === eventFilter)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/sermon-stage.jpg" alt="Church events" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">Stay Connected</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight text-balance">
            Events <span className="italic text-accent">&</span> Sermons
          </h1>
        </div>
      </section>

      {/* Tab Selector */}
      <section className="sticky top-[72px] z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-0">
            {[{ key: 'events', label: 'Upcoming Events', icon: Calendar }, { key: 'sermons', label: 'Sermons', icon: Play }].map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-4 text-[13px] font-semibold uppercase tracking-wider border-b-2 transition-all duration-300 font-sans ${
                  activeTab === tab.key ? 'border-accent text-accent' : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {activeTab === 'events' ? (
            <>
              <div className="mb-12 flex flex-wrap gap-3">
                {[{ key: 'all', label: 'All Events' }, { key: 'weekly', label: 'Weekly Services' }, { key: 'special', label: 'Special Events' }].map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    onClick={() => setEventFilter(f.key)}
                    className={`rounded-full px-6 py-2.5 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 font-sans ${
                      eventFilter === f.key ? 'bg-foreground text-accent' : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((event) => (
                  <div key={event.id} className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-5 inline-flex self-start rounded-full bg-foreground px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent font-sans">
                      {event.category === 'weekly' ? 'Weekly' : 'Special Event'}
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">{event.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground font-sans">{event.description}</p>
                    <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                        <Calendar className="h-4 w-4 text-accent" />{event.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                        <Clock className="h-4 w-4 text-accent" />{event.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                        <MapPin className="h-4 w-4 text-accent" />{event.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-4">
              {sermons.map((sermon) => (
                <div key={sermon.id} className="group flex flex-col items-start gap-5 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-accent/30 hover:shadow-lg sm:flex-row sm:items-center">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-foreground text-accent transition-transform duration-300 group-hover:scale-110 cursor-pointer">
                    <Play className="h-6 w-6 ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent font-sans">{sermon.series}</p>
                    <h3 className="mt-1 text-lg font-bold text-card-foreground">{sermon.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground font-sans">
                      {sermon.speaker} &middot; {sermon.date} &middot; {sermon.duration}
                    </p>
                  </div>
                  <button type="button" className="shrink-0 rounded-full border border-border px-5 py-2.5 text-[12px] font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-accent hover:text-accent font-sans">
                    <Download className="mr-2 inline-block h-4 w-4" />Download
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Never Miss an Event</h2>
          <p className="mt-4 text-base text-muted-foreground font-sans">Subscribe to our newsletter for weekly updates on events and new sermon releases.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-10 py-4 text-sm font-semibold text-accent transition-all duration-300 hover:shadow-lg font-sans">
            Get Notified <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
