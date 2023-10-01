interface Props {
  children: React.ReactNode;
}

export const LargeBody: React.FC<Props> = ({ children }) => <p>{children}</p>;
