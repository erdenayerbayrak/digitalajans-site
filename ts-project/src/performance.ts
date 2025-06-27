// Performance Optimization Module
export class PerformanceOptimizer {
  private intersectionObserver: IntersectionObserver | null = null;
  private animationFrameId: number | null = null;

  constructor() {
    this.initOptimizations();
  }

  private initOptimizations(): void {
    this.optimizeAnimations();
    this.lazyLoadImages();
    this.deferNonCriticalCSS();
    this.optimizeScrollEvents();
    this.preloadCriticalResources();
    this.reduceLayoutThrashing();
  }

  // Optimize animations with requestAnimationFrame
  private optimizeAnimations(): void {
    const animatedElements = document.querySelectorAll('.counter-number, .progress, .chart-bar');
    
    // Use single observer for all animated elements
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.scheduleAnimation(entry.target as HTMLElement);
            this.intersectionObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    animatedElements.forEach(el => this.intersectionObserver?.observe(el));
  }

  private scheduleAnimation(element: HTMLElement): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    this.animationFrameId = requestAnimationFrame(() => {
      element.classList.add('animate-in');
      
      // Counter animation optimization
      if (element.classList.contains('counter-number')) {
        this.optimizedCounterAnimation(element);
      }
    });
  }

  private optimizedCounterAnimation(element: HTMLElement): void {
    const target = parseInt(element.dataset.target || '0');
    const duration = 1500; // Reduced duration for better performance
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easeOutQuart for smooth animation
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(target * eased);
      
      element.textContent = target >= 1000 ? `${(current / 1000).toFixed(1)}K+` : `${current}+`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  // Lazy load images with better performance
  private lazyLoadImages(): void {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            
            if (img.dataset.src) {
              // Preload image
              const tempImg = new Image();
              tempImg.onload = () => {
                img.src = img.dataset.src!;
                img.classList.add('image-loaded');
                img.removeAttribute('data-src');
              };
              tempImg.src = img.dataset.src;
            } else {
              img.classList.add('image-loaded');
            }
            
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '100px' }
    );

    document.querySelectorAll('img[data-src], img:not(.image-loaded)').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Defer non-critical CSS
  private deferNonCriticalCSS(): void {
    const nonCriticalCSS = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap'
    ];

    nonCriticalCSS.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    });
  }

  // Optimize scroll events with throttling
  private optimizeScrollEvents(): void {
    let isScrolling = false;
    
    const handleScroll = () => {
      if (!isScrolling) {
        requestAnimationFrame(() => {
          this.updateScrollProgress();
          this.updateNavbarState();
          isScrolling = false;
        });
        isScrolling = true;
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  private updateScrollProgress(): void {
    const progressBar = document.querySelector('.scroll-progress') as HTMLElement;
    if (!progressBar) return;

    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
    
    progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
  }

  private updateNavbarState(): void {
    const navbar = document.querySelector('.navbar-custom');
    if (!navbar) return;

    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Preload critical resources
  private preloadCriticalResources(): void {
    const criticalResources = [
      { href: '/assets/logo.png', as: 'image' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', as: 'style' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }

  // Reduce layout thrashing
  private reduceLayoutThrashing(): void {
    // Use transform instead of changing position properties
    const floatingElements = document.querySelectorAll('.floating-object, .hero-card');
    
    floatingElements.forEach(element => {
      const el = element as HTMLElement;
      el.style.willChange = 'transform';
      
      // Clean up will-change after animation
      setTimeout(() => {
        el.style.willChange = 'auto';
      }, 5000);
    });
  }

  // Debounce utility for better performance
  public static debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  // Throttle utility for scroll events
  public static throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Mobile Performance Optimizations
export class MobileOptimizer {
  private touchStartY: number = 0;
  private touchEndY: number = 0;
  private intersectionObserver: IntersectionObserver | null = null;
  private imageObserver: IntersectionObserver | null = null;

  constructor() {
    this.initMobileOptimizations();
  }

  private initMobileOptimizations(): void {
    this.optimizeTouch();
    this.reduceMobileAnimations();
    this.optimizeViewport();
    this.handleOrientationChange();
    this.improveTapTargets();
    this.optimizeForms();
    this.initLazyContent();
    this.addTouchFeedback();
  }

  private optimizeTouch(): void {
    // Optimize touch events
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    document.addEventListener('touchend', this.handleTouchEnd.bind(this), { passive: true });
    
    // Prevent double-tap zoom on buttons
    const buttons = document.querySelectorAll('button, .btn-primary-custom, .btn-secondary-custom, .nav-link');
    buttons.forEach(button => {
      button.addEventListener('touchend', (e) => {
        e.preventDefault();
        setTimeout(() => {
          (e.target as HTMLElement).click();
        }, 10);
      });
    });
  }

  private improveTapTargets(): void {
    // Ensure minimum 44px touch targets
    const interactive = document.querySelectorAll('button, a, .btn, .nav-link, input, select');
    interactive.forEach(element => {
      const el = element as HTMLElement;
      const style = getComputedStyle(el);
      
      if (parseFloat(style.minHeight) < 44) {
        el.style.minHeight = '44px';
      }
      if (parseFloat(style.minWidth) < 44) {
        el.style.minWidth = '44px';
      }
      
      // Ensure proper flex alignment
      if (el.tagName === 'BUTTON' || el.classList.contains('btn')) {
        el.style.display = 'flex';
        el.style.alignItems = 'center';
        el.style.justifyContent = 'center';
      }
    });
  }

  private optimizeForms(): void {
    // Optimize forms for mobile
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      
      // Prevent zoom on iOS by ensuring font-size >= 16px
      if (parseFloat(getComputedStyle(element).fontSize) < 16) {
        element.style.fontSize = '16px';
      }
      
      // Add appropriate input modes
      const type = element.type || 'text';
      const name = element.name || '';
      
      if (type === 'email') {
        element.setAttribute('inputmode', 'email');
        element.setAttribute('autocomplete', 'email');
      } else if (type === 'tel' || name.includes('phone') || name.includes('tel')) {
        element.setAttribute('inputmode', 'tel');
        element.setAttribute('autocomplete', 'tel');
      } else if (name.includes('name')) {
        element.setAttribute('autocomplete', 'name');
      }
    });
  }

  private initLazyContent(): void {
    // Lazy load non-critical content
    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Load deferred content
          if (element.dataset.content) {
            element.innerHTML = element.dataset.content;
            element.removeAttribute('data-content');
          }
          
          // Trigger animations
          element.classList.add('mobile-loaded');
          this.intersectionObserver?.unobserve(element);
        }
      });
    }, { 
      rootMargin: '50px',
      threshold: 0.1
    });

    // Observe sections for lazy loading
    document.querySelectorAll('.lazy-content, section').forEach(section => {
      this.intersectionObserver?.observe(section);
    });
  }

  private addTouchFeedback(): void {
    // Add visual feedback for touch interactions
    const touchElements = document.querySelectorAll('.btn, .nav-link, .card, .service-card, .testimonial-card');
    
    touchElements.forEach(element => {
      element.addEventListener('touchstart', () => {
        element.classList.add('touch-active');
      }, { passive: true });
      
      element.addEventListener('touchend', () => {
        setTimeout(() => {
          element.classList.remove('touch-active');
        }, 200);
      }, { passive: true });
      
      element.addEventListener('touchcancel', () => {
        element.classList.remove('touch-active');
      }, { passive: true });
    });
  }

  private handleTouchStart(e: TouchEvent): void {
    this.touchStartY = e.touches[0].clientY;
  }

  private handleTouchEnd(e: TouchEvent): void {
    this.touchEndY = e.changedTouches[0].clientY;
    
    // Implement custom swipe gestures if needed
    const swipeDistance = this.touchStartY - this.touchEndY;
    
    if (Math.abs(swipeDistance) > 50) {
      // Handle swipe gestures
      if (swipeDistance > 0) {
        // Swipe up - could hide navbar or load more content
        this.handleSwipeUp();
      } else {
        // Swipe down - could show navbar or refresh
        this.handleSwipeDown();
      }
    }
  }

  private handleSwipeUp(): void {
    // Optional: Hide navbar on swipe up
    const navbar = document.querySelector('.navbar');
    if (navbar && window.scrollY > 100) {
      navbar.classList.add('navbar-hidden');
      setTimeout(() => {
        navbar.classList.remove('navbar-hidden');
      }, 2000);
    }
  }

  private handleSwipeDown(): void {
    // Optional: Pull to refresh or show navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.remove('navbar-hidden');
    }
  }

  private reduceMobileAnimations(): void {
    // Reduce animations on mobile for better performance
    if (window.innerWidth < 768) {
      const style = document.createElement('style');
      style.textContent = `
        * {
          animation-duration: 0.3s !important;
          transition-duration: 0.3s !important;
        }
        .hero-card {
          animation: none !important;
        }
        .floating-object {
          animation-duration: 2s !important;
        }
      `;
      document.head.appendChild(style);
    }
  }

  private optimizeViewport(): void {
    // Dynamic viewport height for mobile
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVH();
    window.addEventListener('resize', PerformanceOptimizer.throttle(setVH, 100));
  }

  private handleOrientationChange(): void {
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        this.optimizeViewport();
      }, 100);
    });
  }
}

// Initialize optimizations
export const initPerformanceOptimizations = () => {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new PerformanceOptimizer();
      new MobileOptimizer();
    });
  } else {
    new PerformanceOptimizer();
    new MobileOptimizer();
  }
}; 