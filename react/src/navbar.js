import React, { useState, useCallback } from 'react';
import useLocalStorage from 'react-use-localstorage';
import ConnectionIcon from './connection_icon';

function Navbar({default_url, url_setter}) 
{
  const [url_stored, storeUrl] = useLocalStorage("weboscket_url", default_url);
  const [url, setUrl] = useState(url_stored);
  const [url_edited, setUrlEdited] = useState(url);
  const handleKeyDown = useCallback( (e) => { 
    if(e.key === "Enter")
    {
      storeUrl(url_edited);
      setUrl(url_edited);
      url_setter(url_edited);
      e.preventDefault();
      e.target.blur();
    }    
  },[storeUrl, setUrl, url_setter, url_edited]);

  return (
    <nav className="navbar navbar-light bg-light">
      <form className="container-fluid">      
      <div className="navbar-brand ml-3">
        &#123;websocky&#125;
      </div>
        <div className="w-50 input-group position-absolute top-0 start-50 translate-middle-x mt-2">
          <span className="input-group-text my-auto" style={{height: '38px'}}>
            <ConnectionIcon url={url}/>
          </span>
          <input type="text" className="form-control text-center" defaultValue={url} onKeyDown={e => handleKeyDown(e)} onChange={e => {setUrlEdited(e.target.value);}}></input>
        </div>
      </form>
    </nav>
  );
};

export default Navbar;