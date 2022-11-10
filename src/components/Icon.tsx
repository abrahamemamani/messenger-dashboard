import theme from "@/theme/settings";
import styled from "styled-components";

interface IIconProps {
  name: tIcon;
  size?: number;
  onClick?: () => void;
}

interface IStyledIconProps {
  size: number;
}

export type tIcon = string;

const StyledIcon = styled.i<IStyledIconProps>`
  font-size: ${({ size }) => size}px;
  color: ${theme.colors.gray.lighter};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

export const Icon = ({ name, size = 20, onClick }: IIconProps) => {
  return (
    <StyledIcon
      onClick={onClick}
      size={size}
      className={`fi fi-rr-${name}`}
    ></StyledIcon>
  );
};
