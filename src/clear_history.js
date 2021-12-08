import React, { useCallback } from 'react';

function ClearHistoryButton() 
{
  const onClick = useCallback(() => {
    const element = document.querySelector('#msg-history');
    while (element.lastChild) {
      element.removeChild(element.lastChild);
  }
  }, []);

  return (
      <button className="btn btn-outline-danger" type="button" onClick={onClick}><i class="bi bi-eraser"></i></button>
  );    
};

export default ClearHistoryButton;