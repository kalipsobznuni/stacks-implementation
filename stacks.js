class Stack {
  constructor(){
    this.elem = [];
  }
push (elem) {
  this.elem.push(elem)
}
pop (){
 return this.elem.pop();
}
}

const stack = new Stack();
//pushing
stack.push('Zeus');
stack.push('Apollo');
stack.push('Poseidon');

console.log(stack.pop())
//console.log(stack.elem)
