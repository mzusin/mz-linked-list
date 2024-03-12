/* 
mzLinkedList v1.0.0
A collection of TypeScript-based linked list helpers.
https://github.com/mzusin/mz-linked-list
Copyright (c) 2023-present, Miriam Zusin          
*/
var u=l=>{let n=l,e=null;for(;n;){let i=n.next;n.next=e,e=n,n=i}return e},s=l=>{var i;let n=l,e=l;for(;e!=null&&e.next;)e=e.next.next,n=(i=n==null?void 0:n.next)!=null?i:null;return n},r=l=>{var i,t,L,d,o;let n=l,e=(t=(i=l==null?void 0:l.next)==null?void 0:i.next)!=null?t:null;for(;e!=null&&e.next;){if(e===n)return!0;n=(L=n==null?void 0:n.next)!=null?L:null,e=(o=(d=e.next)==null?void 0:d.next)!=null?o:null}return!1};export{s as getSinglyLinkedListMiddleNode,u as reverseSinglyLinkedList,r as singlyLinkedListHasCycle};
//# sourceMappingURL=mz-linked-list.esm.js.map
