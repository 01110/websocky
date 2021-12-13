import React, { useCallback, useEffect, useState } from 'react';
import {ReadyState} from 'react-use-websocket';
import useLocalStorage from 'react-use-localstorage';

function SendButton({send, storage_key, readyState, label}) 
{
  const [item, setItem] = useLocalStorage(storage_key);
  const [message, setMessage] = useState(item);
  const [disabled, setDisabled] = useState(true);
  const [focused, setFocused] = useState(false);
  const handleClickSendMessage = useCallback(() => {if(message.length > 0) send(message)}, [send, message]);
  const handleDocKeyDown = useCallback((ev) => {
    if(document.activeElement !== document.body) return;
    if(label === ev.key && message.length > 0 && !focused) 
      send(message);
  }, [message, label, send, focused])
  const handleKeyDown = useCallback( (e) => { 
    if(e.key === "Enter")
    {
      e.preventDefault();   
      if(disabled === false)
      {
        setItem(message);
        send(message);
      }
    }
  },[send, message, disabled, setItem]);

  useEffect(() => {
    setDisabled(readyState !== ReadyState.OPEN);
  }, [readyState, setDisabled]);

  useEffect(() =>
  {
    document.addEventListener("keydown", handleDocKeyDown);
    return () => document.removeEventListener("keydown", handleDocKeyDown);
  }, [handleDocKeyDown]);

  return (
    <form className="container-xxl pb-2 px-0">
      <div className="input-group">
        <input className="form-control" type="text" placeholder="Message" aria-label="default input example" defaultValue={message} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={e => handleKeyDown(e)} onChange={e => {setMessage(e.target.value); setItem(e.target.value);}}></input>
        <button className="btn btn-outline-primary" type="button" onClick={handleClickSendMessage} disabled={disabled}><i className="bi bi-send"></i> {label}</button>
      </div>     
    </form>
  );    
};

export default SendButton;