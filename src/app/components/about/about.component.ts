import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="about-grid">
          <div class="about-left">
            <p class="section-label">About Me</p>
            <h2 class="section-title reveal" style="margin-bottom:32px">A little bit<br>about <span class="dot">me</span></h2>
            <div class="about-text reveal">
              <p>
                Hello, I'm Felicia! My journey into development started in 2014 — personalizing my blog
                sparked a love for building things. When gaming entered the picture, so did game development.
              </p>
              <p>
                I graduated from <span class="highlight">Singapore Institute of Technology, DigiPen</span>
                with a degree in Computer Science in Interactive Media & Game Development, where I crafted
                and customized game engines to create captivating games.
              </p>
              <p>
                Off the screen, I'm loud, social, and always down for a good time — certified extrovert.
                You'll find me on the Rift cheering for <span class="highlight t1">T1</span>,
                grinding ranked in <span class="highlight">MLBB</span>, or convincing everyone
                around me to play one more game.
                <span class="mono t1-tag">SKT T1</span>
              </p>
            </div>

          </div>

          <div class="about-right">
            <div class="avatar-block reveal">
              <div class="avatar-frame">
                <div class="avatar-inner">
                  <img src="assets/images/felicia.jpg" alt="Felicia Tan" class="avatar-img" />
                  <div class="avatar-ring"></div>
                  <div class="avatar-ring ring-2"></div>
                </div>
                <span class="corner tl"></span>
                <span class="corner tr"></span>
                <span class="corner bl"></span>
                <span class="corner br"></span>
              </div>

              <div class="stat-cards">
                <div class="stat-card" *ngFor="let stat of stats">
                  <span class="stat-num">{{ stat.num }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      align-items: center;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 48px;
      }
    }

    .about-text {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 32px;

      p {
        color: var(--text-muted);
        font-size: 15px;
        line-height: 1.85;
      }
    }

    .highlight {
      color: var(--text);
      font-weight: 500;

      &.t1 { color: var(--red); font-weight: 700; }
    }

    .t1-tag {
      font-family: var(--font-mono);
      font-size: 11px;
      background: var(--red-glow);
      color: var(--red);
      border: 1px solid rgba(198,1,31,0.2);
      padding: 2px 8px;
      border-radius: 2px;
      margin-left: 4px;
    }

    .download-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-family: var(--font-mono);
      font-size: 13px;
      color: var(--red);
      border: 1px solid var(--red);
      padding: 12px 24px;
      border-radius: var(--radius);
      transition: background var(--transition), color var(--transition), transform var(--transition);
      width: fit-content;

      &:hover {
        background: var(--red);
        color: var(--white);
        transform: translateY(-2px);
      }
    }

    /* Avatar */
    .avatar-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      position: relative;
      z-index: 1;
      border-radius: var(--radius-lg);
    }

    .avatar-frame {
      position: relative;
      width: 240px;
      height: 240px;

      @media (max-width: 768px) { width: 180px; height: 180px; }
    }

    .avatar-inner {
      width: 100%;
      height: 100%;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 30% 30%, var(--red-glow), transparent 60%);
      }
    }

    .avatar-initial {
      font-family: var(--font-display);
      font-size: 56px;
      font-weight: 800;
      color: var(--white);
      position: relative;
      z-index: 1;
      opacity: 0.9;
    }

    .avatar-ring {
      position: absolute;
      width: 110%;
      height: 110%;
      border: 1px solid rgba(198,1,31,0.2);
      border-radius: 50%;
      animation: spin-slow 12s linear infinite;
    }
    .ring-2 {
      width: 125%;
      height: 125%;
      border-color: rgba(198,1,31,0.1);
      animation-direction: reverse;
      animation-duration: 18s;
    }

    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to   { transform: rotate(360deg); }
    }

    /* Corner accents */
    .corner {
      position: absolute;
      width: 14px;
      height: 14px;
      border-color: var(--red);
      border-style: solid;

      &.tl { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
      &.tr { top: -1px; right: -1px; border-width: 2px 2px 0 0; }
      &.bl { bottom: -1px; left: -1px; border-width: 0 0 2px 2px; }
      &.br { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }
    }

    /* Stats */
    .stat-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      width: 100%;
    }

    .stat-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px 12px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      transition: border-color var(--transition);

      &:hover { border-color: var(--red-dim); }
    }

    .stat-num {
      font-family: var(--font-display);
      font-size: 22px;
      font-weight: 800;
      color: var(--red);
    }

    .stat-label {
      font-size: 11px;
      color: var(--text-muted);
      line-height: 1.3;
    }
  `]
})
export class AboutComponent implements AfterViewInit {
  stats = [
    { num: '10+', label: 'Projects Built' },
    { num: '3+', label: 'Years Coding' },
    { num: '9+', label: 'Tech Skills' },
  ];

  constructor(private el: ElementRef, private reveal: RevealService) {}

  ngAfterViewInit() {
    this.reveal.observe(this.el.nativeElement.querySelectorAll('.reveal'));
  }
}
