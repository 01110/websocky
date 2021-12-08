import React, { useState } from 'react';
import SendButton from './send_button';

function SendButtonGroup({send, readyState}) 
{
  const [focused, setFocused] = useState(false);


  return (
    <div className="container-fluid px-0">
      <div className="row row-cols-1">
        <div className="col px-1 pb-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_0" label="0" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_1" label="1" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_2" label="2" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_3" label="3" group_set_focused={setFocused} group_focused={focused}/></div>

        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_4" label="4" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_5" label="5" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_6" label="6" group_set_focused={setFocused} group_focused={focused}/></div>

        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_7" label="7" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_8" label="8" group_set_focused={setFocused} group_focused={focused}/></div>
        <div className="col p-1"><SendButton send={send} readyState={readyState} storage_key="send_btn_9" label="9" group_set_focused={setFocused} group_focused={focused}/></div>
      </div>
    </div>    
  );    
};

export default SendButtonGroup;