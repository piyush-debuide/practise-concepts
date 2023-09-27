import { Launcher } from "react-chat-window";

const Chat = ({open}) => {
    const messageList = []
    const onMessageWasSent = () => {
      console.log('message was sent')
    }
return (
    <Launcher 
    agentProfile = {{
      teamName: 'Demo',
      imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
    }}
    onMessageWasSent={onMessageWasSent}
    messageList={messageList}
    isOpen={open}
    />
)}

export default Chat