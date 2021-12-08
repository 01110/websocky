import React, { useCallback } from 'react';

function DownloadHistoryButton() 
{
  const downloadTxtFile = useCallback(() => 
  {
    let history = "";
    const items = document.querySelector('#msg-history').children;
    const listArray = [...items];
    listArray.forEach((item) => {
      const header = item.querySelector('.msg-header');
      const event = item.querySelector('.msg-event');
      history+=header.textContent;
      history+=event.textContent;
      history+="\n";
    });

    console.log(history);
    const element = document.createElement("a");
    const file = new Blob([history], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "websocket_log.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }, []);

  return (
      <button className="btn btn-outline-primary" type="button" onClick={downloadTxtFile}><i class="bi bi-arrow-down-circle"></i></button>
  );    
};

export default DownloadHistoryButton;