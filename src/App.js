// App.js
import React from 'react';
import Heading from './components/Heading';
import ImageGrid from './components/ImageGrid';
import Title from './components/Title';
import Bars from './components/Bars';
import ParallaxImages from './components/ParallaxImages';
import Staggared from './components/Staggared';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      <div id="content">
        <Heading />
        <ImageGrid />
        <Title />
        <Bars />
        <ParallaxImages />
        <Staggared />
      </div>
    </div>
  );
}

export default App;
