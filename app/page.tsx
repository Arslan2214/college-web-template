import Herosection from "./(section)/Herosection";
import Navbar from "./(components)/Navbar";
import Who_We_Are from "./(section)/Who_We_Are";

export default function Home() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Who_We_Are />
    </>
  );
}
