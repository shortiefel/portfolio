import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="section">
      <div class="container">
        <p class="section-label">Education</p>
        <h2 class="section-title reveal">My academic<br>journey<span class="dot">.</span></h2>

        <div class="timeline">
          <div class="timeline-item reveal" *ngFor="let edu of education; let i = index; let last = last"
               [style.transition-delay.ms]="i * 120">
            <div class="timeline-left">
              <div class="timeline-dot">
                <span class="dot-inner"></span>
              </div>
              <div class="timeline-line" *ngIf="!last"></div>
            </div>

            <div class="timeline-content">
              <div class="edu-header">
                <span class="edu-period mono">{{ edu.period }}</span>
              </div>
              <h3 class="edu-degree">{{ edu.degree }}</h3>
              <p class="edu-school">{{ edu.school }}</p>
              <div class="edu-modules">
                <span class="module-chip" *ngFor="let mod of edu.modules">{{ mod }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 0;
      max-width: 800px;
    }

    .timeline-item {
      display: grid;
      grid-template-columns: 48px 1fr;
      gap: 28px;
    }

    .timeline-left {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .timeline-dot {
      width: 36px;
      height: 36px;
      border: 1px solid var(--border-light);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background: var(--bg-2);
      position: relative;
      transition: border-color var(--transition);

      .timeline-item:hover & { border-color: var(--red-dim); }
    }

    .dot-inner {
      width: 8px;
      height: 8px;
      background: var(--red);
      border-radius: 50%;
    }

    .timeline-line {
      flex: 1;
      width: 1px;
      background: var(--border);
      margin: 4px 0;
    }

    .timeline-content {
      padding-bottom: 56px;
      padding-top: 6px;
    }

    .edu-header {
      margin-bottom: 8px;
    }

    .edu-period {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--red);
      letter-spacing: 0.05em;
    }

    .edu-degree {
      font-family: var(--font-display);
      font-size: 17px;
      font-weight: 700;
      color: var(--white);
      line-height: 1.3;
      margin-bottom: 6px;
    }

    .edu-school {
      font-size: 14px;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .edu-modules {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }

    .module-chip {
      font-size: 11px;
      font-family: var(--font-mono);
      color: var(--text-faint);
      border: 1px solid var(--border);
      padding: 3px 10px;
      border-radius: 2px;
      transition: color var(--transition), border-color var(--transition);

      .timeline-item:hover & {
        color: var(--text-muted);
        border-color: var(--border-light);
      }
    }
  `]
})
export class EducationComponent implements AfterViewInit {
  education = [
    {
      period: 'Jun 2020 — May 2024',
      degree: 'B.Sc. (Hons) Computer Science in Interactive Media & Game Development',
      school: 'Singapore Institute of Technology, DigiPen',
      modules: ['High-Level Programming', 'Data Structures', 'AI for Games', 'Machine Learning', 'Mobile & Cloud Computing']
    },
    {
      period: 'Apr 2017 — Apr 2020',
      degree: 'Diploma in Information Technology',
      school: 'Ngee Ann Polytechnic',
      modules: ['Cloud Architecture', 'Cloud Applications', 'Virtualisation', 'ERP', 'Programming']
    },
    {
      period: 'Apr 2015 — Apr 2017',
      degree: 'Higher Nitec in Business Information System',
      school: 'Institute of Technical Education (East)',
      modules: ['Networking Technology', 'System Software', 'Database', 'Virtualisation', 'Programming']
    },
  ];

  constructor(private el: ElementRef, private reveal: RevealService) {}

  ngAfterViewInit() {
    this.reveal.observe(this.el.nativeElement.querySelectorAll('.reveal'));
  }
}
