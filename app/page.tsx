'use client'

import { useEffect, useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Github, Mail, MoveUpRight } from 'lucide-react'

const capabilities = [
  { n: '01', title: 'Product-minded engineering', detail: 'I start with the friction, not the framework. What should become easier, faster, or possible?' },
  { n: '02', title: 'Systems that talk', detail: 'APIs and integrations that turn disconnected tools into one coherent system.' },
  { n: '03', title: 'Automation with judgement', detail: 'Software that can interpret a signal, make a decision, and do something useful with it.' },
]

const principles = [
  { n: 'A', title: 'Understand the real problem', copy: 'The first version of a problem is rarely the whole problem.' },
  { n: 'B', title: 'Make the system legible', copy: 'Good architecture gives the next decision somewhere solid to stand.' },
  { n: 'C', title: 'Ship, observe, improve', copy: 'A working product teaches more than a perfect diagram.' },
]

export default function Page() {
  const [loaded, setLoaded] = useState(false)
  const [pointer, setPointer] = useState({ x: 50, y: 38 })
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 900)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const move = (event: MouseEvent) => {
      setPointer({ x: event.clientX / window.innerWidth * 100, y: event.clientY / window.innerHeight * 100 })
    }
    const scroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? window.scrollY / max * 100 : 0)
    }
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('scroll', scroll, { passive: true })
    scroll()
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
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })
      targets.forEach((target) => observer.observe(target))
      return () => {
        window.clearTimeout(timer)
        window.removeEventListener('pointermove', move)
        window.removeEventListener('scroll', scroll)
        observer.disconnect()
      }
    }
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('scroll', scroll)
    }
  }, [])

  return (
    <main className={`site-shell ${loaded ? 'is-loaded' : ''}`} style={{ '--scroll-progress': `${scrollProgress}%`, '--pointer-x': `${pointer.x}%`, '--pointer-y': `${pointer.y}%`, '--parallax-x': `${(pointer.x - 50) * -0.12}px`, '--parallax-y': `${(pointer.y - 50) * -0.1}px` } as React.CSSProperties}>
      {!loaded && <div className="preloader" aria-label="Loading DAVIX"><span>D</span><i /></div>}
      <div className="scroll-progress" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="DAVIX home">D<span>/</span></a>
        <span className="nav-note">Independent mind. Useful software.</span>
        <nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#about">About</a><a className="nav-contact" href="#contact">Contact <ArrowUpRight size={15} /></a></nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-topline"><span>PORT HARCOURT, NG</span><span>ENGINEERING / SYSTEMS / IDEAS</span></div>
        <div className="hero-photo-wrap">
          <div className="photo-halo" />
          <img className="hero-photo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Black_and_white_portrait_editing_20261027120217-UAiDFUMMT0DIXyPW3dBLLR2MDCBSEb.jpg" alt="Davix, photographed in dramatic black and white" fetchPriority="high" />
          <div className="photo-cutout" aria-hidden="true" />
          <span className="photo-index">FIG. 001 <i /> THE PERSON BEHIND THE PROCESS</span>
        </div>
        <div className="hero-type" aria-label="Davix builds useful technology">
          <p className="hero-pretitle"><span className="live-dot" /> BUILDING WITH INTENTION</p>
          <h1>Make<br /><span>things</span> <em>matter.</em></h1>
          <div className="hero-lower">
            <p className="hero-description">I’m Davix — a software builder drawn to hard problems, useful systems, and the details that make technology feel effortless.</p>
            <a className="glass-cta" href="#about"><span className="cta-arrow"><ArrowDownRight size={19} /></span><span>Get to know me</span><MoveUpRight className="cta-tail" size={15} /></a>
          </div>
        </div>
        <div className="hero-vertical" aria-hidden="true">IDEAS INTO SYSTEMS <span>—</span> SYSTEMS INTO IMPACT</div>
        <a className="hero-scroll" href="#intro"><span>SCROLL TO DISCOVER</span><span className="scroll-line" /></a>
        <div className="hero-stamp" aria-hidden="true"><span>DVX</span><i>BUILT<br />WITH<br />INTENT</i></div>
      </section>

      <section id="intro" className="intro-section">
        <div className="section-meta" data-reveal><span>01 — THE POINT</span><span>LESS NOISE. MORE MEANING.</span></div>
        <div className="intro-grid">
          <p className="intro-side" data-reveal>Technology should earn its place.</p>
          <h2 data-reveal>Not more software.<br />Just <span>better answers.</span></h2>
          <p className="intro-copy" data-reveal>I care about the distance between a real-world problem and a solution that actually works. My job is to close that distance — with clear thinking, considered engineering, and systems made for people to use.</p>
        </div>
        <div className="intro-foot" data-reveal><span>THINK CLEARLY</span><span className="intro-foot-line" /><span>BUILD DELIBERATELY</span></div>
      </section>

      <section id="approach" className="approach-section">
        <div className="section-meta" data-reveal><span>02 — THE WORK</span><span>THINGS I LIKE TO SOLVE</span></div>
        <div className="approach-heading" data-reveal><h2>Where ideas<br />become <em>useful.</em></h2><p>Different problems need different tools. The common thread is making the moving parts work together.</p></div>
        <div className="capability-list">
          {capabilities.map((item, i) => (
            <article className="capability" key={item.n} data-reveal>
              <span className="cap-number">{item.n}</span>
              <div className="cap-copy"><h3>{item.title}</h3><p>{item.detail}</p></div>
              <span className="cap-glyph" aria-hidden="true">{['↗', '⤳', '⌁'][i]}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="interlude">
        <div className="interlude-word" aria-hidden="true">WHY<span>?</span></div>
        <div className="interlude-content" data-reveal><span className="interlude-label">A useful question</span><h2>What if the hard part<br />could feel <em>simple?</em></h2><p>That’s the question I return to. Not because every problem has an elegant answer — but because the search for one is worth doing properly.</p></div>
        <div className="interlude-bottom"><span>QUESTION EVERYTHING</span><span>KEEP WHAT WORKS</span></div>
      </section>

      <section className="method-section">
        <div className="section-meta" data-reveal><span>03 — THE METHOD</span><span>HOW I APPROACH A PROBLEM</span></div>
        <div className="method-heading" data-reveal><h2>Good work<br />starts <em>before code.</em></h2></div>
        <div className="principle-grid">
          {principles.map((item) => <article className="principle" key={item.n} data-reveal><span>{item.n}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-image">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edit_portrait_photo_20261027120216-qjC6r32SLTLkafCGzTahl5dOqpjDBW.jpg" alt="Davix in a second, quieter portrait" loading="lazy" />
          <span className="about-image-note">A PERSON, NOT A JOB TITLE.</span>
        </div>
        <div className="about-copy" data-reveal><div className="section-meta"><span>04 — THE HUMAN</span></div><p className="about-kicker">A little about me</p><h2>I’m interested in<br />what we can <em>make possible.</em></h2><p>I’m Davix, a technology builder and founder of PRETHIM. I use APIs and software to solve everyday technology problems — and I’m interested in the thinking that makes a solution genuinely useful, not just technically impressive.</p><p>I’m still learning, building, and changing my mind when the evidence tells me to. That’s part of the work.</p><a className="text-link" href="https://prethim.name.ng" target="_blank" rel="noreferrer">PRETHIM <ArrowUpRight size={16} /></a></div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-ghost" aria-hidden="true">HELLO.</div>
        <div className="contact-top section-meta" data-reveal><span>05 — OPEN CHANNEL</span><span>GOOD THINGS START WITH A CONVERSATION.</span></div>
        <div className="contact-main" data-reveal><p>Have a problem worth solving?</p><h2>Let’s talk<br /><em>about it.</em></h2><a className="glass-cta glass-cta-dark" href="mailto:davixsir654@gmail.com"><span className="cta-arrow"><Mail size={18} /></span><span>davixsir654@gmail.com</span><MoveUpRight className="cta-tail" size={15} /></a></div>
        <div className="contact-bottom"><a href="https://wa.me/2349018098500?text=Hi%20Davix%2C%20I%27d%20like%20to%20talk." target="_blank" rel="noreferrer">WHATSAPP <ArrowUpRight size={13} /></a><a href="tel:+2349018098500">PHONE <ArrowUpRight size={13} /></a><span>PORT HARCOURT · NIGERIA</span></div>
      </section>

      <footer className="site-footer"><a className="footer-mark" href="#top">D<span>/</span></a><p>Thought into something real.</p><span>© DAVIX 2026</span><a href="#top" className="back-top">RETURN TO TOP ↑</a></footer>
    </main>
  )
}
