import React, { useCallback, useEffect, useState } from 'react';
import {ReadyState} from 'react-use-websocket';
import ClearHistoryButton from './clear_history';
import DownloadHistoryButton from './download_history';

function ConsoleLine({send, rs}) 
{
  const [message, setMessage] = useState("");
  const handleClickSendMessage = useCallback((e) => {
    send(message);
    e.preventDefault();
  }, [send, message]);
  const [send_disabled, setSendDisabled] = useState(true);
  useEffect(() => {
    if(message.length > 0 && rs === ReadyState.OPEN)
      setSendDisabled(false);
    else
      setSendDisabled(true);
  }, [message, setSendDisabled, rs]);
  const handleKeyDown = useCallback( (e) => { 
    if(e.key === "Enter")
    {
      e.preventDefault();   
      if(send_disabled === false) send(message);
    }    
  },[send, message, send_disabled]);


  return (
    <form className="container-xxl pt-2 px-0">
      <div className="input-group">
        <input className="form-control" type="text" placeholder="Message" aria-label="default input example" onKeyDown={e => handleKeyDown(e)} onChange={e => {setMessage(e.target.value);}}></input>
        <button className="btn btn-outline-primary" type="button" onClick={handleClickSendMessage} disabled={send_disabled}><i className="bi bi-send"></i></button>
        <DownloadHistoryButton />
        <ClearHistoryButton />
      </div>  
    </form>
  );
};

export default ConsoleLine;