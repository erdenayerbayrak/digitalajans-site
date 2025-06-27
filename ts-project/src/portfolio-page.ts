import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
        <style>
            .portfolio-card {
                background: white;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
                overflow: hidden;
                margin-bottom: 30px;
            }
            .portfolio-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            }
            .portfolio-img {
                height: 200px;
                object-fit: cover;
                width: 100%;
            }
            .stats-card {
                background: white;
                padding: 30px;
                border-radius: 10px;
                text-align: center;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                transition: transform 0.3s ease;
            }
            .stats-card:hover {
                transform: translateY(-5px);
            }
            .testimonial-card {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                margin-bottom: 30px;
            }
            .testimonial-avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                object-fit: cover;
            }
            .page-header {
                background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
            }
        </style>

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
                <a class="nav-link active" href="portfolio.html">Referanslar</a>
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
        <section class="hero-section">
            <div class="container text-center py-5">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <h1 class="display-4 fw-bold mb-4 text-white" style="animation: fadeInUp 1s ease;">
                            Referanslarımız
                        </h1>
                        <p class="lead mb-4 text-white" style="animation: fadeInUp 1s ease 0.2s both;">
                            Başarılı projelerimiz ve memnun müşterilerimizle gurur duyuyoruz. 
                            Her projede kalite, yaratıcılık ve müşteri memnuniyetini ön planda tutuyoruz.
                        </p>
                        <div class="hero-stats row text-center mt-5" style="animation: fadeInUp 1s ease 0.4s both;">
                            <div class="col-md-4 mb-3">
                                <div class="hero-stat-item">
                                    <h3 class="fw-bold mb-1 text-white">150+</h3>
                                    <p class="mb-0 text-white">Mutlu Müşteri</p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="hero-stat-item">
                                    <h3 class="fw-bold mb-1 text-white">200+</h3>
                                    <p class="mb-0 text-white">Tamamlanan Proje</p>
                                </div>
                            </div>
                            <div class="col-md-4 mb-3">
                                <div class="hero-stat-item">
                                    <h3 class="fw-bold mb-1 text-white">5+</h3>
                                    <p class="mb-0 text-white">Yıl Deneyim</p>
                                </div>
                            </div>
                        </div>
                        <a href="#portfolio" class="btn btn-light btn-lg px-4 mt-4" style="animation: fadeInUp 1s ease 0.6s both;">
                            <i class="fas fa-arrow-down me-2"></i>Projeleri İncele
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stats Section -->
        <section id="portfolio" class="py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card">
                            <i class="fas fa-users fa-3x text-primary mb-3"></i>
                            <h3 class="fw-bold text-primary">150+</h3>
                            <p class="text-muted mb-0">Mutlu Müşteri</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card">
                            <i class="fas fa-project-diagram fa-3x text-success mb-3"></i>
                            <h3 class="fw-bold text-success">200+</h3>
                            <p class="text-muted mb-0">Tamamlanan Proje</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card">
                            <i class="fas fa-clock fa-3x text-warning mb-3"></i>
                            <h3 class="fw-bold text-warning">5+</h3>
                            <p class="text-muted mb-0">Yıl Deneyim</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4">
                        <div class="stats-card">
                            <i class="fas fa-award fa-3x text-danger mb-3"></i>
                            <h3 class="fw-bold text-danger">25+</h3>
                            <p class="text-muted mb-0">Ödül ve Sertifika</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Portfolio Gallery -->
        <section class="py-5">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 class="fw-bold mb-3">Proje Galerisi</h2>
                        <p class="lead text-muted">Çeşitli sektörlerden müşterilerimiz için hayata geçirdiğimiz başarılı projeler</p>
                    </div>
                </div>
                <div class="row">
                    <!-- Project 1 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-card">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" alt="E-ticaret" class="portfolio-img">
                            <div class="p-4">
                                <h5 class="fw-bold mb-2">ABC Moda - E-ticaret</h5>
                                <p class="text-muted mb-3">Modern tasarım ile online satış platformu. Güvenli ödeme sistemi ve stok yönetimi.</p>
                                <div class="mb-3">
                                    <span class="badge bg-primary me-2">E-ticaret</span>
                                    <span class="badge bg-success">SEO</span>
                                </div>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal1">
                                    <i class="fas fa-eye me-1"></i>Detayları Gör
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-card">
                            <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400" alt="Mobil App" class="portfolio-img">
                            <div class="p-4">
                                <h5 class="fw-bold mb-2">FoodExpress Uygulaması</h5>
                                <p class="text-muted mb-3">iOS ve Android mobil uygulama geliştirme. Kullanıcı dostu arayüz tasarımı.</p>
                                <div class="mb-3">
                                    <span class="badge bg-warning me-2">Mobil App</span>
                                    <span class="badge bg-info">UI/UX</span>
                                </div>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal2">
                                    <i class="fas fa-eye me-1"></i>Detayları Gör
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-card">
                            <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=400" alt="Kurumsal Web" class="portfolio-img">
                            <div class="p-4">
                                <h5 class="fw-bold mb-2">TechCorp Kurumsal Site</h5>
                                <p class="text-muted mb-3">Profesyonel kurumsal web sitesi tasarımı. CMS yönetim paneli dahil.</p>
                                <div class="mb-3">
                                    <span class="badge bg-secondary me-2">Kurumsal</span>
                                    <span class="badge bg-danger">Branding</span>
                                </div>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal3">
                                    <i class="fas fa-eye me-1"></i>Detayları Gör
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Project 4 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-card">
                            <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400" alt="Sosyal Medya" class="portfolio-img">
                            <div class="p-4">
                                <h5 class="fw-bold mb-2">BeautyCenter Kampanyası</h5>
                                <p class="text-muted mb-3">Sosyal medya yönetimi ve reklam kampanyası. Instagram & Facebook optimizasyonu.</p>
                                <div class="mb-3">
                                    <span class="badge bg-primary me-2">Sosyal Medya</span>
                                    <span class="badge bg-success">Reklam</span>
                                </div>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal4">
                                    <i class="fas fa-eye me-1"></i>Detayları Gör
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Project 5 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-card">
                            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400" alt="Logo Design" class="portfolio-img">
                            <div class="p-4">
                                <h5 class="fw-bold mb-2">GreenLife Logo Tasarımı</h5>
                                <p class="text-muted mb-3">Marka kimliği ve kurumsal logo tasarımı. Görsel kimlik rehberi dahil.</p>
                                <div class="mb-3">
                                    <span class="badge bg-success me-2">Logo</span>
                                    <span class="badge bg-warning">Grafik</span>
                                </div>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal5">
                                    <i class="fas fa-eye me-1"></i>Detayları Gör
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Project 6 -->
                    <div class="col-lg-4 col-md-6">
                        <div class="portfolio-card">
                            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400" alt="QR Menu" class="portfolio-img">
                            <div class="p-4">
                                <h5 class="fw-bold mb-2">Lezzet Cafe QR Menü</h5>
                                <p class="text-muted mb-3">Dijital QR menü sistemi. Temassız menü görüntüleme ve kolay güncelleme.</p>
                                <div class="mb-3">
                                    <span class="badge bg-secondary me-2">QR Menü</span>
                                    <span class="badge bg-info">Dijital</span>
                                </div>
                                <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modal6">
                                    <i class="fas fa-eye me-1"></i>Detayları Gör
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Client Testimonials -->
        <section class="py-5 bg-light">
            <div class="container">
                <div class="row text-center mb-5">
                    <div class="col-12">
                        <h2 class="fw-bold mb-3">Müşteri Deneyimleri</h2>
                        <p class="lead text-muted">Referanslarımızın bizim hakkımızda söyledikleri</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="testimonial-card text-center">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="Ahmet Yılmaz" class="testimonial-avatar mx-auto mb-3">
                            <p class="text-muted mb-3">"Dijital Ajans ile çalışmak harika bir deneyimdi. E-ticaret sitemiz sayesinde satışlarımız %300 arttı!"</p>
                            <h6 class="fw-bold mb-1">Ahmet Yılmaz</h6>
                            <small class="text-muted">ABC Moda - CEO</small>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="testimonial-card text-center">
                            <img src="https://images.unsplash.com/photo-1494790108755-2616b612b524?auto=format&fit=crop&q=80&w=150" alt="Ayşe Demir" class="testimonial-avatar mx-auto mb-3">
                            <p class="text-muted mb-3">"Mobil uygulamamız çok başarılı oldu. Kullanıcı dostu tasarım ve mükemmel performans."</p>
                            <h6 class="fw-bold mb-1">Ayşe Demir</h6>
                            <small class="text-muted">FoodExpress - Kurucu</small>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="testimonial-card text-center">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" alt="Mehmet Kaya" class="testimonial-avatar mx-auto mb-3">
                            <p class="text-muted mb-3">"Sosyal medya yönetimi sayesinde marka bilinirliğimiz ciddi şekilde arttı. Teşekkürler!"</p>
                            <h6 class="fw-bold mb-1">Mehmet Kaya</h6>
                            <small class="text-muted">BeautyCenter - Müdür</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-5 bg-primary text-white">
            <div class="container">
                <div class="row text-center">
                    <div class="col-12">
                        <h3 class="mb-3">Siz de Referanslarımız Arasında Yer Almak İster misiniz?</h3>
                        <p class="lead mb-4">Başarılı projeler için bizimle iletişime geçin ve fark yaratın!</p>
                        <a href="contact.html" class="btn btn-light btn-lg">
                            <i class="fas fa-rocket me-2"></i>Hemen Başlayalım
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Modals -->
        <!-- Modal 1 -->
        <div class="modal fade" id="modal1" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">ABC Moda - E-ticaret Web Sitesi</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="ABC Moda" class="img-fluid mb-3 rounded">
                        <h6>📋 Proje Detayları:</h6>
                        <ul>
                            <li>Modern ve mobil uyumlu e-ticaret tasarımı</li>
                            <li>Güvenli ödeme sistemi entegrasyonu (İyzico, PayTR)</li>
                            <li>Stok yönetimi ve sipariş takip sistemi</li>
                            <li>SEO optimizasyonu ve Google Analytics</li>
                            <li>Admin paneli ve kolay içerik yönetimi</li>
                        </ul>
                        <h6>📈 Elde Edilen Sonuçlar:</h6>
                        <p><strong>3 ay içinde:</strong> Online satışlarda %300 artış, organik trafik %250 artış, mobil dönüşüm oranında %180 iyileşme</p>
                        <h6>⚡ Kullanılan Teknolojiler:</h6>
                        <p>WordPress, WooCommerce, SSL Sertifikası, Google Analytics, Yandex Metrica</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <a href="contact.html" class="btn btn-primary">Benzer Proje İsteyin</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 2 -->
        <div class="modal fade" id="modal2" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">FoodExpress - Mobil Uygulama</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" alt="FoodExpress" class="img-fluid mb-3 rounded">
                        <h6>📱 Proje Detayları:</h6>
                        <ul>
                            <li>iOS ve Android hybrid uygulama geliştirme</li>
                            <li>Kullanıcı dostu ve sezgisel arayüz tasarımı</li>
                            <li>Gerçek zamanlı sipariş takibi ve bildirimler</li>
                            <li>Push notification sistemi</li>
                            <li>Çoklu ödeme seçeneği entegrasyonu</li>
                        </ul>
                        <h6>📊 Başarı Metrikleri:</h6>
                        <p><strong>6 ay içinde:</strong> App Store'da 50.000+ indirme, 4.8/5 yıldız kullanıcı değerlendirmesi, günlük aktif kullanıcı sayısında %400 artış</p>
                        <h6>🛠️ Teknoloji Stack:</h6>
                        <p>React Native, Firebase, Node.js, MongoDB, Stripe API, OneSignal</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <a href="contact.html" class="btn btn-primary">Mobil App Yaptırın</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 3 -->
        <div class="modal fade" id="modal3" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">TechCorp - Kurumsal Web Sitesi</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800" alt="TechCorp" class="img-fluid mb-3 rounded">
                        <h6>🏢 Proje Kapsamı:</h6>
                        <ul>
                            <li>Profesyonel kurumsal web sitesi tasarımı</li>
                            <li>Çoklu dil desteği (Türkçe/İngilizce)</li>
                            <li>Dinamik içerik yönetim sistemi (CMS)</li>
                            <li>Blog ve haber modülü entegrasyonu</li>
                            <li>İletişim formları ve canlı destek</li>
                        </ul>
                        <h6>🎯 İş Sonuçları:</h6>
                        <p><strong>Kurumsal imaj güçlendirme:</strong> Potansiyel müşteri sorgularında %180 artış, marka güvenilirliğinde ciddi artış</p>
                        <h6>💻 Kullanılan Teknolojiler:</h6>
                        <p>HTML5, CSS3, JavaScript ES6, PHP Laravel, MySQL, Bootstrap</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <a href="contact.html" class="btn btn-primary">Kurumsal Site Yaptırın</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 4 -->
        <div class="modal fade" id="modal4" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">BeautyCenter - Sosyal Medya Kampanyası</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" alt="BeautyCenter" class="img-fluid mb-3 rounded">
                        <h6>📱 Kampanya Stratejisi:</h6>
                        <ul>
                            <li>Instagram ve Facebook reklam yönetimi</li>
                            <li>Hedef kitle analizi ve demografik segmentasyon</li>
                            <li>Yaratıcı görsel içerik ve video üretimi</li>
                            <li>A/B test optimizasyonları</li>
                            <li>Mikro-influencer iş birliği koordinasyonu</li>
                        </ul>
                        <h6>📈 Kampanya Sonuçları:</h6>
                        <p><strong>6 aylık süreç:</strong> Instagram takipçilerinde %450 artış, online randevu rezervasyonlarında %300 artış, marka etkileşiminde %600 artış</p>
                        <h6>🎨 Hizmet Kapsamı:</h6>
                        <p>İçerik planlama, görsel tasarım, reklam optimizasyonu, analitik raporlama, topluluk yönetimi</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <a href="contact.html" class="btn btn-primary">Sosyal Medya Hizmeti Alın</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 5 -->
        <div class="modal fade" id="modal5" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">GreenLife - Logo & Kurumsal Kimlik</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800" alt="GreenLife" class="img-fluid mb-3 rounded">
                        <h6>🎨 Tasarım Süreci:</h6>
                        <ul>
                            <li>Çevre dostu marka kimliği konsept geliştirme</li>
                            <li>Logo varyasyonları (yatay, dikey, ikon versiyonları)</li>
                            <li>Kurumsal renk paleti ve tipografi seçimi</li>
                            <li>Kartvizit, antetli kağıt ve kurumsal kırtasiye</li>
                            <li>Sosyal medya şablonları ve digital assets</li>
                        </ul>
                        <h6>🏆 Marka Etkisi:</h6>
                        <p><strong>Sonuçlar:</strong> Güçlü marka kimliği yaratma, müşteri hafızasında kalıcılık %200 artış, marka tanınırlığında ciddi gelişim</p>
                        <h6>📁 Teslim Edilenler:</h6>
                        <p>Logo dosyaları (AI, EPS, PNG, SVG), Marka rehberi, Kırtasiye tasarımları, Sosyal medya kitİ</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <a href="contact.html" class="btn btn-primary">Logo Tasarımı Yaptırın</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 6 -->
        <div class="modal fade" id="modal6" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Lezzet Cafe - Dijital QR Menü</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" alt="QR Menü" class="img-fluid mb-3 rounded">
                        <h6>📱 Sistem Özellikleri:</h6>
                        <ul>
                            <li>Temassız dijital menü görüntüleme sistemi</li>
                            <li>Çoklu dil desteği (Türkçe/İngilizce/Arapça)</li>
                            <li>Kolay güncelleme yönetim paneli</li>
                            <li>Kategori bazlı menü düzenleme imkanı</li>
                            <li>QR kod üretimi ve profesyonel yazdırma</li>
                        </ul>
                        <h6>✅ İş Faydaları:</h6>
                        <p><strong>Operasyonel iyileştirmeler:</strong> %100 temassız hizmet, menü güncelleme maliyetlerinde %90 tasarruf, müşteri memnuniyetinde artış</p>
                        <h6>🛠️ Teknik Detaylar:</h6>
                        <p>Responsive web tasarım, QR kod teknolojisi, Bulut tabanlı hosting, SSL güvenlik</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                        <a href="contact.html" class="btn btn-primary">QR Menü Sistemim Yaptırın</a>
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

    // Add entrance animations
    setTimeout(() => {
        const cards = document.querySelectorAll<HTMLElement>('.portfolio-card, .stats-card, .testimonial-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.5s ease';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
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
}, 300);
}); 