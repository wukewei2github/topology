import { Node } from '../../models/node';
import { Rect } from '../../models/rect';

export function lineAnchors(node: Node) {
  node.anchors.push(new Rect(node.rect.x - 4, node.rect.y + node.rect.height / 2 - 4, 8, 8));
  node.anchors.push(new Rect(node.rect.x + node.rect.width - 4, node.rect.y + node.rect.height / 2 - 4, 8, 8));
}