import { FC, useState } from "react";
import "./App.css";
import { AddPizzaForm } from "./components/AddPizzaForm/AddPizzaForm";
import { Pizza } from "./models/PizzasModels/Pizzas";
import { DisplayPizzas } from "./components/DisplayPizzas/DisplayPizzas";
const App: FC = () => {
    const [pizzasList, setPizzasList] = useState<Pizza[]>([]);

    const addPizza = (newPizza: Pizza) => {
        setPizzasList((prev) => {
            return [...prev, newPizza];
        });
    };

    const updatePizza = (newPizza: Pizza) => {
        setPizzasList((prev) =>
            prev.map((pizza) => (pizza.id === newPizza.id ? newPizza : pizza))
        );
    };

    const deletePizza = (id: number) => {
        const newPizzasList = pizzasList.filter((pizza) => pizza.id !== id);
        setPizzasList(newPizzasList);
    };

    return (
        <div className="App">
            <div className="wrap">
                <span className="heading">Наша пиццерия</span>
                <AddPizzaForm addPizza={addPizza}></AddPizzaForm>
                <DisplayPizzas
                    pizzasList={pizzasList}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                ></DisplayPizzas>
            </div>
        </div>
    );
};

export default App;
