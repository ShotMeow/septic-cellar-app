import React, { useState } from "react";
import { data, ICalc } from "./Calculator.data";
import Elem from "./Elem/Elem";

const Calculator = () => {
    const [state, setState] = useState<ICalc[]>(data);

    const handleClick = (id: number) => () => {
        const current = [...state];
        current.forEach((block) => {
            if (block.id === id) block.isActive = true;
            else block.isActive = false;
        });
        setState(current);
    };
    return (
        <section className='bg-blue-100'>
            <div className='container mx-auto flex flex-col items-center py-10'>
                <h2 className='text-2xl font-semibold mb-20'>
                    Онлайн-конструктор септика
                </h2>
                <div className='flex flex-col gap-2'>
                    {state.map((block) => (
                        <div>
                            <div
                                onClick={handleClick(block.id)}
                                className='bg-green-600 cursor-pointer text-white rounded py-3 px-6 text-lg'
                            >
                                {block.id}. {block.title}
                            </div>
                            {block.isActive && (
                                <Elem nextStep={handleClick} id={block.id} />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Calculator;
