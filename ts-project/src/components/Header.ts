import { t, setLang, getLang } from '../language';

export default function Header(): string {
  
  const handleLanguageToggle = () => {
    const newLang = getLang() === 'tr' ? 'en' : 'tr';
    setLang(newLang);
  };

  // Event listener needs to be attached outside the template string
  // We'll use a script tag or attach it in app.ts
  window.handleLanguageToggle = handleLanguageToggle;
  
  return `
    <header class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div class="container">
        <a class="navbar-brand fw-bold" href="index.html">
          <i class="fas fa-rocket me-2"></i>DİJİTAL AJANS
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" href="index.html">${t('nav_home')}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">Hakkımızda</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="services.html">${t('nav_services')}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">Referanslar</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog.html">${t('nav_blog')}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">${t('nav_contact')}</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="faq.html">S.S.S.</a>
            </li>
          </ul>
          <div class="ms-3">
              <button onclick="handleLanguageToggle()" class="btn btn-outline-light btn-sm">
                  <i class="fas fa-globe me-1"></i>${getLang().toUpperCase()}
              </button>
          </div>
        </div>
      </div>
    </header>
  `;
} 