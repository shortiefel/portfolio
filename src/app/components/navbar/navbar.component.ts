import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar" [class.scrolled]="scrolled">
      <div class="nav-inner">
        <a href="#hero" class="logo">
          <span class="logo-text">ft</span><span class="dot">.</span>
        </a>

        <ul class="nav-links">
          <li *ngFor="let item of navItems; let i = index">
            <a [href]="'#' + item.id" class="nav-link">
              <span class="nav-num mono">0{{ i + 1 }}.</span>
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 24px 48px;
      transition: padding var(--transition), background var(--transition), border-color var(--transition);
      border-bottom: 1px solid transparent;

      &.scrolled {
        padding: 16px 48px;
        background: rgba(10, 10, 10, 0.92);
        backdrop-filter: blur(16px);
        border-bottom-color: var(--border);
      }

      @media (max-width: 768px) {
        padding: 20px 24px;
        &.scrolled { padding: 14px 24px; }
      }
    }

    .nav-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 48px;
    }

    .logo {
      font-family: var(--font-display);
      font-size: 20px;
      font-weight: 800;
      color: var(--white);
      letter-spacing: -0.02em;
      margin-right: auto;
      transition: color var(--transition);

      .logo-text { color: var(--white); }
      .dot { color: var(--red); }

      &:hover .logo-text { color: var(--red); }
    }

    .nav-links {
      display: flex;
      gap: 32px;
      list-style: none;

      @media (max-width: 768px) { display: none; }
    }

    .nav-link {
      font-size: 13px;
      font-weight: 400;
      color: var(--text-muted);
      transition: color var(--transition);
      display: flex;
      align-items: center;
      gap: 6px;

      &:hover { color: var(--text); }
    }

    .nav-num {
      font-family: var(--font-mono);
      font-size: 11px;
      color: var(--red);
    }

    .resume-btn {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--red);
      border: 1px solid var(--red);
      padding: 8px 20px;
      border-radius: var(--radius);
      transition: background var(--transition), color var(--transition);
      letter-spacing: 0.05em;
      white-space: nowrap;

      &:hover {
        background: var(--red-glow);
        color: var(--white);
      }
    }
  `]
})
export class NavbarComponent {
  scrolled = false;

  navItems = [
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'education',  label: 'Education' },
    // { id: 'experience', label: 'Experience' },
    { id: 'projects',   label: 'Projects' },
    { id: 'contact',    label: 'Contact' },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled = window.scrollY > 60; }
}
