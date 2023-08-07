import Link from "next/link";
import type { NextPage } from "next";

import Layout from "../components/common/layout";


const Standard: NextPage = () => {
    return (
        <Layout>
            <div className="bg-black text-white pt-20 pl-20">
                <div className="mb-20">
                    <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">ABOUT US</div>
                    <div className="capitalize font-signika font-medium tracking-tight text-8xl">OUR TEAM</div>
                    <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
                        <span className="text-mcgill-red"><Link href='/'>HOME </Link></span>
                         / ABOUT US / OUR MISSION
                    </div>
                </div>

                <div>Normal</div>


            </div>
        </Layout>
    )
}

export default Standard;

// export async function getStaticProps() {}