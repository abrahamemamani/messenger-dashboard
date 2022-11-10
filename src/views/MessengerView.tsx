import { Chat } from "@/components";
import { Div, Flex } from "@/styled-components/elements";
import theme from "@/theme/settings";

export const MessengerView = () => {
  return (
    <Flex height="100vh" backgroundColor={theme.colors.main}>
      <Div width="500px" borderRight={`1px solid ${theme.colors.gray.details}`}>
        Sidebar
      </Div>
      <Div flexGrow="1">
        <Chat />
      </Div>
    </Flex>
  );
};
