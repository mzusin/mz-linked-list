import { reverseSinglyLinkedList, getSinglyLinkedListMiddleNode, singlyLinkedListHasCycle } from '../src/core/singly-linked-list';
import { ISinglyLinkedListNode } from '../src/interfaces';

describe('Singly Linked List', () => {

    describe('reverseSinglyLinkedList()', () => {

        it('Reverses an empty singly linked list', () => {
            expect(reverseSinglyLinkedList(null)).toBe(null);
        });

        it('2 -> 1', () => {

            const list = {
                val: 2,
                next: {
                    val: 1,
                    next: null
                }
            };

            const reversedHead = reverseSinglyLinkedList(list);

            expect(reversedHead).toStrictEqual({
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            });
        });

        it('1 -> 2 -> 3 -> 4 -> 5', () => {

            const list = {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                                next: null,
                            }
                        }
                    }
                }
            };

            const reversedHead = reverseSinglyLinkedList(list);

            expect(reversedHead).toStrictEqual({
                val: 5,
                next: {
                    val: 4,
                    next: {
                        val: 3,
                        next: {
                            val: 2,
                            next: {
                                val: 1,
                                next: null,
                            }
                        }
                    }
                }
            });
        });

    });

    describe('getSinglyLinkedListMiddleNode()', () => {

        it('Empty singly linked list', () => {
            expect(getSinglyLinkedListMiddleNode(null)).toBe(null);
        });

        it('1 -> 2', () => {

            const list = {
                val: 1,
                next: {
                    val: 2,
                    next: null
                }
            };

            expect(getSinglyLinkedListMiddleNode(list)).toStrictEqual({
                val: 2,
                next: null
            });
        });

        it('1 -> 2 -> 3 -> 4', () => {

            const list = {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: null,
                        }
                    }
                }
            };

            expect(getSinglyLinkedListMiddleNode(list)).toStrictEqual({
                val: 3,
                next: {
                    val: 4,
                    next: null,
                }
            });
        });

        it('1 -> 2 -> 3 -> 4 -> 5', () => {

            const list = {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                                next: null,
                            }
                        }
                    }
                }
            };

            expect(getSinglyLinkedListMiddleNode(list)).toStrictEqual({
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 5,
                        next: null,
                    }
                }
            });
        });

    });

    describe('singlyLinkedListHasCycle()', () => {

        it('Empty singly linked list', () => {
            expect(singlyLinkedListHasCycle(null)).toBe(false);
        });

        it('2 -> 1', () => {

            const list = {
                val: 2,
                next: {
                    val: 1,
                    next: null
                }
            };

            expect(singlyLinkedListHasCycle(list)).toStrictEqual(false);
        });

        it('1 -> 2 -> 3 -> 4 -> 5', () => {

            const list = {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: {
                                val: 5,
                                next: null,
                            }
                        }
                    }
                }
            };

            expect(singlyLinkedListHasCycle(list)).toStrictEqual(false);
        });

        it('1 -> 2 -> 3 -> 4 -> 5 -> return_to_1', () => {

            const last: ISinglyLinkedListNode|null = {
                val: 5,
                next: null,
            };

            const list: ISinglyLinkedListNode|null = {
                val: 1,
                next: {
                    val: 2,
                    next: {
                        val: 3,
                        next: {
                            val: 4,
                            next: last,
                        }
                    }
                }
            };

            last.next = list;

            expect(singlyLinkedListHasCycle(list)).toStrictEqual(true);
        });

    });
});
