// Here instead of importing Launcher (a third party chat widget) directly at the top (static import), we are using it dynamically by lazy loading it when required. How do we lazy load? here we have a simple button which when clicked conditionally renders our custom created Chat component - which basically renders Launcher component. We are lazy loading our chat component here with help of lazy function from react - this will import our chat component (also actual third party component which is inside Chat component) only when it's used (rendered).

import './App.css';
import { lazy, useState, Suspense } from 'react';
// import {Launcher} from 'react-chat-window'

function HomePage() {
  const [open, setOpen] = useState(false)
  const Chat = lazy(() => import('./Chat'))
  const handleLauncher = () => {
    setOpen(true)
  }
  return (
    <div className="HomePage">
      <button onClick={handleLauncher}>open</button>
      {open && (
        <Suspense fallback={<div>Loading...</div>}>
                <Chat 
      open={open}
      />
        </Suspense>
      )}
    </div>
  );
}

export default HomePage;