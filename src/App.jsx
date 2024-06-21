import { Navigate, Route, Routes } from "react-router-dom";
import { AuthForm } from "./components/pages/AuthForm";
import { Home } from "./components/pages/Home.jsx";
//import "./App.css";
import { UserProvider } from "./context/UserContext";
// import { NavbarMenu } from "./components/Navbar.jsx";
import { Compras } from "./components/pages/Compras.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";
import { Perfil } from "./components/pages/Perfil.jsx";
import Footer from "./components/pages/Footer.jsx";
import NavbarMenu from "./components/Navbar.jsx";
import { DetailProduct } from "./components/pages/DetailProduct.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { Cart } from "./components/Cart.jsx";
import { Log } from "./components/Log.jsx";

function App() {

  return (
    <>

      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <NavbarMenu />
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/home/:id" element={<DetailProduct />}></Route>
              <Route path="/sesion" element={<AuthForm />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/logout" element={<Log />}></Route>
              {/* <Route path="/car" element={<Cart/>}></Route> */}
              {/* <Route path="/login" element={<Auth />}> </Route> */}
              <Route element={<ProtectedRoute />}>
                <Route path="/compras" element={<Compras />}></Route>
                <Route path="/perfil" element={<Perfil />}></Route>
              </Route>
              <Route path="/*" element={<Navigate to={"/home"} />}></Route>
            </Routes>
            <Footer />
          </ProductProvider>
        </CartProvider>
      </UserProvider >

    </>
  );
}

export default App;
