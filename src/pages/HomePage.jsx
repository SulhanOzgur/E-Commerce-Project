import TrustedBy from '../components/clients/TrustedBy';
import HeaderNavBar from '../components/header/HeaderNavBar';
import HeaderTopBar from '../components/header/HeaderTopBar';
import HeroSection from '../components/hero/HeroSection';

export default function HomePage() {
  return (
    <>
      <HeaderTopBar />
      <HeaderNavBar />
      <HeroSection />
      <TrustedBy />
    </>
  );
}
