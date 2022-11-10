import { Flex } from "@/styled-components/elements";
import theme from "@/theme/settings";
import { ChatHeader, ChatBody } from "@/components/Chat/";

export const Chat = () => {
  return (
    <Flex
      flexDirection="column"
      height="100%"
      paddingX={20}
      paddingY={15}
      color={theme.colors.white}
    >
      <ChatHeader />
      <ChatBody />
    </Flex>
  );
};
