import kenmoreImg from './kenmore.jpg';

function renderAboutPage() {
  const container = document.querySelector('#content');
  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-container');

  // Add heading to about page
  const aboutHeading = document.createElement('h1');
  aboutHeading.textContent = 'About Us';
  aboutContainer.appendChild(aboutHeading);

  // Add description to about page
  const description = document.createElement('p');
  description.innerText = `Welcome to Taymouth Marina, where comfort meets the tranquil shores of Loch Tay in Kenmore, Perthshire, nestled within the breathtaking Highlands of Scotland.
  
  Our bespoke accommodation offers panoramic views of Loch Tay and Ben Lawers, providing the perfect backdrop for exploration and relaxation. Conveniently located just a short drive from major Scottish cities and airports, Taymouth Marina promises accessibility without compromising on serenity.
  
  At the heart of our resort lies our uniquely Scottish HotBox Spa and newly launched HotBoat Floating Sauna, offering unforgettable experiences amidst idyllic surroundings. Whether berthing at our Marina, indulging in sumptuous local cuisine at the Ferryman’s Inn, our Lochside Gastro bar, or immersing yourself in our wild wellness ethos, Taymouth Marina promises a blend of relaxation and adventure unlike any other.`;

  aboutContainer.append(description);

  // Add address to about page
  const addressContainer = document.createElement('div');
  addressContainer.classList.add('address-container');
  const addressHeading = document.createElement('h2');
  addressHeading.textContent = 'Address';
  const address = document.createElement('p');
  address.innerText = `Taymouth Marina
  Kenmore
  Perthshire
  PH15 2HW`;
  addressContainer.append(addressHeading, address);
  aboutContainer.appendChild(addressContainer);

  // Add image to about page
  const img = document.createElement('img');
  img.src = kenmoreImg;
  aboutContainer.appendChild(img);

  container.appendChild(aboutContainer);
}

export { renderAboutPage };