/* 
mzLinkedList v1.0.0
A collection of TypeScript-based linked list helpers.
https://github.com/mzusin/mz-linked-list
Copyright (c) 2023-present, Miriam Zusin          
*/
var d=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var o=Object.getOwnPropertyNames;var s=Object.prototype.hasOwnProperty;var g=(i,n)=>{for(var e in n)d(i,e,{get:n[e],enumerable:!0})},r=(i,n,e,l)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of o(n))!s.call(i,t)&&t!==e&&d(i,t,{get:()=>n[t],enumerable:!(l=L(n,t))||l.enumerable});return i};var u=i=>r(d({},"__esModule",{value:!0}),i);var S={};g(S,{getSinglyLinkedListMiddleNode:()=>y,reverseSinglyLinkedList:()=>k});module.exports=u(S);var k=i=>{let n=i,e=null;for(;n;){let l=n.next;n.next=e,e=n,n=l}return e},y=i=>{var l;let n=i,e=i;for(;e!=null&&e.next;)e=e.next.next,n=(l=n==null?void 0:n.next)!=null?l:null;return n};0&&(module.exports={getSinglyLinkedListMiddleNode,reverseSinglyLinkedList});
//# sourceMappingURL=mz-linked-list.node.cjs.map
