import '../../components/RecipeList/RecipeList.css'

export default function RecipeList ({ lists }) {
    console.log(lists)
    function convertList(lists) {
    if (typeof lists==='undefined') return;
    const listArr = Object.entries(lists)
    const listItem = listArr.map(( item, ) => 
    <RecipeList 
        key={item}
        name={item}
        />
        );
    }
    convertList();
    return(
        <div className="RecipeList">
        <h1> Recipes and Projects </h1>
        {convertList(lists)}
        </div>

    );
}