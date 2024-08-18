import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Section_Head from "../(components)/Section_Head";
import Skeleton from "../(components)/Map_Skeleton";
import { TbDeviceMobileMessage } from "react-icons/tb";
import { FaMailBulk } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";

const Text = dynamic(() => import("../(components)/Text"));
const MapEmbed = dynamic(() => import("../(components)/Map"));
const Page_Header = dynamic(() => import("@/app/(components)/Page_Header"));

const Contact_Page = () => {
  return (
    <>
      <Page_Header head="Contact Us" />
      <section className="cont-block grid gap-6">
        <div className="grid-span-3">
          <Section_Head head="who are we" sub_head="Conact Us" />
          <Text>
            As you might expect of a company that began as a high-end interiors
            contractor.
          </Text>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap items-start sm:items-center justify-center sm:justify-start gap-5 py-6 md:py-10">
          <Icon_Data
            icon={<TbDeviceMobileMessage />}
            info="Phone Number"
            detail="+01 123 456 789"
          />
          <Icon_Data
            icon={<FaMailBulk />}
            info="Email Address"
            detail="info.colorlib@gmail.com"
          />
          <Icon_Data
            no_border={true}
            icon={<FaMapMarkedAlt />}
            info="Office Location"
            detail="7176 Blue Spring Lane, NY, US"
          />
        </div>
        <section>
          {/* Map Embed */}
          <Suspense fallback={<Skeleton />}>
            <MapEmbed />
          </Suspense>
        </section>
        <section>
          {/* Contact Form */}
          <Section_Head sub_head="Get in touch" head="Form" />
          <Text className="w-full lg:w-1/3 !text-base !text-slate-500">
            As you might expect of a company that began as a high-end interiors
            contractor, we pay strict attention.
          </Text>
          <form className="my-5 grid w-full lg:max-w-2xl">
            <div className="flex flex-col md:flex-row md:gap-5 items-center">
              <Input_Field placeholder="Name" type="text" />
              <Input_Field placeholder="Email" type="email" />
            </div>
            <textarea
              className="description sec p-3 h-60 border border-gray-300 outline-none"
              placeholder="Description"
            ></textarea>
            <button className="px-4 py-2 bg-yellow text-white w-40 outline outline-yellow hover:bg-transparent hover:text-yellow mt-5 md:ml-0 mx-auto">
              Send Message
            </button>
          </form>
        </section>
      </section>
    </>
  );
};

type Input_Field_Props = {
  placeholder: string;
  type: "text" | "email";
};

const Input_Field = ({ placeholder, type }: Input_Field_Props) => {
  return (
    <>
      <input
        className="title border w-full md:w-1/2 border-gray-300 p-3 mb-5 outline-none"
        placeholder={placeholder}
        type={type}
      />
    </>
  );
};

type Props = {
  icon: React.ReactElement;
  info: string;
  detail: string;
  no_border?: boolean;
};

const Icon_Data = ({ icon, info, detail, no_border }: Props) => {
  return (
    <>
      <div
        className={`flex items-center gap-3 px-3 border-0 ${
          !no_border && "lg:border-r-2"
        }`}
      >
        <div className="text-6xl">{icon}</div>
        <div className="flex flex-col">
          <span className="text-lg font-head uppercase text-yellow">
            {info}
          </span>
          <span>{detail}</span>
        </div>
      </div>
    </>
  );
};

export default Contact_Page;
