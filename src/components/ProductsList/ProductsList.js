import Section from "../UI/Section/Section";
import Container from "../UI/Container/Container";
import "./ProductList.css";

function ProductsList({ products }) {
  return (
    <Section>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Index</th>
              <th>Title</th>
              <th>Price</th>
              <th>Image</th>
              <th>Add to Cart Button</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.title}</td>
                <td>Rs {product.price}</td>
                <td>
                  <img
                    className="product__image"
                    src={product.image}
                    alt={product.title}
                  />
                </td>
                <td>
                  <button className="btn btn--peach">Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Section>
  );
}

export default ProductsList;
