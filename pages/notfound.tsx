import Link from "next/link";
import type { NextPage } from "next";

import Layout from "../components/common/layout";


const Collaborators: NextPage = () => {
    return (
        <Layout>
            <div className="bg-black text-white pt-20 pl-20">
                <div className="mb-20">
                    <div className="py-10 capitalize font-signika font-light tracking-tight text-3xl">MORE</div>
                    <div className="capitalize font-signika font-medium tracking-tight text-8xl">NOT FOUND</div>
                    <div className="py-10 capitalize font-mono font-bold tracking-tight text-l">
                        <span className="text-mcgill-red"><Link href='/'>HOME </Link></span>
                         / MORE / NOT FOUND
                    </div>
                </div>



            </div>
                <div className="text-6xl font-signika text-center mb-20">The Site You Were Looking For Could Not Be Found...</div>
        </Layout>
    )
}

export default Collaborators;