import React, { ChangeEvent, FC, useState } from "react";
import { Pizza } from "../../models/PizzasModels/Pizzas";

interface EditPizzaFormProps {
    data: Pizza;
    updatePizza: (newPizza: Pizza) => void;
    toggleEditHandler: () => void;
}

export const EditPizzaForm: FC<EditPizzaFormProps> = ({
    data,
    updatePizza,
    toggleEditHandler,
}) => {
    const [editPizza, setEditPizza] = useState<Pizza>(data);

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setEditPizza((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, price, img } = editPizza;

        if (title && price && img) {
            updatePizza(editPizza);
            toggleEditHandler();
        }
    };

    return (
        <form className="edit-form" onSubmit={sumbitHandler}>
            <input
                name="title"
                type="text"
                placeholder="Название"
                onChange={changeHandler}
                value={editPizza.title}
            />
            <input
                name="price"
                type="text"
                placeholder="Стоимость"
                onChange={changeHandler}
                value={editPizza.price}
            />
            <input
                name="img"
                type="text"
                placeholder="Изображение"
                onChange={changeHandler}
                value={editPizza.img}
            />
            <button type="submit">Подтвердить</button>
        </form>
    );
};
