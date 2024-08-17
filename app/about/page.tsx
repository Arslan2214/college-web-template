import Page_Header from "@/app/(components)/Page_Header";
import Main_Banner from "@/app/(components)/Main_Banner";
import Our_Team from "../(section)/Our_Team";
import Section_Head from "../(components)/Section_Head";
import Text from "../(components)/Text";
import Specialize_Card from "../(components)/Specialize_Card";

const page = () => {
  return (
    <>
      <section>
        <Page_Header head="About Us" />
        <div className="cont-block grid grid-flow-row gap-6 grid-cols-1 lg:grid-cols-3">
          <div>
            <Section_Head head="who are we" sub_head="About Us" />
            <Text>
              As you might expect of a company that began as a high-end
              interiors contractor.
            </Text>
          </div>
          <div className="col-span-2">
            <Text>
              Metasurfaces are generally designed by placing scatterers in
              periodic or pseudo-periodic grids. We propose and discuss design
              rules for functional metasurfaces with randomly placed.
              Anisotropic elements that randomly sample. Quisque sit amet nisl
              ante.
            </Text>
            <div className="flex flex-col sm:flex-row gap-5 justify-between items-center">
              <Specialize_Card
                imageSrc="https://preview.colorlib.com/theme/staging/img/services/services-5.png.webp"
                sub_head="Our Mission"
                text="As you might expect of a company that began as a high-end interiors contractor, we pay strict attention. Anisotropic elements that randomly sample."
              />
              <Specialize_Card
                imageSrc="https://preview.colorlib.com/theme/staging/img/services/services-6.png.webp"
                sub_head="Our Vision"
                text="Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction. Anisotropic elements that randomly sample."
              />
            </div>
          </div>
        </div>
        <Main_Banner
          head="Why choose us?"
          sub_head="Our ability to bring outstanding results to our customers."
          btn_link="/contact"
          btn_text="Contact Us"
        />
        <Our_Team />
      </section>
    </>
  );
};

export default page;
