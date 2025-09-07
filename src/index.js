import "./styles.css";
import { renderHomePage } from './homePage.js';
import { renderMenuPage } from './menuPage.js';
import { renderAboutPage } from "./aboutPage.js";

function switchTabs() {
  const container = document.querySelector('#content');
  const navButtons = Array.from(document.querySelectorAll('button'));

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Clear content container
      container.innerHTML = '';

      if (btn.textContent === 'Home') {
        renderHomePage();
      } else if (btn.textContent === 'Menu') {
        renderMenuPage();
      } else {
        renderAboutPage();
      }
    });
  }); 
}

renderHomePage();
switchTabs();