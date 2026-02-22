import { useState } from 'react'
import { Download, ShoppingCart, Star, BookOpen, ArrowUpRight } from 'lucide-react'
// import { Badge } from "@/components/ui/badge"
// import { Download, ShoppingCart, BookOpen } from "lucide-react"
const books = [
  {
    title: "Walking in Purpose",
    author: "Pastor Clinton Baruch",
    description:
      "A comprehensive guide to discovering and fulfilling your God-given purpose. This book will help you identify your calling, overcome obstacles, and walk boldly in the plans God has for your life.",
    image: "/images/book-purpose.jpg",
    price: "Free",
    isFree: true,
    pages: 180,
    year: 2024,
  },
  {
    title: "The Prayer Warrior's Guide",
    author: "Pastor Clinton Baruch",
    description:
      "An in-depth study of prayer principles from Scripture. Learn how to pray with power, persistence, and faith as you develop a deeper prayer life that transforms your relationship with God.",
    image: "/images/book-prayer.jpg",
    price: "$14.99",
    isFree: false,
    pages: 220,
    year: 2023,
  },
  {
    title: "Unshakable Faith",
    author: "Pastor Clinton Baruch",
    description:
      "In a world full of uncertainty, how do we build a faith that cannot be shaken? This book explores the foundations of true biblical faith and how to stand firm in every season of life.",
    image: "/images/book-faith.jpg",
    price: "$12.99",
    isFree: false,
    pages: 160,
    year: 2025,
  },
  {
    title: "Kingdom Leadership",
    author: "Pastor Clinton Baruch",
    description:
      "A practical guide for church leaders, ministry workers, and anyone called to lead. Discover the principles of servant leadership modeled by Jesus Christ.",
    image: "/images/book-purpose.jpg",
    price: "Free",
    isFree: true,
    pages: 140,
    year: 2022,
  },
  {
    title: "Breaking Every Chain",
    author: "Pastor Clinton Baruch",
    description:
      "Freedom is your inheritance in Christ. This book addresses spiritual bondage, generational patterns, and the power of the Holy Spirit to bring total deliverance and lasting freedom.",
    image: "/images/book-prayer.jpg",
    price: "$16.99",
    isFree: false,
    pages: 250,
    year: 2025,
  },
  {
    title: "Foundations of Faith",
    author: "Pastor Clinton Baruch",
    description:
      "A beginner-friendly exploration of core Christian doctrines. Perfect for new believers or anyone seeking to strengthen their understanding of the faith.",
    image: "/images/book-faith.jpg",
    price: "Free",
    isFree: true,
    pages: 120,
    year: 2021,
  },
]

export default function BooksPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground/70">
            Resources for Growth
          </p>
          <h1 className="mt-2 font-serif text-4xl font-bold text-primary-foreground md:text-5xl text-balance">
            Books & Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Explore free and paid resources by Pastor Clinton Baruch designed to
            strengthen your faith and deepen your walk with God.
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter Tabs */}
          <div className="mb-12 flex items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">
              Filter:
            </span>
            <div className="flex gap-2">
              <Star
                variant="default"
                className="cursor-pointer bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-1"
              >
                All Books
              </Star>
              <Star
                variant="outline"
                className="cursor-pointer border-border text-muted-foreground hover:bg-secondary px-4 py-1"
              >
                Free
              </Star>
              <Star
                variant="outline"
                className="cursor-pointer border-border text-muted-foreground hover:bg-secondary px-4 py-1"
              >
                Paid
              </Star>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <article
                key={book.title}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute right-3 top-3">
                    <Star
                      className={
                        book.isFree
                          ? "bg-accent text-accent-foreground"
                          : "bg-primary text-primary-foreground"
                      }
                    >
                      {book.price}
                    </Star>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{book.author}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {book.description}
                  </p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" /> {book.pages} pages
                    </span>
                    <span>{book.year}</span>
                  </div>
                  <div className="mt-5">
                    {book.isFree ? (
                      <button
                        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                        size="sm"
                      >
                        <Download className="mr-2 h-4 w-4" /> Free Download
                      </button>
                    ) : (
                      <button
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        size="sm"
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" /> Purchase
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Want More Resources?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Sign up for our newsletter to receive free devotionals, teaching
            excerpts, and be the first to know about new book releases.
          </p>
          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
