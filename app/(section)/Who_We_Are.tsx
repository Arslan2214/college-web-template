import Mian_Button from "../(components)/Button";
import Section_Head from "../(components)/Section_Head";
import Vert_Image from "../(components)/Vert_Image";
import Text from "../(components)/Text";

const Who_We_Are = () => {
  return (
    <>
      <section className="grid columns-2 grid-flow-row items-center md:grid-flow-col gap-8 cont-block">
        <div className=" flex flex-col gap-6">
          <Section_Head
            head="Who we are"
            sub_head="We propose and discuss design rules."
          />
          <Text>
            Metasurfaces are generally designed by placing scatterers in
            periodic or pseudo-periodic grids. We propose and discuss design
            rules for functional metasurfaces with randomly placed.
          </Text>
          <Text>
            Anisotropic elements that randomly sample. Quisque sit amet nisl
            ante. Fusce lacinia non tellus id gravida. Cras neque dolor,
            volutpat et hendrerit et.
          </Text>
          <div className="my-10">
            <Mian_Button text="Learn More" link="/about" />
          </div>
        </div>
        <div>
        <Vert_Image src="/img/discussion.jpg" alt="discussion-image"  />
        </div>
      </section>
    </>
  );
};

export default Who_We_Are;
