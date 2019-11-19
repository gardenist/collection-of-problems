const expect = require('chai').expect;
import init from './view/init';
import '../css/main.css';
init.initView();

function createItem(text) {
    let li = document.createElement('li');
    li.innerText = text;
    return li;
}
document.getElementById('categories').appendChild(createItem('1'));
document.getElementById('categories').appendChild(createItem('2'));
document.getElementById('categories').appendChild(createItem('3'));