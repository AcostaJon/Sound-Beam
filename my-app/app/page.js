// components
import Navigation from "./components/navigation"
import Jumbo from "./components/jumbo";
import Subscribe from "./components/subscribe";
// bootstrap component and library
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
// my css
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      {/* Order now button */}
      <Button id="oderNowMobileButton" variant="warning" className="d-lg-none col-3 ms-auto" style={{ fontSize: '12px' }}>Order Now</Button>
      <Jumbo />
      <Subscribe />
    </main>
  );
}
