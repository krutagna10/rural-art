import Section from "../UI/Section/Section";
import Container from "../UI/Container/Container";
import "./ProductList.css";
import { IonIcon } from "@ionic/react";
import { cart } from "ionicons/icons";

function ProductsList({ products }) {
  return (
    <Section className="products-section">
      <Container className="products">
        <h1 className="products__heading">Our Products</h1>
        <div className="products__content grid grid--gap">
          {products.map((product) => (
            <div className="product">
              <div className="product__image-wrapper">
                <img
                  className="product__image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="product__content grid grid--items-center grid--gap">
                <h3 className="product__title">{product.title}</h3>
                <p className="product__price">Price: &#8377;{product.price}</p>
                <button className="product__btn btn btn--peach flex flex--align-center flex--gap">
                  <IonIcon className="product__btn-icon" icon={cart} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProductsList;
