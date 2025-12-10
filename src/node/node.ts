import type { ReactiveNodeChild, TagName } from "./node.types";
 
export class ReactiveNode<T extends TagName> {
  protected dom;
  
  constructor(protected tag: T, protected children: ReactiveNodeChild[] = []){
    this.dom = document.createElement(tag)
  }

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