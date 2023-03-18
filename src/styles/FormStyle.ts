import styled from "styled-components";
import { device, HeroSlideStyleProps } from "./HeroSlideStyle";
import { ChangeEvent, InputHTMLAttributes } from "react";
export interface MyRangeInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const FormStyle = styled.form<HeroSlideStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: ${(props) => props.flexBasis};
  padding: 20px;
`;
export const FormH4 = styled.h4`
  font-size: 20px;
`;
export const FormH3 = styled.h3`
  font-size: 24px;
  margin-botton: 1rem;
`;

export const FormStyleDiv = styled.div<HeroSlideStyleProps>`
  color: ${(props) => (props.color ? "#e29f51" : " #d1c9be")};
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const ButtonDiv = styled(FormStyleDiv)`
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
export const FormLabel = styled.label<HeroSlideStyleProps>`
  color: ${(props) => (props.color ? "#e29f51" : " #d1c9be")};
  margin-top: 0.5rem;
  margin-bottom: 0.8rem;
  font-size: 20px;
  font-weight: 700;
`;
export const FormInput = styled.input<HeroSlideStyleProps>`
  color: ${(props) => (props.color ? "#e29f51" : "#d1c9be")};
  &:focus {
    transform: scale(1.02);
  }
  height: 40px;
  color: ${(props) => (props.color ? "#e29f51" : " #d1c9be")};
  width: 50vw;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid "#e29f51";
  background: rgba(43, 42, 40);
  opacity: 1;
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  @media ${device.tablet} {
    width: 70vw;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const RangedFormInput = styled.input.attrs({
  type: "range",
})<MyRangeInputProps>`
  width: 40vw;
  height: 15px;
  -webkit-appearance: none;
  background: "#e29f51";
  outline: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 1);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: "#d1c9be";
    cursor: pointer;
    border: 4px solid #333;
    box-shadow: -407px 0 0 400px #e29f51;
  }
`;
export const FormSelect = styled.select<HeroSlideStyleProps>`
  color: ${(props) => (props.color ? "#e29f51" : " #d1c9be")};
  max-width: 100%;
  width: auto;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid "#e29f51";
  background: rgba(43, 42, 40);
  opacity: 1;
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);
  &:hover {
    background-color: rgba(43, 42, 40);
  }
`;
// :root {
//   --white: #afafaf;
//   --red: #e31b23;
//   --bodyColor: #292a2b;
//   --borderFormEls: hsl(0, 0%, 10%);
//   --bgFormEls: hsl(0, 0%, 14%);
//   --bgFormElsFocus: hsl(0, 7%, 20%);
// }
export const FormTextarea = styled.textarea<HeroSlideStyleProps>`
  width: 100%;
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid "#e29f51";
  background: rgba(43, 42, 40);
  opacity: 1;
  transition: background-color 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25),
    transform 0.3s cubic-bezier(0.57, 0.21, 0.69, 1.25);

  color: ${(props) => (props.color ? "#e29f51" : "#d1c9be")};
  &:focus {
    transform: scale(1.02);
  }
  height: 170px;
`;
export const FormButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.8em 4em;
  border: 2px solid #333;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: transform 0.5s ease-in-out;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 0.25rem;
  &:hover {
    background-color: #e29f51;
    color: #d1c9be;
  }

  /* Media query for responsive design */
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  @media only screen and (max-width: 480px) {
    text: nowrap;
  }
`;
export const FormSpan = styled.span<HeroSlideStyleProps>`
  &:focus {
    color: #e29f51;
  }
`;

export const FormWrapper = styled.div<HeroSlideStyleProps>`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background: #292a2b;
`;
