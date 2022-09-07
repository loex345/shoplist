export default function ShopItem({ name }) {
    const newName = name.map(val => val.listname)
       return (
            <p>{ newName }</p>
      );
  }