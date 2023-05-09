import Section from "../UI/Section/Section";
import Container from "../UI/Container/Container";
import "./ProductList.css";

function ProductsList({ products }) {
  return (
    <Section className="products-section">
      <Container className="products grid grid--gap">
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
              <button className="product__btn btn btn--peach">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default ProductsList;
