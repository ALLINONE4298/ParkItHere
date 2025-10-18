import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import Hero from "../../components/home/hero.component";
import Features from "../../components/home/features.component";
import Info from "../../components/home/info.component";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Info />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
