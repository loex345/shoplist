export default function DisplayItemDetails( { item }) {
    return (
        <>
            <h2>Name: {item.name}</h2>
            <h2>Qty: {item.qty}</h2>
            <h2>Cost: {item.cost}</h2>
        </>
    );
}