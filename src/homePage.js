import restaurantImg from './restaurant.jpg';

function renderHomePage() {
  const container = document.querySelector('#content');

  // Add image to home page
  const img = document.createElement('img');
  img.src = restaurantImg;
  container.appendChild(img);

  // Add heading to home page
  const h1 = document.createElement('h1');
  h1.textContent = "The Ferryman's Inn";
  container.appendChild(h1);

  // Add description to home page
  const paragraph = document.createElement('p');
  paragraph.textContent = "Tucked away on the banks of Loch Tay, The Ferryman’s Inn offers a warm welcome and a dining experience that’s both relaxed and refined. Our small, scenic restaurant celebrates everything we love about Scotland – its natural beauty, warm hospitality, and exceptional local produce. Our thoughtfully crafted menu puts flavour first, with ingredients sourced from some of Perthshire’s best local suppliers. Wherever possible, we keep things close to home, making as much as possible in-house and showcasing the finest seasonal ingredients and an ever changing seasonal menu.";
  container.appendChild(paragraph);

  // Add opening hours section to home page
  const openingHoursContainer = document.createElement('div');
  openingHoursContainer.classList.add('opening-hours');

  const openingHoursHeading = document.createElement('h2');
  openingHoursHeading.textContent = 'Opening Hours';
  openingHoursContainer.appendChild(openingHoursHeading);

  // Add a row for each day's opening hours
  for (let i = 0; i < 7; i++) {
    const hourRow = document.createElement('div');
    hourRow.classList.add('hour-row');

    const dayOfWeek = document.createElement('h3');
    
    switch (i) {
      case 0:
        dayOfWeek.textContent = 'Monday';
        break;
      case 1:
        dayOfWeek.textContent = 'Tuesday';
        break;
      case 2:
        dayOfWeek.textContent = 'Wednesday';
        break;
      case 3:
        dayOfWeek.textContent = 'Thursday';
        break;
      case 4:
        dayOfWeek.textContent = 'Friday';
        break;
      case 5:
        dayOfWeek.textContent = 'Satruday';
        break;
      case 6:
        dayOfWeek.textContent = 'Saturday';
        break;
      default:
        break;
    }

    hourRow.appendChild(dayOfWeek);

    const hours = document.createElement('p');

    switch (i) {
      case 0:
      case 1:
      case 2:
      case 3:
        hours.textContent = '12:00 - 21:00';
        break;
      case 4:
        hours.textContent = '12:00 - 22:00';
        break;
      case 5:
      case 6:
        hours.textContent = '10:00 - 22:00';
        break;
      default:
        break;
    }

    hourRow.appendChild(hours);

    openingHoursContainer.appendChild(hourRow);
  }

  container.appendChild(openingHoursContainer);
}

export { renderHomePage };