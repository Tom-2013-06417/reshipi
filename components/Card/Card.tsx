const BODY_TRUNCATE_LIMIT = 50;

interface Props {
  heading: string;
  body: string;
  link: string;
}

export const Card: React.FC<Props> = ({ heading, body, link }) => (
  <a
    href={link}
    className="text-lg rounded-md shadow-md p-4 mb-4 font-light min-h-[150px]"
  >
    {heading}
    <p>{body.slice(0, BODY_TRUNCATE_LIMIT)}</p>
  </a>
);
