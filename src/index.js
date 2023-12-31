import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header() {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const numOfPizzas = pizzas.length;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {numOfPizzas > 0 ? (
                <>
                    <p>
                        Authentic Italian cuisine. Six creative dishes to choose
                        from. All from our stone oven, all organic, all
                        delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>
                    We're still working on our menu. Please come back at a later
                    time.{" "}
                </p>
            )}

            {/* <Pizza
                name="Pizza Spinaci"
                ingredients="Tomato, mozarella, spinach, and ricotta cheese"
                photoName="pizzas/spinaci.jpg"
                price={10}
            />

            <Pizza
                name="Pizza Funghi"
                ingredients="Tomato, mushrooms"
                photoName="pizzas/funghi.jpg"
                price={12}
            /> */}
        </main>
    );
}

function Pizza({ pizzaObj }) {
    // if (pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const openingHour = 12;
    const closingHour = 22;
    const isOpen = hour >= openingHour && hour <= closingHour;
    console.log(isOpen);

    // if (hour >= openingHour && hour <= closingHour)
    //     alert("We're currently open!");
    // else alert("Sorry, we're closed!");

    // if (!isOpen) return <p>CLOSED</p>;

    return (
        <footer className="footer">
            {isOpen ? (
                <Order closingHour={closingHour} openingHour={openingHour} />
            ) : (
                <p>
                    We're happy to welcome you between {openingHour}:00 and{" "}
                    {closingHour}:00
                </p>
            )}
        </footer>
    );
}

function Order({ closingHour, openingHour }) {
    return (
        <div className="order">
            <p>
                We're open from {openingHour}:00 until {closingHour}:00. Come
                visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
