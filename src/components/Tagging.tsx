export const AccentText = (props: {
  cursor?: boolean;
  variant?: `thicc`;
  children: JSX.Element | string;
}) => (
  <span
    className={`accent ${props.variant || ``} ${props.cursor ? `cursor` : ``}`}
  >
    {props.children}
  </span>
);
