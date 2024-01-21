import React from "react";
import { useAuth } from "../context/AuthContext";
import storeAPI from "../api/storeAPI";
import ProductCard from "../components/ui/ProductCard";
import Input from "../components/ui/Input";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const { authData } = useAuth();

  React.useEffect(() => {
    const getProducts = async () => {
      const options = {
        method: "get",
        url: "https://api.kalpav.com/api/v1/product/category/retail",
        headers: {
          access_token: authData.access_token,
        },
      };

      const res = await storeAPI(options);
      console.log(res.data.response);
      setProducts(res.data.response);
      setFilteredProducts(res.data.response);
    };

    return () => getProducts();
  }, [authData.access_token]);

  const searchProduct = (e) => {
    e.preventDefault();

    const searchStr = e.target[0].value;

    const filtered = products.filter((product) =>
      product.productCategory.productCategoryName
        .toLowerCase()
        .includes(searchStr.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <section>
      <form
        className="flex items-center flex-col sm:flex-row gap-2 mb-10"
        onSubmit={searchProduct}
      >
        <Input type="search" placeholder="Type to search" />
        <button
          className="btn btn-primary min-w-full sm:min-w-max"
          type="submit"
        >
          Search Products
        </button>
      </form>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {filteredProducts.map((product) => (
          <li key={product.productCategory.orderIndex}>
            <ProductCard
              src={product.productCategory.productCategoryImage}
              title={product.productCategory.productCategoryName}
              saleType={product.productCategory.retail ? "retail" : "wholeSale"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
