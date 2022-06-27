import Image from "next/image";
import React, { FC, useState } from "react";

import septic_1 from "../../../assets/images/septik_type1.png";
import septic_2 from "../../../assets/images/septik_type2.png";
import { data, IData } from "./Elem.data";

interface IElem {
    id: number;
    nextStep: (id: number) => () => void;
}

const Elem: FC<IElem> = ({ id, nextStep }) => {
    const [septics, setSeptics] = useState<IData[]>(data);

    const handleClick = () => {
        const current = [...septics];
        septics.forEach((septic) => {
            septic.isActive = !septic.isActive;
        });
        setSeptics(current);
    };
    switch (id) {
        case 1:
            return (
                <div className='flex flex-col items-center gap-4 my-4'>
                    <div className='flex justify-around items-center gap-6'>
                        <Image src={septic_1} alt='Септик 1' />
                        <div
                            onClick={handleClick}
                            className='my-4 flex items-center bg-white gap-3 rounded-full cursor-pointer'
                        >
                            {septics.map((septic) => (
                                <div
                                    className={
                                        septic.isActive
                                            ? "bg-green-900 text-white rounded-full px-4 py-2"
                                            : "px-4"
                                    }
                                >
                                    {septic.title}
                                </div>
                            ))}
                        </div>
                        <Image src={septic_2} alt='Септик 2' />
                    </div>
                    <div className='flex gap-2 items-center'>
                        камерный{" "}
                        <div className='w-6 h-6 text-white bg-gray-800 rounded-full flex items-center justify-center'>
                            ?
                        </div>
                        <button
                            onClick={nextStep(id + 1)}
                            className='px-4 py-1 bg-green-900 text-white rounded text-lg'
                        >
                            Следующий шаг
                        </button>
                    </div>
                </div>
            );
        case 2:
            return <div>2</div>;
        case 3:
            return <div>3</div>;
        case 4:
            return <div>4</div>;
    }
};

export default Elem;
