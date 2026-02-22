import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Ministries', path: '/ministries' },
  { label: 'Events & Sermons', path: '/events' },
  { label: 'Blog', path: '/blog' },
  { label: 'Books', path: '/books' },
  { label: 'Give', path: '/donate' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Marquee Banner */}
      <div className="overflow-hidden border-t border-primary-foreground/10 py-4">
        <div className="animate-marquee flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8 text-xs font-medium uppercase tracking-[0.3em] text-accent/60 font-sans">
              Spreading the Word &middot; Transforming Lives &middot; Building Community &middot; Glorifying God
            </span>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent">
                <span className="text-lg font-bold font-serif text-accent">CB</span>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight tracking-wide text-primary-foreground">
                  Clinton Baruch
                </p>
                <p className="text-[10px] tracking-[0.25em] uppercase text-accent">
                  Ministries
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-primary-foreground/50 font-sans">
              Spreading the Word of God, transforming lives through the power of
              the Gospel, and equipping believers for the work of the ministry.
            </p>
            <div className="mt-8 flex gap-4">
              {['Facebook', 'YouTube', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/10 text-xs font-bold text-primary-foreground/40 transition-all hover:border-accent hover:text-accent font-sans"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
              Navigation
            </h4>
            <ul className="mt-6 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-1 text-sm text-primary-foreground/50 transition-colors hover:text-accent font-sans"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
              Contact
            </h4>
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" />
                <span className="text-sm text-primary-foreground/50 font-sans">
                  123 Faith Avenue, City, State 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent/60" />
                <span className="text-sm text-primary-foreground/50 font-sans">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent/60" />
                <span className="text-sm text-primary-foreground/50 font-sans">info@clintonbaruch.org</span>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent font-sans">
              Service Times
            </h4>
            <ul className="mt-6 flex flex-col gap-4">
              {[
                { day: 'Sunday Worship', time: '9:00 AM & 11:00 AM' },
                { day: 'Wednesday Bible Study', time: '7:00 PM' },
                { day: 'Friday Prayer Night', time: '6:30 PM' },
              ].map((service) => (
                <li key={service.day} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent/60" />
                  <div>
                    <p className="text-sm font-medium text-primary-foreground/70 font-sans">{service.day}</p>
                    <p className="text-xs text-primary-foreground/40 font-sans">{service.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 md:flex-row lg:px-8">
          <p className="text-xs text-primary-foreground/30 font-sans">
            &copy; {new Date().getFullYear()} Clinton Baruch Ministries. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30 font-sans">
            Built with faith and purpose.
          </p>
        </div>
      </div>
    </footer>
  )
}
