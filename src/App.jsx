import "./App.css";
import CartDrawer from "./components/CartDrawer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="absolute top-0 start-0 w-full h-full bg-overlay"></div>
      <CartDrawer />
    </>
  );
}

export default App;
