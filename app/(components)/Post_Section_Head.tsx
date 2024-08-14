import Mian_Button from "./Button";
import Section_Head from "./Section_Head";

type Props = {
    
}

const Post_Section_Head = () => {
  return (
    <>
      <div className="flex flex-row sm:flex-col justify-between items-center">
        <Section_Head sub_head="Meet our team" head="Our Team" />
        <Mian_Button link="/sbout" text="Learn More" />
      </div>
    </>
  );
};

export default Post_Section_Head;
