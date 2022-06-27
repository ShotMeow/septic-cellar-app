import Image from "next/image";
import React, { FC, useState } from "react";

import septic_1 from "../../../assets/images/septik_type1.png";
import septic_2 from "../../../assets/images/septik_type2.png";
import dnishe from "../../../assets/images/dnishe.png";
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

    const changeBottom = (id: number) => () => {
        const current = [...septics];
        septics.forEach((septic) => {
            if (septic.id === id) septic.bottom = !septic.bottom;
        });
        setSeptics(current);
    };
    switch (id) {
        case 1:
            return (
                <div className='flex flex-col items-center gap-4 py-4 bg-white'>
                    <div className='flex justify-around items-center gap-6'>
                        <div
                            className={
                                septics[0].isActive
                                    ? "opacity-100"
                                    : "opacity-50"
                            }
                        >
                            <Image src={septic_1} alt='Септик 1' />
                        </div>
                        <button
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
                        </button>
                        <div
                            className={
                                septics[1].isActive
                                    ? "opacity-100"
                                    : "opacity-50"
                            }
                        >
                            <Image src={septic_2} alt='Септик 2' />
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        камерный{" "}
                        <button className='w-6 h-6 text-white cursor-pointer bg-gray-800 rounded-full flex items-center justify-center'>
                            ?
                        </button>
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
            return (
                <div className='bg-white px-6 py-4'>
                    {septics[1].isActive ? (
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-lg py-2'>
                                Первый колодец (приемный)
                            </h3>
                            <div className='flex items-center gap-8 mb-6'>
                                <label className='flex flex-col gap-2'>
                                    Диаметр
                                    <select className='border p-2 border-gray-400 rounded-sm'>
                                        <option value='0.7'>0.7 метра</option>
                                        <option value='1'>1 метра</option>
                                        <option value='1.5'>1.5 метра</option>
                                        <option value='2.0'>2.0 метра</option>
                                    </select>
                                </label>
                                <label className='flex flex-col gap-2'>
                                    Количество колец
                                    <select className='border p-2 border-gray-400 rounded-sm'>
                                        <option value='1'>1 штука</option>
                                        <option value='2'>2 штуки</option>
                                        <option value='3'>3 штуки</option>
                                        <option value='4'>4 штуки</option>
                                        <option value='5'>5 штук</option>
                                    </select>
                                </label>
                            </div>
                            <h3 className='font-semibold text-lg py-2'>
                                Первый колодец (дренажный)
                            </h3>
                            <div className='flex items-center gap-8 mb-6'>
                                <label className='flex flex-col gap-2'>
                                    Диаметр
                                    <select className='border p-2 border-gray-400 rounded-sm'>
                                        <option value='0.7'>0.7 метра</option>
                                        <option value='1'>1 метра</option>
                                        <option value='1.5'>1.5 метра</option>
                                        <option value='2.0'>2.0 метра</option>
                                    </select>
                                </label>
                                <label className='flex flex-col gap-2'>
                                    Количество колец
                                    <select className='border p-2 border-gray-400 rounded-sm'>
                                        <option value='1'>1 штука</option>
                                        <option value='2'>2 штуки</option>
                                        <option value='3'>3 штуки</option>
                                        <option value='4'>4 штуки</option>
                                        <option value='5'>5 штук</option>
                                    </select>
                                </label>
                            </div>
                            <button
                                onClick={nextStep(id + 1)}
                                className='px-4 py-1 bg-green-900 text-white rounded text-lg'
                            >
                                Следующий шаг
                            </button>
                        </div>
                    ) : (
                        <div className='flex flex-col'>
                            <h3 className='font-semibold text-lg py-2'>
                                Первый колодец (приемный)
                            </h3>
                            <div className='flex items-center gap-8 mb-6'>
                                <label className='flex flex-col gap-2'>
                                    Диаметр
                                    <select className='border p-2 border-gray-400 rounded-sm'>
                                        <option value='0.7'>0.7 метра</option>
                                        <option value='1'>1 метра</option>
                                        <option value='1.5'>1.5 метра</option>
                                        <option value='2.0'>2.0 метра</option>
                                    </select>
                                </label>
                                <label className='flex flex-col gap-2'>
                                    Количество колец
                                    <select className='border p-2 border-gray-400 rounded-sm'>
                                        <option value='1'>1 штука</option>
                                        <option value='2'>2 штуки</option>
                                        <option value='3'>3 штуки</option>
                                        <option value='4'>4 штуки</option>
                                        <option value='5'>5 штук</option>
                                    </select>
                                </label>
                            </div>
                            <button
                                onClick={nextStep(id + 1)}
                                className='px-4 py-1 bg-green-900 text-white rounded text-lg'
                            >
                                Следующий шаг
                            </button>
                        </div>
                    )}
                </div>
            );
        case 3:
            return (
                <div className='bg-white px-6 py-4'>
                    {septics[1].isActive ? (
                        <div className='flex flex-col'>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col gap-4 mb-6'>
                                    {septics.map((septic) => (
                                        <label className='flex flex-col gap-2'>
                                            <span className='flex gap-2'>
                                                {septic.id == 1
                                                    ? "Первый"
                                                    : "Второй"}{" "}
                                                колодец
                                                <button className='w-6 h-6 text-white cursor-pointer bg-gray-800 rounded-full flex items-center justify-center'>
                                                    ?
                                                </button>
                                            </span>
                                            <button
                                                onClick={changeBottom(
                                                    septic.id
                                                )}
                                                className='my-4 flex items-center gap-3 rounded-full cursor-pointer'
                                            >
                                                <div
                                                    className={
                                                        !septic.bottom
                                                            ? "bg-green-900 text-white rounded-full px-4 py-2"
                                                            : "px-4"
                                                    }
                                                >
                                                    Есть
                                                </div>
                                                <div
                                                    className={
                                                        septic.bottom
                                                            ? "bg-green-900 text-white rounded-full px-4 py-2"
                                                            : "px-4"
                                                    }
                                                >
                                                    Нету
                                                </div>
                                            </button>
                                        </label>
                                    ))}
                                </div>

                                <div>
                                    <div
                                        className={
                                            septics[0].bottom
                                                ? "opacity-50"
                                                : "opacity-100"
                                        }
                                    >
                                        <Image src={dnishe} alt='Днище' />
                                    </div>
                                    <div
                                        className={
                                            septics[1].bottom
                                                ? "opacity-50"
                                                : "opacity-100"
                                        }
                                    >
                                        <Image src={dnishe} alt='Днище' />
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={nextStep(id + 1)}
                                className='px-4 py-1 bg-green-900 text-white rounded text-lg'
                            >
                                Следующий шаг
                            </button>
                        </div>
                    ) : (
                        <div className='flex flex-col'>
                            <div className='flex justify-between'>
                                <div className='flex flex-col gap-4 mb-6'>
                                    <label className='flex flex-col gap-2'>
                                        <span className='flex gap-2'>
                                            Наличие днища
                                            <button className='w-6 h-6 text-white cursor-pointer bg-gray-800 rounded-full flex items-center justify-center'>
                                                ?
                                            </button>
                                        </span>
                                        <button
                                            onClick={changeBottom(
                                                septics[0].id
                                            )}
                                            className='my-4 flex items-center bg-white gap-3 rounded-full cursor-pointer'
                                        >
                                            <div
                                                className={
                                                    !septics[0].bottom
                                                        ? "bg-green-900 text-white rounded-full px-4 py-2"
                                                        : "px-4"
                                                }
                                            >
                                                Есть
                                            </div>
                                            <div
                                                className={
                                                    septics[0].bottom
                                                        ? "bg-green-900 text-white rounded-full px-4 py-2"
                                                        : "px-4"
                                                }
                                            >
                                                Нету
                                            </div>
                                        </button>
                                    </label>
                                </div>
                                <div
                                    className={
                                        septics[0].bottom
                                            ? "opacity-50"
                                            : "opacity-100"
                                    }
                                >
                                    <Image src={dnishe} alt='Днище' />
                                </div>
                            </div>

                            <button
                                onClick={nextStep(id + 1)}
                                className='px-4 py-1 bg-green-900 text-white rounded text-lg'
                            >
                                Следующий шаг
                            </button>
                        </div>
                    )}
                </div>
            );
        case 4:
            return (
                <div className='bg-white px-6 py-4 flex flex-col'>
                    <div className='relative flex flex-col mt-10 mb-16'>
                        <input
                            type='number'
                            id='distance'
                            autoComplete='none'
                            placeholder='Введите расстояние до вашего дома'
                            className='peer py-1 text-black placeholder-transparent text-lg bg-transparent focus:outline-none focus:border-b border-[#4F4F4F]'
                        />
                        <label
                            htmlFor='distance'
                            className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'
                        >
                            Введите расстояние до вашего дома
                        </label>
                        <span className='absolute right-0 bottom-2 text-gray-600 font-semibold'>
                            метров
                        </span>
                    </div>
                    <button className='px-4 py-1 bg-green-900 text-white rounded text-lg'>
                        Получить расчет и скидку
                    </button>
                </div>
            );
    }
};

export default Elem;
