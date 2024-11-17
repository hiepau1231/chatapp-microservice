import {
  ArrowButton,
  Avatar,
  ChatContainer,
  ConversationHeader,
  MainContainer,
  MessageInput,
  MessageList,
} from "@chatscope/chat-ui-kit-react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { useSubscription } from "react-stomp-hooks";
import { createAvatar, formatUsername } from "../utils/helpers";
import { useChat } from "../hooks/useChat";
import CustomMessage from "../components/Message";

const Chat = ({ user, logout }) => {
  const { data, sendMessage, onMessageReceived } = useChat(user);
  useSubscription("/topic/newMessage", onMessageReceived);

  return (
    <div
      style={{
        height: "100dvh",
      }}
    >
      <MainContainer>
        <ChatContainer
          style={{
            paddingTop: "10px",
          }}
        >
          <ConversationHeader>
            <Avatar src={createAvatar(user?.id)} />
            <ConversationHeader.Content
              userName={formatUsername(user?.fullName) || ""}
            />
            <ConversationHeader.Actions>
              <ArrowButton onClick={() => logout()} />
            </ConversationHeader.Actions>
          </ConversationHeader>
          <MessageList loading={!data}>
            {data && data.messages.length === 0 && (
              <MessageList.Content
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  fontSize: "1.2em",
                }}
              >
                <p>No messages yet</p>
                <p>Send a message to start the conversation</p>
              </MessageList.Content>
            )}
            {data &&
              data.messages.map((message) => (
                <CustomMessage
                  key={message.id}
                  content={message.content}
                  timestamp={message.createdAt}
                  isSent={message.user.id === user.id.toString()}
                  isRead={true}
                  sender={message.user.name}
                />
              ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={(message) => sendMessage(message)}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
    </div>
  );
};

export default Chat;
