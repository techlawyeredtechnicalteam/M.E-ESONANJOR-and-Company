// components/Layout.js
import Header from './Header';
import Footer from './Footer';
import dynamic from 'next/dynamic';

const ScrollToTopButton = dynamic(() => import('./ScrollToTopButton'), { ssr: false });

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;
