# A collection of TypeScript-based linked list helpers 🚀

```ts
export interface ISinglyLinkedListNode {
    val: number;
    next: ISinglyLinkedListNode | null;
}

export const reverseSinglyLinkedList: (head: ISinglyLinkedListNode) => 
    ISinglyLinkedListNode | null;

export const getSinglyLinkedListMiddleNode: (head: ISinglyLinkedListNode | null) =>
    ISinglyLinkedListNode | null;
```