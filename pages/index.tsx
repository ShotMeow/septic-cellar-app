import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header/Header";

const Home: NextPage = () => {
    return (
        <div className='container mx-auto'>
            <Head>
                <title>Септик-погреб</title>
            </Head>
            <Header />
        </div>
    );
};

export default Home;
