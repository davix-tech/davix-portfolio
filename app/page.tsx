'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Mail, Phone, Send } from 'lucide-react'

const services = [
  { number: '01', title: 'Software that fits the problem', detail: 'Purpose-built platforms and tools shaped around the way a business actually works.' },
  { number: '02', title: 'APIs that connect the pieces', detail: 'Reliable integrations that let separate systems work as one.' },
  { number: '03', title: 'Intelligence that leads to action', detail: 'Commerce systems, automation, and decision logic designed to do more than report.' },
  { number: '04', title: 'Architecture built to last', detail: 'Clear foundations, considered trade-offs, and systems that can grow without becoming fragile.' },
]

const steps = [
  { number: 'I', title: 'Understand', detail: 'Get close to the real problem before deciding what to build.' },
  { number: 'II', title: 'Architect', detail: 'Find the simplest system that can deliver the outcome.' },
  { number: 'III', title: 'Build', detail: 'Turn the plan into working software, piece by piece.' },
  { number: 'IV', title: 'Refine', detail: 'Test against reality. Improve what matters. Leave the noise behind.' },
]

export default function Page() {
  const [loaded, setLoaded] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: 70, y: 40 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1900)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const move = (event: MouseEvent) => {
      setSpotlight({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      })
    }

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    const targets = document.querySelectorAll('[data-reveal]')
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.12, rootMargin: '0px 0px -45px 0px' })

      targets.forEach((target) => observer.observe(target))
      return () => {
        window.clearTimeout(timer)
        window.removeEventListener('mousemove', move)
        window.removeEventListener('scroll', updateScroll)
        observer.disconnect()
      }
    }

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('mousemove', move)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return (
    <main className={`site-shell ${loaded ? 'is-loaded' : ''}`} style={{ '--scroll-progress': `${scrollProgress}%` } as React.CSSProperties}>
      {!loaded && <div className="preloader" aria-label="Loading DAVIX"><span>D</span><span>A</span><span>V</span><span>I</span><span>X</span><i /></div>}
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="DAVIX home">D<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work <span>01</span></a>
          <a href="#services">Practice <span>02</span></a>
          <a href="#about">About <span>03</span></a>
        </nav>
        <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
      </header>

      <section id="top" className="hero" style={{ '--spot-x': `${spotlight.x}%`, '--spot-y': `${spotlight.y}%` } as React.CSSProperties}>
        <div className="hero-number" aria-hidden="true">00</div>
        <div className="hero-portrait">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_and_white_portrait_editing_20261027120217-UAiDFUMMT0DIXyPW3dBLLR2MDCBSEb.jpg" alt="Davix, in black and white portrait light" fetchPriority="high" />
          <div className="portrait-shade" />
          <div className="portrait-caption"><span>DAVIX</span><span>Independent builder · NG</span></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Available for select work <span className="eyebrow-line" /></p>
          <h1>I build systems<br />behind businesses<br /><em>that scale.</em></h1>
          <div className="hero-bottom">
            <p className="hero-sub">Software, APIs, and intelligent systems. Built with intent, for problems worth solving.</p>
            <div className="hero-actions">
              <a className="button button-copper" href="#contact">Start a conversation <ArrowUpRight size={16} /></a>
              <a className="scroll-cue" href="#manifesto"><span>Explore</span><ArrowDown size={15} /></a>
            </div>
          </div>
        </div>
        <div className="hero-side-note"><span>Port Harcourt, Nigeria</span><i /></div>
        <div className="hero-bottom-rule"><span>Independent by design</span><span>Scroll to descend ↓</span></div>
      </section>

      <section id="manifesto" className="manifesto">
        <div className="section-kicker" data-reveal><span>01 / A point of view</span><i /></div>
        <div className="manifesto-layout">
          <p className="manifesto-aside" data-reveal>Not technology<br />for its own sake.</p>
          <h2 data-reveal>Make the complex<br />feel <em>inevitable.</em></h2>
          <p className="manifesto-note" data-reveal>I care about the part most people never see: the logic, architecture, and decisions that make a product useful in the real world.</p>
        </div>
        <div className="manifesto-index"><span>DAVIX / PERSONAL PRACTICE</span><span>001—004</span></div>
      </section>

      <section id="work" className="work section-wrap">
        <div className="section-kicker" data-reveal><span>02 / Selected work</span><i /></div>
        <div className="work-heading" data-reveal>
          <h2>Ideas are easy.<br /><em>Systems are the work.</em></h2>
          <p>One problem, understood deeply. A system designed to make something better.</p>
        </div>
        <article className="project-feature" data-reveal>
          <div className="project-art" aria-label="Abstract REDEN system visual">
            <div className="project-art-top"><span>CASE 001</span><span>COMMERCE / INTELLIGENCE</span></div>
            <div className="signal-field" aria-hidden="true">
              <span /><span /><span /><span /><span /><span /><span /><span /><span />
            </div>
            <div className="project-art-title">R<span>.</span></div>
            <div className="project-art-foot"><span>Observe</span><i /><span>Reason</span><i /><span>Act</span></div>
          </div>
          <div className="project-info">
            <div className="project-meta"><span>In development</span><span>Adaptive commerce orchestration</span></div>
            <h3>REDEN<span>.</span></h3>
            <p className="project-lead">A decision layer for ecommerce — connecting customer behaviour to intelligent action.</p>
            <p className="project-description">REDEN helps stores interpret purchase intent, respond to customer signals, and turn scattered activity into useful decisions. One system, built to help commerce move with more clarity.</p>
            <div className="project-tags"><span>Decision systems</span><span>Backend architecture</span><span>Commerce intelligence</span></div>
            <a className="inline-link" href="#contact">Discuss a system like this <ArrowUpRight size={16} /></a>
          </div>
        </article>
        <div className="work-footnote" data-reveal><span>01 / 01</span><p>More work will appear here when it has a story worth telling.</p></div>
      </section>

      <section id="services" className="services section-wrap">
        <div className="section-kicker" data-reveal><span>03 / The practice</span><i /></div>
        <div className="services-intro" data-reveal>
          <h2>Built around<br /><em>the problem.</em></h2>
          <p>I work across the layers that make software useful: product thinking, dependable infrastructure, integration, and intelligent automation.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <a className="service-row" href="#contact" key={service.number} data-reveal>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.detail}</p>
              <span className="service-arrow"><ArrowUpRight size={20} /></span>
            </a>
          ))}
        </div>
        <div className="capability-line" data-reveal><span>Architecture</span><i /><span>APIs</span><i /><span>Automation</span><i /><span>Intelligence</span><i /><span>Integration</span></div>
      </section>

      <section className="statement">
        <div className="statement-ghost" aria-hidden="true">THINK / BUILD</div>
        <div className="statement-content" data-reveal>
          <span className="statement-label">A working principle</span>
          <h2>Reason first.<br />Build with <em>purpose.</em></h2>
          <p>Good engineering is not more complexity. It is knowing what deserves to exist, then making it work exceptionally well.</p>
        </div>
        <div className="statement-coordinate">05° 01&apos; N / 06° 55&apos; E</div>
      </section>

      <section className="process section-wrap">
        <div className="section-kicker" data-reveal><span>04 / Method</span><i /></div>
        <div className="process-heading" data-reveal><h2>From uncertainty<br />to <em>something real.</em></h2><p>No theatre. No building blindly. A clear path from problem to product.</p></div>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-step" key={step.number} data-reveal>
              <span className="process-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
              <i />
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about section-wrap">
        <div className="section-kicker" data-reveal><span>05 / The person</span><i /></div>
        <div className="about-layout">
          <div className="about-image" data-reveal>
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edit_portrait_photo_20261027120216-qjC6r32SLTLkafCGzTahl5dOqpjDBW.jpg" alt="Davix in profile, in a quiet black and white portrait" loading="lazy" />
            <span>FIG. 02 — OFF THE SCREEN</span>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">The builder behind the systems</p>
            <h2>Curious about<br />what becomes<br /><em>possible.</em></h2>
            <p>I&apos;m Davix — a technology builder and founder of PRETHIM. I use APIs and intelligent software to solve everyday technology problems and make complicated work feel simpler.</p>
            <p>I&apos;m drawn to systems thinking, the details beneath the surface, and the moment a difficult problem finally makes sense.</p>
            <a className="inline-link" href="https://prethim.name.ng" target="_blank" rel="noreferrer">PRETHIM, in its own right <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-orbit" aria-hidden="true"><span>D</span><i /><i /><i /></div>
        <div className="contact-inner">
          <div className="section-kicker" data-reveal><span>06 / Begin somewhere</span><i /></div>
          <div className="contact-heading" data-reveal><p className="eyebrow">Have a real problem to solve?</p><h2>Let&apos;s make<br /><em>it work.</em></h2></div>
          <div className="contact-grid">
            <div className="contact-details" data-reveal>
              <p>Tell me what you&apos;re trying to change. We can work out what it takes to build it.</p>
              <a href="mailto:davixsir654@gmail.com"><Mail size={17} /> davixsir654@gmail.com <ArrowUpRight size={14} /></a>
              <a href="tel:+2349018098500"><Phone size={17} /> 090 1809 8500 <ArrowUpRight size={14} /></a>
              <a href="https://wa.me/2349018098500?text=Hi%20Davix%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer"><Send size={17} /> Start on WhatsApp <ArrowUpRight size={14} /></a>
            </div>
            <form className="enquiry-form" data-reveal onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>
              {submitted ? <div className="success"><span>✓</span><h3>Message received.</h3><p>I&apos;ll be in touch soon.</p></div> : <>
                <label><span>Your name</span><input required name="name" placeholder="What should I call you?" autoComplete="name" /></label>
                <label><span>Email address</span><input required name="email" type="email" placeholder="Where can I reach you?" autoComplete="email" /></label>
                <label><span>What do you need?</span><select required name="service" defaultValue=""><option value="" disabled>Select a starting point</option><option>Custom software</option><option>API or integration</option><option>Ecommerce automation</option><option>System architecture</option><option>Something else</option></select></label>
                <label><span>Budget range</span><select required name="budget" defaultValue=""><option value="" disabled>Choose a range</option><option>₦500k — ₦1m</option><option>₦1m — ₦3m</option><option>₦3m+</option><option>Let&apos;s discuss</option></select></label>
                <label className="full-field"><span>The problem</span><textarea required name="details" placeholder="A little context goes a long way." rows={3} /></label>
                <button className="button button-copper" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
              </>}
            </form>
          </div>
        </div>
      </section>

      <footer className="site-footer"><a className="footer-mark" href="#top">D<span>.</span></a><p>Independent thinking. Useful systems.</p><span>© DAVIX 2026</span><a href="#top" className="back-top">Back to top ↑</a></footer>
      <a className="mobile-whatsapp" href="https://wa.me/2349018098500?text=Hi%20Davix%2C%20I%27d%20like%20to%20discuss%20a%20project." aria-label="Chat with Davix on WhatsApp"><Send size={18} /></a>
    </main>
  )
}
