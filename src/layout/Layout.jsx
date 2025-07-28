import HeaderTopBar from '../components/header/HeaderTopBar';
import HeaderNavBar from '../components/header/HeaderNavBar';
import Footer from '../components/footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <HeaderTopBar />
      <HeaderNavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
