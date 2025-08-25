// 1. REVERSE A LINKED LIST (Classic!)
// Time: O(n), Space: O(1)
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