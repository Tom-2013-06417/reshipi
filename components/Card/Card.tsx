const BODY_TRUNCATE_LIMIT = 50;

export interface CardProps {
  heading: string;
  body: string;
  link: string;
}

export default function Card(props: CardProps) {
  return (
    <a
      href={props.link}
      className="text-lg rounded-md shadow-md p-4 mb-4 font-light min-h-[150px]"
    >
      {props.heading}
      <p>{props.body.slice(0, BODY_TRUNCATE_LIMIT)}</p>
    </a>
  );
}
