import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";

function Home() {
  return (
    <Layout>
      <section className="hero-section">
        <Container className="hero">
          <div className="hero__text-content">
            <h2 className="hero__heading"></h2>
          </div>
          <h1>Hero</h1>
        </Container>
      </section>
    </Layout>
  );
}

export default Home;
