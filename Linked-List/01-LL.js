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

  //  the get() method takes one parameter "index" and returns the node at that index in the linked list
  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }
      counter++;
      temp = temp.next;
    }

    return null;
  }

  // the set() method is like a update method which takes two parameters (index,value) and it updates the value of that index with the passed value
  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.head = value;
      return true;
    }
    return false;
  }

  // The insert() method allows to insert our node to anywhere inside our linked list
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;

    this.length++;

    return true;
  }

  // The size() method is used to get the size of the current linked list
  size() {
    let counter = 0;
    let temp = this.head;
    while (temp) {
      counter++;
      temp = temp.next;
    }
    return counter;
  }

  // The clear() method allows us to clear every single element of our linked list
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
console.log("-----------------");

// Testing the push method:
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
console.log(myLinkedList);
console.log("-----------------");

// Testing the pop method:
// myLinkedList.pop();
// console.log(myLinkedList);
// console.log("-----------------");
// console.log(myLinkedList.pop());
// console.log("-----------------");
// console.log(myLinkedList);
// console.log("-----------------");

// Testing the unshift method:
// myLinkedList.unshift(0);
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

// Testing the get method:
// console.log(myLinkedList.get(0));
// console.log(myLinkedList.get(1));
// console.log(myLinkedList.get(2));
// console.log(myLinkedList.get(3));
// console.log(myLinkedList.get(4));

// Testing the set method :
// myLinkedList.set(1, 5);
// console.log(myLinkedList);

// Testing the insert() method :
// console.log(myLinkedList.insert(2, 15));
// console.log(myLinkedList.get(2));

// Testing the size method :
// console.log(myLinkedList.size());

// Testing the clear method :
myLinkedList.clear();
console.log(myLinkedList);
