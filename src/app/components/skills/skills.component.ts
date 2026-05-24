import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealService } from '../../services/reveal.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="section">
      <div class="container">
        <p class="section-label">Tech Stack</p>
        <h2 class="section-title reveal">What I work<br>with<span class="dot">.</span></h2>

        <div class="skills-grid">
          <div class="skill-group reveal" *ngFor="let group of skillGroups; let i = index"
               [style.transition-delay.ms]="i * 80">
            <h3 class="group-title">
              <span class="group-icon">{{ group.icon }}</span>
              {{ group.title }}
            </h3>
            <div class="chips">
              <span class="skill-chip" *ngFor="let skill of group.skills">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
    }

    .skill-group {
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      padding: 28px;
      transition: border-color var(--transition), transform var(--transition);

      &:hover {
        border-color: var(--border-light);
        transform: translateY(-4px);
      }
    }

    .group-title {
      font-family: var(--font-display);
      font-size: 14px;
      font-weight: 600;
      color: var(--text);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
      letter-spacing: 0.03em;
    }

    .group-icon { font-size: 16px; }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-chip {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--text-muted);
      background: var(--bg-3);
      border: 1px solid var(--border);
      padding: 5px 12px;
      border-radius: 2px;
      transition: color var(--transition), border-color var(--transition), background var(--transition);
      cursor: default;

      &:hover {
        color: var(--red);
        border-color: rgba(198,1,31,0.3);
        background: var(--red-glow-sm);
      }
    }
  `]
})
export class SkillsComponent implements AfterViewInit {
  skillGroups = [
    {
      icon: '⚙️',
      title: 'Systems & Low-Level',
      skills: ['C', 'C++', 'C#', 'Memory Management', 'Game Engines']
    },
    {
      icon: '🌐',
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'TypeScript', 'Java', 'Angular', 'Node.js']
    },
    {
      icon: '📱',
      title: 'Mobile & Cloud',
      skills: ['Kotlin', 'AWS', 'MySQL', 'SAP IoT', 'Cloud Architecture']
    },
    {
      icon: '🧠',
      title: 'AI & Algorithms',
      skills: ['Python', 'Machine Learning', 'AI for Games', 'Data Structures']
    },
    {
      icon: '🎮',
      title: 'Game Development',
      skills: ['CMUSphinx', 'FMOD', 'Custom 2D/3D Engines', 'Unity', 'Game Design']
    },
    {
      icon: '🛠️',
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'SAP', 'Shopify', 'Jira', 'Figma']
    },
  ];

  constructor(private el: ElementRef, private reveal: RevealService) {}

  ngAfterViewInit() {
    this.reveal.observe(this.el.nativeElement.querySelectorAll('.reveal'));
  }
}
