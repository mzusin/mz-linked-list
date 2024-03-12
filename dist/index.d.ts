declare module 'mz-linked-list' {

    export interface ISinglyLinkedListNode {
        val: number;
        next: ISinglyLinkedListNode | null;
    }

    export const reverseSinglyLinkedList: (head: ISinglyLinkedListNode) => ISinglyLinkedListNode | null;
    export const getSinglyLinkedListMiddleNode: (head: ISinglyLinkedListNode | null) => ISinglyLinkedListNode | null;
    export const singlyLinkedListHasCycle: (head: ISinglyLinkedListNode | null) => boolean;
}