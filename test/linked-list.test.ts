import { reverseSinglyLinkedList } from '../src/core/singly-linked-list';

describe('reverseSinglyLinkedList()', () => {

    it('Reverses an empty singly linked list', () => {
        expect(reverseSinglyLinkedList(null)).toBe(null);
    });

    it('1 -> 2', () => {

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
