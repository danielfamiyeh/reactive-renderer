import { ReactiveComponent } from "./component/component";
import { ReactiveNode } from "./node";
import { ReactiveRoot } from "./root";

const p = new ReactiveNode('h1', ['Hello World'])
const elem = new ReactiveComponent('h1',{}, ['1'])
const root = new ReactiveRoot('div', [elem, p])

elem.onUpdate({number: 2})


root.render();