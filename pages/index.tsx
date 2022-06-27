import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";
import Image from "next/image";

import image_1 from "../assets/images/1.png";
import image_2 from "../assets/images/2.png";
import image_3 from "../assets/images/3.png";
import image_4 from "../assets/images/4.png";
import pogreb from "../assets/images/pogreb.jpg";
import Calculator from "../components/Calculator/Calculator";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Септик-погреб</title>
            </Head>
            <Header />
            <main>
                <section className='bg-[url("../assets/images/bg.jpg")] bg-cover'>
                    <div className='container mx-auto flex items-end justify-between'>
                        <div>
                            <h1 className='text-3xl font-semibold pt-32'>
                                Закажите установку септика <br /> и сэкономьте{" "}
                                <span className='border-b-4 border-green-500'>
                                    до 10 000 рублей
                                </span>
                            </h1>
                            <ul className='flex gap-10 py-20'>
                                <li>
                                    <Image
                                        src={image_1}
                                        alt='Бетонные септики'
                                    />
                                </li>
                                <li>
                                    <Image
                                        src={image_2}
                                        alt='Автономные канализации'
                                    />
                                </li>
                                <li>
                                    <Image src={image_3} alt='Выгребные ямы' />
                                </li>
                                <li>
                                    <Image src={image_4} alt='Погреба' />
                                </li>
                            </ul>
                        </div>
                        <form
                            action='#'
                            className='bg-white flex flex-col items-center gap-4 p-4 w-2/6 rounded-t shadow-sm'
                        >
                            <h3 className='font-semibold text-xl'>
                                Заказать консультацию
                            </h3>
                            <p className='text-center w-3/4'>
                                Остались вопросы? Закажите бесплатную
                                консультацию и мы подскажем и подготовим проект
                                и смету
                            </p>
                            <div className='relative flex flex-col mt-10 mb-16 w-3/4'>
                                <input
                                    type='tel'
                                    id='tel'
                                    autoComplete='none'
                                    placeholder='Введите номер телефона'
                                    className='peer py-1 text-black placeholder-transparent text-lg bg-transparent focus:outline-none focus:border-b border-[#4F4F4F]'
                                />
                                <label
                                    htmlFor='tel'
                                    className='text-[#545454] text-sm absolute -top-6 peer-placeholder-shown:-top-0 transition-all peer-placeholder-shown:text-[#B4B4B4] peer-placeholder-shown:text-lg'
                                >
                                    Введите номер телефона
                                </label>
                            </div>
                            <button className='px-4 py-2 bg-green-500 text-white rounded text-lg'>
                                Получить консультацию
                            </button>
                        </form>
                    </div>
                </section>
                <section className='my-20'>
                    <div className='container mx-auto flex items-center justify-between'>
                        <div className='flex flex-col gap-10'>
                            <h2 className='text-3xl'>
                                Получите расчёт стоимости
                                <br />
                                <span
                                    className='line-through
'
                                >
                                    за 2000 руб.
                                </span>{" "}
                                <span className='font-semibold'>бесплатно</span>
                                ,
                                <br /> а так-же скидку на септик!
                            </h2>
                            <p className='text-xl'>
                                Оставьте заявку на расчет стоимости септика и мы
                                <br />
                                зафиксируем за вами сезонные цены.
                            </p>
                            <p className='text-xl'>
                                По своему номеру телефона вы сможете получить{" "}
                                <br />
                                скидку. Это позволит сэкономить вам при заказе{" "}
                                <br />
                                септиков.{" "}
                                <span className='font-semibold'>
                                    до 10 000 рублей.
                                </span>
                            </p>
                        </div>
                        <div className='w-1/2 transition duration-500 hover:scale-105'>
                            <Image
                                className='rounded-xl'
                                src={pogreb}
                                alt='Винный погреб'
                            />
                        </div>
                    </div>
                </section>

                <Calculator />
            </main>
        </div>
    );
};

export default Home;
