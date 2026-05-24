import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RevealService {
  observe(elements: NodeListOf<Element> | Element[]) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    elements.forEach(el => observer.observe(el));
    return observer;
  }
}
