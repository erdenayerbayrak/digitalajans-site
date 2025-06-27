import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

import Header from './components/Header';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Modals from './components/Modals';
import { initializePage } from './app';

function renderFaqPage(): void {
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
                <a class="nav-link active" href="faq.html">S.S.S.</a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <!-- Hero Section -->
      <section class="hero-section py-5 mt-5" style="background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%); color: white;">
        <div class="container text-center py-5">
          <h1 class="display-4 fw-bold mb-4" style="animation: fadeInUp 1s ease;">
            <i class="fas fa-question-circle me-3"></i>SIKÇA SORULAN SORULAR
          </h1>
          <p class="lead" style="animation: fadeInUp 1s ease 0.2s both;">
            Dijital hizmetlerimiz hakkında merak ettiklerinizin cevapları
          </p>
        </div>
      </section>

      <!-- Quick Search -->
      <section class="py-4 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="search-box">
                <div class="input-group">
                  <span class="input-group-text">
                    <i class="fas fa-search"></i>
                  </span>
                  <input type="text" class="form-control form-control-lg" id="faqSearch" placeholder="Aradığınız soruyu yazın...">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Categories -->
      <section class="py-4">
        <div class="container">
          <div class="row text-center">
            <div class="col-12">
              <h3 class="fw-bold mb-4">Kategoriler</h3>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <button class="btn btn-outline-primary active category-btn" data-category="all">
                  <i class="fas fa-th-large me-2"></i>Tümü
                </button>
                <button class="btn btn-outline-primary category-btn" data-category="web">
                  <i class="fas fa-laptop-code me-2"></i>Web Tasarım
                </button>
                <button class="btn btn-outline-primary category-btn" data-category="seo">
                  <i class="fas fa-chart-line me-2"></i>SEO
                </button>
                <button class="btn btn-outline-primary category-btn" data-category="ads">
                  <i class="fab fa-google me-2"></i>Google Ads
                </button>
                <button class="btn btn-outline-primary category-btn" data-category="social">
                  <i class="fas fa-hashtag me-2"></i>Sosyal Medya
                </button>
                <button class="btn btn-outline-primary category-btn" data-category="general">
                  <i class="fas fa-info-circle me-2"></i>Genel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Content -->
      <section class="py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="accordion" id="faqAccordion">
                
                <!-- Web Tasarım Soruları -->
                <div class="accordion-item faq-item" data-category="web" style="animation: fadeInUp 1s ease 0.1s both;">
                  <h2 class="accordion-header" id="faq1">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1">
                      <i class="fas fa-laptop-code text-primary me-3"></i>
                      Web sitem ne kadar sürede hazır olur?
                    </button>
                  </h2>
                  <div id="collapse1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <p><strong>Proje kapsamına göre değişen süreler:</strong></p>
                      <ul>
                        <li><strong>Basit Tanıtım Sitesi:</strong> 1-2 hafta</li>
                        <li><strong>Kurumsal Web Sitesi:</strong> 2-4 hafta</li>
                        <li><strong>E-ticaret Sitesi:</strong> 4-8 hafta</li>
                        <li><strong>Özel Yazılım Projeleri:</strong> 8-16 hafta</li>
                      </ul>
                      <p>Süre, içerik hazırlığınız ve geri bildirimlerinizin hızına göre değişebilir. Detaylı zaman çizelgesi proje başlangıcında paylaşılır.</p>
                    </div>
                  </div>
                </div>

                <div class="accordion-item faq-item" data-category="web" style="animation: fadeInUp 1s ease 0.2s both;">
                  <h2 class="accordion-header" id="faq2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2">
                      <i class="fas fa-mobile-alt text-success me-3"></i>
                      Web sitemin mobil uyumlu olduğunu nasıl anlarım?
                    </button>
                  </h2>
                  <div id="collapse2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <p><strong>Mobil uyumluluk kontrol yöntemleri:</strong></p>
                      <ul>
                        <li>Google'ın <strong>Mobile-Friendly Test</strong> aracını kullanın</li>
                        <li>Sitenizi farklı cihazlarda test edin (telefon, tablet)</li>
                        <li>Chrome DevTools ile responsive görünümü kontrol edin</li>
                        <li>Sayfa yükleme hızını mobilde test edin</li>
                      </ul>
                      <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i>
                        Tüm projelerimizde responsive tasarım standart olarak sunulur.
                      </div>
                    </div>
                  </div>
                </div>

                <!-- SEO Soruları -->
                <div class="accordion-item faq-item" data-category="seo" style="animation: fadeInUp 1s ease 0.3s both;">
                  <h2 class="accordion-header" id="faq3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3">
                      <i class="fas fa-chart-line text-warning me-3"></i>
                      SEO çalışmasından ne zaman sonuç alırım?
                    </button>
                  </h2>
                  <div id="collapse3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <p><strong>SEO sonuçları için tahmini süreler:</strong></p>
                      <div class="row">
                        <div class="col-md-6">
                          <h6>İlk Sonuçlar:</h6>
                          <ul>
                            <li>Teknik SEO iyileştirmeleri: 1-2 ay</li>
                            <li>İçerik optimizasyonu: 2-3 ay</li>
                            <li>Yerel SEO: 1-3 ay</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h6>Kayda Değer Sonuçlar:</h6>
                          <ul>
                            <li>Organik trafik artışı: 3-6 ay</li>
                            <li>Anahtar kelime sıralamaları: 4-8 ay</li>
                            <li>Uzun vadeli başarı: 6-12 ay</li>
                          </ul>
                        </div>
                      </div>
                      <div class="alert alert-success">
                        <i class="fas fa-check-circle me-2"></i>
                        Aylık raporlarla ilerlemenizi detaylı şekilde takip edebilirsiniz.
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Google Ads Soruları -->
                <div class="accordion-item faq-item" data-category="ads" style="animation: fadeInUp 1s ease 0.4s both;">
                  <h2 class="accordion-header" id="faq4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4">
                      <i class="fab fa-google text-danger me-3"></i>
                      Google Ads için minimum bütçe ne kadar olmalı?
                    </button>
                  </h2>
                  <div id="collapse4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <p><strong>Sektörel bütçe önerileri:</strong></p>
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Sektör</th>
                              <th>Minimum Aylık Bütçe</th>
                              <th>Önerilen Bütçe</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Yerel İşletmeler</td>
                              <td>1.500₺</td>
                              <td>3.000₺+</td>
                            </tr>
                            <tr>
                              <td>E-ticaret</td>
                              <td>3.000₺</td>
                              <td>8.000₺+</td>
                            </tr>
                            <tr>
                              <td>B2B Hizmetler</td>
                              <td>2.500₺</td>
                              <td>5.000₺+</td>
                            </tr>
                            <tr>
                              <td>Finans/Hukuk</td>
                              <td>5.000₺</td>
                              <td>15.000₺+</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p><em>Not: Bütçe hedef kitlenize ve rekabet seviyesine göre optimize edilir.</em></p>
                    </div>
                  </div>
                </div>

                <!-- Sosyal Medya Soruları -->
                <div class="accordion-item faq-item" data-category="social" style="animation: fadeInUp 1s ease 0.5s both;">
                  <h2 class="accordion-header" id="faq5">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5">
                      <i class="fas fa-hashtag text-info me-3"></i>
                      Sosyal medya yönetimi hangi platformları kapsıyor?
                    </button>
                  </h2>
                  <div id="collapse5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Ana Platformlar:</h6>
                          <ul class="list-unstyled">
                            <li><i class="fab fa-instagram text-gradient me-2"></i> Instagram</li>
                            <li><i class="fab fa-facebook text-primary me-2"></i> Facebook</li>
                            <li><i class="fab fa-linkedin text-info me-2"></i> LinkedIn</li>
                            <li><i class="fab fa-twitter text-info me-2"></i> Twitter</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h6>Ek Hizmetler:</h6>
                          <ul class="list-unstyled">
                            <li><i class="fab fa-youtube text-danger me-2"></i> YouTube (Ek paket)</li>
                            <li><i class="fab fa-pinterest text-danger me-2"></i> Pinterest (Ek paket)</li>
                            <li><i class="fab fa-tiktok text-dark me-2"></i> TikTok (Ek paket)</li>
                          </ul>
                        </div>
                      </div>
                      <p><strong>Hizmet kapsamı:</strong> İçerik üretimi, yayın programı, etkileşim yönetimi, raporlama</p>
                    </div>
                  </div>
                </div>

                <!-- Genel Sorular -->
                <div class="accordion-item faq-item" data-category="general" style="animation: fadeInUp 1s ease 0.6s both;">
                  <h2 class="accordion-header" id="faq6">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6">
                      <i class="fas fa-credit-card text-success me-3"></i>
                      Ödeme koşulları nasıl çalışır?
                    </button>
                  </h2>
                  <div id="collapse6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Proje Ödemeleri:</h6>
                          <ul>
                            <li><strong>%50</strong> Proje başlangıcında</li>
                            <li><strong>%50</strong> Proje tesliminde</li>
                          </ul>
                          <p><em>Büyük projeler için taksitli ödeme seçenekleri mevcuttur.</em></p>
                        </div>
                        <div class="col-md-6">
                          <h6>Aylık Hizmetler:</h6>
                          <ul>
                            <li>Her ayın başında tahsil edilir</li>
                            <li>3 aylık anlaşmalarda %10 indirim</li>
                            <li>12 aylık anlaşmalarda %20 indirim</li>
                          </ul>
                        </div>
                      </div>
                      <div class="alert alert-info">
                        <i class="fas fa-shield-alt me-2"></i>
                        Tüm ödemeleriniz için fatura ve garantili hizmet sunuyoruz.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item faq-item" data-category="general" style="animation: fadeInUp 1s ease 0.7s both;">
                  <h2 class="accordion-header" id="faq7">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7">
                      <i class="fas fa-headset text-primary me-3"></i>
                      Proje sonrası destek hizmeti var mı?
                    </button>
                  </h2>
                  <div id="collapse7" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <h6>Ücretsiz Destek Sürelerimiz:</h6>
                      <ul>
                        <li><strong>Web Siteleri:</strong> 6 ay teknik destek + 1 yıl güncelleme garantisi</li>
                        <li><strong>E-ticaret:</strong> 1 yıl kapsamlı destek</li>
                        <li><strong>Mobil Uygulamalar:</strong> 6 ay teknik destek</li>
                        <li><strong>SEO/SEM:</strong> Sürekli optimizasyon ve raporlama</li>
                      </ul>
                      
                      <h6 class="mt-4">Destek Kanallarımız:</h6>
                      <div class="row">
                        <div class="col-md-6">
                          <ul class="list-unstyled">
                            <li><i class="fas fa-phone text-success me-2"></i> Telefon Desteği</li>
                            <li><i class="fas fa-envelope text-primary me-2"></i> E-posta Desteği</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <ul class="list-unstyled">
                            <li><i class="fab fa-whatsapp text-success me-2"></i> WhatsApp Desteği</li>
                            <li><i class="fas fa-video text-info me-2"></i> Online Toplantı</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div class="alert alert-success">
                        <i class="fas fa-clock me-2"></i>
                        <strong>Yanıt Süresi:</strong> İş günlerinde maksimum 24 saat içinde geri dönüş garantisi
                      </div>
                    </div>
                  </div>
                </div>

                <div class="accordion-item faq-item" data-category="general" style="animation: fadeInUp 1s ease 0.8s both;">
                  <h2 class="accordion-header" id="faq8">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8">
                      <i class="fas fa-edit text-warning me-3"></i>
                      Revizyon hakkım var mı?
                    </button>
                  </h2>
                  <div id="collapse8" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div class="accordion-body">
                      <div class="row">
                        <div class="col-md-6">
                          <h6>Ücretsiz Revizyon Hakları:</h6>
                          <ul>
                            <li><strong>Web Tasarım:</strong> 3 major revizyon</li>
                            <li><strong>Logo Tasarım:</strong> 5 farklı konsept</li>
                            <li><strong>Grafik Tasarım:</strong> 2 revizyon</li>
                            <li><strong>İçerik:</strong> Sınırsız düzeltme</li>
                          </ul>
                        </div>
                        <div class="col-md-6">
                          <h6>Revizyon Süreci:</h6>
                          <ul>
                            <li>Detaylı geri bildirim formu</li>
                            <li>48 saat içinde revizyon başlangıcı</li>
                            <li>Her aşamada onay süreci</li>
                            <li>Son onay sonrası teslim</li>
                          </ul>
                        </div>
                      </div>
                      <p><em>Kapsam dışı değişiklikler için makul ek ücret uygulanır.</em></p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="py-5 bg-primary text-white">
        <div class="container text-center">
          <h2 class="display-6 fw-bold mb-4">Sorunuzun Cevabını Bulamadınız mı?</h2>
          <p class="lead mb-4">Uzman ekibimizle ücretsiz danışmanlık için hemen iletişime geçin!</p>
          <div class="d-flex flex-wrap justify-content-center gap-3">
            <a href="contact.html" class="btn btn-light btn-lg">
              <i class="fas fa-envelope me-2"></i>İletişim Formu
            </a>
                            <a href="tel:+905050711808" class="btn btn-outline-light btn-lg">
              <i class="fas fa-phone me-2"></i>Hemen Arayın
            </a>
                            <a href="https://wa.me/905050711808" class="btn btn-success btn-lg">
              <i class="fab fa-whatsapp me-2"></i>WhatsApp
            </a>
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

        .accordion-button:not(.collapsed) {
          background-color: rgba(13, 110, 253, 0.1);
          border-color: rgba(13, 110, 253, 0.2);
        }

        .accordion-item {
          border: 1px solid #dee2e6;
          margin-bottom: 1rem;
          border-radius: 0.5rem !important;
        }

        .accordion-button {
          font-weight: 600;
          border-radius: 0.5rem !important;
        }

        .category-btn.active {
          background-color: #0d6efd;
          color: white;
          border-color: #0d6efd;
        }

        .category-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .search-box .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .nav-link.active {
          background-color: rgba(255,255,255,0.1);
          border-radius: 5px;
        }

        .table th {
          background-color: #f8f9fa;
          font-weight: 600;
        }

        .fab.fa-instagram {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .faq-item.hidden {
          display: none;
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

    // Search functionality
    const searchInput = document.getElementById('faqSearch') as HTMLInputElement;
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqItems = document.querySelectorAll('.faq-item');

    if (searchInput) {
      searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        faqItems.forEach(item => {
          const text = item.textContent?.toLowerCase() || '';
          if (text.includes(searchTerm)) {
            (item as HTMLElement).style.display = 'block';
          } else {
            (item as HTMLElement).style.display = 'none';
          }
        });
      });
    }

    // Category filtering
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        faqItems.forEach(item => {
          if (category === 'all' || item.getAttribute('data-category') === category) {
            (item as HTMLElement).style.display = 'block';
          } else {
            (item as HTMLElement).style.display = 'none';
          }
        });
      });
    });
  }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderFaqPage();
}); 