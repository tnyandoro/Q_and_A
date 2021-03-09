import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  // Lodash
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());