// 1. REVERSE A LINKED LIST 
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        let nextTemp = current.next;  // Store next node
        current.next = prev;          // Reverse the link
        prev = current;               // Move prev forward
        current = nextTemp;           // Move current forward
    }
    
    return prev;  // prev is now the new head
}
// DOUBLY LINKED LIST
class node={
    constructor(data){
        this.data=data;
        this.next=null;
        this.prev=null;
    }
}
// doubly linked list
class DLL{ 
    construcor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }
}
//adding node at the end
add(data){
    let newNode=new node(data);
    if(this.head=null){
        this.head=newNode;
        this.tail=newNode
    } else{
        this.tail.next=newNode;
        newNode.prev=this.tail;
        this.tail=newNode;
    }
} 
// display list
display(){
    let current=this.head;
    while(current){
        console.log(current.data);
        current=current.next;
    } 
}
//circular linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Initially points to null
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // Method to add a new node to the end of the list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // If the list is empty, the new node is both head and tail
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head; // Points to itself to form a circle
    } else {
      // If the list is not empty, add to the end and update pointers
      this.tail.next = newNode;
      newNode.next = this.head; // New node points back to the head
      this.tail = newNode; // Update tail to the new node
    }
    this.size++;
  }

  // Method to add a new node to the beginning of the list
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head; // New node points to the current head
      this.head = newNode; // Update head to the new node
      this.tail.next = this.head; // Tail's next still points to the new head
    }
    this.size++;
  }

  // Method to traverse and print the circular linked list
  printList() {
    if (!this.head) {
      console.log("List is empty.");
      return;
    }
    let current = this.head;
    let result = "";
    do {
      result += `${current.value} -> `;
      current = current.next;
    } while (current !== this.head);
    result += "(back to head)"; // Indicate the circular nature
    console.log(result);
  }
}

// Example usage:
const circularList = new CircularLinkedList();
circularList.append(10);
circularList.append(20);
circularList.prepend(5);
circularList.append(30);

circularList.printList(); // Output: 5 -> 10 -> 20 -> 30 -> (back to head)
}
//recursion factorial
fact (n){
  if (n<=1){
    return 1;
  }
  return fact(n-1)*n;
}
// Stack adt using arrays
class stack{
  constructor(){
    this.items=[];
  }
}
// inserting first element into stack
push (data){
  this.items.push (data);
}
// removing element from stack
Pop (){
  if(this.isempty(){
    return this.items.length===0;
  })  return "satck empty";
  return this.items.pop();
}
// queue 
class arrque={
  constructor(){
    this.items=[];
  }
}
enqueue(elem){
  this.items.push(elem);//adding element to back of the queue
}
dequeue(){
  if (this.isempty(){
    return "empty queue"
  }
}
// This demonstrates the event loop in action
console.log("Start"); // Runs immediately

setTimeout(() => {
    console.log("Timeout callback"); // Runs after other sync code
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback"); // Runs before setTimeout (microtask priority)
});

console.log("End"); // Runs immediately after "Start"

// Output: Start → End → Promise callback → Timeout callback
// Basic GET with headers
const response = await fetch('/api/projects', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + token,
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// POST with data and specific options
const response = await fetch('/api/projects', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token,
  },
  body: JSON.stringify({
    title: 'My New Project',
    description: 'Project description'
  }),
  credentials: 'include', // Include cookies
  mode: 'cors' // Handle CORS
});

// Error handling
if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}
const data = await response.json();