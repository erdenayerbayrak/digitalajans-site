import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

function renderTestimonialsPage(): void {
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
                <a class="nav-link" href="contact.html">İletişim</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="faq.html">S.S.S.</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="hero-section py-5 mt-5" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <div class="container text-center py-5">
          <h1 class="display-4 fw-bold mb-4" style="animation: fadeInUp 1s ease;">
            <i class="fas fa-comments me-3"></i>MÜŞTERİ YORUMLARI
          </h1>
          <p class="lead" style="animation: fadeInUp 1s ease 0.2s both;">
            Memnun müşterilerimizin deneyimlerini keşfedin
          </p>
        </div>
      </section>

      <!-- Statistics Section -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-3 col-sm-6 mb-4">
              <div class="statistic-card p-4 rounded shadow-sm h-100 bg-white">
                <i class="fas fa-star text-warning fa-3x mb-3"></i>
                <h3 class="fw-bold text-primary">4.9/5</h3>
                <p class="text-muted">Ortalama Puan</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
              <div class="statistic-card p-4 rounded shadow-sm h-100 bg-white">
                <i class="fas fa-users text-success fa-3x mb-3"></i>
                <h3 class="fw-bold text-primary">200+</h3>
                <p class="text-muted">Memnun Müşteri</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
              <div class="statistic-card p-4 rounded shadow-sm h-100 bg-white">
                <i class="fas fa-project-diagram text-info fa-3x mb-3"></i>
                <h3 class="fw-bold text-primary">300+</h3>
                <p class="text-muted">Tamamlanan Proje</p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 mb-4">
              <div class="statistic-card p-4 rounded shadow-sm h-100 bg-white">
                <i class="fas fa-clock text-warning fa-3x mb-3"></i>
                <h3 class="fw-bold text-primary">24 Saat</h3>
                <p class="text-muted">Destek Süresi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Grid -->
      <section class="py-5">
        <div class="container">
          <div class="row">
            
            <!-- Testimonial 1 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.1s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Ahmet Yılmaz</h5>
                    <p class="text-muted mb-0">Restoran Sahibi</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "Restoranımız için yapılan web sitesi harika oldu. Sipariş sistemi sayesinde satışlarımız %40 arttı. Dijital Ajans ekibi gerçekten profesyonel."
                </p>
                <small class="text-muted">2 hafta önce</small>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.2s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Ayşe Demir</h5>
                    <p class="text-muted mb-0">E-ticaret Girişimci</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "E-ticaret sitemizi kurdukları ilk ayda hedeflediğimiz satış rakamlarına ulaştık. Hem tasarım hem de teknik altyapı mükemmel."
                </p>
                <small class="text-muted">1 ay önce</small>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.3s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Mehmet Kaya</h5>
                    <p class="text-muted mb-0">Berber Salonu</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "Sosyal medya yönetimi sayesinde müşteri sayımız ikiye katlandı. Instagram ve Facebook hesaplarımız artık çok aktif ve etkili."
                </p>
                <small class="text-muted">3 hafta önce</small>
              </div>
            </div>

            <!-- Testimonial 4 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.4s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Fatma Özkan</h5>
                    <p class="text-muted mb-0">Güzellik Salonu</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "Logo tasarımı ve kurumsal kimlik çalışması harika oldu. Müşterilerim artık bizi daha kolay hatırlıyor ve öneriyorlar."
                </p>
                <small class="text-muted">2 ay önce</small>
              </div>
            </div>

            <!-- Testimonial 5 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.5s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Osman Çelik</h5>
                    <p class="text-muted mb-0">Teknoloji Firması</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "Mobil uygulama geliştirme projemizde süreç boyunca her adımda yanımızda oldular. Zamanında ve bütçe dahilinde teslim ettiler."
                </p>
                <small class="text-muted">1 hafta önce</small>
              </div>
            </div>

            <!-- Testimonial 6 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.6s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Zeynep Aydın</h5>
                    <p class="text-muted mb-0">Emlak Danışmanı</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="far fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "SEO çalışması sayesinde Google'da ilk sıralara çıktık. Organik trafikimiz 3 kat arttı ve yeni müşteri kazanımımız hızlandı."
                </p>
                <small class="text-muted">1 ay önce</small>
              </div>
            </div>

            <!-- Testimonial 7 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.7s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Ali Korkmaz</h5>
                    <p class="text-muted mb-0">Kafe Sahibi</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "QR menü sistemi müşterilerimiz tarafından çok beğenildi. Hem hijyenik hem de pratik. Sipariş alma süreci çok hızlandı."
                </p>
                <small class="text-muted">3 hafta önce</small>
              </div>
            </div>

            <!-- Testimonial 8 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.8s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Elif Tan</h5>
                    <p class="text-muted mb-0">Moda Tasarımcısı</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "Portfolyo sitemde tasarımlarımı sergilemek için mükemmel bir platform oluşturdular. Müşteriler artık işlerimi daha kolay görüyor."
                </p>
                <small class="text-muted">2 hafta önce</small>
              </div>
            </div>

            <!-- Testimonial 9 -->
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-card p-4 rounded shadow-sm h-100 bg-white" style="animation: fadeInUp 1s ease 0.9s both;">
                <div class="d-flex align-items-center mb-3">
                  <img src="https://via.placeholder.com/60" alt="Müşteri" class="rounded-circle me-3" style="width: 60px; height: 60px;">
                  <div>
                    <h5 class="mb-1 fw-bold">Hasan Ural</h5>
                    <p class="text-muted mb-0">Spor Salonu</p>
                    <div class="text-warning">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                  </div>
                </div>
                <p class="text-muted mb-3">
                  "Üyelik sistemi ve online rezervasyon özelliği sayesinde işletmemizi daha verimli yönetiyoruz. Müşteri memnuniyeti arttı."
                </p>
                <small class="text-muted">1 ay önce</small>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-5 bg-primary text-white">
        <div class="container text-center">
          <h2 class="display-6 fw-bold mb-4">Siz de Memnun Müşterilerimize Katılın!</h2>
          <p class="lead mb-4">Projenizi bizimle gerçekleştirin ve başarı hikayenizin bir parçası olalım.</p>
          <a href="contact.html" class="btn btn-light btn-lg px-5 py-3 rounded-pill">
            <i class="fas fa-rocket me-2"></i>Hemen İletişime Geçin
          </a>
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
                <i class="fas fa-rocket me-2"></i>DİJİTAL AJANS
              </h5>
              <p class="text-muted">
                Dijital dünyada başarıya giden yolda güvenilir ortağınız. 
                Modern çözümlerle işinizi büyütüyoruz.
              </p>
            </div>
            <div class="col-md-4 mb-4">
              <h5 class="fw-bold mb-3">İletişim</h5>
              <p class="text-muted mb-1">
                <i class="fas fa-phone me-2"></i>0505 071 1808
              </p>
              <p class="text-muted mb-1">
                <i class="fas fa-envelope me-2"></i>info@dijitalajans.com
              </p>
              <p class="text-muted">
                <i class="fas fa-map-marker-alt me-2"></i>İstanbul, Türkiye
              </p>
            </div>
            <div class="col-md-4 mb-4">
              <h5 class="fw-bold mb-3">Sosyal Medya</h5>
              <div class="d-flex gap-3">
                <a href="#" class="text-light">
                  <i class="fab fa-facebook fa-2x"></i>
                </a>
                <a href="#" class="text-light">
                  <i class="fab fa-instagram fa-2x"></i>
                </a>
                <a href="#" class="text-light">
                  <i class="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="#" class="text-light">
                  <i class="fab fa-twitter fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="text-center">
            <p class="mb-0 text-muted">
              © 2024 Dijital Ajans. Tüm hakları saklıdır. ❤️ ile yapıldı.
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

        .testimonial-card {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }

        .statistic-card {
          transition: all 0.3s ease;
        }

        .statistic-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important;
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
      </style>
    `;
  }

  // Add scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target as HTMLElement;
        element.style.animationDelay = '0s';
        element.style.animationFillMode = 'both';
      }
    });

// Add CSS styles
const style = document.createElement('style');
style.textContent = `
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
`;
document.head.appendChild(style);
}, observerOptions);

  // Observe testimonial cards
  document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
  });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderTestimonialsPage();
}); 