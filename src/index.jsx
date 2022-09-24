import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Peripleo from '@peripleo/peripleo';
import { 
  BrowserStoreProvider, 
  Map,
  HUD,
  SearchInput
} from '@peripleo/peripleo';

import './index.css';

const App = () => {

  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetch('places-2022-09-14.json')
      .then(res => res.json())
      .then(({ features }) => setNodes(features));
  }, []);

  return (
    <BrowserStoreProvider 
      nodes={nodes}
      edges={[]}>

      <Peripleo>      

        <Map.MapLibreGL
          mapStyle="https://api.maptiler.com/maps/outdoor/style.json?key=cqqmcLw28krG9Fl7V3kg" 
          defaultBounds={[-15.764914, 33.847608, 35.240991, 58.156214]} />

        <HUD>
          <SearchInput />
        </HUD> 
          
      </Peripleo>

    </BrowserStoreProvider>
  )

}

window.onload = function() {

  ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
    
}