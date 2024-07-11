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

  //the pop() method will allow us to remove the last item from our linked list
  pop() {
    // If we don't have any head which means there are no nodes in the linked list,then :
    if (!this.head) return null;

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;

    // If we had only one node in the linked list then :
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // the unshift() method will allow us to add a new node at the begining of our linked list:
  unshift(value) {
    const newNode = new Node(value);

    // If the linked list is empty :
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    return this;
  }

  // the shift() method will allow us to remove the first node from our linked list:
  shift() {
    if (!this.head) return null;

    // point the first node
    let temp = this.head;
    // move the head to the next node
    this.head = this.head.next;
    // remove the first node
    temp.next = null;
    this.length--;

    if (this.length === 0) this.tail = null;

    return temp;
  }

  // the getFirst() method will always return the first node of the linked list :
  getFirst() {
    if (!this.head) return null;
    return this.head;
  }
  // the getLast() method will always return the last element of our linked list
  getLast() {
    if (!this.tail) return null;
    let temp = this.head;
    while (temp) {
      if (!temp.next) return temp;
      temp = temp.next;
    }
  }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
console.log("-----------------");

// Testing the push method:
myLinkedList.push(2);
// console.log(myLinkedList);
// console.log("-----------------");

// Testing the pop method:
// myLinkedList.pop();
// console.log(myLinkedList);
// console.log("-----------------");
// console.log(myLinkedList.pop());
// console.log("-----------------");
// console.log(myLinkedList);
// console.log("-----------------");

// Testing the unshift method:
myLinkedList.unshift(0);
// console.log(myLinkedList);
// console.log("-----------------");

// Testing the shift method:
// myLinkedList.shift();
// console.log(myLinkedList);
// console.log("-----------------");

// Testing the getFirst Method:
// console.log(myLinkedList.getFirst());
// console.log("-----------------");

// Testing the getLast Method:
// console.log(myLinkedList.getLast());
