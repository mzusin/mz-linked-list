declare module 'mz-linked-list' {

    export interface ISinglyLinkedListNode {
        val: number;
        next: ISinglyLinkedListNode | null;
    }

    export const reverseSinglyLinkedList: (head: ISinglyLinkedListNode) => ISinglyLinkedListNode | null;
}