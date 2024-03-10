import { ISinglyLinkedListNode } from '../interfaces';

export const reverseSinglyLinkedList = (head: ISinglyLinkedListNode|null) : ISinglyLinkedListNode|null => {

    let node: ISinglyLinkedListNode|null = head;
    let prev: ISinglyLinkedListNode|null = null;

    while(node) {

        // Save next node to use it later (or you lose it).
        const next: ISinglyLinkedListNode|null = node.next;

        // Reverse the pointer.
        node.next = prev;

        // Increment previous to the current node.
        prev = node;

        // Increment node to next node or null at end of list.
        node = next;
    }

    // Return the new head.
    return prev;
};

export const getSinglyLinkedListMiddleNode = (head: ISinglyLinkedListNode|null) : ISinglyLinkedListNode|null => {

    let slow: ISinglyLinkedListNode|null = head;
    let fast: ISinglyLinkedListNode|null = head;

    while(fast?.next) {
        fast = fast.next.next;
        slow = slow?.next ?? null;
    }

    return slow;
};