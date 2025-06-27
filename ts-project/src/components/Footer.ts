import { t } from '../language';

export default function Footer(): string {
  return `
    <!-- Scroll Progress Bar -->
    <div class="scroll-progress"></div>
    
    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/905050711808?text=Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
       target="_blank" 
       class="whatsapp-float" 
       title="WhatsApp ile İletişim">
      <i class="fab fa-whatsapp"></i>
    </a>
    
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="row">
            <div class="col-md-4">
              <div class="footer-section">
                <h4 class="navbar-brand">Dijital Ajans</h4>
                <p>${t('footer_description')}</p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-section">
                <h4>${t('footer_quick_links')}</h4>
                <ul>
                  <li><a href="index.html">${t('nav_home')}</a></li>
                  <li><a href="services.html">${t('nav_services')}</a></li>
                  <li><a href="portfolio.html">${t('nav_portfolio')}</a></li>
                  <li><a href="blog.html">${t('nav_blog')}</a></li>
                </ul>
              </div>
            </div>
            <div class="col-md-4">
              <div class="footer-section">
                <h4>${t('footer_contact')}</h4>
                <p><i class="fas fa-map-marker-alt"></i> İstanbul, Türkiye</p>
                <p><i class="fas fa-phone"></i> 0505 071 1808</p>
                <p><i class="fas fa-envelope"></i> info@dijitalajans.com</p>
                <div class="social-links">
                  <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                  <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                  <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                  <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Dijital Ajans. ${t('footer_copyright')}</p>
      </div>
    </footer>
  `;
} 