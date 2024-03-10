/* 
mzLinkedList v1.0.0
A collection of TypeScript-based linked list helpers.
https://github.com/mzusin/mz-linked-list
Copyright (c) 2023-present, Miriam Zusin          
*/
var d=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var r=Object.prototype.hasOwnProperty;var s=(n,e)=>{for(var i in e)d(n,i,{get:e[i],enumerable:!0})},g=(n,e,i,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of L(e))!r.call(n,l)&&l!==i&&d(n,l,{get:()=>e[l],enumerable:!(t=o(e,l))||t.enumerable});return n};var k=n=>g(d({},"__esModule",{value:!0}),n);var y={};s(y,{reverseSinglyLinkedList:()=>u});module.exports=k(y);var u=n=>{let e=n,i=null;for(;e;){let t=e.next;e.next=i,i=e,e=t}return i};0&&(module.exports={reverseSinglyLinkedList});
//# sourceMappingURL=mz-linked-list.node.cjs.map
