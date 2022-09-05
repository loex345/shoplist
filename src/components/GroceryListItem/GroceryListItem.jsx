export default function GroceryListItem({ name }) {
  const newName = name.map(val => val.name)
     return (
          <p>{ newName }</p>
    );
}