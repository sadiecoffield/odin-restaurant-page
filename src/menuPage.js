function renderMenuPage() {
  const container = document.querySelector('#content');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // Add heading to menu page
  const menuHeading = document.createElement('h1');
  menuHeading.textContent = 'Menu';
  menuContainer.appendChild(menuHeading);

  // Add starters container
  const startersContainer = document.createElement('div');
  const startersHeading = document.createElement('h2');
  startersHeading.textContent = 'Starters';
  startersContainer.appendChild(startersHeading);
  createMenuItems('starter', 4, startersContainer);
  menuContainer.appendChild(startersContainer);

  // Add mains container
  const mainsContainer = document.createElement('div');
  const mainsHeading = document.createElement('h2');
  mainsHeading.textContent = 'Mains';
  mainsContainer.appendChild(mainsHeading);
  createMenuItems('main', 7, mainsContainer);
  menuContainer.appendChild(mainsContainer);

  // Add desserts container
  const dessertsContainer = document.createElement('div');
  const dessertsHeading = document.createElement('h2');
  dessertsHeading.textContent = 'Desserts';
  dessertsContainer.appendChild(dessertsHeading);
  createMenuItems('dessert', 4, dessertsContainer);
  menuContainer.appendChild(dessertsContainer);

  container.appendChild(menuContainer);
}

// Create menu items for each type of item e.g. starter, main etc.
function createMenuItems(itemType, numOfItems, startersContainer) {
  for (let i = 0; i < numOfItems; i++) {
    const optionContainer = document.createElement('div');
    const itemName = document.createElement('p');
    const itemDescription = document.createElement('p');
    const itemPrice = document.createElement('p');

    if (itemType === 'starter') {
      switch (i) {
        case 0:
          itemName.textContent = 'Fig & Gorgonzola Salad (V/GF)';
          itemDescription.textContent = 'Rocket and balsamic glaze';
          itemPrice.textContent = '£8.00';
          break;
        case 1:
          itemName.textContent = 'Calamari';
          itemDescription.textContent = 'Chilli, citrus aioli';
          itemPrice.textContent = '£8.00';
          break;
        case 2:
          itemName.textContent = 'Crispy Buttermilk Chicken Tenders';
          itemDescription.textContent = 'Cajun mayo';
          itemPrice.textContent = '£8.50';
          break;
        case 3:
          itemName.textContent = 'Mussels Mariniere';
          itemDescription.textContent = 'Sourdough, cream, garlic, parsley';
          itemPrice.textContent = '£11.50';
          break;
        default:
          break;
      }
    } else if (itemType === 'main') {
      switch (i) {
        case 0:
          itemName.textContent = 'Dunkeld Butcher Beef Burger';
          itemDescription.textContent = 'Baby gem, buffalo tomato, relish and fries';
          itemPrice.textContent = '£17.00';
          break;
        case 1:
          itemName.textContent = 'Haddock and Chips';
          itemDescription.textContent = "Handcut chips, mushy peas, freshly made Ferryman's tartare sauce";
          itemPrice.textContent = '£19.00';
          break;
        case 2:
          itemName.textContent = 'Grilled Chicken Breast Salad';
          itemDescription.textContent = 'Strawberry, black olive, mango, honey';
          itemPrice.textContent = '£16.50';
          break;
        case 3:
          itemName.textContent = 'Scotch Rump Steak Frites';
          itemDescription.textContent = 'Café de Paris butter, vine tomatoes';
          itemPrice.textContent = '£23.00';
          break;
        case 4:
          itemName.textContent = 'Margherita Pizza (V)';
          itemDescription.textContent = 'Mozzarella, basil';
          itemPrice.textContent = '£13.00';
          break;
        case 5:
          itemName.textContent = 'Hot Smoked Salmon Pizza';
          itemDescription.textContent = 'Red onion, lemon zest, bianca base';
          itemPrice.textContent = '£16.00';
          break;
        case 6:
          itemName.textContent = 'Prosciutto and Rocket';
          itemDescription.textContent = 'Balsamic glaze';
          itemPrice.textContent = '£16.00';
          break;
        default:
          break;
      }
    } else {
      switch (i) {
        case 0:
          itemName.textContent = 'Mango and Raspberry Pavlova (V/GF)';
          itemDescription.textContent = 'Whipped cream';
          itemPrice.textContent = '£7.00';
          break;
        case 1:
          itemName.textContent = 'White Chocolate and Raspberry Cookie Dough (V)';
          itemDescription.textContent = 'Ice cream, Chantilly cream, chocolate sauce';
          itemPrice.textContent = '£7.00';
          break;
        case 2:
          itemName.textContent = 'Coconut Panna Cotta (VG/GF)';
          itemDescription.textContent = 'Blood orange sorbet, gin macerated berries';
          itemPrice.textContent = '£7.00';
          break;
        case 3:
          itemName.textContent = 'Churros (V)';
          itemDescription.textContent = 'Cinnamon sugar, chocolate sauce';
          itemPrice.textContent = '£6.00';
          break;
        default:
          break;
      }
    }

    optionContainer.append(itemName, itemDescription, itemPrice);
    startersContainer.appendChild(optionContainer);
  }
  console.log(startersContainer);
}

export { renderMenuPage };