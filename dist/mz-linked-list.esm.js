/* 
mzLinkedList v1.0.0
A collection of TypeScript-based linked list helpers.
https://github.com/mzusin/mz-linked-list
Copyright (c) 2023-present, Miriam Zusin          
*/
var t=i=>{let n=i,e=null;for(;n;){let l=n.next;n.next=e,e=n,n=l}return e},d=i=>{var l;let n=i,e=i;for(;e!=null&&e.next;)e=e.next.next,n=(l=n==null?void 0:n.next)!=null?l:null;return n};export{d as getSinglyLinkedListMiddleNode,t as reverseSinglyLinkedList};
//# sourceMappingURL=mz-linked-list.esm.js.map
