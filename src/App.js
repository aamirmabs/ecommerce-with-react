import "./App.css";
import SampleComponent from "./components/SampleComponent";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import ProductCard from "./components/ProductCard/ProductCard";
import { useProductData } from "./contexts/ProductDataContext";

function App() {
  const { productData } = useProductData();

  return (
    <div className="App">
      <h1>Clean React</h1>
      <SampleComponent />
      <ProductGrid>
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
        <ProductCard product={productData.keyboard001} />
      </ProductGrid>
    </div>
  );
}

export default App;
