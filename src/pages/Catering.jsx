import './Catering.css'
import bagelCroissantBites from '../assets/catering_bagelandcroissantbites.jpg'
import muffinTray from '../assets/catering_muffintray.jpg'
import boxedLunch from '../assets/catering_boxedlunch.jpg'
import muffinBites from '../assets/catering_muffinbites.jpg'
import bitesMinis from '../assets/catering_bitesminis.jpg'
import sandwichTray from '../assets/catering_sandwhichtray.jpg'
import baklavaTray from '../assets/cateringbacklavatray.jpg'
import coffeeTea from '../assets/cateringcoffeetea.jpg'

const menuItems = [
  {
    name: 'Bagel & Croissant Bites',
    description:
      'Assortment of Freshly Baked Bagels and/or Croissants with 3 selections of Cream Cheese',
    image: bagelCroissantBites,
    price: '$45',
  },
  {
    name: 'Signature Muffin Tray',
    description: 'Assortment of Freshly Baked 3 Dozen Mini Muffins and 8 Jumbo Muffins',
    image: muffinTray,
    price: '$55',
  },
  {
    name: 'Boxed Lunch',
    description: 'Your Choice of Sandwich, Chips, Fruit and 2 mini muffins',
    image: boxedLunch,
    price: '$14 per box',
  },
  {
    name: 'Muffin Bites',
    description: 'Assortment of 3 Dozen Freshly Baked Mini Muffins',
    image: muffinBites,
    price: '$35',
  },
  {
    name: 'Bites and Minis',
    description:
      'Variety of Assorted Mini Muffins and bite size bagels with your choice Cream Cheeses',
    image: bitesMinis,
    price: '$50',
  },
  {
    name: 'Sandwich Tray',
    description: 'Halved Deli Sandwiches of Your Choice.',
    image: sandwichTray,
    price: '$65',
  },
  {
    name: 'Baklava Variety Tray',
    description:
      'Assortment of 2 Dozen Pistachio or Walnut Baklava served on individual liners.',
    image: baklavaTray,
    price: '$40',
  },
  {
    name: 'Coffee or Tea To Go Box',
    description:
      'Choice of Dark, Breakfast Blend, Decaf Coffee or Choice of Iced Julius Meinl Tea on the Rocks in Disposable container holds cold or hot for 2 hours. (Serves eight 12 oz cups)',
    image: coffeeTea,
    price: '$25',
  },
  {
    name: 'Make your own Party Trays',
    description: 'Let us know your party size and your preferences, we will prepare it for you.',
    price: 'Custom pricing',
  },
]

function Catering() {
  return (
    <section className="catering">
      <h1 className="catering-heading">Catering Menu</h1>
      <div className="catering-grid">
        {menuItems.map((item) => (
          <div className="catering-item" key={item.name}>
            {item.image && (
              <img className="catering-item-image" src={item.image} alt={item.name} />
            )}
            <div className="catering-item-copy">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p className="catering-item-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catering
