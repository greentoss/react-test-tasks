import chatStyle from './chat.module.css';
import {v4 as uuidv4} from 'uuid';

export default function Chat({listMessage, removeMessageFromChat}) {
    return (<div className={chatStyle.chatBox}>
        <ul>
            {listMessage.map((message) => {
                return <li
                    key={uuidv4()}
                    onClick={removeMessageFromChat}
                >{message}</li>
            })}
        </ul>
    </div>);
}
