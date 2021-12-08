import React from 'react';
import useWebSocket, {ReadyState} from 'react-use-websocket';

function ConnectionIcon({url}) 
{
  const {readyState} = useWebSocket(url,{share: true});

  switch (readyState)
  {
    case ReadyState.CONNECTING:
      return <i className="bi bi-question-circle text-warning"></i>;
    case ReadyState.CLOSED:
      return <i className="bi bi-x-circle text-danger"></i>;
    case ReadyState.CLOSING:
      return <i className="bi bi-x-circle text-danger"></i>;
    case ReadyState.OPEN:
      return <i className="bi bi-check-circle text-success"></i>;
    case ReadyState.UNINSTANTIATED:
      return <i className="bi bi-x-circle text-danger"></i>;
    default:
      return <div>?</div>;
  }
};

export default ConnectionIcon;