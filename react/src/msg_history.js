import React, { useState, useEffect, useRef, useCallback } from 'react';
import useWebSocket from 'react-use-websocket';
import MsgType from './msg_type';
import Moment from 'react-moment';
import ConsoleLine from './console_line';

function MessageHistory({url, tx, rs, send}) 
{
  const [messageHistory, setMessageHistory] = useState([]);
  const {lastMessage} = useWebSocket(url, {
    share: true,
    onClose: () => {
      setMessageHistory(prev => prev.concat({data: `Socket closed: ${url}`, type: "close", timestamp: new Date()}));
    },
    onOpen: () => {
      setMessageHistory(prev => prev.concat({data: `Socket opened: ${url}`, type: "open", timestamp: new Date()}));
    },
    onReconnectStop: () => {
      setMessageHistory(prev => prev.concat({data: `Reconnection limit reached: ${url}`, type: "close", timestamp: new Date()}));
    }
  });
  const messages = useRef(null);
  const clearHistory = useCallback(() => {
    setMessageHistory([]);
  }, [setMessageHistory]);

  useEffect(() => {
    if (tx == null) return;
    setMessageHistory(prev => prev.concat({data: tx.data, type: "tx", timestamp: tx.timestamp}));
  }, [tx, setMessageHistory]);

  useEffect(() => {
    if(lastMessage == null) return;
    setMessageHistory(prev => prev.concat({data: lastMessage.data, type: "rx", timestamp: new Date()}));
  }, [lastMessage, setMessageHistory]);


  useEffect(() => {
    if (messages) {
      messages.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [messages])

  return (
    <div className="col-8 offset-2 mb-0 mr-0 ml-0">
      <div className="container-xxl pt-3 px-0">
        <div className="card" style={{height: "calc(100vh - 142px)"}} >
          <div id="msg-history" className="card-body mh-100 overflow-auto p-3 striped-list" ref={messages}>
                {messageHistory.map((message, idx) => 
                <div className="msg-line" style={{display: "flex", flexWrap: "nowrap"}} key={idx}>
                  <div className="msg-header font-monospace mr-2" style={{width: "calc(14.85em)"}}><Moment date={message.timestamp} format="YY-MM-DD HH:mm:ss.SSS" />&nbsp;<MsgType type={message.type} /></div> 
                  <div className="msg-event font-monospace" style={{width: "calc(100% - 14.85em)"}}>{message.data}</div>
                </div>)}
          </div>
        </div>
      </div>
      <ConsoleLine rs={rs} send={send} clearHistory={clearHistory}/>
    </div>    
  );
};

export default MessageHistory;