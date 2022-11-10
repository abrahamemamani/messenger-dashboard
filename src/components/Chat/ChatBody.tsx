import { Div } from "@/styled-components/elements";
import React from "react";
import { ChatMessage } from "@/components/Chat/";

export const ChatBody = () => {
  return (
    <Div flex="1">
      <ChatMessage />
    </Div>
  );
};
