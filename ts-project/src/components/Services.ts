import { t } from '../language';

export default function Services(): string {
  return `
    <section id="services" class="services-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">${t('services_section_title')}</h2>
                    <p class="section-subtitle">${t('services_section_subtitle')}</p>
                </div>
            </div>
            <div class="row g-4">
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-laptop-code"></i>
                          </div>
                          <h3>${t('service_card_1_title')}</h3>
                          <p>${t('service_card_1_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal1">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-chart-line"></i>
                          </div>
                          <h3>${t('service_card_2_title')}</h3>
                          <p>${t('service_card_2_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal2">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fab fa-google"></i>
                          </div>
                          <h3>${t('service_card_3_title')}</h3>
                          <p>${t('service_card_3_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal3">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-hashtag"></i>
                          </div>
                          <h3>${t('service_card_4_title')}</h3>
                          <p>${t('service_card_4_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal4">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-palette"></i>
                          </div>
                          <h3>${t('service_card_5_title')}</h3>
                          <p>${t('service_card_5_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal5">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-qrcode"></i>
                          </div>
                          <h3>${t('service_card_6_title')}</h3>
                          <p>${t('service_card_6_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal6">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-bullhorn"></i>
                          </div>
                          <h3>${t('service_card_7_title')}</h3>
                          <p>${t('service_card_7_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal7">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-shopping-cart"></i>
                          </div>
                          <h3>${t('service_card_8_title')}</h3>
                          <p>${t('service_card_8_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal8">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="service-card fade-in">
                        <div class="service-card-content">
                          <div class="service-icon">
                              <i class="fas fa-code"></i>
                          </div>
                          <h3>${t('service_card_9_title')}</h3>
                          <p>${t('service_card_9_desc')}</p>
                        </div>
                        <div class="service-card-footer">
                          <button type="button" class="btn-primary-custom" data-bs-toggle="modal" data-bs-target="#serviceModal9">${t('service_card_button')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
} 