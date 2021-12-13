import React from 'react';
import SendButton from './send_button';

function SendButtonGroup({send, readyState}) 
{
  return (
    <div className="col-2 mt-0 mb-0 mr-0 ml-0 pt-3">
      <div className="container-fluid px-0">
        <div className="row row-cols-1">
          <div className="col px-1 pb-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_0" label="0"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_1" label="1"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_2" label="2"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_3" label="3"/></div>

          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_4" label="4"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_5" label="5"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_6" label="6"/></div>

          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_7" label="7"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_8" label="8"/></div>
          <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_9" label="9"/></div>
        </div>
      </div>  
    </div>  
  );    
};

export default SendButtonGroup;