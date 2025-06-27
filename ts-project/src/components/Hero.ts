// Language support can be added later if needed

export default function Hero(): string {
  return `
    <section id="home" class="hero-section mt-5">
      <div class="floating-elements">
        <div class="floating-icon icon-1"><i class="fas fa-lightbulb"></i></div>
        <div class="floating-icon icon-2"><i class="fas fa-chart-line"></i></div>
        <div class="floating-icon icon-3"><i class="fas fa-palette"></i></div>
        <div class="floating-icon icon-4"><i class="fas fa-search"></i></div>
        <div class="floating-icon icon-5"><i class="fas fa-bullhorn"></i></div>
      </div>
      
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6">
            <div class="hero-content fade-in">
              <div class="hero-badge">
                <i class="fas fa-trophy text-warning me-2"></i>
                #1 Dijital Ajans 2024
              </div>
              <h1 class="hero-title">
                <span class="highlight">Dijital</span> Dünyada<br>
                Başarınızı <span class="highlight">Birlikte</span><br>
                İnşa Edelim
              </h1>
              <p class="hero-subtitle">
                🚀 AI destekli stratejiler, yaratıcı tasarımlar ve veri odaklı çözümlerle markanızı dijital zirvede konumlandırıyoruz. Modern teknolojiler ile işinizi geleceğe taşıyın.
              </p>
              <div class="hero-buttons">
                <a href="#contact" class="btn-primary-custom">
                  <i class="fas fa-rocket"></i>
                  Projeni Başlat
                </a>
                <a href="#services" class="btn-secondary-custom">
                  <i class="fas fa-play"></i>
                  Hizmetleri Keşfet
                </a>
              </div>
              
              <!-- Hero Features -->
              <div class="hero-features mt-4">
                <div class="row">
                  <div class="col-md-4">
                    <div class="hero-feature">
                      <i class="fas fa-check-circle text-success me-2"></i>
                      <span>Ücretsiz Analiz</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hero-feature">
                      <i class="fas fa-check-circle text-success me-2"></i>
                      <span>7/24 Destek</span>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="hero-feature">
                      <i class="fas fa-check-circle text-success me-2"></i>
                      <span>Garanti Başarı</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="hero-stats-modern mt-5">
                <div class="stat-card">
                  <span class="counter-number" data-target="500" data-duration="2000">0</span>
                  <span class="stat-label">Başarılı Proje</span>
                </div>
                <div class="stat-card">
                  <span class="counter-number" data-target="98" data-duration="2000">0</span>
                  <span class="stat-label">% Müşteri Memnuniyeti</span>
                </div>
                <div class="stat-card">
                  <span class="counter-number" data-target="24" data-duration="2000">0</span>
                  <span class="stat-label">Saat Destek</span>
                </div>
                <div class="stat-card">
                  <span class="counter-number" data-target="50" data-duration="2000">0</span>
                  <span class="stat-label">Uzman Ekip</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="hero-visual-container slide-right">
              <!-- Modern Hero Visual -->
              <div class="modern-hero-visual">
                <!-- Main Dashboard Card -->
                <div class="dashboard-card">
                  <div class="card-header">
                    <h4><i class="fas fa-chart-line me-2"></i>Dijital Performans</h4>
                    <span class="status-badge">CANLI</span>
                  </div>
                  <div class="metrics-grid">
                    <div class="metric">
                      <span class="metric-value">+185%</span>
                      <span class="metric-label">Trafik Artışı</span>
                    </div>
                    <div class="metric">
                      <span class="metric-value">4.9★</span>
                      <span class="metric-label">Müşteri Puanı</span>
                    </div>
                    <div class="metric">
                      <span class="metric-value">24/7</span>
                      <span class="metric-label">Destek</span>
                    </div>
                  </div>
                  <div class="chart-container">
                    <div class="progress-chart">
                      <div class="chart-bar" data-percent="85">
                        <div class="bar-fill"></div>
                        <span class="bar-label">SEO</span>
                      </div>
                      <div class="chart-bar" data-percent="92">
                        <div class="bar-fill"></div>
                        <span class="bar-label">Tasarım</span>
                      </div>
                      <div class="chart-bar" data-percent="78">
                        <div class="bar-fill"></div>
                        <span class="bar-label">Pazarlama</span>
                      </div>
                      <div class="chart-bar" data-percent="96">
                        <div class="bar-fill"></div>
                        <span class="bar-label">Kodlama</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Floating Action Cards -->
                <div class="floating-action-card card-1">
                  <i class="fas fa-mobile-alt"></i>
                  <span>Mobil Uyumlu</span>
                </div>
                <div class="floating-action-card card-2">
                  <i class="fas fa-rocket"></i>
                  <span>Hızlı Yükleme</span>
                </div>
                <div class="floating-action-card card-3">
                  <i class="fas fa-shield-alt"></i>
                  <span>Güvenli</span>
                </div>
              </div>

              <!-- Floating Social Icons -->
              <div class="floating-objects d-none d-lg-block">
                <div class="floating-social google">
                  <i class="fab fa-google"></i>
                </div>
                <div class="floating-social facebook">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <div class="floating-social instagram">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="floating-social linkedin">
                  <i class="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Background Decorations -->
      <div class="hero-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </section>
  `;
} 