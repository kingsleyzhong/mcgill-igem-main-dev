import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import Loading from "../components/common/loading";

const LoadTest: NextPage = () => {
  return (
    <body>
        <Loading />
        test
    </body>
  );
};

export default LoadTest;
