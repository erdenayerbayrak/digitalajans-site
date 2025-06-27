import { t } from '../language';

export default function Blog(isStandalonePage: boolean = false): string {
  const posts = [
    {
      id: 1,
      title: "Markanız İçin Neden Bir Blog Gerekli?",
      excerpt: "Bloglar, sadece yazı yazılan yerler değil, markanızın sesini duyurduğu, müşteri sadakati oluşturduğu ve SEO'nuzu güçlendirdiği platformlardır.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400&h=250",
      date: "22 Temmuz 2025",
      category: "İçerik Pazarlama",
      author: "Dijital Ajans",
      readTime: "5 dk"
    },
    {
      id: 2,
      title: "Video İçeriğin Pazarlamadaki Yükselişi",
      excerpt: "Kullanıcıların metin okumak yerine video izlemeyi tercih ettiği bir çağda, markanızın video pazarlama stratejileriyle nasıl öne çıkabileceğini keşfedin.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=400&h=250",
      date: "15 Temmuz 2025",
      category: "Video Pazarlama",
      author: "Dijital Ajans",
      readTime: "7 dk"
    },
    {
      id: 3,
      title: "Küçük İşletmeler İçin Sosyal Medya İpuçları",
      excerpt: "Büyük bütçeler olmadan da sosyal medyada etkili olabilirsiniz. Hedef kitlenize ulaşmanızı sağlayacak pratik ve yaratıcı ipuçları burada.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400&h=250",
      date: "08 Temmuz 2025",
      category: "Sosyal Medya",
      author: "Dijital Ajans",
      readTime: "6 dk"
    }
  ];

  return `
    <section id="blog" class="blog-section py-5">
      <div class="container">
        <div class="row mb-5">
          <div class="col-12 text-center">
            <h2 class="section-title">
              <i class="fas fa-blog me-3"></i>Blog & İçgörüler
            </h2>
            <p class="section-subtitle">
              Dijital dünyadan en son haberler, trendler ve uzman ipuçları ile işinizi büyütün.
            </p>
          </div>
        </div>
        
        <div class="row g-4">
          ${posts.map((post, index) => `
            <div class="col-lg-4 col-md-6" style="animation: fadeInUp 1s ease ${index * 0.2}s both;">
              <article class="modern-blog-card h-100">
                <div class="blog-image-wrapper">
                  <img src="${post.image}" alt="${post.title}" class="blog-image" loading="lazy">
                  <div class="blog-overlay">
                    <span class="blog-category">${post.category}</span>
                  </div>
                </div>
                <div class="blog-content">
                  <div class="blog-meta">
                    <span class="blog-date">
                      <i class="fas fa-calendar-alt me-1"></i>${post.date}
                    </span>
                    <span class="blog-read-time">
                      <i class="fas fa-clock me-1"></i>${post.readTime}
                    </span>
                  </div>
                  <h3 class="blog-title">${post.title}</h3>
                  <p class="blog-excerpt">${post.excerpt}</p>
                  <div class="blog-footer">
                    <div class="blog-author">
                      <i class="fas fa-user-circle me-2"></i>
                      <span>${post.author}</span>
                    </div>
                    <button type="button" class="btn-read-more" data-bs-toggle="modal" data-bs-target="#blogModal${post.id}">
                      Devamını Oku
                      <i class="fas fa-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          `).join('')}
        </div>
        
        ${!isStandalonePage ? `
        <div class="text-center mt-5">
          <div class="blog-cta-section">
            <h4 class="mb-3">Daha Fazla İçerik İster misiniz?</h4>
            <p class="text-muted mb-4">Dijital pazarlama dünyasından güncel haberler ve uzman tavsiyeleri için blog sayfamızı ziyaret edin.</p>
            <a href="blog.html" class="btn-blog-all">
              <i class="fas fa-book-open me-2"></i>
              Tüm Blog Yazılarını Görüntüle
            </a>
          </div>
        </div>
        ` : ''}
      </div>
    </section>
  `;
} 