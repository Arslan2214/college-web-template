import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPaperPlane,
  FaTwitter,
} from "react-icons/fa6";
import FooterColumn from "../(components)/FooterColumn";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-10">
      <div className="cont-block mx-auto px-4">
        {/* 1st Section */}
        <div className="flex flex-col gap-6 md:gap-8 md:flex-row justify-between items-center px-4 py-6 md:px-8 md:py-12">
          <p className="text-3xl md:text-5xl font-head uppercase text-center md:text-left">
            Ready To Work With Us?
          </p>
          <div className="flex items-center w-auto md:gap-0 bg-white border border-gray-300 rounded-full">
            <input
              type="text"
              className="flex-grow px-4 py-2 text-gray-700 placeholder-gray-400 font-mainText focus:outline-none rounded-full"
              placeholder="Join Newsletter"
            />
            <button className="px-6 py-3 bg-yellow rounded-full text-white font-semibold hover:bg-yellow transition-colors duration-300 flex-shrink-0">
              <FaPaperPlane />
            </button>
          </div>
        </div>
        <hr className="mt-24 mb-20 bg-slate-600" />
        {/* 2nd Section */}
        <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 xl:grid-rows-1 gap-5 py-8">
          <div className="flex flex-col items-start gap-5">
            <span className="text-5xl font-[400]">
              Staging<span className="text-yellow">.</span>
            </span>
            <p className="text-sm">
              7176 Blue Spring Lane Santa Monica, CA 90403
            </p>
            <p className="text-sm">
              Info.colorlib@gmail.com <br />
              <span className="text-yellow"> +84 123 456 789</span>
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Social_Link link="www.facebook.com">
                <FaFacebookF />
              </Social_Link>
              <Social_Link link="www.x.com">
                <FaTwitter />
              </Social_Link>
              <Social_Link link="www.instagram.com">
                <FaInstagram />
              </Social_Link>
              <Social_Link link="www.linkedin.com">
                <FaLinkedin />
              </Social_Link>
            </div>
          </div>
          <FooterColumn
            title="Company"
            links={[
              { href: "/", label: "About Us" },
              { href: "/", label: "Services" },
              { href: "/", label: "Careers" },
              { href: "/", label: "Contact Us" },
            ]}
          />
          <FooterColumn
            title="Services"
            links={[
              { href: "/interior-design", label: "Interior Design" },
              { href: "/custom-furniture", label: "Custom Furniture" },
              { href: "/furniture-repair", label: "Furniture Repair" },
              { href: "/delivery", label: "Delivery & Assembly" },
              { href: "/consultation", label: "Free Consultation" },
            ]}
          />

          <FooterColumn
            title="Resources"
            links={[
              { href: "/", label: "Blog" },
              { href: "/", label: "FAQs" },
              { href: "/", label: "Privacy Policy" },
              { href: "/", label: "Terms of Service" },
            ]}
          />
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            © 2024 By{" "}
            <Link
              className="text-gray-200 underline underline-offset-2 text-sm"
              href="https://github.com/Arslan2214"
            >
              ARslan Ahmad
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

type SocialLinkProps = {
  link: string;
  children: React.ReactNode;
};

const Social_Link: React.FC<SocialLinkProps> = ({ link, children }) => {
  return (
    <Link href={link} className="text-white hover:text-yellow scale-125">
      {children}
    </Link>
  );
};

export default Footer;
