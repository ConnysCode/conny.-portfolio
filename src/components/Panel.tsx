import "../css/components/panel.css";

const Panel = (props: {
  children: JSX.Element;
  mouseEnterEvent?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  mouseLeaveEvent?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  extraClasses?: string | (`flex-grow` | `project-panel` | string)[];
  variant?: `back-panel`;
}) => {
  return (
    <div
      onMouseEnter={props.mouseEnterEvent}
      onMouseLeave={props.mouseLeaveEvent}
      className={`panel ${props.variant || ``} ${
        props.extraClasses
          ? Array.isArray(props.extraClasses)
            ? props.extraClasses.join(` `)
            : props.extraClasses
          : ``
      }`}
    >
      {props.children}
    </div>
  );
};

export default Panel;
