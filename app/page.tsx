'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Mail, Phone, Send, Sparkles } from 'lucide-react'

const capabilities = ['Backend Architecture', 'APIs & Integrations', 'Authentication', 'Data Processing', 'Ecommerce Systems', 'Automation', 'Intelligent Software']
const services = [
  ['Custom Software & Web Platforms', 'Turn complex operations into clear, dependable products.'],
  ['API Development & Integrations', 'Connect the tools that move your business forward.'],
  ['Ecommerce Intelligence & Automation', 'More signal, fewer manual tasks, better decisions.'],
  ['Product & System Architecture', 'A stronger technical foundation for what comes next.'],
]
const principles = ['Systems thinking', 'Reasoning before code', 'Clarity over complexity']

export default function Page() {
  const [loaded, setLoaded] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1500)
    const move = (event: MouseEvent) => setSpotlight({ x: (event.clientX / window.innerWidth) * 100, y: (event.clientY / window.innerHeight) * 100 })
    window.addEventListener('mousemove', move)
    return () => { window.clearTimeout(timer); window.removeEventListener('mousemove', move) }
  }, [])

  return (
    <main className={`site-shell ${loaded ? 'is-loaded' : ''}`}>
      {!loaded && <div className="preloader"><span>D</span><span>A</span><span>V</span><span>I</span><span>X</span><i /></div>}
      <header className="site-nav">
        <a className="brand" href="#top">DAVIX<span>.</span></a>
        <nav><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></nav>
        <a className="nav-cta" href="#contact">Hire me <ArrowUpRight size={15} /></a>
      </header>

      <section id="top" className="hero" style={{ '--spot-x': `${spotlight.x}%`, '--spot-y': `${spotlight.y}%` } as React.CSSProperties}>
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Taking on select projects</p>
          <h1>I build the <em>systems</em><br />behind businesses<br />that scale.</h1>
          <p className="hero-sub">Software, APIs and intelligent systems, engineered by Davix, founder of PRETHIM.</p>
          <div className="hero-actions"><a className="button button-gold" href="#contact">Start a project <ArrowUpRight size={17} /></a><a className="text-link" href="#work">View work <span>↓</span></a></div>
        </div>
        <div className="hero-visual"><div className="hero-word">DAVIX</div><div className="portrait-light" /><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_and_white_portrait_editing_20261027120217-UAiDFUMMT0DIXyPW3dBLLR2MDCBSEb.jpg" alt="Davix in dramatic black and white light" /></div>
        <div className="hero-meta"><span>Port Harcourt · Nigeria</span><span>Scroll to explore ↓</span></div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>{[...capabilities, ...capabilities].map((item, i) => <span key={`${item}-${i}`}>{item} <b>✦</b></span>)}</div></section>

      <section id="services" className="section services"><SectionLabel title="What I build" /><div className="section-intro"><h2>Infrastructure for<br /><em>ambitious</em> operators.</h2><p>I design and build the invisible systems that make a business feel effortless — from first transaction to full scale.</p></div><div className="service-list">{services.map(([title, copy]) => <a className="service-row" href="#contact" key={title}><h3>{title}</h3><p>{copy}</p><ArrowUpRight className="service-arrow" /></a>)}</div><CTA label="Have a complex problem? Let's talk." /></section>

      <section id="work" className="section work"><SectionLabel title="Selected work" /><div className="work-heading"><h2>Built for the<br /><em>real world.</em></h2></div><article className="case-study"><div className="case-image"><div className="case-glow" /><div className="case-mark">R</div><span className="case-label">REDEN / 2026</span></div><div className="case-content"><div className="case-top"><span className="gold-label">In development</span><span>Adaptive commerce orchestration</span></div><h3>REDEN<span>.</span></h3><p className="case-lead">A system that helps ecommerce businesses understand customer behaviour, recognise purchase intent and turn decisions into business outcomes.</p><div className="case-details"><div><small>Problem</small><p>Commerce data is scattered. Good decisions arrive too late.</p></div><div><small>Approach</small><p>One intelligent layer across behaviour, operations and action.</p></div><div><small>Stack</small><p>Architecture · Backend · Auth · Data · Intelligence</p></div></div><a className="text-link" href="#contact">Discuss the system <ArrowUpRight size={15} /></a></div></article><div className="coming-grid"><div><span>Coming next</span><h3>Operations<br /><em>without friction.</em></h3></div><div><span>Coming next</span><h3>Signal in<br /><em>the noise.</em></h3></div></div><div className="testimonial-slot"><Sparkles size={17} /><p>Client perspective will live here.</p><span>Testimonial placeholder</span></div><CTA label="See what we could build together." /></section>

      <section className="philosophy"><SectionLabel title="The point of it" /><div className="philosophy-grid"><h2>I&apos;m interested in what technology can solve, what it can change, and what becomes possible when someone decides to <em>build instead of waiting.</em></h2><div className="principles">{principles.map((p) => <div key={p}><p>{p}</p></div>)}</div></div></section>

      <section className="section process"><SectionLabel title="How I work" /><h2>Clear thinking.<br /><em>Useful momentum.</em></h2><div className="process-grid">{[['Discover', 'Understand the problem, the people and the outcome that matters.'], ['Architect', 'Map the system before a line of code is written.'], ['Build', 'Ship the smallest strong version, then make it durable.'], ['Launch & Refine', 'Learn from the real world and keep improving the signal.']].map(([title, copy]) => <div className="process-step" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div><CTA label="Ready to make progress? Start here." /></section>

      <section id="about" className="section about"><SectionLabel title="About Davix" /><div className="about-grid"><div className="about-image"><img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edit_portrait_photo_20261027120216-qjC6r32SLTLkafCGzTahl5dOqpjDBW.jpg" alt="Davix in profile wearing a beanie" /></div><div className="about-copy"><h2>Technology should make everyday work feel <em>lighter.</em></h2><p>Davix is a technology builder and founder of PRETHIM, focused on using APIs and intelligent software to solve everyday technology problems.</p><p>Honest thinking. Solid systems. No unnecessary theatre.</p><a className="text-link" href="https://prethim.name.ng" target="_blank" rel="noreferrer">Visit PRETHIM <ArrowUpRight size={15} /></a></div></div></section>

      <section id="contact" className="contact"><SectionLabel title="Make an enquiry" /><div className="contact-heading"><h2>Let&apos;s build something<br /><em>that matters.</em></h2><div className="gold-line" /></div><div className="contact-grid"><div className="contact-links"><a href="mailto:davixsir654@gmail.com"><Mail size={17} /> davixsir654@gmail.com</a><a href="tel:+2349018098500"><Phone size={17} /> 090 1809 8500</a><a href="https://wa.me/2349018098500?text=Hi%20Davix%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><Send size={17} /> WhatsApp</a></div><form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success"><span>✓</span><h3>Message received.</h3><p>I&apos;ll be in touch soon.</p></div> : <><input required placeholder="Your name" aria-label="Your name" /><input required type="email" placeholder="Email address" aria-label="Email address" /><select required defaultValue=""><option value="" disabled>What do you need?</option><option>Custom software</option><option>API or integration</option><option>Ecommerce automation</option><option>Something else</option></select><select required defaultValue=""><option value="" disabled>Budget range</option><option>₦500k — ₦1m</option><option>₦1m — ₦3m</option><option>₦3m+</option></select><textarea required placeholder="Tell me about the problem you want to solve." aria-label="Project details" /><button className="button button-gold" type="submit">Send enquiry <ArrowUpRight size={17} /></button></>}</form></div></section>
      <footer><span>© DAVIX. Built with intent.</span><span>PRETHIM / 2026</span></footer><a className="mobile-whatsapp" href="https://wa.me/2349018098500?text=Hi%20Davix%2C%20I%27d%20like%20to%20discuss%20a%20project." aria-label="Chat on WhatsApp">↗</a>
    </main>
  )
}

function SectionLabel({ title }: { title: string }) { return <div className="section-label"><span>{title}</span><i /></div> }
function CTA({ label }: { label: string }) { return <a className="inline-cta" href="#contact">{label}<ArrowUpRight size={17} /></a> }
