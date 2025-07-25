import TrustedBy from '../components/trustedby/TrustedBy';
import HeaderNavBar from '../components/header/HeaderNavBar';
import HeaderTopBar from '../components/header/HeaderTopBar';
import HeroSection from '../components/hero/HeroSection';
import Highlights from '../components/highlight/Highlights';
import BestsellerProducts from '../components/bestsellers/BestsellerProducts';
import AboutSection from '../components/about/AboutSection';
import WhatWeOffer from '../components/whatweoffer/WhatWeOffer';
import FeaturedPosts from '../components/featuredpost/FeaturedPosts';
import Footer from '../components/footer/Footer';

export default function HomePage() {
  return (
    <>
      <HeaderTopBar />
      <HeaderNavBar />
      <HeroSection />
      <TrustedBy />
      <Highlights />
      <BestsellerProducts />
      <AboutSection />
      <WhatWeOffer />
      {/* <FeaturedPosts /> */}
      {/* <Footer /> */}
    </>
  );
}
