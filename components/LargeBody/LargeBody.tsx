interface Props {
  children: React.ReactNode;
}

export const LargeBody: React.FC<Props> = ({ children }) => (
  <p className="mb-4">{children}</p>
);
