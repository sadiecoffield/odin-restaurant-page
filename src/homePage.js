import restaurantImg from './restaurant.jpg';

function renderHomePage() {
  const container = document.querySelector('#content');

  // Add image to home page
  const img = document.createElement('img');
  img.src = restaurantImg;
  container.appendChild(img);

  // Add heading to home page
  const h1 = document.createElement('h1');
  h1.textContent = "The Ferryman's";
  container.appendChild(h1);

  // Add description to home page
  const paragraph = document.createElement('p');
  paragraph.textContent = "Welcome to The Ferrymen's, where great food meets warm hospitality. Inspired by the spirit of timeless journeys and riverside gatherings, our restaurant offers a menu crafted from fresh, locally sourced ingredients and flavors that bring people together. Whether you're here for a hearty meal, a casual drink, or a special occasion, The Ferrymen's is the perfect place to relax, enjoy, and share memorable moments.";
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