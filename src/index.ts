import * as singlyLinkedList from './core/singly-linked-list';

const api = {
    ...singlyLinkedList,
};

declare global {
    interface Window {
        mzLinkedList: typeof api,
    }
}

window.mzLinkedList = window.mzLinkedList || api;

export * from './core/singly-linked-list';