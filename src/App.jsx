import "./App.css";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";

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
