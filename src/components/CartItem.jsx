const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-2">
      <div>
        <span className="font-semibold">{item.name}</span>
        <span className="text-gray-600">Price: ${item.price}</span>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="text-red-500 font-semibold"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
