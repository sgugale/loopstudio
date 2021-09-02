import { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar'
import SideMenu from './Components/sideMenu'
function App() {
  const [show, setShow] = useState(true)
  return (
    <div>
      {
        show ?
          <div className="header">
            <Navbar setShow={setShow} />
            <div className="tagline-box">
              IMMERSIVE EXPERIENCES THAT DELIVER
            </div>
          </div>
        :
          <SideMenu setShow={setShow} />
      }
    </div>

  );
}

export default App;
