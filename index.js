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