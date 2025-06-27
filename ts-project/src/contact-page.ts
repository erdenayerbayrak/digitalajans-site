import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

function renderContactPage(): void {
  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = `
      <!-- Header -->
      <header class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div class="container">
          <a class="navbar-brand fw-bold" href="index.html">
            <i class="fas fa-rocket me-2"></i>DİJİTAL AJANS
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Ana Sayfa</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Hakkımızda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="services.html">Hizmetler</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="portfolio.html">Referanslar</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="contact.html">İletişim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="faq.html">S.S.S.</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="hero-section py-5 mt-5" style="background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white;">
        <div class="container text-center py-5">
          <h1 class="display-4 fw-bold mb-4" style="animation: fadeInUp 1s ease;">
            <i class="fas fa-envelope me-3"></i>İLETİŞİM
          </h1>
          <p class="lead" style="animation: fadeInUp 1s ease 0.2s both;">
            Projenizi hayata geçirmek için bizimle iletişime geçin
          </p>
        </div>
      </section>

      <!-- Contact Info Cards -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row text-center mb-5">
            <div class="col-12">
              <h2 class="fw-bold mb-4">Bize Ulaşın</h2>
              <p class="text-muted lead">Size en uygun iletişim yöntemini seçin</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4 mb-4">
              <div class="contact-card p-4 rounded shadow-sm h-100 bg-white text-center">
                <div class="contact-icon mb-3">
                  <i class="fas fa-phone-alt text-primary fa-3x"></i>
                </div>
                <h4 class="fw-bold mb-3">Telefon</h4>
                <p class="text-muted mb-3">Hemen arayın, 7/24 destek</p>
                <a href="tel:+905050711808" class="btn btn-outline-primary">
                  <i class="fas fa-phone me-2"></i>0505 071 1808
                </a>
                <div class="mt-3">
                  <small class="text-muted">Pazartesi - Cuma: 09:00 - 18:00</small><br>
                  <small class="text-muted">Cumartesi: 10:00 - 16:00</small>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="contact-card p-4 rounded shadow-sm h-100 bg-white text-center">
                <div class="contact-icon mb-3">
                  <i class="fas fa-envelope text-success fa-3x"></i>
                </div>
                <h4 class="fw-bold mb-3">E-posta</h4>
                <p class="text-muted mb-3">Detaylı bilgi için yazın</p>
                <a href="mailto:info@dijitalajans.com" class="btn btn-outline-success">
                  <i class="fas fa-envelope me-2"></i>info@dijitalajans.com
                </a>
                <div class="mt-3">
                  <small class="text-muted">24 saat içinde geri dönüş</small><br>
                  <small class="text-muted">Ücretsiz teknik danışmanlık</small>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-4">
              <div class="contact-card p-4 rounded shadow-sm h-100 bg-white text-center">
                <div class="contact-icon mb-3">
                  <i class="fas fa-map-marker-alt text-info fa-3x"></i>
                </div>
                <h4 class="fw-bold mb-3">Adres</h4>
                <p class="text-muted mb-3">Ofisimize bekleriz</p>
                <address class="mb-3">
                  <strong>Dijital Ajans</strong><br>
                  Atatürk Mahallesi<br>
                  Teknoloji Caddesi No: 123<br>
                  34000 Beşiktaş/İstanbul
                </address>
                <div class="mt-3">
                  <small class="text-muted">Ücretsiz park alanı mevcut</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form & Map Section -->
      <section class="py-5">
        <div class="container">
          <div class="row">
            <!-- Contact Form -->
            <div class="col-lg-6 mb-5">
              <div class="contact-form-card p-4 rounded shadow-sm bg-white">
                <h3 class="fw-bold mb-4">
                  <i class="fas fa-paper-plane me-2 text-primary"></i>Proje Teklifi Alın
                </h3>
                <form id="contactForm">
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="firstName" class="form-label">Ad *</label>
                      <input type="text" class="form-control" id="firstName" required>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="lastName" class="form-label">Soyad *</label>
                      <input type="text" class="form-control" id="lastName" required>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-3">
                      <label for="email" class="form-label">E-posta *</label>
                      <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="col-md-6 mb-3">
                      <label for="phone" class="form-label">Telefon</label>
                      <input type="tel" class="form-control" id="phone">
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="company" class="form-label">Şirket/Kurum</label>
                    <input type="text" class="form-control" id="company">
                  </div>
                  <div class="mb-3">
                    <label for="service" class="form-label">İhtiyacınız Olan Hizmet *</label>
                    <select class="form-select" id="service" required>
                      <option value="">Hizmet Seçiniz</option>
                      <option value="web-design">Web Tasarım & Geliştirme</option>
                      <option value="mobile-app">Mobil Uygulama</option>
                      <option value="social-media">Sosyal Medya Yönetimi</option>
                      <option value="seo">SEO & Dijital Pazarlama</option>
                      <option value="graphic-design">Grafik Tasarım</option>
                      <option value="ecommerce">E-ticaret</option>
                      <option value="consulting">Danışmanlık</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="budget" class="form-label">Bütçe Aralığı</label>
                    <select class="form-select" id="budget">
                      <option value="">Bütçe Seçiniz</option>
                      <option value="5000-10000">5.000₺ - 10.000₺</option>
                      <option value="10000-25000">10.000₺ - 25.000₺</option>
                      <option value="25000-50000">25.000₺ - 50.000₺</option>
                      <option value="50000+">50.000₺+</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Proje Detayları *</label>
                    <textarea class="form-control" id="message" rows="5" placeholder="Projeniz hakkında detayları paylaşın..." required></textarea>
                  </div>
                  <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="privacy" required>
                    <label class="form-check-label" for="privacy">
                      <a href="#" class="text-decoration-none">Gizlilik politikasını</a> okudum ve kabul ediyorum. *
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary btn-lg w-100">
                    <i class="fas fa-paper-plane me-2"></i>Teklifimi Gönder
                  </button>
                </form>
              </div>
            </div>

            <!-- Map & Office Info -->
            <div class="col-lg-6 mb-5">
              <div class="map-card p-4 rounded shadow-sm bg-white h-100">
                <h3 class="fw-bold mb-4">
                  <i class="fas fa-map-marked-alt me-2 text-success"></i>Ofis Konumumuz
                </h3>
                
                <!-- Map Placeholder -->
                <div class="map-container mb-4 rounded" style="height: 300px; background: linear-gradient(45deg, #f8f9fa, #e9ecef); display: flex; align-items: center; justify-content: center; border: 2px dashed #dee2e6;">
                  <div class="text-center text-muted">
                    <i class="fas fa-map fa-3x mb-3"></i>
                    <p class="mb-0">Google Maps Entegrasyonu</p>
                    <small>Atatürk Mah. Teknoloji Cad. No:123</small>
                  </div>
                </div>

                <!-- Office Features -->
                <div class="office-features">
                  <h5 class="fw-bold mb-3">Ofis Özellikleri</h5>
                  <div class="row">
                    <div class="col-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <i class="fas fa-parking text-primary me-2"></i>
                        <small>Ücretsiz Park</small>
                      </div>
                    </div>
                    <div class="col-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <i class="fas fa-wifi text-success me-2"></i>
                        <small>Ücretsiz WiFi</small>
                      </div>
                    </div>
                    <div class="col-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <i class="fas fa-coffee text-warning me-2"></i>
                        <small>Ikram Servisi</small>
                      </div>
                    </div>
                    <div class="col-6 mb-3">
                      <div class="feature-item d-flex align-items-center">
                        <i class="fas fa-universal-access text-info me-2"></i>
                        <small>Engelli Erişimi</small>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Transportation -->
                <div class="transportation mt-4">
                  <h5 class="fw-bold mb-3">Ulaşım</h5>
                  <div class="transport-options">
                    <div class="transport-item mb-2">
                      <i class="fas fa-subway text-primary me-2"></i>
                      <small>Levent Metro - 5 dk yürüme</small>
                    </div>
                    <div class="transport-item mb-2">
                      <i class="fas fa-bus text-success me-2"></i>
                      <small>42, 25M, 30 numaralı otobüsler</small>
                    </div>
                    <div class="transport-item mb-2">
                      <i class="fas fa-car text-info me-2"></i>
                      <small>TEM bağlantı yolu - 3 dk</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Social Media & Quick Contact -->
      <section class="py-5 bg-primary text-white">
        <div class="container">
          <div class="row text-center">
            <div class="col-12 mb-4">
              <h2 class="fw-bold mb-3">Sosyal Medyadan Takip Edin</h2>
              <p class="lead">Güncel projelerimizi ve başarı hikayelerimizi kaçırmayın</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 col-6 mb-4">
              <a href="#" class="social-card d-block p-4 rounded text-white text-decoration-none" style="background: rgba(255,255,255,0.1); transition: all 0.3s ease;">
                <i class="fab fa-instagram fa-3x mb-3"></i>
                <h5>Instagram</h5>
                <p class="small mb-0">@dijitalajans</p>
              </a>
            </div>
            <div class="col-md-3 col-6 mb-4">
              <a href="#" class="social-card d-block p-4 rounded text-white text-decoration-none" style="background: rgba(255,255,255,0.1); transition: all 0.3s ease;">
                <i class="fab fa-linkedin fa-3x mb-3"></i>
                <h5>LinkedIn</h5>
                <p class="small mb-0">Dijital Ajans</p>
              </a>
            </div>
            <div class="col-md-3 col-6 mb-4">
              <a href="#" class="social-card d-block p-4 rounded text-white text-decoration-none" style="background: rgba(255,255,255,0.1); transition: all 0.3s ease;">
                <i class="fab fa-facebook fa-3x mb-3"></i>
                <h5>Facebook</h5>
                <p class="small mb-0">DijitalAjans</p>
              </a>
            </div>
            <div class="col-md-3 col-6 mb-4">
              <a href="#" class="social-card d-block p-4 rounded text-white text-decoration-none" style="background: rgba(255,255,255,0.1); transition: all 0.3s ease;">
                <i class="fab fa-twitter fa-3x mb-3"></i>
                <h5>Twitter</h5>
                <p class="small mb-0">@dijitalajans</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="fw-bold text-center mb-5">Sıkça Sorulan Sorular</h2>
              <div class="accordion" id="contactFAQ">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="faq1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                      Proje süresi ne kadar sürer?
                    </button>
                  </h2>
                  <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#contactFAQ">
                    <div class="accordion-body">
                      Proje süresi karmaşıklığına göre değişir. Basit web siteleri 1-2 hafta, karmaşık e-ticaret projeleri 4-8 hafta sürebilir.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="faq2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                      Ödeme planları nasıl çalışır?
                    </button>
                  </h2>
                  <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div class="accordion-body">
                      %50 proje başlangıcında, %50 teslimat sırasında alınır. Büyük projelerde taksitli ödeme seçenekleri mevcuttur.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="faq3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                      Proje sonrası destek var mı?
                    </button>
                  </h2>
                  <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div class="accordion-body">
                      Evet! Tüm projelerimizde 6 ay ücretsiz teknik destek ve 1 yıl güncelleme garantisi sunuyoruz.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="faq4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                      Revizyon hakkım var mı?
                    </button>
                  </h2>
                  <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#contactFAQ">
                    <div class="accordion-body">
                      Tabii ki! Her projede 3 ücretsiz revizyon hakkınız bulunuyor. İlave revizyonlar için ayrıca ücretlendirme yapılır.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WhatsApp Floating Button -->
      <a href="https://wa.me/905050711808?text=Merhaba,%20dijital%20pazarlama%20hizmetleriniz%20hakkında%20bilgi%20almak%20istiyorum." 
         target="_blank" 
         class="whatsapp-float" 
         title="WhatsApp ile İletişim">
        <i class="fab fa-whatsapp"></i>
      </a>

      <!-- Footer -->
      <footer class="bg-dark text-light py-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4">
              <h5 class="fw-bold mb-3">
                <i class="fas fa-rocket me-2"></i>Dijital Ajans
              </h5>
              <p class="text-muted">
                Dijital dünyada markanızı bir adım öne taşıyın. 
                Yaratıcı ve sonuç odaklı çözümlerimizle tanışın.
              </p>
            </div>
            <div class="col-md-4 mb-4">
              <h5 class="fw-bold mb-3">Hızlı Bağlantılar</h5>
              <ul class="list-unstyled">
                <li><a href="index.html" class="text-muted text-decoration-none">• Ana Sayfa</a></li>
                <li><a href="services.html" class="text-muted text-decoration-none">• Hizmetler</a></li>
                <li><a href="portfolio.html" class="text-muted text-decoration-none">• Portföy</a></li>
                <li><a href="blog.html" class="text-muted text-decoration-none">• Blog</a></li>
              </ul>
            </div>
            <div class="col-md-4 mb-4">
              <h5 class="fw-bold mb-3">İletişim</h5>
              <p class="text-muted mb-1">
                <i class="fas fa-map-marker-alt me-2"></i>İstanbul, Türkiye
              </p>
              <p class="text-muted mb-1">
                <i class="fas fa-phone me-2"></i>0505 071 1808
              </p>
              <p class="text-muted mb-3">
                <i class="fas fa-envelope me-2"></i>info@dijitalajans.com
              </p>
              <div class="social-links">
                <a href="#" class="text-muted me-3"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-muted me-3"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-muted me-3"><i class="fab fa-instagram"></i></a>
                <a href="#" class="text-muted"><i class="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="text-center">
            <p class="mb-0 text-muted">
              © 2024 Dijital Ajans. Tüm hakları saklıdır.
            </p>
          </div>
        </div>
      </footer>

      <style>
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-card {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }

        .contact-form-card {
          border: 1px solid #e9ecef;
        }

        .map-card {
          border: 1px solid #e9ecef;
        }

        .social-card:hover {
          background: rgba(255,255,255,0.2) !important;
          transform: translateY(-3px);
        }

        .navbar-brand {
          font-size: 1.5rem;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.2);
          z-index: 1;
        }

        .hero-section .container {
          position: relative;
          z-index: 2;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .nav-link.active {
          background-color: rgba(255,255,255,0.1);
          border-radius: 5px;
        }

        .form-control:focus, .form-select:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }

        .accordion-button:not(.collapsed) {
          background-color: rgba(13, 110, 253, 0.1);
          border-color: rgba(13, 110, 253, 0.2);
        }

        /* WhatsApp Floating Button */
        .whatsapp-float {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background: #25d366;
          color: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .whatsapp-float:hover {
          background: #20ba5a;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }

        /* Footer Styles */
        footer .text-muted {
          color: #ffffff !important;
        }
        
        footer h5 {
          color: #ffffff !important;
        }
        
        footer a {
          color: #cccccc !important;
        }
        
        footer a:hover {
          color: #007bff !important;
        }
        
        .social-links a {
          font-size: 1.2rem;
          transition: all 0.3s ease;
          color: #cccccc !important;
        }

        .social-links a:hover {
          color: #007bff !important;
          transform: translateY(-2px);
        }
      </style>
    `;

    // Form validation and submission
    const form = document.getElementById('contactForm') as HTMLFormElement;
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
        const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const service = (document.getElementById('service') as HTMLSelectElement).value;
        const message = (document.getElementById('message') as HTMLTextAreaElement).value;
        
        // Basic validation
        if (!firstName || !lastName || !email || !service || !message) {
          alert('Lütfen zorunlu alanları doldurun.');
          return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Lütfen geçerli bir e-posta adresi girin.');
          return;
        }
        
        // Success message
        alert('Teşekkürler! Mesajınız başarıyla gönderildi. En kısa sürede size geri dönüş yapacağız.');
        form.reset();
      });
    }
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderContactPage();
}); 