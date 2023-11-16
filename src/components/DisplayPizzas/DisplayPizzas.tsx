import React, { FC } from "react";
import { Pizza } from "../../models/PizzasModels/Pizzas";
import { SinglePizza } from "../SinglePizza/SinglePizza";

interface DisplayPizzasProps {
    pizzasList: Pizza[];
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const DisplayPizzas: FC<DisplayPizzasProps> = ({
    pizzasList,
    updatePizza,
    deletePizza,
}) => {
    console.log(pizzasList);
    return (
        <div className="container">
            {pizzasList.map((pizza) => (
                <SinglePizza
                    key={pizza.id}
                    pizza={pizza}
                    updatePizza={updatePizza}
                    deletePizza={deletePizza}
                ></SinglePizza>
            ))}
        </div>
    );
};
