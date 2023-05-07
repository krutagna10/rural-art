import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import Button from "../../components/UI/Button/Button";
import Section from "../../components/UI/Section/Section";
import { features } from "./data";
import heroImage from "../../assets/home/hero.png";
import "./Home.css";

function Home() {
  return (
    <Layout>
      <Section className="hero-section">
        <Container className="hero grid grid--items-center grid--gap">
          <div className="hero__text-content grid flow">
            <h1 className="hero__title">
              Discover the Hidden Gems of Rural Art
            </h1>
            <p className="hero__description">
              Rural arts are precious treasures waiting to be uncovered and
              appreciated by the world. Our website showcases the exquisite
              crafts that hold immense value and brings well-deserved
              recognition to the skilled artisans behind them.
            </p>
            <Button className="hero__btn btn btn--peach">Shop Now</Button>
          </div>
          <div className="hero__image-wrapper">
            <img src={heroImage} alt="Hero" />
          </div>
        </Container>
      </Section>

      <Section className="features-section">
        <Container className="features">
          <h2 className="features__title">Why choose Rural Art?</h2>
          <div className="features__content grid grid--gap">
            {features.map((feature, index) => (
              <div className="feature" key={index}>
                <div className="feature__image-wrapper grid grid--items-center">
                  <img src={feature.image} alt="" aria-hidden="true" />
                </div>
                <div className="feature__text-content flow">
                  <h3 className="feature__title">{feature.title}</h3>
                  <p className="feature__description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

export default Home;
