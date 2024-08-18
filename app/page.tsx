import React from "react";
import dynamic from "next/dynamic";

import Herosection from "./(section)/Herosection";
const Who_We_Are = dynamic(() => import("./(section)/Who_We_Are"));
const Our_Specialization = dynamic(
  () => import("./(section)/Our_Specialization")
);
const BrandList = dynamic(() => import("./(section)/BrandList"));
const Our_Team = dynamic(() => import("./(section)/Our_Team"));
const Main_Banner = dynamic(() => import("./(components)/Main_Banner"));
const Blog = dynamic(() => import("./(section)/Blog"));

export default function Home() {
  return (
    <>
      <main>
        <Herosection />
        <Who_We_Are />
        <Our_Specialization />
        <BrandList />
        <Our_Team />
        <Main_Banner
          btn_link="/contact"
          head="Why choose us?"
          sub_head="Our Ability To Deliver Outstanding Results For Our Clients Starts With Our Team Of Smart."
          btn_text="contact us"
        />
        <Blog />
      </main>
    </>
  );
}
