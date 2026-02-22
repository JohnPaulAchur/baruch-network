import { useState } from 'react'
import { Calendar, User, Clock, ArrowRight, Search, ArrowUpRight } from 'lucide-react'

const blogPosts = [
  { id: 1, title: 'The Power of Consistent Prayer in the Life of a Believer', excerpt: 'Prayer is the foundation of every believer\'s relationship with God. Explore how a consistent prayer life transforms our circumstances and character.', author: 'Pastor Clinton Baruch', date: 'Feb 20, 2026', readTime: '8 min', category: 'Prayer', featured: true, image: '/images/prayer.jpg' },
  { id: 2, title: 'Understanding God\'s Grace: More Than Unmerited Favor', excerpt: 'Grace is one of the most profound concepts in Scripture. Discover the depths of God\'s grace and how it empowers us.', author: 'Minister Grace Baruch', date: 'Feb 15, 2026', readTime: '6 min', category: 'Theology', featured: false, image: '/images/bible-study.jpg' },
  { id: 3, title: 'Raising Godly Children in a Digital Age', excerpt: 'Navigating the challenges of raising children who love God in a world dominated by technology and social media.', author: 'Minister Grace Baruch', date: 'Feb 10, 2026', readTime: '7 min', category: 'Family', featured: false, image: '/images/community.jpg' },
  { id: 4, title: 'The Importance of Biblical Community', excerpt: 'God never intended for us to walk this faith journey alone. Learn why authentic community is essential.', author: 'Elder James Thompson', date: 'Feb 5, 2026', readTime: '5 min', category: 'Community', featured: false, image: '/images/outreach.jpg' },
  { id: 5, title: 'Walking by Faith, Not by Sight', excerpt: 'When circumstances seem overwhelming, how do we trust God\'s plan? Practical steps for developing unwavering faith.', author: 'Pastor Clinton Baruch', date: 'Jan 30, 2026', readTime: '9 min', category: 'Faith', featured: false, image: '/images/hero-worship.jpg' },
  { id: 6, title: 'The Heart of Worship: Beyond the Music', excerpt: 'True worship extends far beyond Sunday morning. Discover what it means to live a life of worship.', author: 'Pastor Clinton Baruch', date: 'Jan 25, 2026', readTime: '6 min', category: 'Worship', featured: false, image: '/images/sermon-stage.jpg' },
]

const categories = ['All', 'Prayer', 'Theology', 'Family', 'Community', 'Faith', 'Worship']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPost = blogPosts.find((p) => p.featured)

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/bible-study.jpg" alt="Bible study" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-accent font-sans">Articles & Devotionals</p>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight">
            Ministry <span className="italic text-accent">Blog</span>
          </h1>
          <div className="mx-auto mt-10 max-w-md">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/30" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-primary-foreground/10 bg-primary-foreground/5 py-4 pl-12 pr-6 text-sm text-primary-foreground placeholder:text-primary-foreground/30 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent font-sans"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="sticky top-[72px] z-30 border-b border-border bg-background/95 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-8">
          <div className="flex gap-2 py-4">
            {categories.map((cat) => (
              <button key={cat} type="button" onClick={() => setActiveCategory(cat)} className={`whitespace-nowrap rounded-full px-5 py-2 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 font-sans ${activeCategory === cat ? 'bg-foreground text-accent' : 'bg-secondary text-muted-foreground hover:text-foreground'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Featured Post */}
          {activeCategory === 'All' && searchQuery === '' && featuredPost && (
            <div className="mb-20">
              <div className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
                <div className="h-72 overflow-hidden lg:h-auto">
                  <img src={featuredPost.image} alt={featuredPost.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-10 lg:p-14">
                  <div className="inline-flex self-start rounded-full bg-foreground px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-accent font-sans">Featured</div>
                  <h2 className="mt-6 text-3xl font-bold text-card-foreground md:text-4xl text-balance">{featuredPost.title}</h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground font-sans">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground font-sans">
                    <span className="flex items-center gap-1"><User className="h-4 w-4 text-accent" />{featuredPost.author}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4 text-accent" />{featuredPost.date}</span>
                    <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-accent" />{featuredPost.readTime}</span>
                  </div>
                  <button type="button" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all duration-300 font-sans">
                    Read Full Article <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground font-sans">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.filter((p) => !(activeCategory === 'All' && searchQuery === '' && p.featured)).map((post) => (
                <article key={post.id} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:border-accent/30 hover:shadow-xl hover:-translate-y-1">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="inline-flex self-start rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent font-sans">{post.category}</div>
                    <h3 className="mt-4 text-lg font-bold leading-tight text-card-foreground group-hover:text-primary text-balance">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground font-sans">{post.excerpt}</p>
                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground font-sans">{post.author}</span>
                      <span className="text-xs text-muted-foreground font-sans">{post.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
