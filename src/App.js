import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import ImageCarausal from './components/ImageCarausal';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionA/>
      <SectionB/>
      <ImageCarausal/>
      <hr/>
      <Footer/>
    </div>
  );
}

export default App;
