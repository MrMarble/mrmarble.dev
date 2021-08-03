import "./Heading.css";

export interface HeadingProps {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export const Heading: React.FunctionComponent<
  HeadingProps & React.HTMLAttributes<HTMLHeadingElement>
> = ({ size = 1, children, className, ...rest }) => {
  const Wrapper: keyof JSX.IntrinsicElements = `h${size}`;

  const textSize = [
    "text-6xl",
    "text-5xl",
    "text-4xl",
    "text-3xl",
    "text-2xl",
    "text-1xl",
  ].filter((_, index) => index + 1 === size);

  return (
    <Wrapper {...rest} className={`heading ${textSize}`}>
      {children}
    </Wrapper>
  );
};
