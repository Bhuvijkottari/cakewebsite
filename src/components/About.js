
import React from 'react';


const About = () => (
  <div className="about">
    <h2>About Us</h2>
    <h3>Welcome to Batterlicious</h3>
          <p>
            At Batterlicious, we are passionate about creating delicious, fresh, and beautiful cakes for every occasion.
            Our bakery has been serving the community for over 10 years, and we pride ourselves on using only the finest ingredients
            to bring our customers the perfect blend of flavor and elegance.
          </p>
          <p>
            Whether it's a birthday, wedding, or just a special treat for yourself, we offer a wide variety of cakes, from
            traditional flavors to custom creations. Each cake is made with love and attention to detail.
          </p>
    <h2>Contact Form</h2>
    <p>Learn more about our story and passion for baking.</p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default About;
