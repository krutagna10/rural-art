import Container from "../../components/UI/Container/Container";
import Layout from "../../layout/Layout";
import Section from "../../components/UI/Section/Section";
import "./Login.css";

function Login() {
  return (
    <Layout>
      <Section className="login-section">
        <Container className="login">
          <form className="login__form flow">
            <div className="login__heading-wrapper">
              <h1 className="login__heading">Sign In</h1>
            </div>
            <div className="login__content flow">
              <input
                className="login__input"
                type="text"
                placeholder="Username"
              />
              <input
                className="login__input"
                type="password"
                placeholder="Password"
              />
              <button className="login__btn-sign-in btn btn--peach">
                Sign In
              </button>
              <div className="login__sign-up-wrapper">
                <p className="login__sign-up-label">Don't have an account?</p>
                <button className="login__btn-sign-up">Sign up</button>
              </div>
            </div>
          </form>
        </Container>
      </Section>
    </Layout>
  );
}

export default Login;
