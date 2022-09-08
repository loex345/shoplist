export default function NewListPageItem({ item, updateCart }) {
  
       return (
            <button value={item._id} onClick={() => updateCart(item._id)}>{ item.name }</button>
      );
  }