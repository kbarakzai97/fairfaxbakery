import { useState } from 'react'
import breakfast from '../assets/breakfeast.jpeg'
import baklava from '../assets/backlava.jpg'
import bagels from '../assets/bagels.jpg'
import coffee from '../assets/coffee.webp'
import muffins from '../assets/muffins.jpg'
import muffinsDisplay from '../assets/muffinsdisplay.webp'
import pogaca from '../assets/pogaca.webp'
import tea from '../assets/tea.jpg'
import './Home.css'

const galleryImages = [
  { src: bagels, alt: 'Fresh bagels' },
  { src: muffins, alt: 'Assorted muffins' },
  { src: pogaca, alt: 'Pogaca pastry' },
  { src: coffee, alt: 'Cup of coffee' },
  { src: tea, alt: 'Turkish coffee and tea setup' },
  { src: muffinsDisplay, alt: 'Muffin display case' },
  { src: baklava, alt: 'Baklava pastry' },
]

const reviews = [
  {
    text: "Fairfax Bakery is genuinely one of a kind in the DMV area. As someone who appreciates both cultural authenticity and great hospitality, this place delivers on both. From the moment you walk in, you're welcomed with warmth and the aroma of fresh-baked goods.",
    author: '',
  },
  {
    text: "This Turkish breakfast platter was BONKERS—so insanely good. I'm a nomad, and eating this food convinced me on my first bite of sucuk to fly to Turkiye this year. I'm a foodie too and this was so sensational... I'm filled up but still ate my friend's leftovers cause it's just so yummy... I will be back later this week, and I'm taking pastries to go. I can't get enough. And don't forget the Turkish tea!!!",
    author: 'Amber',
  },
  {
    text: "Absolutely loved this Turkish bakery! The sandwiches were fresh, flavorful, and generously made. Their pastries were soft, buttery, and perfectly baked, and the baklava was some of the best I’ve had — rich, crispy, and not overly sweet. Everything tasted authentic and homemade. On top of that, the prices were very reasonable for the quality and portion sizes. Friendly service and a welcoming atmosphere make this a spot I’ll definitely keep coming back to!",
    author: 'Karolina'
  },
  {
    text: "The food was so good! Especially the honey cake, I highly recommend this! It’s so good and not too sweet. Just perfect! They have a wide variety of sweet and savory items too!",
    author: 'YiYi'
  }

]

const REVIEWS_PER_PAGE = 2

function Home() {
  const [reviewPage, setReviewPage] = useState(0)
  const totalReviewPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE)
  const visibleReviews = reviews.slice(
    reviewPage * REVIEWS_PER_PAGE,
    reviewPage * REVIEWS_PER_PAGE + REVIEWS_PER_PAGE
  )

  const showPreviousReviews = () => {
    setReviewPage((page) => (page - 1 + totalReviewPages) % totalReviewPages)
  }

  const showNextReviews = () => {
    setReviewPage((page) => (page + 1) % totalReviewPages)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-image">
          <img src={breakfast} alt="Assorted breakfast spread" />
        </div>
        <div className="hero-content">
          <h1>Your Local Bakery</h1>
          <p>Kickstart your morning with us!</p>
          <button className="order-btn">Order Online</button>
        </div>
      </section>

      <section className="gallery">
        <h2 className="gallery-heading">Freshly Baked</h2>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              className={`gallery-item${index === 0 ? ' gallery-item-tall' : ''}`}
              key={image.src}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </section>

    <section className="about">
        <h2>About Us</h2>
        <p>
            Our bakers start work before the sun rises each day to ensure that every batch is as fresh as possible before it gets to you. 
            The warm smell of baking often escapes onto the street before we've even opened. We're dedicated to kickstarting your morning with warm 
            muffins, croissants, breakfast sandwiches and a cup of hot coffee!
        </p>
        <p>
            We work with local suppliers to source the freshest and most authentic ingredients, and use old-fashioned techniques to ensure the highest quality. 
            Our goal is to make your tastebuds happy!
        </p>
        <p>

At Fairfax bakery, our secret to quality is to keep it simple: We only use the best ingredients to make our delicious products. We never use artificial 
flavors, sweeteners, colors, preservatives.
 Come and Join us for breakfast and enjoy daily baked bagels, sandwiches, croissants, Julius Meinl 
specialty coffee, Fruit Smoothies, Gourmet Baklava, Turkish Delights and much more
        </p>

      </section>

      <section className="reviews">
        <button
          className="reviews-arrow reviews-arrow-prev"
          aria-label="Previous review"
          onClick={showPreviousReviews}
        >
          &lt;
        </button>
        <h2 className="reviews-heading">
          What <span className="reviews-heading-accent">customers</span> are saying about us
        </h2>
        <div className="reviews-track">
          {visibleReviews.map((review) => (
            <div className="review-card" key={review.author || review.text}>
              <div className="review-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>
              {review.text.split('\n\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {review.author && <p className="review-author">-{review.author}</p>}
            </div>
          ))}
        </div>
        <button
          className="reviews-arrow reviews-arrow-next"
          aria-label="Next review"
          onClick={showNextReviews}
        >
          &gt;
        </button>
      </section>

      <section className="location">
        <h2 className="location-heading">Our Location</h2>
        <div className="location-content">
          <iframe
            className="location-map"
            title="Fairfax Bakery location"
            src="https://www.google.com/maps?q=11211+Lee+Highway+J,+Fairfax,+Virginia+22030&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="location-details">
            <p className="location-address">
              11211 Lee Highway J,
              <br />
              Fairfax, Virginia 22030, United States
            </p>
            <p className="location-hours">
              Mon - Thurs. 6:00 am - 2:00 pm
              <br />
              Friday 6:00 am - 4:00 pm
              <br />
              Saturday 7:00 am - 4:00 pm
              <br />
              Sunday 7:00 am - 2:00 pm
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
