// Creating custom Array :

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //   Making our own push() method :
  push(valueToPush) {
    this.data[this.length] = valueToPush;
    this.length++;
  }

  //   Making method to get() the elements of array:
  get(index) {
    if (index + 1 > this.length) {
      console.error(
        "Cannot access the element at the index greater than the size of array"
      );
    }
    return this.data[index];
  }

  //   Making our own pop() method :
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //   Making the shift() method, it deletes the firstElement and re-indexes each Element
  shift() {
    const firstElement = this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
    return firstElement;
  }

  //   Making the deleteByIndex() method :
  deleteByIndex(index) {
    const deletedItem = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return deletedItem;
  }
}

const myNewArray = new myArray();
// console.log(myNewArray); //myArray { length: 0, data: {} }

// Testing if push() works or not :
myNewArray.push(2);
myNewArray.push("Apple");
myNewArray.push(null);
myNewArray.push(true);
// console.log(myNewArray);

// Testing if get() works or not :
// console.log(myNewArray.get(8));

// Testing if pop() works or not :
// console.log(myNewArray.pop());
// console.log(myNewArray);

// Testing if shift() works
// console.log(myNewArray); //original Array
// console.log(myNewArray.shift()); //the item which was deleted
// console.log(myNewArray); //Resulted Array

// Testing if deleteByIndex() works
// console.log(myNewArray); //original Array
// console.log(myNewArray.deleteByIndex(2)); //the item which was deleted
// console.log(myNewArray); //Resulted Array
