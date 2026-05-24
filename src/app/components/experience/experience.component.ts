import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <p class="section-label">Experience</p>
        <h2 class="section-title reveal">Where I've<br>worked<span class="dot">.</span></h2>

        <div class="exp-tabs reveal">
          <div class="tab-nav">
            <button class="tab-btn" *ngFor="let company of companies; let i = index"
                    [class.active]="activeTab === i"
                    (click)="activeTab = i">
              {{ company.name }}
            </button>
          </div>

          <div class="tab-content" *ngIf="companies[activeTab] as company">
            <div class="company-duration mono">{{ company.totalDuration }}</div>

            <div class="role-block" *ngFor="let role of company.roles; let last = last">
              <div class="role-header">
                <div class="role-left">
                  <h3 class="exp-role">{{ role.title }}</h3>
                  <span class="role-meta mono">{{ role.type }} · {{ role.period }}</span>
                </div>
              </div>
              <ul class="exp-bullets">
                <li *ngFor="let bullet of role.bullets">
                  <span class="bullet-arrow">▸</span>
                  {{ bullet }}
                </li>
              </ul>
              <div class="role-divider" *ngIf="!last"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .exp-tabs {
      display: grid;
      grid-template-columns: 200px 1fr;
      gap: 0;
      max-width: 860px;

      @media (max-width: 640px) {
        grid-template-columns: 1fr;
      }
    }

    .tab-nav {
      display: flex;
      flex-direction: column;
      border-right: 1px solid var(--border);

      @media (max-width: 640px) {
        flex-direction: row;
        overflow-x: auto;
        border-right: none;
        border-bottom: 1px solid var(--border);
      }
    }

    .tab-btn {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--text-muted);
      background: transparent;
      border: none;
      border-left: 2px solid transparent;
      padding: 14px 20px;
      text-align: left;
      cursor: pointer;
      transition: color var(--transition), border-color var(--transition), background var(--transition);
      white-space: nowrap;

      &:hover { color: var(--text); background: var(--surface); }

      &.active {
        color: var(--red);
        border-left-color: var(--red);
        background: var(--red-glow-sm);
      }

      @media (max-width: 640px) {
        border-left: none;
        border-bottom: 2px solid transparent;
        &.active { border-bottom-color: var(--red); border-left-color: transparent; }
      }
    }

    .tab-content {
      padding: 8px 32px 32px;

      @media (max-width: 640px) { padding: 24px 0 0; }
    }

    .company-duration {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-faint);
      margin-bottom: 24px;
      letter-spacing: 0.05em;
    }

    .role-block { padding: 4px 0; }

    .role-header {
      margin-bottom: 12px;
    }

    .exp-role {
      font-family: var(--font-display);
      font-size: 16px;
      font-weight: 700;
      color: var(--white);
      margin-bottom: 4px;
    }

    .role-meta {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--red);
      letter-spacing: 0.03em;
    }

    .exp-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 0;

      li {
        display: flex;
        gap: 12px;
        font-size: 14px;
        color: var(--text-muted);
        line-height: 1.7;
      }
    }

    .bullet-arrow {
      color: var(--red);
      flex-shrink: 0;
      margin-top: 2px;
      font-size: 12px;
    }

    .role-divider {
      width: 100%;
      height: 1px;
      background: var(--border);
      margin: 24px 0;
    }
  `]
})
export class ExperienceComponent implements AfterViewInit {
  activeTab = 0;

  companies = [
    {
      name: 'DBS Bank',
      totalDuration: 'Hybrid · Singapore',
      roles: [
        {
          title: 'Specialist, Graduate Associate — SEED, T&O',
          type: 'Full-time',
          period: 'Jul 2024 — Present',
          bullets: [
            'Part of the DBS SEED Program (2 years), trained as a front-end developer building cutting-edge technology for consumers.',
            'Developing and maintaining front-end applications using Angular and HTML as core technologies.',
            'Continuously upskilling across the Technology & Operations division.',
          ]
        },
        {
          title: 'Software Developer',
          type: 'Contract',
          period: 'Apr 2024 — Jun 2024',
          bullets: [
            'Extended contract opportunity before the SEED program commenced, taking on expanded development responsibilities.',
            'Developed new application modules independently, including Generative AI-powered sites.',
            'Worked with Java and Jira alongside the broader development team.',
          ]
        },
        {
          title: 'Project Manager & Front-End Developer',
          type: 'Internship (Extended)',
          period: 'Aug 2023 — Apr 2024',
          bullets: [
            'Extended internship enhancing technical capabilities while learning on the job.',
            'Assisted with the yearly budgeting process across the department.',
            'Developed front-end features for an internal application, deepening Angular skills in a production environment.',
          ]
        },
        {
          title: 'Project Manager & Front-End Developer',
          type: 'Internship · Young SEEDer',
          period: 'May 2023 — Jul 2023',
          bullets: [
            'Young SEEDer Internship in Treasury & Marketing Sales — learned finance budgeting and application bug defect processes.',
            'Led regional meetings, gathered user requirements, and communicated enhancement needs to the development team.',
            'Shadowed a SEEDer and learned Angular to assist in project development using HTML, Angular, PrimeNG and PrimeFlex.',
          ]
        },
      ]
    },
    {
      name: 'Edelo Software',
      totalDuration: 'On-site · Singapore',
      roles: [
        {
          title: 'Web Development Intern',
          type: 'Internship',
          period: 'Mar 2021 — Aug 2021',
          bullets: [
            'Developed web pages for various clients to fulfil business objectives.',
            'Maintained front-end and back-end of client websites across multiple projects.',
            'Collaborated closely with clients to understand requirements and deliver solutions.',
          ]
        },
      ]
    },
    {
      name: 'MCI Group',
      totalDuration: 'On-site · Singapore',
      roles: [
        {
          title: 'Program Coordinator Intern',
          type: 'Internship',
          period: 'Mar 2019 — Sep 2019',
          bullets: [
            'Maintained up-to-date and accurate documentation across ongoing programs.',
            'Handled client communications and requests via email professionally.',
            'Assisted in event preparation and logistics coordination.',
          ]
        },
      ]
    },
  ];

  constructor(private el: ElementRef, private reveal: RevealService) {}

  ngAfterViewInit() {
    this.reveal.observe(this.el.nativeElement.querySelectorAll('.reveal'));
  }
}