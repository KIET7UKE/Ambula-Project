import CartItem from './CartItem';

const Cart = ({ items, onRemove }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      {items.map((item) => (
        <CartItem key={item.id} item={item} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default Cart;
