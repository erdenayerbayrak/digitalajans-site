import { t } from '../language';

export default function Modals(): string {
  const blogPosts = [
    {
      id: 1,
      title: "Markanız İçin Neden Bir Blog Gerekli?",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070",
      content: `
        <p class="lead">Birçok şirket blog açmayı gereksiz bir zaman kaybı olarak görür. Ancak bu, dijital pazarlamanın en güçlü silahlarından birini göz ardı etmek demektir.</p>
        <p>Blog yazmak, markanızın kişiliğini ve uzmanlığını sergilemek için eşsiz bir fırsattır. Müşterilerinizin sorunlarına çözüm sunan, onlara ilham veren ve sektörünüzdeki son gelişmeler hakkında bilgi veren yazılarla, potansiyel müşterilerinizle aranızda bir güven köprüsü kurarsınız.</p>
        <h5>SEO İçin Neden Önemli?</h5>
        <p>Arama motorları, düzenli olarak güncellenen ve kaliteli içerik üreten web sitelerini sever. Her yeni blog yazısı, Google'ın sitenizi taraması ve dizine eklemesi için yeni bir sayfadır. Bu da daha fazla anahtar kelimede sıralama almanıza ve organik trafiğinizi artırmanıza yardımcı olur.</p>
        <ul>
          <li><i class="fas fa-check-circle"></i> Sektörünüzde otorite olmanızı sağlar.</li>
          <li><i class="fas fa-check-circle"></i> Web sitenize sürekli yeni ziyaretçi çeker.</li>
          <li><i class="fas fa-check-circle"></i> Sosyal medya paylaşımlarınız için içerik kaynağı oluşturur.</li>
        </ul>
        <blockquote class="blockquote">"İçerik kraldır." - Bill Gates</blockquote>
        <p>Unutmayın, blog sadece ürünlerinizi tanıtmak için değil, aynı zamanda hedef kitlenizle bir topluluk oluşturmak için de vardır. Hikayenizi anlatın, onlarınkini dinleyin ve markanızı bir sonraki seviyeye taşıyın.</p>
      `
    },
    {
      id: 2,
      title: "Video İçeriğin Pazarlamadaki Yükselişi",
      image: "https://images.unsplash.com/photo-1550907439-6a3c8983ce4b?auto=format&fit=crop&q=80&w=2070",
      content: `
        <p class="lead">İstatistikler yalan söylemez: İnsanlar okumaktan çok izlemeyi seviyor. YouTube'un dünyanın en büyük ikinci arama motoru olması tesadüf değil.</p>
        <p>Video içerikler, karmaşık konuları basitleştirmenin, ürünlerinizin kullanımını göstermenin ve marka hikayenizi daha duygusal bir bağ kurarak anlatmanın en etkili yoludur. Kısa ve dinamik videolar, özellikle sosyal medya platformlarında inanılmaz bir etkileşim oranına sahiptir.</p>
        <h5>Başlarken Nelere Dikkat Edilmeli?</h5>
        <p>Profesyonel bir prodüksiyon ekibine ihtiyacınız yok. Günümüz akıllı telefonları, yüksek kaliteli videolar çekmek için fazlasıyla yeterli. Önemli olan, iyi bir senaryo, temiz bir ses kaydı ve yaratıcı bir kurgudur.</p>
        <ul>
          <li><i class="fas fa-video"></i> Ürün tanıtım ve kullanım videoları çekin.</li>
          <li><i class="fas fa-comments"></i> Müşteri referanslarını videoya alın.</li>
          <li><i class="fas fa-lightbulb"></i> Sektörünüzle ilgili eğitici "nasıl yapılır?" videoları hazırlayın.</li>
        </ul>
        <blockquote class="blockquote">"Bir resim bin kelimeye bedeldir, bir video ise milyonlarcasına."</blockquote>
        <p>Video, pazarlama stratejinizin merkezinde yer almalı. Kitlenizin dikkatini çekin ve onları markanızın bir parçası yapın.</p>
      `
    },
    {
      id: 3,
      title: "Küçük İşletmeler İçin Sosyal Medya İpuçları",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1974",
      content: `
        <p class="lead">Sosyal medya, sadece büyük markaların oyun alanı değildir. Doğru stratejilerle küçük işletmeler de bu platformlarda harikalar yaratabilir.</p>
        <p>Her platformda olmaya çalışmak yerine, hedef kitlenizin en çok vakit geçirdiği 1-2 platforma odaklanın. Instagram görsel odaklıyken, LinkedIn daha profesyonel bir kitleye hitap eder. Stratejinizi platforma göre şekillendirin.</p>
        <h5>Etkileşimi Artırmanın Yolları</h5>
        <p>Sadece ürün paylaşımı yapmayın. Takipçilerinize sorular sorun, anketler düzenleyin, kamera arkası görüntüleri paylaşın. Onları konuşturun ve markanızla bir bağ kurmalarını sağlayın.</p>
        <ul>
          <li><i class="fas fa-thumbs-up"></i> Değerli ve paylaşılabilir içerikler üretin.</li>
          <li><i class="fas fa-user-friends"></i> Diğer markalarla ve influencer'larla iş birliği yapın.</li>
          <li><i class="fas fa-ad"></i> Düşük bütçeli de olsa hedefli reklamlarla yeni kitlelere ulaşın.</li>
        </ul>
        <blockquote class="blockquote">"Sosyal medyada amaç yankı odası yaratmak değil, diyalog başlatmaktır."</blockquote>
        <p>Sabırlı olun, sonuçları analiz edin ve stratejinizi sürekli olarak iyileştirin. Küçük adımlarla büyük bir topluluk oluşturabilirsiniz.</p>
      `
    }
  ];

  const serviceModals = [
    {
      id: 1,
      modalId: "serviceModal1",
      title: t('service_modal_1_title'),
      content: t('service_modal_1_content')
    },
    {
      id: 2,
      modalId: "serviceModal2",
      title: t('service_modal_2_title'),
      content: t('service_modal_2_content')
    },
    {
      id: 3,
      modalId: "serviceModal3",
      title: t('service_modal_3_title'),
      content: t('service_modal_3_content')
    },
    {
      id: 4,
      modalId: "serviceModal4",
      title: t('service_modal_4_title'),
      content: t('service_modal_4_content')
    },
    {
      id: 5,
      modalId: "serviceModal5",
      title: t('service_modal_5_title'),
      content: t('service_modal_5_content')
    },
    {
      id: 6,
      modalId: "serviceModal6",
      title: t('service_modal_6_title'),
      content: t('service_modal_6_content')
    },
    {
      id: 7,
      modalId: "serviceModal7",
      title: t('service_modal_7_title'),
      content: t('service_modal_7_content')
    },
    {
      id: 8,
      modalId: "serviceModal8",
      title: t('service_modal_8_title'),
      content: t('service_modal_8_content')
    },
    {
      id: 9,
      modalId: "serviceModal9",
      title: t('service_modal_9_title'),
      content: t('service_modal_9_content')
    }
  ];

  return `
    <!-- WhatsApp Button -->
    <div class="whatsapp-float">
                      <a href="https://wa.me/905050711808?text=Merhaba, dijital pazarlama hizmetleriniz hakkında bilgi almak istiyorum." target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
    </div>

    <!-- Back to Top Button -->
    <a href="#" class="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </a>

    <!-- Cookie Consent -->
    <div class="cookie-consent">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 col-md-7">
                    <p class="mb-0">
                        <i class="fas fa-cookie-bite me-2"></i>
                        Bu web sitesi deneyiminizi geliştirmek için çerezleri kullanır. 
                        <a href="#" class="text-decoration-none">Çerez Politikası</a> hakkında daha fazla bilgi edinin.
                    </p>
                </div>
                <div class="col-lg-4 col-md-5">
                    <div class="cookie-buttons">
                        <button class="cookie-btn accept">
                            <i class="fas fa-check me-1"></i>
                            Kabul Et
                        </button>
                        <button class="cookie-btn decline">
                            <i class="fas fa-times me-1"></i>
                            Reddet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Blog Modals -->
    ${blogPosts.map(post => `
      <div class="modal fade" id="blogModal${post.id}" tabindex="-1" aria-labelledby="blogModalLabel${post.id}" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="blogModalLabel${post.id}">${post.title}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="blog-modal-image" style="background-image: url('${post.image}');"></div>
              <div class="blog-modal-content">
                ${post.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('')}

    <!-- Service Modals -->
    ${serviceModals.map(service => `
      <div class="modal fade" id="${service.modalId}" tabindex="-1" aria-labelledby="${service.modalId}Label" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="${service.modalId}Label">${service.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${service.content}
            </div>
          </div>
        </div>
      </div>
    `).join('')}
  `;
} 