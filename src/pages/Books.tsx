import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Download,
  ShoppingCart,
  Star,
  ArrowRight,
  Filter,
} from 'lucide-react'

const books = [
  {
    id: 1,
    title: 'Walking in the Fullness of God',
    author: 'Pastor Clinton Baruch',
    description:
      'A comprehensive guide to living a Spirit-filled life and walking in the fullness of your God-given purpose. This book covers the foundations of faith, the power of the Holy Spirit, and practical steps for spiritual growth.',
    price: 'Free',
    type: 'free',
    pages: 240,
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Foundations of Faith',
    author: 'Pastor Clinton Baruch',
    description:
      'This essential resource covers the core doctrines of the Christian faith, designed for new believers and seasoned Christians alike who want to strengthen their theological foundation.',
    price: 'Free',
    type: 'free',
    pages: 180,
    rating: 4.8,
  },
  {
    id: 3,
    title: 'The Praying Believer',
    author: 'Pastor Clinton Baruch',
    description:
      'Unlock the power of prayer with this practical guide. Learn how to develop a consistent prayer life, pray with authority, and experience breakthroughs through intercession.',
    price: '$14.99',
    type: 'paid',
    pages: 320,
    rating: 4.9,
  },
  {
    id: 4,
    title: 'Kingdom Leadership',
    author: 'Pastor Clinton Baruch',
    description:
      'Principles of godly leadership drawn from Scripture. Whether you lead in the church, workplace, or home, this book equips you with the wisdom to lead like Christ.',
    price: '$18.99',
    type: 'paid',
    pages: 280,
    rating: 4.7,
  },
  {
    id: 5,
    title: 'Daily Devotional: 365 Days with God',
    author: 'Clinton Baruch Ministries',
    description:
      'A year-long devotional with daily Scripture readings, reflections, and prayers to help you stay connected with God every single day.',
    price: '$12.99',
    type: 'paid',
    pages: 400,
    rating: 5.0,
  },
  {
    id: 6,
    title: 'Grace for the Journey',
    author: 'Minister Grace Baruch',
    description:
      'A heartfelt book written for women navigating the seasons of life. Discover how God\'s grace is sufficient for every challenge and every triumph.',
    price: 'Free',
    type: 'free',
    pages: 160,
    rating: 4.8,
  },
]

type BookFilter = 'all' | 'free' | 'paid'

export default function Books() {
  const [filter, setFilter] = useState<BookFilter>('all')

  const filteredBooks = filter === 'all' ? books : books.filter((b) => b.type === filter)

  return (
    <>
      {/* Hero */}
      <section className="bg-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary font-sans">
            Resources
          </p>
          <h1 className="mt-4 text-4xl font-bold text-background md:text-5xl lg:text-6xl text-balance">
            Books & Publications
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-background/70 font-sans">
            Explore our collection of books and resources designed to deepen your faith
            and equip you for Kingdom living.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center gap-3 py-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {(['all', 'free', 'paid'] as BookFilter[]).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors font-sans ${
                  filter === f
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent'
                }`}
              >
                {f === 'all' ? 'All Books' : f === 'free' ? 'Free Downloads' : 'Paid Books'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
              >
                {/* Book Cover Placeholder */}
                <div className="relative flex h-56 items-center justify-center bg-primary/5">
                  <div className="flex h-36 w-24 items-center justify-center rounded-md bg-primary shadow-lg">
                    <BookOpen className="h-10 w-10 text-primary-foreground" />
                  </div>
                  {book.type === 'free' && (
                    <div className="absolute right-4 top-4 rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-primary-foreground font-sans">
                      FREE
                    </div>
                  )}
                </div>

                {/* Book Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-card-foreground">{book.title}</h3>
                  <p className="mt-1 text-sm font-medium text-primary font-sans">{book.author}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground font-sans">
                    {book.description}
                  </p>

                  {/* Meta */}
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium text-foreground font-sans">{book.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground font-sans">{book.pages} pages</span>
                  </div>

                  {/* Action */}
                  <button
                    type="button"
                    className={`mt-4 flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors font-sans ${
                      book.type === 'free'
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-foreground text-background hover:bg-foreground/90'
                    }`}
                  >
                    {book.type === 'free' ? (
                      <>
                        <Download className="h-4 w-4" />
                        Download Free
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-4 w-4" />
                        Buy for {book.price}
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author CTA */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary font-sans">
                From the Author
              </p>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl text-balance">
                Written to Equip, Encourage, and Transform
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground font-sans">
                Every book and resource from Clinton Baruch Ministries is born out of a desire
                to see believers grow in their knowledge of God and walk in the fullness of their
                calling. Whether you're a new believer or a seasoned minister, these materials
                are designed to strengthen your faith and deepen your relationship with God.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline font-sans"
              >
                Request a Bulk Order
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/pastor.jpg"
                alt="Pastor Clinton Baruch, Author"
                className="rounded-2xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
