const Navbar = () => {
  return (
    <header className="sticky top-0">
      <nav className="flex justify-between items-center py-3 px-8 bg-black text-white">
        <span className="text-4xl font-[400]">
          Staging<span className="text-yellow-400">.</span>
        </span>
        <ul className="flex justify-center items-center gap-8">
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-col justify-center items-center">
          <span>Call us for any questions</span>
          <span className="text-2xl font-headText">+01 123 456 789</span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
