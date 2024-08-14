import Mian_Button from "./Button";
import Section_Head from "./Section_Head";

type Props = {
  sub_head: string;
  head: string;
  btn_Link: string;
  btn_Text: string;
  make?: "dark" | "light" | undefined;
};

const Post_Section_Head = ({
  sub_head,
  head,
  btn_Link,
  btn_Text,
  make,
}: Props) => {
  return (
    <>
      <div className="flex sm:flex-row gap-y-6 flex-col justify-between items-start sm:items-center">
        <Section_Head sub_head={sub_head} head={head} />
        <Mian_Button link={btn_Link} text={btn_Text} make={make} />
      </div>
    </>
  );
};

export default Post_Section_Head;
