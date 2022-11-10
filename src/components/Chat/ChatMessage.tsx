import { Div, Flex, FlexInline, Span } from "@/styled-components/elements";
import styled from "styled-components";
import { Avatar, Emoji, Icon, Reaction } from "@/components";
import theme from "@/theme/settings";

export const ChatMessage = () => {
  return (
    <Flex justifyContent="flex-end" mt={4}>
      <Flex>
        <Flex pr={3} alignItems="flex-end" flexDirection="column">
          <FlexInline alignItems="baseline" mb={2}>
            <Span fontSize={theme.fontSizes.base} fontWeight="bold" mr={2}>
              You
            </Span>
            <Span
              fontSize={theme.fontSizes.sm}
              fontWeight="600"
              color={theme.colors.gray.default}
            >
              16:04
            </Span>
          </FlexInline>
          <Div
            paddingY={3}
            paddingX={3}
            borderRadius={20}
            borderTopRightRadius={0}
            fontSize={theme.fontSizes.base}
            backgroundColor={theme.colors.gray.dark}
          >
            <Span fontSize={theme.fontSizes.base}>
              Hello, I have new cool idea, are u ready guys?
              <Emoji symbol="🔥" label="fire" size={20} />
            </Span>
          </Div>
          <FlexInline mt={1}>
            <Reaction symbol="💗" amount={9} label="heart" />
          </FlexInline>
        </Flex>
        <Avatar />
      </Flex>
    </Flex>
  );
};
