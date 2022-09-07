export default function RecipeItem({ name }) {
    const newName = name.map(val => val.listname)
       return (
            <p>{ newName }</p>
      );
  }