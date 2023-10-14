import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const Header = () => {
    return (
        <header>
            <h1>Stuff List</h1>
            <span className="total-items">Items: 1</span>
        </header>
    )
}

const Item = () => {
    return (
        <div className="item">
            <button className="remove-item" />
            <span className="item-name">Bread</span>
            <Counter />            
        </div>
    )
}

const Counter = () => {
    return (
        <div className="quantity">
            <span className = "qty-label">Qty:</span>
            <button className="increment">+</button>
            <button className="decrement">-</button>
            <span className="quantity-amount">10</span>
        </div>
    )
}

const App = () => {
    return (
        <div className="grocery-list">
            <Header />
            {/* the list */}
            <Item />
        </div>
    )

}




const root = createRoot(document.getElementById("root"));
root.render(

    <StrictMode>
        <App />
    </StrictMode>    

);