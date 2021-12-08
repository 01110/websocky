import React from 'react';

function MsgType({type}) 
{
  switch (type)
  {
    case "tx":
      return <i className="bi bi-arrow-left-circle text-primary"></i>;
    case "rx":
      return <i className="bi bi-arrow-right-circle text-warning"></i>;
    case "open":
      return <i className="bi bi-check-circle text-success"></i>;
    case "close":
      return <i className="bi bi-x-circle text-danger"></i>;
    default:
      return <div>?</div>;
  }
};

export default MsgType;