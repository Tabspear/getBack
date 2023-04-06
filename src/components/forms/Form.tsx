import { FormEvent, useState } from "react";
import {
  ButtonDiv,
  FormButton,
  FormH3,
  FormH4,
  FormInput,
  FormLabel,
  FormSelect,
  FormSpan,
  FormStyle,
  FormStyleDiv,
  FormTextarea,
  FormWrapper,
  RangedFormInput,
} from "../../styles/FormStyle";

const starStyle = {
  fontSize: "200%",
  color: "#FDBD01",
  width: "70vw",
  maxWidth: "100%",
};
interface FormProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
const Forms = (props: FormProps) => {
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");

  const handleEventChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const changingValue = e.target.value;
    setStar(Number(changingValue));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <FormWrapper>
      <FormStyle onSubmit={handleSubmit}>
        <FormStyleDiv color="#e29f51">
          <FormH3>We need your Feedback</FormH3>
          <FormH4>Rate our event! </FormH4>
        </FormStyleDiv>

        <FormStyleDiv>
          <RangedFormInput
            type="range"
            min={0}
            max={5}
            step={1}
            list={"markers"}
            value={star}
            onChange={handleEventChange}
          />
          <FormLabel>
            <span style={starStyle}>
              {[...Array(star).keys()].map(() => (
                <span>&#9733;</span>
              ))}
              {star}
            </span>
          </FormLabel>
        </FormStyleDiv>

        <FormStyleDiv>
          <FormLabel color="e29f51">Tell us your name? </FormLabel>
          <FormSelect>
            <option disabled>-- But you don't have to! --</option>
            <option value="anoymous">Anoymous</option>
            <option value="I donn't mind">I don't mind</option>
          </FormSelect>
        </FormStyleDiv>
        <FormStyleDiv>
          <FormLabel color="#e29f51">Name</FormLabel>
          <FormInput type={"text"} />
          <FormLabel color="#e29f51">Email</FormLabel>
          <FormInput type={"email"} />
        </FormStyleDiv>
        <FormStyleDiv>
          <FormLabel color="#e29f51">
            Ask a question or Pass a comment
          </FormLabel>
          <FormTextarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></FormTextarea>
        </FormStyleDiv>

        <ButtonDiv>
          <FormButton type="submit" value={"Submit"}>
            <FormSpan>Submit</FormSpan>
          </FormButton>

          <FormButton type="reset" disabled>
            <FormSpan>Reset</FormSpan>
          </FormButton>
        </ButtonDiv>
      </FormStyle>
    </FormWrapper>
  );
};

export default Forms;
