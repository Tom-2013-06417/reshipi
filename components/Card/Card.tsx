const BODY_TRUNCATE_LIMIT = 50;

interface Props {
  heading: string;
  body: string;
  link: string;
}

export const Card: React.FC<Props> = ({ heading, body, link }) => (
  <a href={link} className="rounded-md shadow-md p-4 mb-4 min-h-[80px]">
    <span className="text-xl font-sans font-bold">{heading}</span>
    <p className="font-light ">{body.slice(0, BODY_TRUNCATE_LIMIT)}</p>
  </a>
);
