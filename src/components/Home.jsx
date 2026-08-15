import breakfast from '../assets/breakfeast.jpeg'
import './Home.css'

function Home() {
  return (
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
  )
}

export default Home
