import React from 'react';
import ReactDOM from 'react-dom';
import { H1BGraph } from './components/H1BGraph';

//helper functions
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.decapitalize = function() {
  return this.charAt(0).toLowerCase() + this.slice(1);
}

ReactDOM.render(<H1BGraph url="./public/data/h1bs.csv" />, document.querySelector('.container'));
