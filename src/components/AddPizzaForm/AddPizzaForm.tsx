import React, { FC, useState } from "react";
import "../../components/styles.css";
import { Pizza } from "../../models/PizzasModels/Pizzas";

interface AddPizzaFormProps {
    addPizza: (newPizza: Pizza) => void;
}

interface InitStateType {
    title: string;
    price: string;
    img: string;
}

const initState = {
    title: "",
    price: "",
    img: "",
};

export const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
    const [newPizza, setNewPizza] = useState<InitStateType>(initState);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewPizza((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const sumbitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { title, price, img } = newPizza;

        if (title && price && img) {
            addPizza({ title, price: Number(price), img, id: Date.now() });
            setNewPizza(initState);
        }
    };

    return (
        <>
            <h3 className="heading" style={{ fontSize: 18, marginTop: 15 }}>
                Добавьте пиццу
            </h3>
            <form onSubmit={sumbitHandler}>
                <input
                    name="title"
                    type="text"
                    placeholder="Название"
                    onChange={changeHandler}
                    value={newPizza.title}
                />
                <input
                    name="price"
                    type="text"
                    placeholder="Стоимость"
                    onChange={changeHandler}
                    value={newPizza.price}
                />
                <input
                    name="img"
                    type="text"
                    placeholder="Изображение (введите число от 1 до 6)"
                    onChange={changeHandler}
                    value={newPizza.img}
                />
                <button type="submit">Добавить в меню</button>
            </form>
        </>
    );
};
