import { Span } from "@/styled-components/elements";
import theme from "@/theme/settings";
import styled from "styled-components";

const { xlarge } = theme.fontSizes;

export interface IEmojiProps {
  symbol: string;
  label?: string;
  size?: tEmojiSize;
}

type tEmojiSize = number | string;

export const Emoji = ({ symbol, label, size = xlarge }: IEmojiProps) => {
  return (
    <Span
      fontSize={size}
      role="img"
      aria-label={label || ""}
      aria-hidden={!label}
    >
      {symbol}
    </Span>
  );
};
