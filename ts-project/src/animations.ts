// Modern Animation Utilities
export class AnimationController {
  private observer: IntersectionObserver | null = null;
  private counterAnimations: Map<Element, boolean> = new Map();

  constructor() {
    this.initScrollAnimations();
    this.initMicroInteractions();
    this.initScrollProgress();
    this.initParallax();
    this.initPageTransitions();
  }

  // Scroll-triggered animations - Optimized
  private initScrollAnimations(): void {
    // Check if animations should be reduced on mobile
    const shouldReduceAnimations = window.innerWidth < 768 || 
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Only trigger counter animations if not reducing motion
            if (entry.target.classList.contains('counter-number') && !shouldReduceAnimations) {
              this.animateCounter(entry.target as HTMLElement);
            }
            
            // Unobserve after animation to improve performance
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: shouldReduceAnimations ? 0.1 : 0.2,
        rootMargin: shouldReduceAnimations ? '100px' : '50px'
      }
    );

    // Observe all animation targets
    const targets = document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in, .counter-number');
    targets.forEach(target => this.observer?.observe(target));
  }

  // Counter animations for statistics
  private animateCounter(element: HTMLElement): void {
    if (this.counterAnimations.get(element)) return;
    this.counterAnimations.set(element, true);

    const target = parseInt(element.getAttribute('data-target') || '0');
    const duration = parseInt(element.getAttribute('data-duration') || '2000');
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(target * easeOutQuart);
      
      element.textContent = this.formatNumber(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = this.formatNumber(target);
      }
    };

    requestAnimationFrame(animate);
  }

  // Format numbers with commas
  private formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  // Micro-interactions for buttons and cards
  private initMicroInteractions(): void {
    // Ripple effect for buttons
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('btn-ripple') || target.closest('.btn-ripple')) {
        this.createRipple(e, target.closest('.btn-ripple') as HTMLElement || target);
      }
    });

    // Card hover effects
    const cards = document.querySelectorAll('.service-card, .testimonial-card, .blog-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('card-hover');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('card-hover');
      });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Create ripple effect
  private createRipple(event: MouseEvent, element: HTMLElement): void {
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple 0.6s linear;
      left: ${x}px;
      top: ${y}px;
      width: ${size}px;
      height: ${size}px;
      pointer-events: none;
    `;

    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }

  // Scroll progress bar
  public initScrollProgress(): void {
    const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      progressBar.style.width = Math.min(scrollPercent, 100) + '%';
    });
  }

  // Parallax effects
  private initParallax(): void {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length === 0) return;

    // Check if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    });
  }

  // Page transitions
  private initPageTransitions(): void {
    // Fade in on page load
    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
    });

    // Handle navigation transitions
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = (link as HTMLAnchorElement).getAttribute('href');
        if (href && href.endsWith('.html')) {
          e.preventDefault();
          this.performPageTransition(href);
        }
      });
    });
  }

  private performPageTransition(url: string): void {
    document.body.classList.add('page-transition');
    
    setTimeout(() => {
      window.location.href = url;
    }, 300);
  }

  // Cleanup method
  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.counterAnimations.clear();
  }
}

// Initialize animations when DOM is ready
export function initAnimations(): void {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new AnimationController();
    });
  } else {
    new AnimationController();
  }
}

// CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .card-hover {
    transform: translateY(-10px) !important;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1) !important;
  }
  
  .page-transition {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  body.loaded {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
`;
document.head.appendChild(style); 