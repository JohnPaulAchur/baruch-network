import { useState } from 'react'
import { Download, ShoppingCart, Star, BookOpen, ArrowUpRight } from 'lucide-react'

const books = [
  { id: 1, title: 'Walking in the Fullness of God', author: 'Pastor Clinton Baruch', price: 0, description: 'A foundational guide to understanding your identity in Christ and walking in the fullness of God\'s purpose for your life.', pages: 145, free: true,
    image: "/images/book-purpose.jpg",

   },
  { id: 2, title: 'The Power of Persistent Prayer', author: 'Pastor Clinton Baruch', price: 14.99, description: 'Discover the transformative power of a consistent prayer life and learn practical strategies for deepening your communion with God.', pages: 210, free: false, image: "/images/book-prayer.jpg", },
  { id: 3, title: 'Foundations of Faith: A Believer\'s Guide', author: 'Pastor Clinton Baruch', price: 0, description: 'Essential teachings for new believers covering salvation, baptism, the Holy Spirit, and living a life pleasing to God.', pages: 98,image: "/images/book-faith.jpg", free: true },
  { id: 4, title: 'Grace Unmerited: Understanding God\'s Gift', author: 'Minister Grace Baruch', price: 12.99, description: 'An in-depth exploration of God\'s grace and how it transforms every area of our lives from the inside out.', pages: 178,image: "/images/book-purpose.jpg", free: false },
  { id: 5, title: 'Daily Devotional: 365 Days of Faith', author: 'Pastor Clinton Baruch', price: 19.99, description: 'A year-long devotional journey through Scripture with daily readings, reflections, and prayers for spiritual growth.', pages: 400,image: "/images/book-faith.jpg", free: false },
  { id: 6, title: 'Youth on Fire: A Guide for Young Believers', author: 'Ministry Team', price: 0, description: 'Written specifically for young believers, this guide addresses the unique challenges and opportunities of living for Christ today.', pages: 120,image: "/images/book-faith.jpg", free: true },
]

export default function Books() {
  const [filter, setFilter] = useState('all')
  const filteredBooks = filter === 'all' ? books : filter === 'free' ? books.filter((b) => b.free) : books.filter((b) => !b.free)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/books-collection.jpg" alt="Book collection" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">Resources</p>
          <h1 className="mt-6 text-2xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight">
            Books <span className="italic text-accent">&</span> Publications
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-primary-foreground/50 font-sans md:text-lg">
            Equip yourself with powerful resources for spiritual growth, discipleship, and deeper understanding of God's Word.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="sticky top-[72px] z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 py-4">
            {[{ key: 'all', label: 'All Books' }, { key: 'free', label: 'Free Resources' }, { key: 'paid', label: 'Premium Books' }].map((f) => (
              <button key={f.key} type="button" onClick={() => setFilter(f.key)} className={`rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 font-sans ${filter === f.key ? 'bg-foreground text-accent' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <div key={book.id} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                {/* Book cover */}
<div className="relative h-64 w-full overflow-hidden">
  <img
    src={book.image}
    alt={book.title}
    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Title + Author */}
  <div className="absolute bottom-6 left-6 right-6 z-10">
    <p className="text-lg font-bold text-white font-serif leading-tight">
      {book.title}
    </p>
    <p className="mt-1 text-xs uppercase tracking-wider text-accent font-sans">
      {book.author}
    </p>
  </div>
</div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider font-sans">
                      {book.free ? <span className="text-accent">Free</span> : <span className="text-foreground">${book.price}</span>}
                    </div>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground font-sans">{book.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground font-sans">{book.pages} pages</p>
                  <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-[12px] font-semibold uppercase tracking-wider text-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground font-sans">
                    {book.free ? (<><Download className="h-4 w-4" />Download Free</>) : (<><ShoppingCart className="h-4 w-4" />Purchase Book</>)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">Have a Book Suggestion?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/60 font-sans">
            We are always looking to provide valuable resources. Let us know what topics you'd like us to cover.
          </p>
        </div>
      </section>
    </>
  )
}
