import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30">
      <nav className="flex justify-between items-center py-3 px-8 bg-black text-white">
        <span className="text-4xl font-[400]">
          Staging<span className="text-yellow-400">.</span>
        </span>
        <ul className="flex justify-center items-center gap-8">
          {navbarItems.map(ele=> <Nav_Link text={ele.text} link={ele.link} />)}
        </ul>
        <div className="flex flex-col justify-center items-center">
          <span>Call us for any questions</span>
          <span className="text-2xl font-head text-yellow">+01 123 456 789</span>
        </div>
      </nav>
    </header>
  );
};

type NavLink_Props = {
  text: string;
  link: string;
};

const navbarItems: NavLink_Props[] = [
  { text: "About", link: "/about" },
  { text: "Projects", link: "/projects" },
  { text: "Blogs", link: "/blogs" },
  { text: "Contact", link: "/contact" },
];

const Nav_Link = ({ text, link }: NavLink_Props) => {
  return (
    <Link href={link}>
      <li className="relative before:content-[''] before:w-0 before:border-yellow hover:before:border-b-2 hover:before:w-[50%] before:duration-500 before:h-full before:absolute before:top-0 before:left-[50%] after:content-[''] after:w-0 after:border-yellow hover:after:border-b-2 hover:after:w-[50%] after:duration-500 after:h-full after:absolute after:top-0 after:right-[50%]">{text}</li>
    </Link>
  );
};

export default Navbar;
