import TrustedBy from '../components/trustedby/TrustedBy';
import HeaderNavBar from '../components/header/HeaderNavBar';
import HeaderTopBar from '../components/header/HeaderTopBar';
import HeroSection from '../components/hero/HeroSection';
import Highlights from '../components/highlights/Highlights';

export default function HomePage() {
  return (
    <>
      <HeaderTopBar />
      <HeaderNavBar />
      <HeroSection />
      <TrustedBy />
      <Highlights />
    </>
  );
}
