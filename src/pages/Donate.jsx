import { useState } from 'react'
import { Heart, Globe, BookOpen, Users, Building, HandHeart, Shield } from 'lucide-react'

const donationAmounts = [25, 50, 100, 250, 500, 1000]

const impactAreas = [
  { icon: Globe, title: 'Global Missions', description: 'Support our missionaries reaching communities around the world with the Gospel.' },
  { icon: BookOpen, title: 'Education & Resources', description: 'Help us publish free books, devotionals, and Bible study materials.' },
  { icon: Users, title: 'Youth Development', description: 'Invest in the next generation through youth programs and leadership training.' },
  { icon: Building, title: 'Building Fund', description: 'Contribute to the expansion of our ministry facilities and infrastructure.' },
  { icon: HandHeart, title: 'Community Aid', description: 'Help meet practical needs of families through food, clothing, and support.' },
  { icon: Heart, title: 'General Ministry', description: 'Support the day-to-day operations and growth of the ministry.' },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [customAmount, setCustomAmount] = useState('')
  const [donationType, setDonationType] = useState('one-time')

  const currentAmount = customAmount ? parseFloat(customAmount) : selectedAmount

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-foreground">
        <img src="/images/prayer.jpg" alt="Prayer and giving" className="absolute inset-0 h-full w-full object-cover opacity-15" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent">
            <Heart className="h-7 w-7 text-accent" />
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] text-primary-foreground md:text-7xl lg:text-8xl tracking-tight text-balance">
            Support the <span className="italic text-accent">Ministry</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base text-primary-foreground/50 font-sans md:text-lg">
            Your generous giving enables us to spread the Gospel, serve our community, and reach the nations.
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-10 shadow-sm lg:p-14">
            <h2 className="text-3xl font-bold text-card-foreground text-center md:text-4xl">Make a Donation</h2>
            <p className="mt-3 text-center text-sm text-muted-foreground font-sans">Every gift makes a difference in the Kingdom.</p>

            {/* Type Toggle */}
            <div className="mt-10 flex rounded-full border border-border p-1">
              {['one-time', 'monthly'].map((type) => (
                <button key={type} type="button" onClick={() => setDonationType(type)} className={`flex-1 rounded-full py-3.5 text-[12px] font-semibold uppercase tracking-wider transition-all duration-300 font-sans ${donationType === type ? 'bg-foreground text-accent' : 'text-muted-foreground hover:text-foreground'}`}>
                  {type === 'one-time' ? 'One-Time Gift' : 'Monthly Partner'}
                </button>
              ))}
            </div>

            {/* Amount Selection */}
            <div className="mt-10">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Select Amount</label>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {donationAmounts.map((amount) => (
                  <button key={amount} type="button" onClick={() => { setSelectedAmount(amount); setCustomAmount('') }} className={`rounded-2xl border py-4 text-base font-bold transition-all duration-300 font-serif ${selectedAmount === amount && !customAmount ? 'border-accent bg-foreground text-accent' : 'border-border text-foreground hover:border-accent/30'}`}>
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Or enter custom amount</label>
                <div className="relative mt-2">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-sans">$</span>
                  <input type="number" placeholder="Custom amount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null) }} className="w-full rounded-2xl border border-border bg-background py-4 pl-10 pr-5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" min="1" />
                </div>
              </div>
            </div>

            {/* Donor Info */}
            <div className="mt-10">
              <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground font-sans">Your Information</label>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="First Name" className="rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
                <input type="text" placeholder="Last Name" className="rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
              </div>
              <input type="email" placeholder="Email Address" className="mt-4 w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent font-sans" />
            </div>

            {/* Submit */}
            <button type="button" className="mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-foreground py-5 text-base font-bold text-accent transition-all duration-300 hover:bg-primary hover:text-primary-foreground font-sans">
              <Heart className="h-5 w-5" />
              {donationType === 'monthly' ? 'Give' : 'Donate'} {currentAmount ? `$${currentAmount}` : ''} {donationType === 'monthly' ? '/ month' : ''}
            </button>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted-foreground font-sans">
              <Shield className="h-4 w-4 text-accent" /> Secure and encrypted donation processing
            </div>
          </div>

          {/* Scripture */}
          <div className="mt-12 text-center">
            <div className="mx-auto h-px w-12 bg-accent" />
            <p className="mt-6 text-lg italic text-muted-foreground font-serif">
              {"\"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.\""}
            </p>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-accent font-sans">2 Corinthians 9:7</p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="bg-secondary py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent font-sans">Where Your Gift Goes</p>
            <h2 className="mt-4 text-4xl font-bold text-foreground md:text-5xl">Your Impact</h2>
          </div>
          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {impactAreas.map((area) => (
              <div key={area.title} className="flex items-start gap-5 rounded-3xl bg-card p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-foreground text-accent">
                  <area.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-card-foreground">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-sans">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
