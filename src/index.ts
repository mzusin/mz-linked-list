import * as linkedList from './core/linked-list';

const api = {
    ...linkedList,
};

declare global {
    interface Window {
        mzLinkedList: typeof api,
    }
}

window.mzLinkedList = window.mzLinkedList || api;

export * from './core/linked-list';