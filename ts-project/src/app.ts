import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/main.css';
import { getLang, setLang } from './language';

// This file will contain all the shared logic for initializing pages.

declare global {
  interface Window {
    showBlogContent: (id: string) => void;
    handleLanguageToggle: () => void;
  }
}

export function initializePage(renderFunction: () => void): void {
  const currentLang = getLang();
  setLang(currentLang);
  document.documentElement.lang = currentLang;

  const rerender = () => {
    renderFunction();
    initializeCommonScripts();
  };

  // Listen for language changes to rerender the page
  document.addEventListener('languageChange', rerender);

  // Initial render
  rerender();
}

function initializeCommonScripts() {
  initializeBlogContentToggle();
  initializeRippleEffect();
  initializeNavbar();
  initializeAnimations();
  initializeServiceFilters();
  initializeContactForm();
  initializeCounters();
  initializeScrollAnimations();
  initializeBackToTop();
  initializeCookieConsent();
}

function initializeBlogContentToggle() {
  window.showBlogContent = (id: string) => {
    const content = document.getElementById(`${id}-content`);
    const button = (event?.target as HTMLElement);
    
    if (content) {
      if (content.classList.contains('d-none')) {
        content.classList.remove('d-none');
        if(button) button.textContent = 'Daha Az Oku';
      } else {
        content.classList.add('d-none');
        if(button) button.textContent = 'Devamını Oku';
      }
    }
  }
}

export function initializeNavbar(): void {
  const navbar = document.querySelector('.navbar-custom');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  const pagePath = window.location.pathname;

  navLinks.forEach(link => {
    const linkPath = (link as HTMLAnchorElement).getAttribute('href');
    // Simple path comparison. For index.html, it could be '/' or '/index.html'.
    if (linkPath === pagePath || (pagePath === '/' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

function initializeAnimations() {
  const addHoverEffect = (selector: string) => {
    document.querySelectorAll(selector).forEach(element => {
      const el = element as HTMLElement;
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-5px) scale(1.02)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'translateY(0) scale(1)';
      });
    });
  };

  addHoverEffect('.service-card');
  addHoverEffect('.service-item');
  addHoverEffect('.testimonial-card');
  addHoverEffect('.blog-card');
  addHoverEffect('.team-card');
}

function initializeServiceFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const serviceItems = document.querySelectorAll<HTMLElement>('.service-item');
  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function (this: HTMLElement) {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const filterValue = this.getAttribute('data-filter');

      serviceItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.8)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

function initializeContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (this: HTMLFormElement, e: Event) {
      e.preventDefault();
      const formData = new FormData(this);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');

      if (!name || !email || !message) {
        showNotification('Lütfen tüm zorunlu alanları doldurun.', 'danger');
        return;
      }
      if (!isValidEmail(email as string)) {
        showNotification('Lütfen geçerli bir e-posta adresi girin.', 'danger');
        return;
      }

      showNotification('Mesajınız başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.', 'success');
      this.reset();
    });
  }
}

function initializeCounters() {
  const counters = document.querySelectorAll<HTMLElement>('.stat-number');
  if(counters.length === 0) return;

  const animateCounter = (element: HTMLElement) => {
    const target = parseInt(element.getAttribute('data-count') || '0', 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        element.textContent = target.toString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toString();
      }
    }, 16);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => animateCounter(counter));
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  
  const heroSection = document.getElementById('home');
  if(heroSection) {
      observer.observe(heroSection);
  } else {
      counters.forEach(counter => animateCounter(counter));
  }
}

function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToAnimate = document.querySelectorAll('.fade-in');
  elementsToAnimate.forEach(element => observer.observe(element));
}

function initializeBackToTop() {
  const backToTopButton = document.querySelector<HTMLElement>('.back-to-top');
  if (!backToTopButton) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function initializeCookieConsent() {
  const cookieConsent = document.querySelector<HTMLElement>('.cookie-consent');
  if (!cookieConsent) return;

  const acceptButton = cookieConsent.querySelector('.cookie-btn.accept');
  const declineButton = cookieConsent.querySelector('.cookie-btn.decline');

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      cookieConsent.classList.add('visible');
    }, 2000);
  }

  acceptButton?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieConsent.classList.remove('visible');
  });

  declineButton?.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieConsent.classList.remove('visible');
  });
}

function initializeRippleEffect() {
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e: Event) {
        if(!(e instanceof MouseEvent)) return;

        const btn = e.currentTarget as HTMLElement;
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        btn.appendChild(ripple);
        
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        setTimeout(() => ripple.remove(), 1000);
    });
  });
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message: string, type: 'success' | 'danger') {
  document.querySelectorAll('.notification').forEach(n => n.remove());

  const notification = document.createElement('div');
  notification.className = `notification alert alert-${type} position-fixed`;
  notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 300px;';
  notification.innerHTML = `
    <div class="d-flex align-items-center">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'} me-2"></i>
      <span>${message}</span>
      <button type="button" class="btn-close ms-auto" aria-label="Close"></button>
    </div>
  `;
  document.body.appendChild(notification);

  notification.querySelector('.btn-close')?.addEventListener('click', () => notification.remove());
  setTimeout(() => notification.remove(), 5000);
} 