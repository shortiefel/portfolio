import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <!-- Animated grid background -->
      <div class="hero-grid"></div>

      <!-- Floating particles -->
      <div class="particles">
        <span *ngFor="let p of particles" class="particle"
              [style.left.%]="p.x" [style.top.%]="p.y"
              [style.animation-duration.s]="p.dur"
              [style.animation-delay.s]="p.delay"
              [style.width.px]="p.size" [style.height.px]="p.size">
        </span>
      </div>

      <div class="hero-content container">
        <div class="hero-intro reveal" style="transition-delay:0.1s">
          <span class="mono greeting">Hello, World. I'm</span>
        </div>

        <h1 class="hero-name reveal" style="transition-delay:0.2s">
          Felicia<br><span class="name-last">Tan<span class="dot">.</span></span>
        </h1>

        <h2 class="hero-tagline reveal" style="transition-delay:0.35s">
          I develop things to
          <span class="typewriter">{{ currentWord }}<span class="caret" [class.blink]="caretBlink">|</span></span>
        </h2>

        <p class="hero-desc reveal" style="transition-delay:0.5s">
          Software developer & game engine programmer based in Singapore.
          Turning ideas into interactive experiences.
        </p>

        <div class="hero-actions reveal" style="transition-delay:0.65s">
          <a href="#projects" class="btn-primary">View My Work</a>
          <a href="#contact" class="btn-ghost">Get In Touch</a>
        </div>

        <div class="hero-socials reveal" style="transition-delay:0.8s">
          <a href="https://github.com/shortiefel" target="_blank" rel="noopener" class="social-link" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/weilingfelicia/" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <div class="scroll-line"></div>
        <span class="mono scroll-text">scroll</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    /* Grid background */
    .hero-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%);
      opacity: 0.3;
    }

    /* Red glow orb */
    .hero::before {
      content: '';
      position: absolute;
      top: 20%;
      right: -10%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(198,1,31,0.08) 0%, transparent 70%);
      pointer-events: none;
    }

    /* Particles */
    .particles {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .particle {
      position: absolute;
      background: var(--red);
      border-radius: 50%;
      opacity: 0;
      animation: float-up linear infinite;
    }

    @keyframes float-up {
      0%   { opacity: 0; transform: translateY(0) scale(0); }
      10%  { opacity: 0.6; transform: translateY(-10px) scale(1); }
      90%  { opacity: 0.2; }
      100% { opacity: 0; transform: translateY(-120px) scale(0.5); }
    }

    .hero-content {
      position: relative;
      z-index: 2;
      padding-top: 100px;
    }

    .greeting {
      font-family: var(--font-mono);
      font-size: 14px;
      color: var(--red);
      letter-spacing: 0.1em;
    }

    .hero-intro { margin-bottom: 16px; }

    .hero-name {
      font-size: clamp(4rem, 10vw, 8rem);
      font-weight: 800;
      color: var(--white);
      letter-spacing: -0.03em;
      line-height: 0.95;
      margin-bottom: 32px;
    }

    .name-last { color: var(--text); }

    .hero-tagline {
      font-family: var(--font-display);
      font-size: clamp(1.1rem, 2.5vw, 1.5rem);
      font-weight: 500;
      color: var(--text-muted);
      margin-bottom: 24px;
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .typewriter {
      color: var(--white);
      font-weight: 600;
    }

    .caret {
      color: var(--red);
      font-weight: 300;
      &.blink { animation: blink 1s step-end infinite; }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .hero-desc {
      max-width: 480px;
      color: var(--text-muted);
      font-size: 15px;
      line-height: 1.8;
      margin-bottom: 48px;
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
      margin-bottom: 48px;
    }

    .btn-primary {
      font-family: var(--font-mono);
      font-size: 13px;
      background: var(--red);
      color: var(--white);
      padding: 14px 32px;
      border-radius: var(--radius);
      letter-spacing: 0.05em;
      transition: background var(--transition), transform var(--transition), box-shadow var(--transition);

      &:hover {
        background: #e0001f;
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(198,1,31,0.3);
      }
    }

    .btn-ghost {
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--text-muted);
      border: 1px solid var(--border-light);
      padding: 14px 32px;
      border-radius: var(--radius);
      letter-spacing: 0.05em;
      transition: border-color var(--transition), color var(--transition);

      &:hover { border-color: var(--text-muted); color: var(--text); }
    }

    .hero-socials {
      display: flex;
      gap: 20px;
    }

    .social-link {
      color: var(--text-muted);
      transition: color var(--transition), transform var(--transition);

      &:hover { color: var(--red); transform: translateY(-3px); }
    }

    /* Scroll indicator */
    .scroll-indicator {
      position: absolute;
      bottom: 40px;
      right: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      animation: fade-in 1s ease 1.5s both;

      @media (max-width: 768px) { display: none; }
    }

    .scroll-line {
      width: 1px;
      height: 48px;
      background: linear-gradient(to bottom, var(--red), transparent);
      animation: scroll-pulse 2s ease infinite;
    }

    @keyframes scroll-pulse {
      0%, 100% { opacity: 1; transform: scaleY(1); }
      50% { opacity: 0.4; transform: scaleY(0.7); }
    }

    .scroll-text {
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--text-faint);
      letter-spacing: 0.15em;
      writing-mode: vertical-rl;
    }

    @keyframes fade-in {
      from { opacity: 0; } to { opacity: 1; }
    }

    /* Reveal on load */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      animation: reveal-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes reveal-in {
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  words = ['simplify your workflow.', 'build the future.', 'craft game worlds.', 'ship great products.'];
  currentWord = '';
  caretBlink = false;
  particles: { x: number; y: number; dur: number; delay: number; size: number }[] = [];

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit() {
    // Generate particles
    this.particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      dur: 6 + Math.random() * 8,
      delay: -Math.random() * 10,
      size: 1 + Math.random() * 2,
    }));

    this.type();
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }

  private type() {
    const word = this.words[this.wordIndex];
    const speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting) {
      this.currentWord = word.substring(0, this.charIndex + 1);
      this.charIndex++;
      if (this.charIndex === word.length) {
        this.caretBlink = true;
        this.timer = setTimeout(() => { this.isDeleting = true; this.caretBlink = false; this.type(); }, 2000);
        return;
      }
    } else {
      this.currentWord = word.substring(0, this.charIndex - 1);
      this.charIndex--;
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
      }
    }
    this.timer = setTimeout(() => this.type(), speed);
  }
}
