// Making Our First Node :

class Node {
  constructor(value) {
    // The first node of the linked list is called Head and the last node is called Tail
    (this.head = value), (this.next = null);
  }
}

// Making Our Linked List :
class LinkedList {
  constructor(value) {
    // In a linked list with only one node,both Head and Tail are same
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  //   Making push feature for our linked list :
  /* 
  push method will add a new node at the end of our linked list 
  1 -> we need make the node at first
  2 -> then the second last node will not be tail,the tail will be pointing to our newly pushed node
  3 -> the second last node will not be pointing to null but will be pointing to our newly pushed node
  4 -> the newly pushed node will now be pointing to null 
  4 -> increase the length 
  */
  push(value) {
    let newNode = new Node(value);

    // What if intially we didn't had any node in our linked list i.e both head and tail are pointing to null and we r pushing a new node ,then :
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
console.log("-----------------");
myLinkedList.push(5);
console.log(myLinkedList);
