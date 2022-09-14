export default function NewListPageItem({ item, updateCart }) {
  
       return (
            <button className="btn btn-primary m-1" value={item._id} onClick={() => updateCart(item._id)}>{ item.name }</button>
      );
  }