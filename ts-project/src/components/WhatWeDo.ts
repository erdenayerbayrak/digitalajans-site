import { t } from '../language';

export default function WhatWeDo(isStandalonePage: boolean = false): string {
  const serviceItems = [
    {
      category: 'web',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80',
      alt: t('service_alt_web'),
      title: t('service_title_web'),
      description: t('service_desc_web'),
      tags: [t('portfolio_tag_web'), t('portfolio_tag_ecommerce'), t('portfolio_tag_startup')]
    },
    {
      category: 'kurumsal',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=2069&q=80',
      alt: t('service_alt_corporate'),
      title: t('service_title_corporate'),
      description: t('service_desc_corporate'),
      tags: [t('portfolio_tag_corporate'), t('portfolio_tag_branding'), t('portfolio_tag_consulting')]
    },
    {
      category: 'seo',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80',
      alt: t('service_alt_seo'),
      title: t('service_title_seo'),
      description: t('service_desc_seo'),
      tags: [t('portfolio_tag_seo'), t('portfolio_tag_analytics'), t('portfolio_tag_content')]
    },
    {
        category: 'social',
        image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=2070&q=80',
        alt: t('service_alt_social'),
        title: t('service_title_social'),
        description: t('service_desc_social'),
        tags: [t('portfolio_tag_social'), t('portfolio_tag_campaign'), t('portfolio_tag_influencer')]
    },
    {
        category: 'ads',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=2039&q=80',
        alt: t('service_alt_ads'),
        title: t('service_title_ads'),
        description: t('service_desc_ads'),
        tags: [t('portfolio_tag_google_ads'), t('portfolio_tag_ppc'), t('portfolio_tag_roi')]
    },
    {
        category: 'web',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2070&q=80',
        alt: t('service_alt_landing'),
        title: t('service_title_landing'),
        description: t('service_desc_landing'),
        tags: [t('portfolio_tag_landing_page'), t('portfolio_tag_conversion'), t('portfolio_tag_ux')]
    }
  ];

  return `
    <section id="what-we-do" class="what-we-do-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="section-title">${t('what_we_do_title')}</h2>
                    <p class="section-subtitle">${t('what_we_do_subtitle')}</p>
                </div>
            </div>
            <div class="service-filters">
                <button class="filter-btn active" data-filter="all">${t('filter_all')}</button>
                <button class="filter-btn" data-filter="web">${t('filter_web')}</button>
                <button class="filter-btn" data-filter="kurumsal">${t('filter_corporate')}</button>
                <button class="filter-btn" data-filter="seo">${t('filter_seo')}</button>
                <button class="filter-btn" data-filter="ads">${t('filter_ads')}</button>
                <button class="filter-btn" data-filter="social">${t('filter_social')}</button>
            </div>
            <div class="row g-4">
                ${serviceItems.map(item => `
                <div class="col-lg-4 col-md-6 service-item" data-category="${item.category}">
                    <div class="service-card">
                        <div class="service-image">
                            <img src="${item.image}" alt="${item.alt}" loading="lazy">
                            <div class="service-overlay">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                        <div class="service-content">
                            <h4>${item.title}</h4>
                            <p>${item.description}</p>
                            <div class="service-tags">
                                ${item.tags.map(tag => `<span class="service-tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                `).join('')}
            </div>
            ${!isStandalonePage ? `
            <div class="text-center mt-5">
              <a href="services.html" class="btn-secondary-custom">
                <i class="fas fa-briefcase me-2"></i>
                ${t('view_all_services')}
              </a>
            </div>
            ` : ''}
        </div>
    </section>
  `;
} 



