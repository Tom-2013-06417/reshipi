import Image from "next/image";
import Link from "next/link";

const BODY_TRUNCATE_LIMIT = 50;

interface Props {
  heading: string;
  body: string;
  link: string;
  thumbnail?: string;
}

export const Card: React.FC<Props> = ({ heading, body, link, thumbnail }) => (
  <Link href={link} className="flex rounded-md overflow-hidden border mb-4 min-h-[80px] align-middle justify-between">
    <div className="p-4">
      <span className="text-xl font-sans font-bold">{heading}</span>
      { body ? <p className="font-light ">{body.slice(0, BODY_TRUNCATE_LIMIT)}</p> : <></>}
    </div>
    { thumbnail ? <Image
      src={thumbnail}
      width={150}
      height={150}
      alt=""
    /> : <></> }
  </Link>
);
