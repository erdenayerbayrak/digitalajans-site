export default function Faq(): string {
  return `
    <section id="faq" class="faq-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">Sıkça Sorulan Sorular</h2>
                    <p class="section-subtitle">
                        Dijital pazarlama hizmetlerimiz hakkında merak ettikleriniz.
                    </p>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item fade-in">
                            <h3 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Web sitem ne kadar sürede hazır olur?
                                </button>
                            </h3>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Web sitenizin hazırlanma süreci projenin kapsamına ve içeriğin hazır olma durumuna göre değişiklik gösterir. Standart bir kurumsal web sitesi ortalama 2-4 hafta içerisinde teslim edilir. E-ticaret siteleri ise genellikle 4-8 hafta sürmektedir. Detaylı bilgi için bizimle iletişime geçebilirsiniz.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item fade-in">
                            <h3 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    SEO çalışmasından ne zaman sonuç alırım?
                                </button>
                            </h3>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    SEO uzun vadeli bir süreçtir ve ilk sonuçları genellikle 3-6 ay içerisinde alırsınız. Ancak bu süre sektörünüze ve web sitenizin teknik altyapısına ve içerik kalitesine göre değişiklik gösterebilir. Düzenli raporlarla ilerlemenizi takip edebilirsiniz.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item fade-in">
                            <h3 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Google Ads kampanyaları için minimum bütçe ne kadar olmalı?
                                </button>
                            </h3>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Google Ads kampanyaları için önerdiğimiz minimum aylık bütçe sektörünüze ve hedef kitlenize göre değişmekle birlikte genellikle 2.000 TL civarındadır. Ancak daha küçük bütçelerle de başlangıç yapıp, performansa göre bütçeyi artırmak mümkündür. Uzman ekibimiz sizin için en uygun stratejiyi belirleyecektir.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item fade-in">
                            <h3 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Sosyal medya yönetimi hangi platformları kapsıyor?
                                </button>
                            </h3>
                            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Sosyal medya yönetimi hizmetimiz Instagram, Facebook, LinkedIn, Twitter ve Pinterest platformlarını kapsamaktadır. Hedef kitlenizin yoğun olduğu platformlara odaklanarak içerik stratejinizi oluşturuyoruz. YouTube yönetimi ise ekstra paket olarak sunulmaktadır.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item fade-in">
                            <h3 class="accordion-header" id="headingFive">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Web sitemin mobil uyumlu olduğunu nasıl anlarım?
                                </button>
                            </h3>
                            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                <div class="accordion-body">
                                    Web sitenizin mobil uyumlu olup olmadığını Google'ın <a href="https://search.google.com/test/mobile-friendly" target="_blank">Mobile-Friendly Test</a> aracı ile kontrol edebilirsiniz. Ayrıca sitenizi farklı cihazlarda (telefon, tablet) açarak kullanıcı deneyimini test edebilirsiniz. Eğer siteniz mobil uyumlu değilse, responsive tasarım hizmetimizle sitenizi tüm cihazlarda mükemmel görüntülenecek şekilde güncelleyebiliriz.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
} 