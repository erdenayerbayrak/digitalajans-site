import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

function renderAboutPage(): void {
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
                <a class="nav-link active" href="about.html">Hakkımızda</a>
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
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <h1 class="display-4 fw-bold mb-4" style="animation: fadeInUp 1s ease;">
                Dijital Ajans Hakkımızda
              </h1>
              <p class="lead mb-4" style="animation: fadeInUp 1s ease 0.2s both;">
                İşletmenizin dijital dünyada güçlü bir varlık oluşturması için tasarlanmış, 
                kişiselleştirilmiş çözümler sunan modern bir dijital pazarlama ajansıyız. 
                Markanızın hikayesini dijital platformlarda etkili şekilde anlatıyoruz.
              </p>
              <div class="hero-stats row text-center mt-5" style="animation: fadeInUp 1s ease 0.4s both;">
                <div class="col-md-4 mb-3">
                  <div class="hero-stat-item">
                    <h3 class="fw-bold mb-1">2024</h3>
                    <p class="mb-0">Kuruluş Yılımız</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="hero-stat-item">
                    <h3 class="fw-bold mb-1">KOBİ</h3>
                    <p class="mb-0">Odaklanma Alanımız</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="hero-stat-item">
                    <h3 class="fw-bold mb-1">Modern</h3>
                    <p class="mb-0">Teknoloji Yaklaşımı</p>
                  </div>
                </div>
              </div>
              <a href="#mission" class="btn btn-light btn-lg px-4 mt-4" style="animation: fadeInUp 1s ease 0.6s both;">
                <i class="fas fa-arrow-down me-2"></i>Devamını Keşfet
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Vision Section -->
      <section id="mission" class="py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5">
              <div class="mission-card p-4 h-100 bg-white rounded shadow-sm">
                <div class="text-center mb-4">
                  <div class="mission-icon">
                    <i class="fas fa-bullseye text-primary fa-3x mb-3"></i>
                  </div>
                  <h3 class="fw-bold">Misyonumuz</h3>
                </div>
                <p class="text-muted lead">
                  Küçük ve orta ölçekli işletmelerin dijital dünyada güçlü bir varlık oluşturmasına 
                  yardımcı olmak. Her müşteriye özel, yaratıcı ve sonuç odaklı çözümler sunarak 
                  işlerini bir sonraki seviyeye taşımak.
                </p>
                <div class="mission-points mt-4">
                  <div class="point mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Kişiselleştirilmiş yaklaşım</span>
                  </div>
                  <div class="point mb-2">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Şeffaf iletişim</span>
                  </div>
                  <div class="point">
                    <i class="fas fa-check-circle text-success me-2"></i>
                    <span>Ölçülebilir sonuçlar</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-5">
              <div class="vision-card p-4 h-100 bg-white rounded shadow-sm">
                <div class="text-center mb-4">
                  <div class="vision-icon">
                    <i class="fas fa-eye text-info fa-3x mb-3"></i>
                  </div>
                  <h3 class="fw-bold">Vizyonumuz</h3>
                </div>
                <p class="text-muted lead">
                  Türkiye'de dijital pazarlama alanında güvenilir bir partner olarak tanınmak. 
                  İnovatif çözümler ve sürekli öğrenme yaklaşımıyla sektörde fark yaratan 
                  bir ajans olmak.
                </p>
                <div class="vision-goals mt-4">
                  <div class="goal mb-2">
                    <i class="fas fa-star text-warning me-2"></i>
                    <span>Sektörde öncü olmak</span>
                  </div>
                  <div class="goal mb-2">
                    <i class="fas fa-star text-warning me-2"></i>
                    <span>Sürekli yenilik</span>
                  </div>
                  <div class="goal">
                    <i class="fas fa-star text-warning me-2"></i>
                    <span>Uzun vadeli ortaklıklar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Who Are We Section -->
      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="text-center mb-5">
                <h2 class="fw-bold mb-4">Biz Kimiz?</h2>
                <p class="lead text-muted">
                  Dijital dünyada markanızın potansiyelini ortaya çıkaran yaratıcı ve sonuç odaklı ajansınız.
                </p>
              </div>
              
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="company-info-card p-4 bg-light rounded h-100">
                    <div class="info-icon text-center mb-3">
                      <i class="fas fa-building text-primary fa-3x"></i>
                    </div>
                    <h4 class="fw-bold text-center mb-3">Kuruluşumuz</h4>
                    <p class="text-muted">
                      Dijital Ajans olarak 2024 yılında, dijital pazarlama sektöründe 
                      eksik gördüğümüz kişiselleştirilmiş hizmet anlayışını doldurmak 
                      üzere kurulduk. Modern teknolojiler ve kanıtlanmış stratejilerle 
                      işletmelere değer katmayı hedefliyoruz.
                    </p>
                  </div>
                </div>
                
                <div class="col-lg-6 mb-4">
                  <div class="company-info-card p-4 bg-light rounded h-100">
                    <div class="info-icon text-center mb-3">
                      <i class="fas fa-target text-success fa-3x"></i>
                    </div>
                    <h4 class="fw-bold text-center mb-3">Odak Noktamız</h4>
                    <p class="text-muted">
                      Her müşterinin benzersiz ihtiyaçları olduğuna inanıyoruz. 
                      Bu nedenle standart paketler yerine, işletmenizin özel 
                      gereksinimlerine göre tasarlanmış, kişiselleştirilmiş 
                      dijital çözümler sunuyoruz.
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="row mt-4">
                <div class="col-lg-4 mb-4">
                  <div class="achievement-item text-center p-4 bg-white rounded shadow-sm">
                    <h4 class="text-primary fw-bold mb-2">2024</h4>
                    <p class="text-muted mb-0">Kuruluş Yılı</p>
                  </div>
                </div>
                <div class="col-lg-4 mb-4">
                  <div class="achievement-item text-center p-4 bg-white rounded shadow-sm">
                    <h4 class="text-success fw-bold mb-2">7/24</h4>
                    <p class="text-muted mb-0">Müşteri Desteği</p>
                  </div>
                </div>
                <div class="col-lg-4 mb-4">
                  <div class="achievement-item text-center p-4 bg-white rounded shadow-sm">
                    <h4 class="text-info fw-bold mb-2">%100</h4>
                    <p class="text-muted mb-0">Müşteri Odaklılık</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Values Section -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="text-center mb-5">
            <h2 class="fw-bold mb-3">Değerlerimiz</h2>
            <p class="text-muted lead">Çalışma prensiplerimizi şekillendiren temel değerler</p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="value-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div class="value-icon mb-3">
                  <i class="fas fa-handshake text-primary fa-3x"></i>
                </div>
                <h5 class="fw-bold mb-3">Güvenilirlik</h5>
                <p class="text-muted">
                  Sözümüzün arkasında dururuz. Teslim tarihlerine uygun, şeffaf ve 
                  dürüst bir çalışma anlayışıyla hizmet veriyoruz.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="value-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div class="value-icon mb-3">
                  <i class="fas fa-lightbulb text-warning fa-3x"></i>
                </div>
                <h5 class="fw-bold mb-3">Yaratıcılık</h5>
                <p class="text-muted">
                  Her projeye özgün bakış açısıyla yaklaşır, markanızı rakiplerinden 
                  ayıracak yaratıcı çözümler üretiriz.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="value-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div class="value-icon mb-3">
                  <i class="fas fa-chart-line text-success fa-3x"></i>
                </div>
                <h5 class="fw-bold mb-3">Sonuç Odaklılık</h5>
                <p class="text-muted">
                  Sadece güzel görünmeyi değil, işinize somut katkı sağlayacak, 
                  ölçülebilir sonuçlar elde etmeyi hedefliyoruz.
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="value-card text-center p-4 bg-white rounded shadow-sm h-100">
                <div class="value-icon mb-3">
                  <i class="fas fa-graduation-cap text-info fa-3x"></i>
                </div>
                <h5 class="fw-bold mb-3">Sürekli Öğrenme</h5>
                <p class="text-muted">
                  Dijital dünya hızla değişiyor. Biz de bu değişime ayak uydurmak için 
                  sürekli kendimizi geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="fw-bold mb-4">Neden Bizi Seçmelisiniz?</h2>
              <p class="text-muted lead mb-5">
                Modern bir ajans olarak size sunabileceğimiz benzersiz avantajlar.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="advantage-item d-flex p-4 bg-light rounded">
                <div class="advantage-icon me-3">
                  <i class="fas fa-user-friends text-primary fa-2x"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-2">Kişiselleştirilmiş Yaklaşım</h5>
                  <p class="text-muted mb-0">
                    Her müşterimiz bizim için özeldir. Projenize tam odaklanma ve 
                    kişiselleştirilmiş çözümler sunma garantisi veriyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="advantage-item d-flex p-4 bg-light rounded">
                <div class="advantage-icon me-3">
                  <i class="fas fa-rocket text-success fa-2x"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-2">Çeviklik & Hız</h5>
                  <p class="text-muted mb-0">
                    Büyük bürokrasiler yok. Hızlı karar alma, esnek çalışma anlayışı ve 
                    değişikliklere anında adapte olma yeteneği.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="advantage-item d-flex p-4 bg-light rounded">
                <div class="advantage-icon me-3">
                  <i class="fas fa-dollar-sign text-warning fa-2x"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-2">Rekabetçi Fiyatlandırma</h5>
                  <p class="text-muted mb-0">
                    Kaliteli hizmeti uygun fiyatlarla sunuyoruz. 
                    Modern ve etkili çözümlerle maksimum değer sağlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="advantage-item d-flex p-4 bg-light rounded">
                <div class="advantage-icon me-3">
                  <i class="fas fa-sync-alt text-info fa-2x"></i>
                </div>
                <div>
                  <h5 class="fw-bold mb-2">Güncel Teknoloji</h5>
                  <p class="text-muted mb-0">
                    Sürekli öğrenme ve gelişim halindeyiz. En güncel trendleri, araçları ve 
                    teknikleri projelerimizde kullanıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-5 bg-primary text-white">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h2 class="fw-bold mb-4">Dijital Dönüşüm Yolculuğunuz Başlasın!</h2>
              <p class="lead mb-4">
                İşletmenizin dijital dünyada büyümesi için gereken tüm desteği sağlamaya hazırız. 
                Projelerinizi hayata geçirmek için bugün bizimle iletişime geçin.
              </p>
              <div class="cta-buttons">
                <a href="contact.html" class="btn btn-light btn-lg me-3 mb-2">
                  <i class="fas fa-comment me-2"></i>Ücretsiz Danışmanlık
                </a>
                <a href="tel:+905050711808" class="btn btn-outline-light btn-lg mb-2">
                  <i class="fas fa-phone me-2"></i>Hemen Arayın: 0505 071 1808
                </a>
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
      <footer class="bg-dark text-white py-5">
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

        .mission-card, .vision-card, .value-card {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .mission-card:hover, .vision-card:hover, .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }

        .advantage-item {
          transition: all 0.3s ease;
        }

        .advantage-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .company-info-card {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .company-info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
        }

        .achievement-item {
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .achievement-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .hero-stat-item {
          padding: 1rem;
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          margin: 0 10px;
        }

        .navbar-brand {
          font-size: 1.5rem;
        }

        .hero-section {
          position: relative;
          overflow: hidden;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .nav-link.active {
          background-color: rgba(255,255,255,0.1);
          border-radius: 5px;
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

    // Add entrance animations
    setTimeout(() => {
      const cards = document.querySelectorAll<HTMLElement>('.mission-card, .vision-card, .value-card, .advantage-item');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.style.opacity = '0';
          card.style.transform = 'translateY(30px)';
          card.style.transition = 'all 0.6s ease';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        }, index * 100);
      });
    }, 200);
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderAboutPage();
}); 