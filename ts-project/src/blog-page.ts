import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

// Removed unused imports - now using inline HTML

function renderBlogPage(): void {
  const app = document.getElementById('app');
  if (!app) return;

  const blogPosts = [
    {
      id: 1,
      title: "Markanız İçin Neden Bir Blog Gerekli?",
      excerpt: "Bloglar, sadece yazı yazılan yerler değil, markanızın sesini duyurduğu, müşteri sadakati oluşturduğu ve SEO'nuzu güçlendirdiği platformlardır.",
      content: "Blog yazarlığı, günümüzün dijital pazarlama stratejilerinin en etkili araçlarından biridir. Bir blog, markanızın kişiliğini yansıtır ve potansiyel müşterilerinizle doğrudan iletişim kurmanızı sağlar...",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070",
      date: "22 Temmuz 2025",
      category: "Pazarlama",
      author: "Ahmet Yılmaz",
      readTime: "5 dk okuma"
    },
    {
      id: 2,
      title: "Video İçeriğinin Pazarlamadaki Yükselişi",
      excerpt: "Kullanıcıların metin okumak yerine video izlemeyi tercih ettiği bir çağda, markanızın video pazarlama stratejileriyle nasıl öne çıkabileceğini keşfedin.",
      content: "Video içerik, dijital pazarlama dünyasında hızla büyüyen bir trend. İstatistiklere göre, kullanıcılar video içerikleri metin içeriklere göre %1200 daha fazla paylaşıyor...",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=2070",
      date: "15 Temmuz 2025",
      category: "İçerik",
      author: "Ayşe Demir",
      readTime: "7 dk okuma"
    },
    {
      id: 3,
      title: "Küçük İşletmeler İçin Sosyal Medya İpuçları",
      excerpt: "Büyük bütçeler olmadan da sosyal medyada etkili olabilirsiniz. Hedef kitlenize ulaşmanızı sağlayacak pratik ve yaratıcı ipuçları burada.",
      content: "Sosyal medya, küçük işletmeler için büyük fırsatlar sunar. Doğru strateji ile büyük markalarla rekabet edebilir ve hedef kitlenize ulaşabilirsiniz...",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1974",
      date: "08 Temmuz 2025",
      category: "Sosyal Medya",
      author: "Mehmet Kaya",
      readTime: "6 dk okuma"
    },
    {
      id: 4,
      title: "2024'te SEO Trendleri ve Stratejileri",
      excerpt: "Google algoritmaları sürekli değişiyor. 2024 yılında SEO başarısı için hangi stratejileri uygulamanız gerektiğini öğrenin.",
      content: "SEO dünyası sürekli değişiyor ve 2024 yılı da önemli güncellemeler getirdi. Core Web Vitals'dan EEAT'e kadar bilmeniz gereken her şey burada...",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015",
      date: "01 Temmuz 2025",
      category: "SEO",
      author: "Fatma Öztürk",
      readTime: "8 dk okuma"
    },
    {
      id: 5,
      title: "E-ticaret Sitesi Kurarken Dikkat Edilmesi Gerekenler",
      excerpt: "Başarılı bir e-ticaret sitesi kurmak için teknik detaylardan kullanıcı deneyimine kadar bilmeniz gereken tüm önemli noktalar.",
      content: "E-ticaret sitesi kurmak sadece ürünleri listelemekten ibaret değil. Kullanıcı deneyimi, güvenlik, ödeme sistemleri ve daha birçok faktör başarıyı etkiler...",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2070",
      date: "25 Haziran 2025",
      category: "E-ticaret",
      author: "Can Özkan",
      readTime: "10 dk okuma"
    },
    {
      id: 6,
      title: "Yapay Zeka ve Dijital Pazarlama Geleceği",
      excerpt: "AI teknolojilerinin dijital pazarlama dünyasını nasıl dönüştürdüğünü ve gelecekte neler bekleyebileceğimizi keşfedin.",
      content: "Yapay zeka, dijital pazarlama stratejilerini köklü şekilde değiştiriyor. Chatbot'lardan kişiselleştirilmiş içeriklere kadar AI'ın sunduğu olanaklar sınırsız...",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070",
      date: "18 Haziran 2025",
      category: "Teknoloji",
      author: "Zeynep Aydın",
      readTime: "9 dk okuma"
    }
  ];

  const categories = ["Tümü", "Pazarlama", "İçerik", "Sosyal Medya", "SEO", "E-ticaret", "Teknoloji"];

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
                <a class="nav-link active" href="blog.html">Blog</a>
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

    <main>
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="container text-center py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <h1 class="display-4 fw-bold mb-4 text-white" style="animation: fadeInUp 1s ease;">
                Blog
              </h1>
              <p class="lead mb-4 text-white" style="animation: fadeInUp 1s ease 0.2s both;">
                Dijital dünyadan en son haberler, trendler ve ipuçları. 
                Sektörün güncel gelişmelerini takip edin ve bilginizi artırın.
              </p>
              <div class="hero-stats row text-center mt-5" style="animation: fadeInUp 1s ease 0.4s both;">
                <div class="col-md-4 mb-3">
                  <div class="hero-stat-item">
                    <h3 class="fw-bold mb-1 text-white">50+</h3>
                    <p class="mb-0 text-white">Blog Yazısı</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="hero-stat-item">
                    <h3 class="fw-bold mb-1 text-white">7</h3>
                    <p class="mb-0 text-white">Farklı Kategori</p>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="hero-stat-item">
                    <h3 class="fw-bold mb-1 text-white">Haftalık</h3>
                    <p class="mb-0 text-white">Yeni İçerik</p>
                  </div>
                </div>
              </div>
              <a href="#blog-content" class="btn btn-light btn-lg px-4 mt-4" style="animation: fadeInUp 1s ease 0.6s both;">
                <i class="fas fa-arrow-down me-2"></i>Yazıları Keşfet
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Category Filter -->
      <section id="blog-content" class="py-4 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="category-filter text-center">
                ${categories.map(category => `
                  <button class="btn btn-outline-primary me-2 mb-2 category-btn ${category === 'Tümü' ? 'active' : ''}" 
                          data-category="${category}">
                    ${category}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog Posts -->
      <section class="py-5">
        <div class="container">
          <div class="row g-4" id="blogContainer">
            ${blogPosts.map(post => `
              <div class="col-lg-4 col-md-6 blog-post-item" data-category="${post.category}">
                <article class="blog-card h-100">
                  <div class="blog-image" style="background-image: url('${post.image}');">
                    <div class="blog-category-badge">
                      <span class="badge bg-primary">${post.category}</span>
                    </div>
                  </div>
                  <div class="blog-content p-4">
                    <div class="blog-meta mb-3">
                      <small class="text-muted">
                        <i class="fas fa-calendar me-1"></i>${post.date}
                        <span class="mx-2">•</span>
                        <i class="fas fa-user me-1"></i>${post.author}
                        <span class="mx-2">•</span>
                        <i class="fas fa-clock me-1"></i>${post.readTime}
                      </small>
                    </div>
                    <h4 class="blog-title mb-3">${post.title}</h4>
                    <p class="blog-excerpt text-muted mb-4">${post.excerpt}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#blogModal${post.id}">
                      Devamını Oku <i class="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </article>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Newsletter Section -->
      <section class="py-5 bg-light">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h3 class="mb-3">📧 Blog Güncellemelerini Kaçırma!</h3>
              <p class="lead text-muted mb-4">Yeni yazılarımızdan haberdar olmak için e-posta listemize katıl</p>
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="input-group">
                    <input type="email" class="form-control" placeholder="E-posta adresiniz...">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-paper-plane me-2"></i>Abone Ol
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Blog Modals -->
    ${blogPosts.map(post => `
      <div class="modal fade" id="blogModal${post.id}" tabindex="-1" aria-labelledby="blogModal${post.id}Label" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="blogModal${post.id}Label">${post.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="${post.image}" alt="${post.title}" class="img-fluid mb-4 rounded">
              <div class="blog-meta mb-3">
                <span class="badge bg-primary me-2">${post.category}</span>
                <small class="text-muted">
                  <i class="fas fa-calendar me-1"></i>${post.date}
                  <span class="mx-2">•</span>
                  <i class="fas fa-user me-1"></i>${post.author}
                  <span class="mx-2">•</span>
                  <i class="fas fa-clock me-1"></i>${post.readTime}
                </small>
              </div>
              <div class="blog-full-content">
                <p class="lead">${post.excerpt}</p>
                <p>${post.content}</p>
                
                <h6>Önemli Noktalar:</h6>
                <ul>
                  <li>Doğru strateji ile başarı garanti</li>
                  <li>Sürekli analiz ve optimizasyon gerekli</li>
                  <li>Hedef kitle analizi kritik önem taşıyor</li>
                  <li>Uzun vadeli düşünmek önemli</li>
                </ul>
                
                <div class="alert alert-info">
                  <i class="fas fa-lightbulb me-2"></i>
                  <strong>Pro İpucu:</strong> Bu konularda profesyonel destek almak, sürecinizi hızlandırır ve daha etkili sonuçlar almanızı sağlar.
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
              <a href="contact.html" class="btn btn-primary">Bu Konuda Destek Al</a>
            </div>
          </div>
        </div>
      </div>
    `).join('')}

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

  // Add CSS for blog styling
  const style = document.createElement('style');
  style.textContent = `
    .blog-card {
      background: white;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
      overflow: hidden;
    }

    .blog-card:hover {
      transform: translateY(-5px);
    }

    .blog-image {
      height: 220px;
      background-size: cover;
      background-position: center;
      position: relative;
    }

    .blog-category-badge {
      position: absolute;
      top: 15px;
      left: 15px;
    }

    .blog-title {
      font-size: 1.25rem;
      font-weight: bold;
      color: #333;
      line-height: 1.4;
    }

    .blog-excerpt {
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .blog-meta {
      font-size: 0.85rem;
    }

    .category-filter {
      margin-bottom: 1rem;
    }

    .category-btn.active {
      background-color: var(--bs-primary);
      color: white;
      border-color: var(--bs-primary);
    }

    .blog-post-item {
      transition: all 0.3s ease;
    }

    .blog-post-item.hidden {
      display: none;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: bold;
      color: #333;
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
  `;
  document.head.appendChild(style);

  // Category filtering functionality
  const categoryButtons = document.querySelectorAll<HTMLElement>('.category-btn');
  const blogItems = document.querySelectorAll<HTMLElement>('.blog-post-item');

  categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const selectedCategory = button.getAttribute('data-category');

      // Filter blog posts
      blogItems.forEach(item => {
        if (selectedCategory === 'Tümü' || item.getAttribute('data-category') === selectedCategory) {
          item.style.display = 'block';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Add entrance animation
  setTimeout(() => {
    blogItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 100);
      }, index * 100);
    });
  }, 200);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderBlogPage();
}); 