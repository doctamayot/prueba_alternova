import { Cart } from "./components/cart";
import { Products } from "./components/products";
import { Navbar } from "./components/ui";
import { useCart } from "./hooks/useCart";

function Principal() {
  const { cartItems, handleNewCartItem, qtyItem, deleteCartItem } = useCart();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-xs-12">
            <Products onNewItem={handleNewCartItem} />
          </div>
          <div className="col-md-5 col-xs-12">
            <Cart
              items={cartItems}
              qtyItem={qtyItem}
              deleteCartItem={deleteCartItem}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Principal;
