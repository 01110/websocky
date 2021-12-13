import { useState } from 'react';
import useWebSocket from 'react-use-websocket';
import useLocalStorage from 'react-use-localstorage';
import MessageHistory from "./msg_history";
import Navbar from './navbar';

import SendButtonGroup from './sendButtonsGroup';

const default_url = 'ws://localhost';

function App() 
{ 
  const [url_stored] = useLocalStorage("weboscket_url", default_url);
  const [wsUrl, setWsUrl] = useState(url_stored);
  const {sendMessage, readyState} = useWebSocket(wsUrl, {shouldReconnect: () => true, share: true});
  const [sentMessage, setSentMessage] = useState();
  const send = (msg) =>  {
    setSentMessage({data: msg, timestamp: new Date().toISOString()});
    sendMessage(msg);
  }

  return (
    <div>
      <Navbar default_url={wsUrl} url_setter={setWsUrl} />
      <div className="row mb-0 w-100">
        <MessageHistory url={wsUrl} tx={sentMessage} rs={readyState} send={send}/>
        <SendButtonGroup readyState={readyState} send={send}/>
      </div>
    </div>
  );
}

export default App;
