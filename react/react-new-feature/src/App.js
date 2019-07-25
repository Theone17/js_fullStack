import React, { useState } from 'react';
import ConcurrentModeDemo from './concurrent/index';
import Index from './lifeCycle-react15/index';
import './App.css';
// hooks 对function组件增强

function App() {
  const [parentCount, setParentCount] = useState(0);
  return (
    <div>
      <button onClick={() => {setParentCount(parentCount + 1)}}>setParentCount</button>
      <Index parentCount={parentCount}/>
      <ConcurrentModeDemo />
    </div>
  );
}

export default App;
