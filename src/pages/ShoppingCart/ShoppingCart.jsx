import { useEffect } from 'react';
import Cart from '../../components/Cart';
import { getProducts } from '../../commons/globalFunctions';
import { useAtom } from 'jotai';
import { cartList, productsList } from '../../store/store';


const ShoppingCart = () => {
  const [getProductsList, setProductsList] = useAtom(productsList);
  const [cartItems, setCartItems] = useAtom(cartList);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
        setProductsList(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const totalItems = cartItems.length;
  const subtotal = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
      <Cart items={cartItems} onRemove={removeFromCart} />
      <div className="mt-4">
        <p>Total Items: {totalItems}</p>
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Products</h2>
        <div className="grid grid-cols-2 gap-4">
          {getProductsList.map((product) => (
            <div key={product.id} className="border rounded p-4">
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-gray-600">Price: ${product.price.toFixed(2)}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
