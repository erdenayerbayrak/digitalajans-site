import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

// Initialize page when DOM loads
document.addEventListener('DOMContentLoaded', () => {
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
                <a class="nav-link active" href="services.html">Hizmetler</a>
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

            <!-- Main Content -->
            <main>
                <!-- Hero Section -->
                <section class="hero-section">
                    <div class="container text-center py-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-10">
                                <h1 class="display-4 fw-bold mb-4 text-white" style="animation: fadeInUp 1s ease;">
                                    Hizmetlerimiz
                                </h1>
                                <p class="lead mb-4 text-white" style="animation: fadeInUp 1s ease 0.2s both;">
                                    İşletmenizi dijital dünyada büyütmek için sunduğumuz profesyonel hizmetler. 
                                    Web tasarımdan dijital pazarlamaya kadar tüm ihtiyaçlarınızı karşılıyoruz.
                                </p>
                                <div class="hero-stats row text-center mt-5" style="animation: fadeInUp 1s ease 0.4s both;">
                                    <div class="col-md-4 mb-3">
                                        <div class="hero-stat-item">
                                            <h3 class="fw-bold mb-1 text-white">9+</h3>
                                            <p class="mb-0 text-white">Farklı Hizmet</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <div class="hero-stat-item">
                                            <h3 class="fw-bold mb-1 text-white">7/24</h3>
                                            <p class="mb-0 text-white">Destek Hizmeti</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <div class="hero-stat-item">
                                            <h3 class="fw-bold mb-1 text-white">%100</h3>
                                            <p class="mb-0 text-white">Müşteri Memnuniyeti</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#services" class="btn btn-light btn-lg px-4 mt-4" style="animation: fadeInUp 1s ease 0.6s both;">
                                    <i class="fas fa-arrow-down me-2"></i>Hizmetleri Keşfet
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Services Grid -->
                <section id="services" class="py-5">
                    <div class="container">
                        <div class="row g-4">
                            <!-- Service 1: Web Tasarım -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-laptop-code fa-3x text-primary"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Web Tasarım & Geliştirme</h5>
                                        <p class="card-text text-muted">Modern, mobil uyumlu ve kullanıcı dostu web siteleri tasarlıyoruz. E-ticaret, kurumsal ve kişisel çözümler.</p>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#serviceModal1">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 2: SEO -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-chart-line fa-3x text-success"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">SEO Optimizasyonu</h5>
                                        <p class="card-text text-muted">Google'da üst sıralarda yer alın. Organik trafik artışı ve uzun vadeli başarı sağlıyoruz.</p>
                                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#serviceModal2">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 3: Google Ads -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fab fa-google fa-3x text-warning"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Google Ads Yönetimi</h5>
                                        <p class="card-text text-muted">Hedefli reklamlarla hızlı sonuçlar alın. PPC kampanyalarınızı profesyonelce yönetiyoruz.</p>
                                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#serviceModal3">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 4: Sosyal Medya -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-hashtag fa-3x text-info"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Sosyal Medya Yönetimi</h5>
                                        <p class="card-text text-muted">Instagram, Facebook, LinkedIn'de markanızı güçlendirin. İçerik üretimi ve topluluk yönetimi.</p>
                                        <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#serviceModal4">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 5: Grafik Tasarım -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-palette fa-3x text-danger"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Grafik ve Logo Tasarım</h5>
                                        <p class="card-text text-muted">Markanızın kimliğini yansıtan özgün logo ve grafik tasarımları. Profesyonel görsel kimlik çözümleri.</p>
                                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#serviceModal5">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 6: QR Menü -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-qrcode fa-3x text-secondary"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Dijital QR Menü</h5>
                                        <p class="card-text text-muted">Restoran ve kafeler için temassız dijital menü çözümleri. Kolay güncelleme ve yönetim paneli.</p>
                                        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#serviceModal6">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 7: Reklam Danışmanlığı -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-bullhorn fa-3x" style="color: #e83e8c;"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Reklam Danışmanlığı</h5>
                                        <p class="card-text text-muted">Etkili reklam stratejileri ile markanızı doğru kitleye ulaştırın. ROI odaklı kampanya yönetimi.</p>
                                        <button type="button" class="btn" style="background-color: #e83e8c; color: white;" data-bs-toggle="modal" data-bs-target="#serviceModal7">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 8: E-ticaret -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-shopping-cart fa-3x" style="color: #20c997;"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">E-ticaret Sistemleri</h5>
                                        <p class="card-text text-muted">Güvenli ve kullanıcı dostu online satış platformları. Ödeme entegrasyonu ve stok yönetimi dahil.</p>
                                        <button type="button" class="btn" style="background-color: #20c997; color: white;" data-bs-toggle="modal" data-bs-target="#serviceModal8">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>

                            <!-- Service 9: Yazılım Geliştirme -->
                            <div class="col-lg-4 col-md-6">
                                <div class="card h-100 shadow-sm border-0 service-card">
                                    <div class="card-body p-4 text-center">
                                        <div class="service-icon mb-3">
                                            <i class="fas fa-code fa-3x" style="color: #6f42c1;"></i>
                                        </div>
                                        <h5 class="card-title fw-bold">Yazılım & Uygulama Geliştirme</h5>
                                        <p class="card-text text-muted">İhtiyaçlarınıza özel mobil ve web uygulamaları. iOS, Android ve web teknolojileri.</p>
                                        <button type="button" class="btn" style="background-color: #6f42c1; color: white;" data-bs-toggle="modal" data-bs-target="#serviceModal9">Detayları Gör</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- CTA Section -->
                <section class="bg-light py-5">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-8">
                                <h3 class="fw-bold mb-3">Projeniz için hangi hizmetimize ihtiyacınız var?</h3>
                                <p class="mb-4">Uzman ekibimizle birlikte dijital dönüşüm yolculuğunuza başlayın.</p>
                                <a href="contact.html" class="btn btn-primary btn-lg">Hemen İletişime Geçin</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <!-- Service Modals -->
            <!-- Modal 1: Web Tasarım -->
            <div class="modal fade" id="serviceModal1" tabindex="-1" aria-labelledby="serviceModal1Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal1Label">Web Tasarım & Geliştirme</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-laptop-code fa-4x text-primary mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Neler Yapıyoruz?</h6>
                        <ul>
                          <li>Modern ve mobil uyumlu web tasarımları</li>
                          <li>E-ticaret web sitesi geliştirme</li>
                          <li>Kurumsal web siteleri</li>
                          <li>Kişisel blog ve portföy siteleri</li>
                          <li>Landing page tasarımları</li>
                        </ul>
                        <h6>Teknolojilerimiz:</h6>
                        <p>HTML5, CSS3, JavaScript, React, Vue.js, WordPress, PHP</p>
                        <h6>Süreç:</h6>
                        <p>Analiz → Tasarım → Geliştirme → Test → Yayın → Destek</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn btn-primary">Teklif Al</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 2: SEO -->
            <div class="modal fade" id="serviceModal2" tabindex="-1" aria-labelledby="serviceModal2Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal2Label">SEO Optimizasyonu</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-chart-line fa-4x text-success mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>SEO Hizmetlerimiz:</h6>
                        <ul>
                          <li>Anahtar kelime araştırması ve analizi</li>
                          <li>On-page SEO optimizasyonu</li>
                          <li>Teknik SEO denetimi</li>
                          <li>İçerik optimizasyonu</li>
                          <li>Link building stratejileri</li>
                          <li>Google Analytics ve Search Console kurulumu</li>
                        </ul>
                        <h6>Sonuçlar:</h6>
                        <p>3-6 ay içinde organik trafikte %200+ artış, anahtar kelime sıralamalarında ilk sayfa başarısı</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn btn-success">SEO Analizi Al</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 3: Google Ads -->
            <div class="modal fade" id="serviceModal3" tabindex="-1" aria-labelledby="serviceModal3Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal3Label">Google Ads Yönetimi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fab fa-google fa-4x text-warning mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Reklam Türleri:</h6>
                        <ul>
                          <li>Arama reklamları (Search Ads)</li>
                          <li>Display reklamları</li>
                          <li>Video reklamları (YouTube)</li>
                          <li>Shopping reklamları</li>
                          <li>Remarketing kampanyaları</li>
                        </ul>
                        <h6>Avantajlar:</h6>
                        <p>Hızlı sonuçlar, hedefli kitle, ölçülebilir ROI, bütçe kontrolü</p>
                        <h6>Yönetim:</h6>
                        <p>Kampanya kurulumu, optimize edilmiş teklif yönetimi, A/B testleri, detaylı raporlama</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn btn-warning">Kampanya Başlat</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 4: Sosyal Medya -->
            <div class="modal fade" id="serviceModal4" tabindex="-1" aria-labelledby="serviceModal4Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal4Label">Sosyal Medya Yönetimi</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-hashtag fa-4x text-info mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Platformlar:</h6>
                        <ul>
                          <li>Instagram - Story, Reels, IGTV</li>
                          <li>Facebook - Post, Stories, Ads</li>
                          <li>LinkedIn - Kurumsal hesap yönetimi</li>
                          <li>Twitter - Güncel içerik paylaşımı</li>
                          <li>TikTok - Viral video içerikleri</li>
                        </ul>
                        <h6>Hizmetler:</h6>
                        <p>İçerik üretimi, gönderi tasarımı, hashtag stratejisi, topluluk yönetimi, influencer işbirlikleri</p>
                        <h6>Sonuçlar:</h6>
                        <p>Organik takipçi artışı, engagement oranında artış, marka bilinirliği</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn btn-info text-white">Sosyal Medya Başlat</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 5: Grafik Tasarım -->
            <div class="modal fade" id="serviceModal5" tabindex="-1" aria-labelledby="serviceModal5Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal5Label">Grafik ve Logo Tasarım</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-palette fa-4x text-danger mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Tasarım Hizmetleri:</h6>
                        <ul>
                          <li>Logo tasarımı ve marka kimliği</li>
                          <li>Kartvizit ve kurumsal kırtasiye</li>
                          <li>Broşür ve katalog tasarımı</li>
                          <li>Social media post tasarımları</li>
                          <li>Web sitesi UI/UX tasarımı</li>
                          <li>Ambalaj ve etiket tasarımı</li>
                        </ul>
                        <h6>Süreç:</h6>
                        <p>Konsept görüşmesi → Mood board → Taslak tasarımlar → Revizyon → Final dosyalar</p>
                        <h6>Dosya Formatları:</h6>
                        <p>AI, EPS, PDF, PNG, JPG - Print ve dijital kullanım için</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn btn-danger">Tasarım Yaptır</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 6: QR Menü -->
            <div class="modal fade" id="serviceModal6" tabindex="-1" aria-labelledby="serviceModal6Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal6Label">Dijital QR Menü</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-qrcode fa-4x text-secondary mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Özellikler:</h6>
                        <ul>
                          <li>Temassız menü görüntüleme</li>
                          <li>Kolay güncelleme paneli</li>
                          <li>Çoklu dil desteği</li>
                          <li>Fiyat ve stok yönetimi</li>
                          <li>Kategori bazlı düzenleme</li>
                          <li>Görsel ve açıklama ekleme</li>
                        </ul>
                        <h6>Avantajlar:</h6>
                        <p>Hijyenik, eco-friendly, maliyet tasarrufu, anlık güncelleme</p>
                        <h6>Kurulum:</h6>
                        <p>QR kod üretimi → Masa çıkartmaları → Yönetim paneli eğitimi</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn btn-secondary">QR Menü Talep Et</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 7: Reklam Danışmanlığı -->
            <div class="modal fade" id="serviceModal7" tabindex="-1" aria-labelledby="serviceModal7Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal7Label">Reklam Danışmanlığı</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-bullhorn fa-4x" style="color: #e83e8c;" class="mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Danışmanlık Alanları:</h6>
                        <ul>
                          <li>Dijital pazarlama stratejisi</li>
                          <li>Hedef kitle analizi</li>
                          <li>Rekabet analizi</li>
                          <li>Bütçe optimizasyonu</li>
                          <li>Kanal seçimi ve planlama</li>
                          <li>ROI ölçümü ve raporlama</li>
                        </ul>
                        <h6>Süreç:</h6>
                        <p>Durum analizi → Strateji geliştirme → Uygulama planı → İzleme ve optimizasyon</p>
                        <h6>Sonuç:</h6>
                        <p>Etkili reklam yatırımları, yüksek dönüşüm oranları, sürdürülebilir büyüme</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn" style="background-color: #e83e8c; color: white;">Danışmanlık Al</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 8: E-ticaret -->
            <div class="modal fade" id="serviceModal8" tabindex="-1" aria-labelledby="serviceModal8Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal8Label">E-ticaret Sistemleri</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-shopping-cart fa-4x" style="color: #20c997;" class="mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>E-ticaret Çözümleri:</h6>
                        <ul>
                          <li>WooCommerce & WordPress</li>
                          <li>Shopify mağaza kurulumu</li>
                          <li>Özel e-ticaret geliştirme</li>
                          <li>Ödeme sistemi entegrasyonu</li>
                          <li>Kargo ve stok yönetimi</li>
                          <li>Multi-vendor marketplace</li>
                        </ul>
                        <h6>Özellikler:</h6>
                        <p>Mobil uyumlu tasarım, SSL güvenlik, SEO optimizasyonu, analitik raporlar</p>
                        <h6>Destek:</h6>
                        <p>Kurulum sonrası eğitim, teknik destek, güncellemeler</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn" style="background-color: #20c997; color: white;">E-ticaret Başlat</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal 9: Yazılım Geliştirme -->
            <div class="modal fade" id="serviceModal9" tabindex="-1" aria-labelledby="serviceModal9Label" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="serviceModal9Label">Yazılım & Uygulama Geliştirme</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <div class="row">
                      <div class="col-md-4">
                        <i class="fas fa-code fa-4x" style="color: #6f42c1;" class="mb-3"></i>
                      </div>
                      <div class="col-md-8">
                        <h6>Geliştirme Alanları:</h6>
                        <ul>
                          <li>iOS mobil uygulamaları (Swift)</li>
                          <li>Android uygulamaları (Kotlin/Java)</li>
                          <li>Cross-platform (React Native, Flutter)</li>
                          <li>Web uygulamaları (React, Vue, Angular)</li>
                          <li>Backend API geliştirme</li>
                          <li>Desktop uygulamalar</li>
                        </ul>
                        <h6>Süreç:</h6>
                        <p>Gereksinim analizi → UI/UX tasarım → Geliştirme → Test → Yayın → Bakım</p>
                        <h6>Teknolojiler:</h6>
                        <p>Modern framework'ler, cloud entegrasyonu, güvenlik standartları</p>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                    <a href="contact.html" class="btn" style="background-color: #6f42c1; color: white;">Uygulama Yaptır</a>
                  </div>
                </div>
              </div>
            </div>

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
        `;
    }
});

// Add some dynamic effects
setTimeout(() => {
    const cards = document.querySelectorAll<HTMLElement>('.service-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'all 0.5s ease';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100); 

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
}, index * 100);
    });
}, 100); 