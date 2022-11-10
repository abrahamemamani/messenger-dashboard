import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

const Container = styled.img<SpaceProps>`
  ${space};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Avatar = () => {
  return (
    <Container
      mr=".7rem"
      src="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    />
  );
};
