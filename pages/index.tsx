import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

import image_1 from "../assets/images/1.png";
import image_2 from "../assets/images/2.png";
import image_3 from "../assets/images/3.png";
import image_4 from "../assets/images/4.png";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Септик-погреб</title>
            </Head>
            <Header />
            <main>
                <section className='bg-[url("../assets/images/bg.jpg")] h-full bg-cover'>
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
                            <p className='w-1/2 text-center'>
                                Остались вопросы? Закажите бесплатную
                                консультацию и мы подскажем и подготовим проект
                                и смету
                            </p>
                            <label className='flex flex-col'>
                                Введите номер вашего телефона
                                <input
                                    type='tel'
                                    className='bg-gray-200 px-4 py-1 my-2'
                                />
                            </label>
                            <button className='px-4 py-2 bg-green-500 text-white rounded text-lg'>
                                Получить консультацию
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
