// components/footer/FooterColumn.tsx
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { href: string; label: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link className="text-base text-gray-400 hover:text-gray-100" href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
