// Lazy loading (code splitting) can be very useful when we want a certain component or a piece of code to run only when required. For ex. we can choose to load respective chunk of data or code only when user clicks a ceratin button or performs a certain action, when user nagivates to a certain route, when a specific element is visible on screen. This could help optimize performance of our app especially when we have heavy components or elements which takes times to load or process.

import './App.css';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
