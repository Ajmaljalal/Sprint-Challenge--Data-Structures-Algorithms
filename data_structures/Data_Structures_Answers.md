For each of the methods associated with each data structure, classify it based on its runtime, using Big O notation.

## Linked List

1. What is the runtime complexity of `addToTail`?
- the run time complixity is O(1) here. because we directly target the tail and add an element.
  
    a. What if our list implementation didn't have a reference to the tail of the list in its constructor? What would be the runtime of the `addToTail` method?

2. What is the runtime complexity of `removeHead`?
- Deletion from head is also O(1).

3. What is the runtime complexity of `contains`?
- Contains is O(n) because we have to iterate through the list and check if the item is there.

4. What is the runtime complexity of `getMax`?
- getMax is also O(n), because we iterate through the list and check for every value against initial max.


## Queue

1. What is the runtime complexity of `enqueue`?
- Run time complixity here is O(1).

2. What is the runtime complexity of `dequeue`?
-  Run time complixity is again O(1)

3. What is the runtime complexity of `isEmpty`?
- Run time complixity is O(1).

4. What is the runtime complexity of `length`?
-  Run time complixity is O(n).


## Doubly Linked List

1. What is the runtime complexity of `ListNode.insertAfter`?
- Run time complixity is O(1)

2. What is the runtime complexity of `ListNode.insertBefore`?
- Run time complixity is O(1)

3. What is the runtime complexity of `ListNode.delete`?
- Run time complixity is O(1)

4. What is the runtime complexity of `DoublyLinkedList.addToHead`?
- Run time complixity is O(1)

5. What is the runtime complexity of `DoublyLinkedList.removeFromHead`?
- Run time complixity is O(1)

6. What is the runtime complexity of `DoublyLinkedList.addToTail`?
- Run time complixity is O(1)

7. What is the runtime complexity of `DoublyLinkedList.removeFromTail`?
- Run time complixity is O(1)

8. What is the runtime complexity of `DoublyLinkedList.moveToFront`?
- Run time complixity is O(1)

9. What is the runtime complexity of `DoublyLinkedList.moveToBack`?
- Run time complixity is O(1)

10. What is the runtime complexity of `DoublyLinkedList.delete`?
- Run time complixity is O(1)

    a. Compare the runtime of the doubly linked list's `delete` method with the worst-case runtime of the `Array.splice` method. Which method generally performs better?


## Binary Search Tree

1. What is the runtime complexity of `insert`? 
-  Run time complixity is O(log(n))

2. What is the runtime complexity of `contains`?
-  Run time complixity is O(log(n))

3. What is the runtime complexity of `getMax`? 
-  Run time complixity is O(log(n))

4. What is the runtime complexity of `depthFirstForEach`?
-  Run time complixity is O(log(n))

5. What is the runtime complexity of `breadthFirstForEach`?
-  Run time complixity is O(log(n))

6. [Stretch Question] What is the runtime complexity of your `checkBalanced` function?

## Heap

1. What is the runtime complexity of your `heapsort` function?
- Run time complixity is Ω(n log(n)).

2. What is the space complexity of the `heapsort` function? Recall that your implementation should return a new array with the sorted data. What would be the space complexity if your function instead altered the input array?
- spce complexity would be O(1).

3. What is the runtime complexity of `bubbleUp`?
- it is Ω(n).

4. What is the runtime complexity of `siftDown`?

5. What is the runtime complexity of `insert`?
- it is O(log n).

6. What is the runtime complexity of `delete`?
- it is O(n).

7. What is the runtime complexity of `getMax`?
- it is O(1)
