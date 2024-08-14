import Herosection from "./(section)/Herosection";
import Who_We_Are from "./(section)/Who_We_Are";
import Our_Specialization from "./(section)/Our_Specialization";
import BrandList from "./(section)/BrandList";
import Our_Team from "./(section)/Our_Team";
import Main_Banner from "./(components)/Main_Banner";

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
      </main>
    </>
  );
}
