import ListItem from "../ListItem/ListItem"

ListItem
function MainPage(){
    const productsArray = [
        { id: 1, name: "Producto A", price: 15.99 },
        { id: 2, name: "Producto B", price: 25.49 },
        { id: 3, name: "Producto C", price: 10.00 },
        { id: 4, name: "Producto D", price: 8.75 },
        { id: 5, name: "Producto E", price: 39.99 },
        { id: 6, name: "Producto F", price: 50.00 },
        { id: 7, name: "Producto G", price: 17.25 },
        { id: 8, name: "Producto H", price: 22.50 },
        { id: 9, name: "Producto I", price: 11.20 },
        { id: 10, name: "Producto J", price: 5.99 },
        { id: 11, name: "Producto K", price: 30.75 },
        { id: 12, name: "Producto L", price: 19.49 },
        { id: 13, name: "Producto M", price: 28.90 },
        { id: 14, name: "Producto N", price: 12.25 },
        { id: 15, name: "Producto O", price: 8.99 },
        { id: 16, name: "Producto P", price: 14.00 },
        { id: 17, name: "Producto Q", price: 35.50 },
        { id: 18, name: "Producto R", price: 42.00 },
        { id: 19, name: "Producto S", price: 23.75 },
        { id: 20, name: "Producto T", price: 7.49 },
        { id: 21, name: "Producto U", price: 18.25 },
        { id: 22, name: "Producto V", price: 21.99 },
        { id: 23, name: "Producto W", price: 9.50 },
        { id: 24, name: "Producto X", price: 32.15 },
        { id: 25, name: "Producto Y", price: 16.80 },
        { id: 26, name: "Producto Z", price: 13.40 },
        { id: 27, name: "Producto AA", price: 27.60 },
        { id: 28, name: "Producto BB", price: 6.25 },
        { id: 29, name: "Producto CC", price: 45.00 },
        { id: 30, name: "Producto DD", price: 20.25 },
        { id: 31, name: "Producto EE", price: 37.75 },
        { id: 32, name: "Producto FF", price: 29.99 },
        { id: 33, name: "Producto GG", price: 10.50 },
        { id: 34, name: "Producto HH", price: 26.00 },
        { id: 35, name: "Producto II", price: 14.49 },
        { id: 36, name: "Producto JJ", price: 33.90 },
        { id: 37, name: "Producto KK", price: 7.25 },
        { id: 38, name: "Producto LL", price: 19.99 },
        { id: 39, name: "Producto MM", price: 24.50 },
        { id: 40, name: "Producto NN", price: 11.80 }
      ];
    return(
        <>
        <h1>Main Page</h1>

        <ul id ="list">
            {productsArray.map((el,i) => {
                return <li key={i}> {el.name} <br></br> {el.price} </li>
            })}            
        </ul>
        </>
    )
}

export default MainPage