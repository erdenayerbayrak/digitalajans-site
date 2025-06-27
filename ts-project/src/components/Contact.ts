import { t } from '../language';

export default function Contact(): string {
  return `
    <section id="contact" class="contact-section py-5">
        <div class="container">
            <!-- Section Header -->
            <div class="row mb-5">
                <div class="col-12 text-center">
                    <h2 class="section-title">
                        <i class="fas fa-envelope me-3"></i>İletişime Geçin
                    </h2>
                    <p class="section-subtitle">
                        Projenizi hayata geçirmek için bugün bizimle iletişime geçin. Ücretsiz danışmanlık için hazırız!
                    </p>
                </div>
            </div>
            
            <div class="row g-5">
                <!-- Contact Information -->
                <div class="col-lg-5">
                    <div class="contact-info-modern">
                        <div class="contact-header mb-4">
                            <h3 class="mb-3">
                                <i class="fas fa-headset text-primary me-2"></i>
                                Hemen Ulaşın
                            </h3>
                            <p class="text-muted">Tüm sorularınız için 7/24 hizmetinizdeyiz.</p>
                        </div>
                        
                        <div class="contact-methods">
                            <!-- Phone -->
                            <div class="contact-method">
                                <div class="method-icon">
                                    <i class="fas fa-phone"></i>
                                </div>
                                <div class="method-content">
                                    <h5>Telefon</h5>
                                    <p class="method-value">+90 505 071 18 08</p>
                                    <small class="method-note">Pazartesi - Cuma: 09:00 - 18:00</small>
                                </div>
                                <a href="tel:+905050711808" class="method-action">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            
                            <!-- Email -->
                            <div class="contact-method">
                                <div class="method-icon email">
                                    <i class="fas fa-envelope"></i>
                                </div>
                                <div class="method-content">
                                    <h5>E-posta</h5>
                                    <p class="method-value">info@digitalajans.com</p>
                                    <small class="method-note">24 saat içinde dönüş garantisi</small>
                                </div>
                                <a href="mailto:info@digitalajans.com" class="method-action">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                            
                            <!-- Location -->
                            <div class="contact-method">
                                <div class="method-icon location">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div class="method-content">
                                    <h5>Lokasyon</h5>
                                    <p class="method-value">ANTALYA/ALANYA</p>
                                    <small class="method-note">Tüm Türkiye'ye hizmet veriyoruz</small>
                                </div>
                                <div class="method-action">
                                    <i class="fas fa-globe"></i>
                                </div>
                            </div>
                            
                            <!-- WhatsApp -->
                            <div class="contact-method whatsapp">
                                <div class="method-icon whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                </div>
                                <div class="method-content">
                                    <h5>WhatsApp</h5>
                                    <p class="method-value">Hızlı İletişim</p>
                                    <small class="method-note">Anında mesajlaşma</small>
                                </div>
                                <a href="https://wa.me/905050711808" target="_blank" class="method-action whatsapp">
                                    <i class="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Stats -->
                        <div class="contact-stats mt-5">
                            <div class="row text-center">
                                <div class="col-4">
                                    <div class="stat-item">
                                        <span class="stat-number">24/7</span>
                                        <span class="stat-label">Destek</span>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item">
                                        <span class="stat-number">500+</span>
                                        <span class="stat-label">Proje</span>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="stat-item">
                                        <span class="stat-number">98%</span>
                                        <span class="stat-label">Memnuniyet</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Contact Form -->
                <div class="col-lg-7">
                    <div class="contact-form-modern">
                        <div class="form-header mb-4">
                            <h3 class="mb-3">
                                <i class="fas fa-paper-plane text-primary me-2"></i>
                                Ücretsiz Proje Analizi
                            </h3>
                            <p class="text-muted">Projeniz hakkında detayları paylaşın, size özel çözümler sunalım.</p>
                        </div>
                        
                        <form id="contactForm" class="modern-form">
                            <div class="row g-4">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingName" name="name" required placeholder="Adınız ve Soyadınız">
                                        <label for="floatingName">
                                            <i class="fas fa-user me-2"></i>Ad Soyad *
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="floatingEmail" name="email" required placeholder="ornek@email.com">
                                        <label for="floatingEmail">
                                            <i class="fas fa-envelope me-2"></i>E-posta *
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control" id="floatingPhone" name="phone" placeholder="+90 5xx xxx xx xx">
                                        <label for="floatingPhone">
                                            <i class="fas fa-phone me-2"></i>Telefon
                                        </label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <select class="form-select" id="floatingService" name="service">
                                            <option value="">Hizmet seçin</option>
                                            <option value="web">🌐 Web Tasarım & Geliştirme</option>
                                            <option value="seo">📈 SEO Optimizasyonu</option>
                                            <option value="ads">🎯 Google Ads</option>
                                            <option value="social">📱 Sosyal Medya</option>
                                            <option value="ecommerce">🛒 E-ticaret</option>
                                            <option value="mobile">📱 Mobil Uygulama</option>
                                            <option value="package">✨ Tüm Hizmetler</option>
                                        </select>
                                        <label for="floatingService">
                                            <i class="fas fa-cogs me-2"></i>İhtiyacınız Olan Hizmet
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control" id="floatingMessage" name="message" style="height: 120px" required placeholder="Projeniz hakkında detaylı bilgi verin..."></textarea>
                                        <label for="floatingMessage">
                                            <i class="fas fa-comment-alt me-2"></i>Proje Detayları *
                                        </label>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Form Features -->
                            <div class="form-features mt-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="feature-item">
                                            <i class="fas fa-check-circle text-success me-2"></i>
                                            <span>Ücretsiz Analiz</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="feature-item">
                                            <i class="fas fa-clock text-warning me-2"></i>
                                            <span>24 Saat Geri Dönüş</span>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="feature-item">
                                            <i class="fas fa-shield-alt text-info me-2"></i>
                                            <span>Gizlilik Garantisi</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-actions mt-4">
                                <button type="submit" class="btn-submit-modern">
                                    <span class="btn-text">
                                        <i class="fas fa-paper-plane me-2"></i>
                                        Ücretsiz Analiz Talep Et
                                    </span>
                                    <span class="btn-loading d-none">
                                        <i class="fas fa-spinner fa-spin me-2"></i>
                                        Gönderiliyor...
                                    </span>
                                </button>
                                <p class="form-note mt-3">
                                    <i class="fas fa-info-circle me-1"></i>
                                    Form gönderimi tamamen ücretsizdir. Size en uygun çözümü sunmak için iletişime geçeceğiz.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
} 