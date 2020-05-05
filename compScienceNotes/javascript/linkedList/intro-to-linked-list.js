// let myLinkedList = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null
// 			}
// 		}
// 	}
// };

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		};
		this.tail = this.head;
		this.length = 1;
	}
	// create append method
	append(value) {
		const newNode = {
			value: value,
			next: null
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
}

const newLL = new LinkedList(10);
newLL.append(5);
newLL.append(16);

console.log(newLL);
