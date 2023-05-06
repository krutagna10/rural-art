import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import heroImage from "../../assets/home/hero.png";
import "./Hero.css";

function Home() {
  return (
    <Layout>
      <section className="hero-section">
        <Container className="hero grid">
          <div className="hero__text-content">
            <h1 className="hero__heading">
              A website which brings rural arts to the world
            </h1>
            <p className="hero__description">
              Rural arts are like hidden gems, which world should recognise &
              appreciate with this website. We bring the crafts whose worth is
              huge and also giving hand crafts the recognition that it needs .
            </p>
            <button>Shop Now</button>
          </div>
          <div className="hero__image-wrapper">
            <img src={heroImage} alt="Hero" />
          </div>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
