import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AudioLines, Aperture,
  Clapperboard, Instagram, Mail, Menu, MousePointer2, Play,
  Scissors, Sparkles, Volume2, X, Zap
} from "lucide-react";
import "./styles.css";

const insta = "https://www.instagram.com/harshiteditz04?psln=bTIyY2pydTY3NXEx";
const email = "harshitvermagurwan@gmail.com";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] } }
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.div className="scroll-progress" style={{ width: progress }} />
      <div className="cursor-glow" />
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">HV<span>✳</span></span>
          <span className="brand-name">HARSHIT VERMA<small>VIDEO EDITOR</small></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {["About", "Services", "Process", "FAQ"].map((x) =>
            <a key={x} href={`#${x.toLowerCase()}`} onClick={closeMenu}>{x}</a>
          )}
          <a className="nav-cta" href={`mailto:${email}`}>LET'S TALK <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-noise" />
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={reveal}>
            <div className="eyebrow"><span className="live-dot" /> AVAILABLE FOR CREATIVE PROJECTS</div>
            <h1>Making every<br/><span className="outline-word">frame</span> feel<br/>like <span className="gradient-word">something.</span></h1>
            <p className="hero-intro">I'm Harshit Verma — a video editor focused on clean cuts, expressive transitions and sound that brings a story to life.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={`mailto:${email}`}>START A PROJECT <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#about">GET TO KNOW ME <ArrowDownRight size={16}/></a>
            </div>
          </motion.div>

          <motion.div className="hero-art" initial={{ opacity: 0, scale: .82, rotate: 7 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, delay: .2 }}>
            <div className="art-label label-top">VISUAL RHYTHM / 001</div>
            <div className="glass-disc">
              <div className="disc-ring ring-a" />
              <div className="disc-ring ring-b" />
              <div className="disc-core"><Play fill="currentColor" size={35}/></div>
              <div className="disc-cross cross-a" />
              <div className="disc-cross cross-b" />
            </div>
            <div className="floating-card card-cut"><Scissors size={17}/><span>PRECISION CUTS</span></div>
            <div className="floating-card card-sound"><AudioLines size={18}/><span>SOUND DESIGN</span></div>
            <div className="art-label label-bottom">CUT / CREATE / REPEAT</div>
            <div className="art-index">HV—04</div>
          </motion.div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><div><ArrowDownRight size={16}/></div></a>
          <div className="hero-side-note">INDEPENDENT CREATIVE / INDIA</div>
        </section>

        <div className="ticker" aria-label="Creative editing themes">
          <div className="ticker-track">
            {Array.from({length: 2}).map((_, i) => <div className="ticker-line" key={i}>
              <span>STORY FIRST</span><Sparkles/><span>DETAIL MATTERS</span><Aperture/><span>FEEL THE FLOW</span><Zap/><span>EDIT WITH INTENT</span><Clapperboard/>
            </div>)}
          </div>
        </div>

        <section className="about section-pad" id="about">
          <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
            <span className="eyebrow">01 / THE PERSON BEHIND THE TIMELINE</span>
            <h2>Not just clips.<br/><span className="muted">A little more feeling.</span></h2>
          </motion.div>
          <div className="about-grid">
            <motion.div className="about-stamp" initial={{rotate:-12, opacity:0}} whileInView={{rotate:0, opacity:1}} viewport={{once:true}} transition={{duration:.8}}>
              <div className="stamp-inner"><span>THE EDITOR</span><strong>HV</strong><small>CREATIVE MIND<br/>CURIOUS EYE</small></div>
              <div className="stamp-star">✳</div>
            </motion.div>
            <motion.div className="about-text" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
              <p className="large-copy">I’m Harshit — a video editor who enjoys turning raw footage into something clear, engaging and memorable.</p>
              <p>I’m continuously learning, experimenting with new ideas and building my editing style. From the timing of a cut to the smallest sound detail, I believe the little things shape the whole experience.</p>
              <a className="underlined-link" href={insta} target="_blank" rel="noreferrer">FIND ME ON INSTAGRAM <ArrowUpRight size={16}/></a>
            </motion.div>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="section-topline"><span className="eyebrow">02 / WHAT I CAN HELP WITH</span><span className="mono">THE EDITING TOOLKIT</span></div>
          <motion.div className="services-title" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
            <h2>Good editing<br/>is <span className="gradient-word">felt.</span></h2>
            <p>A few of the creative details I can bring into a project. The right approach always depends on the footage and the story.</p>
          </motion.div>
          <div className="service-grid">
            {[
              {n:"01", icon:<Scissors/>, title:"Clean editing", desc:"Thoughtful cuts and pacing that keep the video moving naturally.", tag:"THE FOUNDATION"},
              {n:"02", icon:<Sparkles/>, title:"Transitions", desc:"Smooth transitions and visual touches that support the flow.", tag:"VISUAL FLOW"},
              {n:"03", icon:<Volume2/>, title:"Sound & SFX", desc:"Sound effects and audio details that add energy and atmosphere.", tag:"MAKE IT LAND"},
              {n:"04", icon:<AudioLines/>, title:"Voiceover support", desc:"Comfortable working with voiceovers as part of the edit.", tag:"VOICE + STORY"}
            ].map((s) => <motion.article className="service-card" key={s.n} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
              <div className="service-card-head"><span>{s.n} / 04</span><div>{s.icon}</div></div>
              <h3>{s.title}</h3><p>{s.desc}</p><div className="service-tag">{s.tag}<ArrowUpRight size={14}/></div>
            </motion.article>)}
          </div>
        </section>

        <section className="manifesto section-pad">
          <div className="manifesto-bg">PLAY</div>
          <motion.div className="manifesto-content" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
            <span className="eyebrow">A SMALL CREATIVE PHILOSOPHY</span>
            <h2>Every second<br/>has a <span className="gradient-word">purpose.</span></h2>
            <p>The best edit doesn't need to shout. It knows when to move, when to pause, and when to let the moment speak.</p>
          </motion.div>
          <div className="manifesto-orb"><div className="orb-inner"><Play fill="currentColor"/></div></div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-topline"><span className="eyebrow">03 / HOW A PROJECT FLOWS</span><span className="mono">SIMPLE. COLLABORATIVE. CLEAR.</span></div>
          <h2 className="process-title">From first message<br/>to <span className="muted">final frame.</span></h2>
          <div className="process-list">
            {[
              ["01","The brief","Share your idea, footage, references and what you want the final video to feel like."],
              ["02","The edit","We align on the direction, then the footage is shaped with pacing, transitions and audio details."],
              ["03","Your feedback","You review the edit and share clear notes so the next version gets closer to your vision."],
              ["04","Final delivery","Once everything is approved, the finished video is prepared in the agreed format."]
            ].map((p,i)=><motion.div className="process-row" key={p[0]} variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}>
              <span className="process-num">{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><span className="process-arrow"><ArrowUpRight/></span>
            </motion.div>)}
          </div>
        </section>

        <section className="faq section-pad" id="faq">
          <div className="faq-heading"><span className="eyebrow">04 / QUICK ANSWERS</span><h2>A few things<br/><span className="muted">you might wonder.</span></h2></div>
          <div className="faq-list">
            {[
              ["What kind of editing do you do?","I can help with basic video editing, clean cuts, transitions, sound effects and voiceover-based edits. Share your brief and we can discuss the right direction."],
              ["How do I get started?","Send an email or Instagram message with a short description of your project, your footage and any references you have."],
              ["Can I share a reference video?","Absolutely. References help communicate the pacing, mood or style you're aiming for. They are a guide, not something to copy exactly."],
              ["Do you show client work here?","This website is an introduction and contact point. Editing samples can be discussed and shared directly when available and appropriate."]
            ].map((f,i)=><details className="faq-item" key={i}><summary><span>{f[0]}</span><span className="faq-plus">+</span></summary><p>{f[1]}</p></details>)}
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">05 / HAVE SOMETHING IN MIND?</span>
              <h2>Let's make<br/>it <span className="gradient-word">move.</span></h2>
              <p className="contact-copy">Have a video idea, a project or just want to talk through a concept? Send a message.</p>
            </div>
            <div className="contact-panel">
              <span className="mono">DIRECT CONTACT</span>
              <a href={`mailto:${email}`} className="contact-link"><Mail/><span>{email}</span><ArrowUpRight/></a>
              <a href={insta} target="_blank" rel="noreferrer" className="contact-link"><Instagram/><span>@harshiteditz04</span><ArrowUpRight/></a>
              <div className="contact-note"><span className="live-dot"/> OPEN TO HEARING ABOUT YOUR NEXT IDEA</div>
            </div>
          </div>
          <div className="big-type">LET'S CREATE<span>✳</span></div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home"><span className="brand-mark">HV<span>✳</span></span><span className="brand-name">HARSHIT VERMA<small>VIDEO EDITOR</small></span></a>
        <span className="footer-copy">© {new Date().getFullYear()} HARSHIT VERMA. MADE WITH CREATIVE INTENT.</span>
        <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14}/></a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
