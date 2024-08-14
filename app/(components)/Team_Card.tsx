import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type Props = {
  name: string;
  position: string;
  bg: string;
  text: string;
  facebookLink?: string;
  instaLink?: string;
  tweeterLink?: string;
  linkedInLink?: string;
};

const Team_Card = ({
  name,
  position,
  bg,
  text,
  facebookLink,
  instaLink,
  tweeterLink,
  linkedInLink,
}: Props) => {
  return (
    <>
      <div
        className="group relative w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-75 transition duration-500 ease-in-out"></div>
        <div className="relative z-10 py-10 px-6 flex flex-col gap-20 justify-between h-full">
          <div className="absolute bottom-10 inline-block group-hover:hidden">
            <h2 className="text-white text-xl font-semibold">{name}</h2>
            <p className="text-yellow text-sm underline underline-offset-2">
              {position}
            </p>
          </div>
          <div className="flex flex-col opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            <h2 className="text-white text-xl font-semibold">{name}</h2>
            <p className="text-yellow text-sm">{position}</p>
            <hr className="border-gray-500 mt-16 mb-10 w-0 group-hover:w-full duration-[2000ms]" />
            <p className="text-gray-300 text-sm">{text}</p>
          </div>
          <div className="flex mt-20 space-x-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
            {facebookLink && (
              <Social_Link link={facebookLink}>
                <FaFacebookF />
              </Social_Link>
            )}
            {tweeterLink && (
              <Social_Link link={tweeterLink}>
                <FaTwitter />
              </Social_Link>
            )}
            {instaLink && (
              <Social_Link link={instaLink}>
                <FaInstagram />
              </Social_Link>
            )}
            {linkedInLink && (
              <Social_Link link={linkedInLink}>
                <FaLinkedin />
              </Social_Link>
            )}
          </div>
        </div>
      </div>
    </>
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

export default Team_Card;
