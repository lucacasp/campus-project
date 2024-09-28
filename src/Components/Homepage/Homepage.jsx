import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import Title from '../Title/Title';
import Programs from '../Programs/Programs';
import About from '../About/About';
import Campus from '../Campus/Campus';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const HomePage = ({ setPlayState }) => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='What we offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='Testimonials' title='What student says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get In Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer setPlayState={setPlayState} />
    </>
  );
};

export default HomePage;
