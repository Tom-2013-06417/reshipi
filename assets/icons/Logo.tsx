interface Props {
  fill?: string;
}

export default function LogoComponent({ fill = '#282828' }: Props) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      fill={fill}
    >
      <g id="XMLID_78_">
        <g id="XMLID_89_">
          <path
            id="XMLID_95_"
            className="st0"
            d="M60.7 42.7c.8.7 1.8 1.1 2.8 1.2 1.1.1 2.2.2 3.4.2 2.6-.1 5.3-.4 7.9-.1 2.9.3 5.5 1.5 7.5 3.7.1.1.2.3.2.4v5.2c0 .6-.5.9-1 1.1-1 .3-4.8 2-11 2-5.4-.1-9.7-2.6-9.8-3.3 0-2.3-.1-10.2 0-10.4z"
          />
          <g id="XMLID_93_">
            <path
              id="XMLID_94_"
              className="st0"
              d="M105 59v2.1l-40.6 17L44 72V59h14.6c9.8 3.7 15.9 4 25.9 0H105z"
            />
          </g>
          <g id="XMLID_91_">
            <path
              id="XMLID_92_"
              className="st0"
              d="m108.1 64.3-44 20.1-20.2-6.2-25.1 8s19.8 8.7 25.1 27.8c0 0 20.2-7.1 33.9-16.7 13.8-9.8 30.6-25.6 30.6-25.6s2.1-8.6-.3-7.4z"
            />
          </g>
          <path
            id="XMLID_90_"
            className="st0"
            d="M66 29.8c-.2-.1-3.6-1.9-4.5-6.3-.5-2.6.2-5 2-6.9 2.9-3 7.3-3.4 10.6-1 .5.4.5.4.2 1-3.6 4.1-2 8.9-2 9.1.1 0 1.6-7.7 6.2-9.2.9-.3 1.2-.2 2.5-.2 4.1.5 4.7.7 8 3.1 2.9 2.1 4.7 4.9 5.2 8.5.8 4.9-.7 9-4.3 12.4-1.6 1.5-3.5 2.4-5.6 3-.6.2-2-1-2.3-1.4 3.7-3.3 4.5-3.7 5.5-9.2-1.8 3.2-3.2 5.4-7.3 7.9-4.4-3-10.9-2.4-16.5-1.6-3.9.6-8-3.1-8.9-7.1-.7-3.4-.1-6 2.8-7.7.4-.2.5-.1.7.3 2.9 4.9 6.8 5 7.7 5.3z"
          />
        </g>
      </g>
    </svg>
  );
}