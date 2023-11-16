import React from "react";
let pizza: string = "Salami";
let price: number = 20;
let atStock: boolean = true;

let pizzas: string[] = ["Salami", "Sausage"];

type Order = {
    title: string;
    quantity: number;
};

interface MyOrder {
    title: string;
    quantity: number;
}

type X = {
    a: string;
    b: number;
};

type Y = X & {
    c: string;
    d: number;
};

let y: Y = {
    c: "test",
    d: 5,
    a: "hello",
    b: 10,
};

interface Auto {
    country: string;
}

interface BMW extends Auto {
    model: string;
    year: number;
}

const bmw: BMW = {
    country: "Germany",
    model: "M3",
    year: 2005,
};

// interface может наследоваться от type с помощью extends. И type может наследоваться от interface с помощью type X = Auto & {}

type PrintTitle = (title: string) => void;

let order: Order = { title: "Margarita", quantity: 10 };
let orders: Order[] = [
    { title: "Margarita", quantity: 10 },
    { title: "4 Cheese", quantity: 7 },
    { title: "2 Cocks", quantity: 9 },
];

let number: null | number = null;
number = 5;

const printTitle: PrintTitle = (title) => {
    console.log(title);
};

export const TestTypes = () => {
    return <div>TestTypes</div>;
};
