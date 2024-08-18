import dynamic from "next/dynamic";
import Page_Header from "@/app/(components)/Page_Header";
import Project_Card from "../(components)/Project_Card";

const Button = dynamic(() => import("../(components)/Button"));

const page = () => {
  return (
    <section className="cont-block">
      <Page_Header head="Projects" />
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Project_Card imageSrc="/img/carousel/Carousel1.jpg" imageAlt="Decoration" head="Decoration" />
          <Project_Card imageSrc="/img/carousel/Carousel2.jpg" imageAlt="Custom Material" head="Custom Material" />
          <Project_Card imageSrc="/img/carousel/Carousel3.jpg"  head="Artistic Work" />
          <Project_Card imageSrc="/img/carousel/Carousel4.jpg" head="Primitive Designs" />
        </div>
        <div className="flex justify-center mt-8">
          <Button link="/blogs" text="Learn More" make="dark" />
        </div>
      </div>
    </section>
  );
};

export default page;
