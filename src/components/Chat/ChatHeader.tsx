import { Flex, Span } from "@/styled-components/elements";
import { Avatar, Icon } from "@/components";
import theme from "@/theme/settings";

interface IChatHeaderProps {}

export const ChatHeader = (props: IChatHeaderProps) => {
  return (
    <Flex
      pb={15}
      borderBottom={`1px solid ${theme.colors.gray.details}`}
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex>
        <Avatar />
        <Flex flexDirection="column" justifyContent="center">
          <Span mb={1} fontSize={theme.fontSizes.md} fontWeight="bold">
            Designers
          </Span>
          <Span fontWeight="bold" fontSize={theme.fontSizes.base}>
            <Span color={theme.colors.gray.lighter}>56 members, </Span>
            <Span color={theme.colors.blue}>28 online</Span>
          </Span>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" width="170px">
        <Icon name="phone-call" size={23} />
        <Icon
          name="video-camera-alt"
          size={27}
          onClick={() => console.log("video-camera-alt")}
        />
        <Icon name="search" size={23} />
        <Icon
          name="settings"
          size={25}
          onClick={() => console.log("settings")}
        />
      </Flex>
    </Flex>
  );
};
