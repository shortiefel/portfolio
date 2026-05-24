import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="section">
      <div class="container">
        <p class="section-label">Projects</p>
        <h2 class="section-title reveal">Things I've<br>built<span class="dot">.</span></h2>

        <!-- Featured projects -->
        <div class="featured-grid">
          <div class="project-card featured reveal" *ngFor="let p of featured; let i = index"
               [style.transition-delay.ms]="i * 100">
            <div class="card-top">
              <div class="card-icon-row">
                <span class="folder-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M3 7a2 2 0 0 1 2-2h3.586a1 1 0 0 1 .707.293L10.707 6.7A1 1 0 0 0 11.414 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/>
                  </svg>
                </span>
                <div class="card-links">
                  <a *ngIf="p.youtube" [href]="p.youtube" target="_blank" rel="noopener" class="ext-link" aria-label="YouTube demo">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <h3 class="card-title">{{ p.name }}</h3>
              <span class="card-type mono">{{ p.type }}</span>
            </div>
            <p class="card-desc">{{ p.desc }}</p>
            <div class="card-stack">
              <span class="stack-tag" *ngFor="let t of p.stack">{{ t }}</span>
            </div>
          </div>
        </div>

        <!-- Other projects -->
        <div class="other-title reveal">
          <span class="mono" style="color: var(--text-muted); font-size:13px;">Other noteworthy projects</span>
        </div>
        <div class="other-grid">
          <div class="project-card other reveal" *ngFor="let p of other; let i = index"
               [style.transition-delay.ms]="i * 80">
            <h3 class="card-title small">{{ p.name }}</h3>
            <p class="card-desc sm">{{ p.desc }}</p>
            <div class="card-stack">
              <span class="stack-tag" *ngFor="let t of p.stack">{{ t }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Featured grid */
    .featured-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 64px;
    }

    .other-title { margin-bottom: 24px; }

    .other-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 16px;
    }

    /* Card base */
    .project-card {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: var(--red);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform var(--transition);
      }

      &:hover {
        border-color: var(--border-light);
        transform: translateY(-6px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);

        &::before { transform: scaleX(1); }
      }

      &.other {
        padding: 24px;
        gap: 8px;
      }
    }

    .card-top { display: flex; flex-direction: column; gap: 16px; }

    .card-icon-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .folder-icon { color: var(--red); opacity: 0.8; }

    .ext-link {
      color: var(--text-muted);
      transition: color var(--transition), transform var(--transition);
      &:hover { color: var(--red); transform: translate(2px, -2px); }
    }

    .card-title {
      font-family: var(--font-display);
      font-size: 18px;
      font-weight: 700;
      color: var(--white);
      line-height: 1.2;

      &.small { font-size: 15px; margin-bottom: 0; }
    }

    .card-type {
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--red);
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    .card-desc {
      font-size: 14px;
      color: var(--text-muted);
      line-height: 1.7;
      flex: 1;

      &.sm { font-size: 13px; }
    }

    .card-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: auto;
    }

    .stack-tag {
      font-family: var(--font-mono);
      font-size: 10px;
      color: var(--text-muted);
      letter-spacing: 0.05em;

      &:not(:last-child)::after {
        content: ' ·';
        color: var(--text-faint);
      }
    }
  `]
})
export class ProjectsComponent implements AfterViewInit {
  featured = [
    {
      name: 'The Protector',
      type: '3D Puzzle Game · SE5&6',
      desc: 'A 3D puzzle game with speech recognition built using a custom Aurora Engine. I served as gameplay programmer, UI designer, and assisted with CMUSphinx speech recognition integration.',
      stack: ['C++', 'C#', 'CMUSphinx', 'Aurora Engine'],
      youtube: 'https://www.youtube.com/watch?v=SZ-Vv0x3M40',
    },
    {
      name: 'Dream Land',
      type: 'Strategy Simulation · SE3&4',
      desc: 'A city-building strategy simulation game built with a custom 2D Dream Engine. Constructed roads for a developing country. I was producer and audio programmer using FMOD.',
      stack: ['C++', 'C#', 'FMOD', 'Dream Engine'],
      youtube: 'https://youtu.be/gqboPi2EAiE?si=yMzndi2OhfBrExwb',
    },
    {
      name: 'Catch The Fruits',
      type: 'Mobile Game · Cloud & Mobile',
      desc: 'A 2D casual mobile game where players catch fruits to score points while avoiding bombs. Built for Android as part of the Mobile and Cloud Computing module.',
      stack: ['Kotlin', 'Android'],
      youtube: 'https://www.youtube.com/watch?v=nQvyLPtswsI',
    },
    {
      name: "I Don't Wanna Do My Homework",
      desc: '2D puzzle platformer built for SE2. A fun, relatable game for all ages — produced and led the team.',
      stack: ['C', 'C++'],
      youtube: 'https://www.youtube.com/watch?v=eh_1W1ZgrMk',
    },
  ];

  other = [
    {
      name: 'Zero Degree',
      desc: 'Puzzle game built using CProcessing architecture. Produced and led the team through SE1.',
      stack: ['C'],
    },
    {
      name: 'Chow Cute',
      desc: 'E-commerce and marketing website for a dog cafe built during the lockdown using Shopify and Strikingly.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Shopify'],
    },
    {
      name: 'Build On, Singapore 2019',
      desc: 'AWS + GovTech + NUS Hackathon — built an application to predict the likelihood of a person becoming ill.',
      stack: ['C#', 'AWS'],
    },
    {
      name: 'SAP Challenge',
      desc: 'Healthcare challenge solving medical personnel location tracking while preventing disease spread.',
      stack: ['SAP IoT', 'Kotlin', 'HTML'],
    },
  ];

  constructor(private el: ElementRef, private reveal: RevealService) { }

  ngAfterViewInit() {
    this.reveal.observe(this.el.nativeElement.querySelectorAll('.reveal'));
  }
}
