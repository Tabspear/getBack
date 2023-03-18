import styled from "styled-components";
interface HeaderProps {
  primary?: Boolean;
  backgroundColor?: string;
  color?: string;
}
export const HeaderStyle = styled.header<HeaderProps>`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100vw;
`;
