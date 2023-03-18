import { HeroSlideStyle, HeroSlideStyleDiv } from "../../styles/HeroSlideStyle";
import Mic from "../../assets/img/ilyass-seddoug-mic.jpg";
import Truth from "../../assets/img/brett-jordan-speak-truth.jpg";
import RaiseHand from "../../assets/img/annie-spratt-raise-hand.jpg";
import Ask from "../../assets/img/brett-jordan-ask.jpg";
import askAgain from "../../assets/img/d-koi-ask (1).jpg";
import { CSSProperties, useEffect, useState } from "react";

interface objItems {
  id: number;
  img: string;
  text: string;
  author: string;
}
const images: Array<objItems> = [
  {
    id: 0,
    img: Ask,
    text: `"Feedback is the breakfast of champions."`,
    author: "_Ken Blanchard",
  },
  {
    id: 1,
    img: Truth,
    text: `"True intuitive expertise is learned from prolonged experience with good feedback on mistakes."`,
    author: "_Daniel Kahneman",
  },
  {
    id: 2,
    img: RaiseHand,
    text: `"Examine what is said and not who speaks"`,
    author: "_African proverb",
  },
  {
    id: 3,
    img: Mic,
    text: `"To avoid criticism, do nothing, say nothing, and be nothing"`,
    author: "_Elbert Hubbard",
  },
  {
    id: 4,
    img: askAgain,
    text: `"Excellent firms don’t believe in excellence – only in constant improvement and constant change"`,
    author: "_Tom Peters",
  },
];
interface MyComponentProps {
  style?: CSSProperties | undefined;
  textAlign?: CSSProperties["textAlign"];
  color?: string;
  width?: string;
  fontWeight?: string;
  textOpacity?: number;
  fontSize?: string;
}

const HeroSlide: React.FC<MyComponentProps> = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const textStyle = {
    textAlign: "center" as const,
    color: "#e29f51",
    width: "100%",
    fontWeight: "700",
    textOpacity: 1,
    fontSize: "1.5rem",
    lineHeight: 1,
  };

  const authorStyle = {
    ...textStyle,
    color: "red",
  };

  return (
    <>
      {images.map((image, index) => {
        return (
          <HeroSlideStyle>
            <HeroSlideStyleDiv
              style={{ display: index === slide ? "block" : "none" }}
              flexBasis="45vw "
            >
              <img src={image.img} alt="stars" width="100%" key={image.id} />
            </HeroSlideStyleDiv>

            <HeroSlideStyleDiv
              style={{ display: index === slide ? "block" : "none" }}
              flexBasis={"45vw" || "30vw"}
            >
              <p style={textStyle}>{image.text}</p>
              <p style={authorStyle}>{image.author}</p>
            </HeroSlideStyleDiv>
          </HeroSlideStyle>
        );
      })}
    </>
  );
};

export default HeroSlide;
