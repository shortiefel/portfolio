import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="section contact-section">
      <div class="container">
        <div class="contact-inner">
          <p class="section-label reveal">Contact</p>
          <h2 class="contact-title reveal">Let's build something<br>together<span class="dot">.</span></h2>
          <p class="contact-desc reveal">
            I'm open to new opportunities — and always up for a good challenge.
            Whether you have a project, a role, or just want to talk tech (or League),
            my inbox is always open.
          </p>

          <a href="mailto:tanweilingfelicia@gmail.com" class="contact-btn reveal">
            Say Hello
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>

          <div class="contact-links reveal">
            <a href="https://github.com/shortiefel" target="_blank" rel="noopener" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/weilingfelicia/" target="_blank" rel="noopener" class="contact-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- BG glow -->
      <div class="contact-glow"></div>
    </section>
  `,
  styles: [`
    .contact-section {
      position: relative;
      overflow: hidden;
      text-align: center;
    }

    .contact-glow {
      position: absolute;
      bottom: -100px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      height: 300px;
      background: radial-gradient(ellipse, rgba(198,1,31,0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    .contact-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 600px;
      margin: 0 auto;

      .section-label { justify-content: center; &::before { display: none; } }
    }

    .contact-title {
      font-size: clamp(2rem, 5vw, 3.5rem);
      font-weight: 800;
      color: var(--white);
      line-height: 1.1;
      margin-bottom: 24px;
    }

    .contact-desc {
      color: var(--text-muted);
      font-size: 15px;
      line-height: 1.8;
      max-width: 480px;
      margin-bottom: 48px;
    }

    .contact-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-mono);
      font-size: 14px;
      color: var(--red);
      border: 1px solid var(--red);
      padding: 16px 40px;
      border-radius: var(--radius);
      transition: background var(--transition), color var(--transition), transform var(--transition), box-shadow var(--transition);
      margin-bottom: 48px;

      &:hover {
        background: var(--red);
        color: var(--white);
        transform: translateY(-3px);
        box-shadow: 0 12px 32px rgba(198,1,31,0.25);

        svg { transform: translateX(4px); }
      }

      svg { transition: transform var(--transition); }
    }

    .contact-links {
      display: flex;
      gap: 32px;
    }

    .contact-link {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--text-muted);
      transition: color var(--transition);

      &:hover { color: var(--red); }
    }
  `]
})
export class ContactComponent implements AfterViewInit {
  constructor(private el: ElementRef, private reveal: RevealService) {}

  ngAfterViewInit() {
    this.reveal.observe(this.el.nativeElement.querySelectorAll('.reveal'));
  }
}
