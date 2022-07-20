import Title from "./Title";
import "../css/components/skill_tile.css";
import { useEffect, useState } from "react";

export default function SkillTile(props: {
  center?: boolean;
  ratings: { title: string; rating: number }[];
}) {
  return (
    <div
      className={`panel skill-tile ${(props.center && `center`) || `distro`}`}
    >
      {props.ratings.map((rating) => {
        return <SkillStars {...rating} />;
      })}
    </div>
  );
}

const SkillStars = (props: { title: string; rating: number }) => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  useEffect(() => {
    const newStars = [];
    let rating = props.rating;
    for (let i = 0; i < 5; i++) {
      const random = `${Math.floor(Math.random() * 321)}`
      let fill = `#ff9ebc`; // Filled
      if (rating > 0 && rating < 1)
        fill = `url(#partial-gradient-${random})`;
      else if (rating <= 0) fill = `#b7708680`;
      const ratingPercent = rating;
      console.log(ratingPercent, props.title); // Printet korrect

      newStars.push(
        <svg
          className={`skill-star`}
          width="13"
          height="12"
          viewBox="0 0 13 12"
        >
          <defs>
            <linearGradient
              id={`partial-gradient-${random}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset={ratingPercent}
                stopColor={ "#ff9ebc" }
              />
              <stop
                offset={ratingPercent}
                stopColor={ "#b7708680" }
              />
            </linearGradient>
          </defs>
          <path
            d="M6.5,0,8.515,3.942,13,4.584,9.76,7.662,10.517,12,6.5,9.961,2.483,12,3.24,7.662,0,4.584l4.485-.642Z"
            fill={fill}
          />
        </svg>
      );
      rating--;
    }
    setStars(newStars);
  }, []);

  return (
    <div className={`skill-star-container`}>
      <Title variant="skill-star-title" title={props.title} />
      <div className={`skill-stars`}>{stars}</div>
    </div>
  );
};
