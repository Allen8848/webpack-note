import _ from 'lodash';
import printMe from './print.js';
import './index.scss'
import './index.css'

function component () {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  var img = new Image()
  img.src = '/api/upload/captcha?t=' + Math.random()

  element.innerHTML = _.join(['Hello', 'plugins'], ' ');

  btn.innerHTML = '按扭666';
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(img);


  return element;
}
document.body.appendChild(component());
console.log(process.env.ROOT_API)
let promise = new Promise((resolve, reject) => {
  resolve(123)
})
promise.then((data) => {
  console.log(data)
})


