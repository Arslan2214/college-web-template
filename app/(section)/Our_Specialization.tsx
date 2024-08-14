import Image from "next/image";
import Section_Head from "../(components)/Section_Head";
import Text from "../(components)/Text";
import Specialize_Card from "../(components)/Specialize_Card";

type Num_Card_Props = {
  number: number;
  text: string;
};

const Our_Specialization = () => {
  return (
    <>
      <section className="cont-block p-3">
        <Section_Head head="Our specialization" sub_head="What we do" />
        <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 xl:grid-rows-1 gap-5 py-8">
          <Specialize_Card
            imageSrc="https://preview.colorlib.com/theme/staging/img/services/services-1.png.webp"
            sub_head="Interior Design"
            text="As you might expect of a company that began as a high-end interiors contractor, we pay strict attention."
          />
          <Specialize_Card
            imageSrc="https://preview.colorlib.com/theme/staging/img/services/services-2.png.webp"
            sub_head="Office Design"
            text="Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction."
          />
          <Specialize_Card
            imageSrc="https://preview.colorlib.com/theme/staging/img/services/services-3.png.webp"
            sub_head="Office Design"
            text="Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction."
          />
          <Specialize_Card
            imageSrc="https://preview.colorlib.com/theme/staging/img/services/services-4.png.webp"
            sub_head="Office Design"
            text="Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction."
          />
        </div>
        <div className="grid grid-flow-col columns-1 sm:columns-2 xl:columns-4 grid-rows-4 sm:grid-rows-2 xl:grid-rows-1 gap-6 py-8">
          <Card_Number number={85} text="Projects Completed" />
          <Card_Number number={127} text="Happy Clients" />
          <Card_Number number={36} text="Awards Received" />
          <Card_Number number={74} text="Cups Of Coffee" />
        </div>
      </section>
    </>
  );
};

const Card_Number = ({ number, text }: Num_Card_Props) => {
  return (
    <>
      <div className="flex gap-5 justify-start items-center w-56">
        <span className="text-7xl text-yellow">{number}</span>
        <p className="text-lg font-head uppercase">{text}</p>
      </div>
    </>
  );
};

export default Our_Specialization;
