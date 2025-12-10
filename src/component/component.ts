import { ReactiveNode } from "../node";
import { ReactiveNodeChild, TagName } from "../node/node.types";

export class ReactiveComponent<T extends TagName> extends ReactiveNode<T> {
  private props?: any;
  private state?: any;
  private lastStateSerialised?: string

  constructor(tag: T, props = {}, children?: ReactiveNodeChild[]){
    super(tag, children)
    this.props = props;
    this.state = {}
  }

  onMount(){}

  onUpdate(state?: any){
    const serializedState = JSON.stringify(state);
    if (this.lastStateSerialised === serializedState) return;

    this.state = state;
    this.render();
    this.lastStateSerialised === serializedState;
  }

  beforeUnmount(){}

  render(){
   // I guess this would happen on the virtual DOM
    // and then we'd swap the innerHtml with the virutal one
    this.dom = document.createElement(this.tag)

    // TODO: Store filtered child array once and then observe for updates
    this.children.forEach((child) => {
      this.dom.appendChild(child instanceof ReactiveNode ? child.render() : document.createTextNode(child))
    })

    return this.dom;
  }
}