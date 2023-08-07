// import Image
import Image from "next/image";


interface PersonProps {
  name: string;
}

const Person = (props: PersonProps) => {
  return (
    <div className="group relative">
          <div className="h-full w-full">
          {/* <div className="h-[350px] w-[258px] hover:bg-gradient-to-t from-[rgba(237,27,47,0.2)] to-[rgba(237,27,47,0.5)] bg-[linear-gradient(rgba(237,27,47,0.2), rgba(237,27,47, 0.5))]"> */}
            <Image
              layout="responsive"
              src={`/team/${props.name}.jpeg`}
              width={258}
              height={350}
              className="h-full w-auto"
            />
          </div>

            {/* <img src={`/team/${props.name}.png`} className="w-full h-auto"/> */}
            <div className="group-hover:block hidden transition-all absolute w-full hover:bg-gradient-to-b from-[rgba(237,27,47,0.2)] to-[rgba(237,27,47,0.5)] h-full translate-y-[-100%]  left-0">
              <h3 className="relative h-full w-auto text-left font-mono font-semibold text-[2vw] px-10 -translate-x-5 translate-y-[75%] leading-[90%]">
                {props.name}
              </h3>
            </div>
        </div>
  );
};

export default Person;