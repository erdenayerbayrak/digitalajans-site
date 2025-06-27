import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.css';

import Header from './components/Header';
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';
import { initializePage } from './app';

function renderWhatWeDoPage(): void {
  const app = document.getElementById('app');

  if (app) {
    app.innerHTML = `
      ${Header()}
      <main>
        ${WhatWeDo(true)}
      </main>
      ${Footer()}
    `;
  }
}

// Initialize the page with the specific render function
document.addEventListener('DOMContentLoaded', () => {
  initializePage(renderWhatWeDoPage);
}); 