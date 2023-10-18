import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const items = [
    {
      name: "Apples",
      quantity: 5
    },
    {
      name: "Bananas",
      quantity: 7
    },
    {
      name: "Box of Pasta",
      quantity: 1
    },
    {
      name: "Cookies",
      quantity: 12
    }
  ]

const Header = (props) => {    
    return (
        <header>
            <h1>{props.title}</h1>
            <span className="total-items">Items: {props.itemTotal}</span>
        </header>
    )
}

const Item = (props) => {
    return (
        <div className="item">
            <button className="remove-item" />
            <span className="item-name">{props.name}</span>
            <Counter quantity={props.quantity}/>            
        </div>
    )
}

const Counter = (props) => {
    return (
        <div className="quantity">
            <span className = "qty-label">Qty:</span>
            <button className="increment">+</button>
            <button className="decrement">-</button>
            <span className="quantity-amount">{props.quantity}</span>
        </div>
    )
}

const App = () => {
    return (
        <div className="grocery-list">
            <Header 
                title= "Grocery List" 
                itemTotal={12} />


            {/* the list */}
            <Item name="Onion" quantity={10} />
            <Item name="naners" quantity={1} />
            <Item name="taters" quantity={2} />
            <Item name="glue" quantity={1} />
            <Item name="snacks" quantity={99} />
        </div>
    )

}




const root = createRoot(document.getElementById("root"));
root.render(

    <StrictMode>
        <App initialList={items}/>
    </StrictMode>    

);