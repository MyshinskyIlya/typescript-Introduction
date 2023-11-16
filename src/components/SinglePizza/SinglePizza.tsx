import React, { FC, useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Pizza } from "../../models/PizzasModels/Pizzas";
import { EditPizzaForm } from "../EditPizzaFrom/EditPizzaForm";

interface SinglePizzaProps {
    pizza: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    deletePizza: (id: number) => void;
}

export const SinglePizza: FC<SinglePizzaProps> = ({
    pizza,
    updatePizza,
    deletePizza,
}) => {
    const [edit, setEdit] = useState<boolean>(false);

    const toggleEditHandler = () => {
        setEdit((prev) => !prev);
    };

    const deletePizzaHandler = () => {
        deletePizza(pizza.id);
    };

    return (
        <div className="pizza">
            <img src={`images/pizza-${pizza.img}.jpg`} alt={pizza.title} />
            <h2>{pizza.title}</h2>
            <span>{pizza.price} $</span>

            <div className="pizza-controls">
                <AiFillEdit onClick={toggleEditHandler}></AiFillEdit>
                <AiFillDelete onClick={deletePizzaHandler}></AiFillDelete>
            </div>

            {edit ? (
                <EditPizzaForm
                    data={pizza}
                    updatePizza={updatePizza}
                    toggleEditHandler={toggleEditHandler}
                ></EditPizzaForm>
            ) : null}
        </div>
    );
};
