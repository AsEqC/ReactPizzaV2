import React from "react";

export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState<number>(0)

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    const onClickCategory = (i: number) => {
        setActiveIndex(i)
    }
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((el, i) => (
                        <li
                            key={i}
                            onClick={() => onClickCategory(i)}
                            className={activeIndex === i ? 'active' : ''}>
                            {el}
                        </li>
                    ))}
            </ul>
        </div>
    )
}
