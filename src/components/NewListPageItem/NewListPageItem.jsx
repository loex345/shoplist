export default function NewListPageItem({ name }) {
    console.log(name)
    const newName = name.map(val => val.name)
    const newId = name.map(val => val._id)
    let newstr =newId[1].split().join().replace(',',"")
       return (
            <option value={newstr}>{ newName }</option>
      );
  }