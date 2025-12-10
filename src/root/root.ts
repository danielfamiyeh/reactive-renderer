import { ReactiveNode } from "../node";
import type { ReactiveNodeChild, TagName } from "../node/node.types";

export class ReactiveRoot extends ReactiveNode<TagName> {
  constructor(tagName: TagName = 'div', children: ReactiveNodeChild[] = []) {
    super(tagName, children)
  }

  render(){
    super.render()
    this.dom && document.body.appendChild(this.dom)

    return this.dom
  }
}