import "./styles.css";
import { renderHomePage } from './homePage.js';

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
        // render menu module
      } else {
        // render about module
      }
    });
  }); 
}

renderHomePage();
switchTabs();