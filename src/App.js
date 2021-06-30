import "./App.css";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import { useProductData } from "./contexts/ProductDataContext";

function App() {
  const { productData } = useProductData();

  return (
    <div className="App">
      <h1>Clean React</h1>
      <ProductGrid products={productData}></ProductGrid>
    </div>
  );
}

export default App;
