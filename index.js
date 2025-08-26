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