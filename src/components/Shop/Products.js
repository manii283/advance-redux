import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "1",
    price: "6",
    title: "My First Book",
    description: "This is a first product - amazing!",
  },
  {
    id: "2",
    price: "6",
    title: "My Second Book",
    description: "This is a first product - amazing!",
  },
  {
    id: "3",
    price: "6",
    title: "My Third Book",
    description: "This is a first product - amazing!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />;
        })}
      </ul>
    </section>
  );
};

export default Products;
