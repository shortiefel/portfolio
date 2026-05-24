import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    // EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  template: `
    <div class="cursor-dot" [style.left.px]="cursorX" [style.top.px]="cursorY"></div>
    <div class="cursor-ring" [class.hovering]="isHovering"
         [style.left.px]="ringX" [style.top.px]="ringY"></div>

    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>

    <footer class="footer">
      <div class="container">
        <span class="footer-text">Designed & Built by <span class="dot">Felicia Tan</span></span>
        <span class="footer-text mono">ft.dev · {{ currentYear }}</span>
      </div>
    </footer>
  `,
  styles: [`
    main { position: relative; }

    .footer {
      border-top: 1px solid var(--border);
      padding: 32px 0;

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 600px) {
          flex-direction: column;
          gap: 8px;
          text-align: center;
        }
      }
    }

    .footer-text {
      font-size: 12px;
      color: var(--text-muted);
      font-family: var(--font-body);

      &.mono {
        font-family: var(--font-mono);
        font-size: 11px;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  cursorX = 0; cursorY = 0;
  ringX = 0; ringY = 0;
  isHovering = false;
  currentYear = new Date().getFullYear();

  private ringTargetX = 0;
  private ringTargetY = 0;

  ngOnInit() {
    // Smooth ring follow
    const animate = () => {
      this.ringX += (this.ringTargetX - this.ringX) * 0.12;
      this.ringY += (this.ringTargetY - this.ringY) * 0.12;
      requestAnimationFrame(animate);
    };
    animate();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.cursorX = e.clientX;
    this.cursorY = e.clientY;
    this.ringTargetX = e.clientX;
    this.ringTargetY = e.clientY;
  }

  @HostListener('mouseover', ['$event'])
  onMouseOver(e: MouseEvent) {
    const el = e.target as HTMLElement;
    this.isHovering = !!(el.closest('a, button, .card, .project-card, .skill-chip'));
  }

  @HostListener('mouseout')
  onMouseOut() { this.isHovering = false; }
}
