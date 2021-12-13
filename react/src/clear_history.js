import React, { useCallback } from 'react';

function ClearHistoryButton({clearHistory}) 
{
  const onClick = useCallback(() => {
    clearHistory();
  }, [clearHistory]);

  return (
      <button className="btn btn-outline-danger" type="button" onClick={onClick}><i class="bi bi-eraser"></i></button>
  );    
};

export default ClearHistoryButton;