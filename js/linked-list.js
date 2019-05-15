class Node {
    constructor(data) {
        // a Node starts with a given data property
        this.data = data;
        this.next = null;
        // a Node also has a .next property initialized as null
    }

    setNext(next) {
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // a Linked List starts with a "head" property intialized as null
    }
    appendNode(data) {
        let newNode = new Node(data);

        let walker = this.head;
        if (walker === null) {
            //set new node as head with null next
            this.head = newNode;
        } else {
            if (walker.next === null) {
                walker.setNext(newNode);
            } else {
                while (walker.next) {

                    if (walker.next.next === null) {
                        //last node found
                        walker.next.setNext(newNode);
                        return;
                    }
                    walker = walker.next
                }
            }
        }

        // creates a new node with the given data and adds it to back of the list
    }
    prependNode(data) {
        let newNode = new Node(data);
        newNode.setNext(this.head);
        this.head = newNode;
        // creates a new node with the given data and adds it to the front of the list
    }
    pop() {
        // removes the last node from the list and returns it
        let walker = this.head;
        if (walker === null) {
            return null;
        }
        if (walker.next === null) {
            let lastNode = walker;
            this.head = null;
            return lastNode;
        }
        while (walker.next) {
            if (walker.next.next === null) {
                //last node found
                let lastNode = walker.next;
                walker.setNext(null);
                return lastNode;
            }
            walker = walker.next;
        }
    }

    removeFromFront() {
        if (this.head === null) {
            //list is empty
            return null;
        } else {
            let firstNode = this.head;
            if (this.head.next === null) {
                //only head is present
                this.head = null;
                return firstNode;
            } else {
                let newHead = this.head.next;
                this.head = newHead;
                return firstNode;
            }
        }
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data) {
        let newNode = new Node(data);

        let walker = this.head;
        let previousNode;
        let count = 1;

        if (walker === null) {
            //no elements
            //make inserted element a node at head
            this.head = newNode;
            return;
        }

        if (walker.next === null && X > count) {
            // only one element, and user intended to insert element not at head
            this.head.setNext(newNode);
            return;
        }
        //at this point list has more than one element
        while (walker.next) {

            if (X === 0) {
                //special case for head
                newNode.setNext(this.head);
                this.head = newNode;
                return;
            }
            //X is not 0, user intends to insert X somewhere else
            previousNode = walker;
            walker = walker.next;
            //on first iteration, previous node represents head, and walker represents the second and nextNode is the third element.
            if (X === count) {
                //set the node here
                previousNode.setNext(newNode);
                newNode.setNext(walker);
                return;
            }

            if (walker.next === null) {
                //insert node at this end which we found
                walker.setNext(newNode);
                return;
            }
            count++;
        }
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X) {
        // remove the Xth node from the list, considering 0 to be the first node
        if (this.head === null) {
            //nothing to remove
            return;
        }
        let walker = this.head;
        if (X === 0 && walker.next === null) {
            //delete this.
            this.head = null;
            return walker;
        }
        if (X === 0) {
            this.head = walker.next;
            return walker
        }
        let count = 1;
        while (walker.next) {
            let previousNode = walker;
            let currentNode = walker.next;
            //count is 1, previous node is head current node is second node
            if (X === count) {
                //remove currentNode
                previousNode.setNext(currentNode.next);
                return currentNode;
            }
            walker = walker.next;
            count++;
        }
        // return the node that has been removed
    }
    search(data) {
        let count = 0;
        let walker = this.head;
        while (walker !== null) {
            if (walker.data === data) {
                return count;
            }
            walker = walker.next
            count++;
        }
        return false;
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort() {
        function mergeSort(arr) {
            let lengthHalf = Math.floor(arr.length / 2);
            let arr1 = arr.slice(0, lengthHalf);
            let arr2 = arr.slice(lengthHalf);
            if (arr1.length !== 1) {
                arr1 = mergeSort(arr1);
            }
            if (arr2.length !== 1) {
                arr2 = mergeSort(arr2);
            }

            return merge(arr1, arr2);
        }

        function merge(arr1, arr2) {
            var result = [];
            while (arr1.length && arr2.length) {
                if (arr1[0] <= arr2[0]) {
                    result.push(arr1.shift());
                } else {
                    result.push(arr2.shift());
                }
            }

            return result.concat(arr1, arr2);
        }
        let unsortedArray = []
        //unpack linkedlist into array then sort with mergesort
        let count = 0;
        let node = true;
        while (node !== null) {
            //
            node = this.removeFromFront();
            if (node !== null) {
                unsortedArray.push(node.data);
            }
        }
        let sortedArray = mergeSort(unsortedArray);
        while (sortedArray.length > 0) {
            this.prependNode(sortedArray.pop());
        }
        // sort the Linked List in ascending order of data values
    }
}