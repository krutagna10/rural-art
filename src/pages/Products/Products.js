import Layout from "../../layout/Layout";
import Container from "../../components/UI/Container/Container";
import ProductsList from "../../components/ProductsList/ProductsList";
import data from "./data";
import { useState } from "react";

function Products() {
  const [products, setProducts] = useState(data);

  return (
    <Layout>
      <ProductsList products={products} />
    </Layout>
  );
}

export default Products;
