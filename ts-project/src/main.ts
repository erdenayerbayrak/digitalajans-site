import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { initializePage } from './app';
import { initAnimations } from './animations';
import { initForms } from './components/FormValidator';
import { initSEO } from './seo';
import { initPerformanceOptimizations } from './performance';

function renderServices(): string {
  return `
    <section id="services" class="services-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Dijital Hizmetlerimiz</h2>
                    <p class="section-subtitle">İşletmenizi dijitalde büyütmek için sunduğumuz ana hizmetler.</p>
                </div>
            </div>
            <div class="row g-4 justify-content-center">
                <!-- 1. Web Tasarım & Geliştirme -->
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-laptop-code"></i>
                          </div>
                          <h3>Web Tasarım & Geliştirme</h3>
                          <p>Modern, mobil uyumlu ve kullanıcı dostu web siteleri tasarlıyoruz.</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal1">Daha Fazla Bilgi</button>
                        </div>
                    </div>
                </div>
                
                <!-- 2. Yazılım ve Uygulama Geliştirme -->
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-code"></i>
                          </div>
                          <h3>Yazılım & Uygulama Geliştirme</h3>
                          <p>İhtiyaçlarınıza özel mobil ve web uygulamaları geliştiriyoruz.</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal9">Daha Fazla Bilgi</button>
                        </div>
                    </div>
                </div>
                
                <!-- 3. Sosyal Medya Yönetimi -->
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-hashtag"></i>
                          </div>
                          <h3>Sosyal Medya Yönetimi</h3>
                          <p>Marka bilinirliğinizi artırın ve hedef kitlenizle etkileşim kurun.</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal4">Daha Fazla Bilgi</button>
                        </div>
                    </div>
                </div>
                
                <!-- 4. Grafik ve Logo Tasarım -->
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-palette"></i>
                          </div>
                          <h3>Grafik ve Logo Tasarım</h3>
                          <p>Markanızın kimliğini yansıtan özgün logo ve grafik tasarımları.</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal5">Daha Fazla Bilgi</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Daha Fazla Hizmet Linki -->
            <div class="row mt-5">
                <div class="col-12 text-center">
                    <div class="more-services-box p-4 bg-light rounded">
                        <h4 class="mb-3"><i class="fas fa-plus-circle text-primary me-2"></i>Daha Fazla Hizmetimiz Var!</h4>
                        <p class="text-muted mb-3">SEO Optimizasyonu, Google Ads, E-ticaret, QR Menü ve Reklam Danışmanlığı hizmetlerimizi görmek ister misiniz?</p>
                        <a href="services.html" class="btn btn-primary btn-lg">
                            <i class="fas fa-eye me-2"></i>Tüm Hizmetlerimizi Görüntüle
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
}

function renderHomePage(): void {
  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = `
      ${Header()}
      ${Hero()}
      ${renderServices()}
      ${WhatWeDo()}
      ${Testimonials()}
      ${Blog()}
      ${Faq()}
      ${Contact()}
      ${Footer()}
      ${Modals()}
    `;
  }
}

// Initialize the page with the specific render function
document.addEventListener('DOMContentLoaded', () => {
  initializePage(renderHomePage);
  
  // Initialize performance optimizations first
  initPerformanceOptimizations();
  
  // Initialize other systems with staggered loading
  requestAnimationFrame(() => {
    initSEO();
    
    setTimeout(() => {
      initAnimations();
    }, 50);
    
    setTimeout(() => {
      initForms();
    }, 100);
  });
});

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

declare global {
  interface Window {
    showBlogContent: (id: string) => void;
  }
}

// These functions are now defined in app.ts - removed duplicates

// Contact form initialization moved to app.ts

// All animation and interaction functions moved to app.ts

// Utility functions moved to app.ts to avoid duplication

initializeBlogContentToggle(); 