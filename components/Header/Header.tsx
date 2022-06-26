import Image from "next/image";
import React from "react";

import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <header className='my-4 flex justify-between'>
            <div className='flex items-center gap-2'>
                <div className='w-12'>
                    <Image src={logo} alt='Logo' />
                </div>
                <div>
                    <h1 className='uppercase font-bold text-2xl text-blue-900'>
                        Септик-погреб
                    </h1>
                    <p className='text-green-600'>
                        строительство септиков под ключ
                    </p>
                </div>
            </div>
            <p className='text-center'>
                Производим бетонные кольца и устанавливаем септики <br /> под
                ключ в Республики Татарстан
            </p>
            <div className='flex flex-col items-end'>
                <a href='tel:88005556447' className='font-semibold text-xl'>
                    +7 (800) 555-64-47
                </a>
                <p className='cursor-pointer text-green-600'>Перезвоните мне</p>
            </div>
        </header>
    );
};

export default Header;
