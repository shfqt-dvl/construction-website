
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MaskedHeading.css";

function MaskedHeading({
  text = "Mushad Construction & Hardware Store",
  tag: Tag = "h2",
  className = "",
  duration = 1,
  stagger = 0.12,
  trigger = "view",
  weight = 900,
  tracking = -0.035,
  lineHeight = 1.1,
  align = "center",
  style = {},
}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const letters = root.querySelectorAll(".masked-heading__letter");

    const animation = gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 35,
        rotateX: -55,
        filter: "blur(7px)",
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: "blur(0px)",
        duration,
        stagger,
        ease: "power3.out",
        paused: true,
      }
    );

    if (trigger !== "view") {
      animation.play();
      return () => animation.kill();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animation.play();
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      animation.kill();
    };
  }, [text, duration, stagger, trigger]);

  return (
    <Tag
      ref={rootRef}
      className={`masked-heading ${className}`}
      style={{
        "--mh-weight": weight,
        "--mh-tracking": `${tracking}em`,
        "--mh-line-height": lineHeight,
        "--mh-align": align,
        ...style,
      }}
    >
      {text.split("").map((character, index) => (
        <span
          key={`${character}-${index}`}
          className="masked-heading__letter"
          aria-hidden="true"
        >
          {character === " " ? "\u00A0" : character}
        </span>
      ))}

      <span className="masked-heading__accessible">{text}</span>
    </Tag>
  );
}

export default MaskedHeading;
