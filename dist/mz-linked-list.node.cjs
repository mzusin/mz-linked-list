/* 
mzLinkedList v1.0.0
A collection of TypeScript-based linked list helpers.
https://github.com/mzusin/mz-linked-list
Copyright (c) 2023-present, Miriam Zusin          
*/
var L=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var r=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var x=(l,n)=>{for(var e in n)L(l,e,{get:n[e],enumerable:!0})},y=(l,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let t of r(n))!g.call(l,t)&&t!==e&&L(l,t,{get:()=>n[t],enumerable:!(i=s(n,t))||i.enumerable});return l};var k=l=>y(L({},"__esModule",{value:!0}),l);var p={};x(p,{getSinglyLinkedListMiddleNode:()=>N,reverseSinglyLinkedList:()=>S,singlyLinkedListHasCycle:()=>I});module.exports=k(p);var S=l=>{let n=l,e=null;for(;n;){let i=n.next;n.next=e,e=n,n=i}return e},N=l=>{var i;let n=l,e=l;for(;e!=null&&e.next;)e=e.next.next,n=(i=n==null?void 0:n.next)!=null?i:null;return n},I=l=>{var i,t,d,o,u;let n=l,e=(t=(i=l==null?void 0:l.next)==null?void 0:i.next)!=null?t:null;for(;e!=null&&e.next;){if(e===n)return!0;n=(d=n==null?void 0:n.next)!=null?d:null,e=(u=(o=e.next)==null?void 0:o.next)!=null?u:null}return!1};0&&(module.exports={getSinglyLinkedListMiddleNode,reverseSinglyLinkedList,singlyLinkedListHasCycle});
//# sourceMappingURL=mz-linked-list.node.cjs.map
