import React from 'react';

import {Categories} from "../components/Categories";
import {Sort} from "../components/Sort";
import {Skeleton} from "../components/PizzaBlock/Skeleton";
import {PizzaBlock, PizzaBlockType} from "../components/PizzaBlock";

export const Home = () => {
    const [items, setItems] = React.useState<PizzaBlockType[]>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        fetch('https://6461c0bf491f9402f4a9f132.mockapi.io/items')
            .then(response => response.json())
            .then(json => setItems(json));
        setIsLoading(false)
    }, []);

    return (
        <>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>)
                    : items.map((el) => <PizzaBlock key={el.id} {...el}/>)}
            </div>
        </>
    );
};

