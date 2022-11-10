import { FlexInline, Span } from "@/styled-components/elements";
import theme from "@/theme/settings";
import { Emoji, IEmojiProps } from "@components/Emoji";

interface IReactionProps extends IEmojiProps {
  amount: number;
}

export const Reaction = ({ amount, symbol, label }: IReactionProps) => {
  const size = 16;

  return (
    <FlexInline
      paddingX={2}
      paddingY={1}
      borderRadius={15}
      alignItems="center"
      bg={theme.colors.gray.darker}
    >
      <Emoji {...{ symbol, label, size }} />
      <Span fontSize={theme.fontSizes.base} ml={1}>
        {amount}
      </Span>
    </FlexInline>
  );
};
