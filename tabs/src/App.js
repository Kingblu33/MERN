import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TabContent from './components/TabContent';
import SelectForm from './components/SelectForm';
import './App.css';
import Example from './components/Example';
import Time from './components/Time';
import Pokemon from './components/Pokemon';

function App() {
  const [tabs, setTab] = useState({
    content: ["Tab 1 content", "Tab 2 Content", "Tab 3 Content"],
    selectedTab: 0,
  })


  return (
    <div className="container mt-5">

      <TabContent tab={tabs} setTab={setTab} />
      {/* <SelectForm /> */}
      {/* <Example /> */}
      {/* <Time /> */}
      {/* <Pokemon /> */}
    </div>
  );
}

export default App;

