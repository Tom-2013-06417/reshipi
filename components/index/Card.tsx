export interface CardProps {
  heading: string;
  body: string;
  link: string;
}

export default function Card(props: CardProps) {
  return (
    <a href={props.link} className="rounded-md shadow-md p-4 mb-4">
      <h2>{props.heading} &rarr;</h2>
      <p>{props.body}</p>
    </a>
  );
}
