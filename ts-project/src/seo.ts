export class SEOManager {
  private pageData: PageData;

  constructor(pageData: PageData) {
    this.pageData = pageData;
    this.initSEO();
  }

  private initSEO(): void {
    this.setMetaTags();
    this.setStructuredData();
    this.initAnalytics();
    this.optimizeImages();
    this.initPerformanceTracking();
  }

  private setMetaTags(): void {
    // Title
    document.title = this.pageData.title;

    // Meta description
    this.setMetaTag('description', this.pageData.description);

    // Open Graph tags
    this.setMetaTag('og:title', this.pageData.title, 'property');
    this.setMetaTag('og:description', this.pageData.description, 'property');
    this.setMetaTag('og:type', 'website', 'property');
    this.setMetaTag('og:url', window.location.href, 'property');
    this.setMetaTag('og:image', this.pageData.image || '/assets/og-image.jpg', 'property');

    // Twitter Card tags
    this.setMetaTag('twitter:card', 'summary_large_image');
    this.setMetaTag('twitter:title', this.pageData.title);
    this.setMetaTag('twitter:description', this.pageData.description);
    this.setMetaTag('twitter:image', this.pageData.image || '/assets/og-image.jpg');

    // Keywords
    if (this.pageData.keywords) {
      this.setMetaTag('keywords', this.pageData.keywords.join(', '));
    }

    // Canonical URL
    this.setCanonicalUrl(window.location.href);

    // Robots
    this.setMetaTag('robots', 'index, follow');
  }

  private setMetaTag(name: string, content: string, attribute: string = 'name'): void {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    
    meta.content = content;
  }

  private setCanonicalUrl(url: string): void {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    
    canonical.href = url;
  }

  private setStructuredData(): void {
    const structuredData: any = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Digital Marketing Agency",
      "url": window.location.origin,
      "logo": window.location.origin + "/assets/logo.png",
      "description": this.pageData.description,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "TR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+90-XXX-XXX-XXXX",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://facebook.com/youragency",
        "https://twitter.com/youragency",
        "https://instagram.com/youragency",
        "https://linkedin.com/company/youragency"
      ]
    };

    // Add service-specific structured data
    if (this.pageData.type === 'service') {
      structuredData["@type"] = "Service";
      structuredData["serviceType"] = this.pageData.title;
    }

    this.addStructuredData(structuredData);
  }

  private addStructuredData(data: any): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  private initAnalytics(): void {
    // Google Analytics 4
    if (this.pageData.analytics?.ga4) {
      this.loadGA4(this.pageData.analytics.ga4);
    }

    // Facebook Pixel
    if (this.pageData.analytics?.facebook) {
      this.loadFacebookPixel(this.pageData.analytics.facebook);
    }

    // Custom event tracking
    this.initEventTracking();
  }

  private loadGA4(measurementId: string): void {
    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize GA4
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId);
  }

  private loadFacebookPixel(pixelId: string): void {
    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

    (window as any).fbq('init', pixelId);
    (window as any).fbq('track', 'PageView');
  }

  private initEventTracking(): void {
    // Track button clicks
    document.addEventListener('click', (e) => {
      const button = (e.target as Element)?.closest('button, .btn-primary-custom, .btn-secondary-custom');
      if (button) {
        this.trackEvent('button_click', {
          button_text: button.textContent?.trim(),
          button_class: button.className,
          page: window.location.pathname
        });
      }
    });

    // Track form submissions
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      this.trackEvent('form_submit', {
        form_id: form.id,
        page: window.location.pathname
      });
    });

    // Track scroll depth
    this.initScrollTracking();
  }

  private initScrollTracking(): void {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90];
    const tracked = new Set();

    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      maxScroll = Math.max(maxScroll, scrollPercent);

      thresholds.forEach(threshold => {
        if (maxScroll >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          this.trackEvent('scroll_depth', {
            depth: threshold,
            page: window.location.pathname
          });
        }
      });
    });
  }

  private trackEvent(eventName: string, parameters: any): void {
    // GA4 event tracking
    if ((window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }

    // Facebook Pixel event tracking
    if ((window as any).fbq) {
      (window as any).fbq('track', 'CustomEvent', { event_name: eventName, ...parameters });
    }

    // Console log for debugging
    console.log('Event tracked:', eventName, parameters);
  }

  private optimizeImages(): void {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add loading animation to images
    const allImages = document.querySelectorAll('img');
    allImages.forEach(img => {
      if (!img.complete) {
        img.addEventListener('load', () => {
          img.classList.add('image-loaded');
        });
      } else {
        img.classList.add('image-loaded');
      }
    });
  }

  private initPerformanceTracking(): void {
    // Web Vitals tracking
    if ('web-vital' in window) {
      this.trackWebVitals();
    } else {
      // Web Vitals would be loaded here if available
      console.log('Web Vitals tracking would be initialized here');
    }

    // Performance observer
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.trackEvent('page_load_time', {
              load_time: Math.round(navEntry.loadEventEnd - navEntry.fetchStart),
              dom_content_loaded: Math.round(navEntry.domContentLoadedEventEnd - navEntry.fetchStart)
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
    }
  }

  private trackWebVitals(): void {
    // This would be implemented if web-vitals library is available
    console.log('Web Vitals tracking initialized');
  }

  // Analytics tracking is handled through trackEvent method
}

interface PageData {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  type?: 'website' | 'service' | 'blog' | 'contact';
  analytics?: {
    ga4?: string;
    facebook?: string;
  };
}

// Page-specific SEO configurations
export const pageConfigs: Record<string, PageData> = {
  '/': {
    title: 'Dijital Pazarlama Ajansı | Yaratıcı Çözümler',
    description: 'Yaratıcı ve sonuç odaklı dijital pazarlama çözümleri sunan lider ajans. Web tasarım, SEO, Google Ads ve sosyal medya yönetimi ile markanızı zirveye taşıyın.',
    keywords: ['dijital pazarlama', 'seo', 'web tasarım', 'google ads', 'sosyal medya yönetimi'],
    type: 'website'
  },
  '/services': {
    title: 'Hizmetlerimiz | Dijital Pazarlama Çözümleri',
    description: 'Web tasarım, SEO, Google Ads, sosyal medya yönetimi ve daha fazlası. Markanız için kapsamlı dijital pazarlama hizmetleri.',
    keywords: ['dijital pazarlama hizmetleri', 'web tasarım', 'seo hizmeti', 'google ads yönetimi'],
    type: 'service'
  },
  '/what-we-do': {
    title: 'Neler Yapıyoruz | Uzmanlık Alanlarımız',
    description: 'E-ticaret çözümlerinden kurumsal web sitelerine, SEO optimizasyonundan sosyal medya yönetimine kadar geniş hizmet yelpazesi.',
    keywords: ['e-ticaret', 'kurumsal web', 'seo optimizasyon', 'sosyal medya'],
    type: 'service'
  },
  '/contact': {
    title: 'İletişim | Ücretsiz Danışmanlık',
    description: 'Projenizi görüşmek için bizimle iletişime geçin. Ücretsiz danışmanlık ve profesyonel çözümler için hemen arayın.',
    keywords: ['iletişim', 'ücretsiz danışmanlık', 'teklif al'],
    type: 'contact'
  }
};

// Initialize SEO
export const initSEO = () => {
  const path = window.location.pathname;
  const config = pageConfigs[path] || pageConfigs['/'];
  
  // Add analytics IDs here
  config.analytics = {
    ga4: 'G-XXXXXXXXXX', // Replace with your GA4 ID
    facebook: 'XXXXXXXXXX' // Replace with your Facebook Pixel ID
  };
  
  new SEOManager(config);
}; 