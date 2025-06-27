import { t } from '../language';

export default function Testimonials(isStandalonePage: boolean = false): string {
  const testimonialItems = [
    {
      stars: 5,
      text: "Web sitemiz sayesinde online satışlarımız %300 arttı. Profesyonel ekipleri ve sürekli destek hizmetleri çok başarılı. Kesinlikle tavsiye ederim.",
      avatar: "AK",
      author: "Ahmet Kaya",
      title: "E-ticaret İşletmeci"
    },
    {
      stars: 5,
      text: "SEO çalışmaları sayesinde Google'da ilk sayfada yer almaya başladık. Organik trafiğimiz 6 ayda %250 arttı. Çok memnunuz.",
      avatar: "EÖ",
      author: "Elif Özkan",
      title: "Restoran Sahibi"
    },
    {
      stars: 5,
      text: "Google Ads kampanyalarımız çok başarılı. ROI'miz sürekli artıyor ve yeni müşteriler kazanıyoruz. Profesyonel yaklaşımları mükemmel.",
      avatar: "MÇ",
      author: "Mehmet Çelik",
      title: "Danışmanlık Firması"
    },
    {
      stars: 5,
      text: "Sosyal medya hesaplarımız hiç bu kadar aktif olmamıştı. Yaratıcı içerikler ve etkileşim odaklı stratejileri sayesinde marka bilinirliğimiz tavan yaptı.",
      avatar: "ZY",
      author: "Zeynep Yılmaz",
      title: "Moda Blogger"
    },
    {
      stars: 5,
      text: "Kurumsal kimlik çalışmamız tam istediğimiz gibi oldu. Modern, şık ve markamızı yansıtan bir tasarım ortaya çıktı. Tüm süreci profesyonelce yönettiler.",
      avatar: "İD",
      author: "İsmail Demir",
      title: "İnşaat Şirketi Sahibi"
    },
    {
      stars: 5,
      text: "Dijital pazarlama konusundaki uzmanlıkları sayesinde doğru hedef kitleye ulaştık. Reklam bütçemizi en verimli şekilde kullanıyorlar.",
      avatar: "FT",
      author: "Fatma Tunç",
      title: "Güzellik Merkezi İşletmecisi"
    }
  ];

  const itemsToDisplay = isStandalonePage ? testimonialItems : testimonialItems.slice(0, 3);

  return `
    <section id="testimonials" class="testimonials-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">${t('testimonials_section_title')}</h2>
                    <p class="section-subtitle">${t('testimonials_section_subtitle')}</p>
                </div>
            </div>
            <div class="row g-4">
                ${itemsToDisplay.map(item => `
                <div class="col-lg-4 col-md-6">
                    <div class="testimonial-card fade-in">
                        <div class="testimonial-rating">
                            ${Array(item.stars).fill(0).map(() => '<i class="fas fa-star"></i>').join('')}
                        </div>
                        <p class="testimonial-text">"${item.text}"</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">${item.avatar}</div>
                            <div class="author-info">
                                <h5>${item.author}</h5>
                                <p>${item.title}</p>
                            </div>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
            ${!isStandalonePage ? `
            <div class="text-center mt-5">
              <a href="testimonials.html" class="btn-secondary-custom">
                ${t('view_all_testimonials')}
              </a>
            </div>
            ` : ''}
        </div>
    </section>
  `;
}