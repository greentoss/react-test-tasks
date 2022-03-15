import './App.css';
import Input from "./components/Input";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Chat from "./components/chat";

function App() {

  //TODO: make message appear in first click not vs second click
  //TODO: make message from chat unique

  const [textValue, setTextValue] = useState('')
  const [listMessage, setListMessage] = useState([])

  const dispatch = useDispatch()

  const message = useSelector((state) => state.message)

  const addMessageToStore = (message) => {
      dispatch({type:'ADD_MESSAGE', addedMessage: message, time: Date.now()})
  }

  const addMessageFromStoreToList = (messageFromStore) => {
      console.log(messageFromStore, 'message from store');
      if (messageFromStore === '') {
          return
      }
      setListMessage([...listMessage, messageFromStore])
  }

  const removeMessageFromChat = (event) => {
      console.log(event.target.textContent);
      let newListMessage = listMessage.filter((mes) => {
          return !mes.includes(event.target.textContent)
      })
      setListMessage(newListMessage)
  }

  const clearInput = () => {
      setTextValue('')
  }

  //1 catch changed input value and put it into local state
  const handleChange = (event) => {
    setTextValue(event.target.value)
  }

  const handleSend = () => {
    if (textValue === '') {
        return
    }
    console.log(textValue, 'textvalue from local store');
    addMessageToStore(textValue);
    clearInput();
    setTimeout(addMessageFromStoreToList(message), 500);
  }

  return (
    <div className="App">
      <h2>Chat below </h2>
          <Chat
              listMessage={listMessage}
              removeMessageFromChat={removeMessageFromChat}
          />
          <Input
              inputValue={textValue}
              handleSend={handleSend}
              handleChange={handleChange}
          />
    </div>
  );
}

export default App;
