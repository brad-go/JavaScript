
let choice = prompt('What would you like to do?').toLowerCase();
const todoList = [];
const division = '************';

while(choice !== 'quit' && choice !== 'q') {
  choice = prompt('What would you like to do?').toLowerCase();

  if(choice === 'new') {
      const createTodo = prompt('Enter new todo');
      todoList.push(createTodo);
      console.log(`${createTodo} added to list`);
  } else if(choice === 'list') {
      console.log(division);
      for(let i = 0; i < todoList.length; i++) {   
        console.log(`${i}: ${todoList[i]}`);
      }
      console.log(division);
  } else if(choice === 'delete') {
      const deleteTodo = parseInt(prompt('Enter index of todo to delete'));
      // deleteTodo가 NaN이 나올때를 대비
      if(!Number.isNaN(deleteTodo)) {
        // 배열의 idnex 범위를 벗어났을 때의 입력을 대비
        while(deleteTodo > todoList.length - 1) {
          console.log('It is out of range of available indices.')
          deleteTodo = prompt('Enter index of todo to delete');
        } 
        const deleted = todoList.splice(deleteTodo, 1);
        // splice에 의해 삭제된 것은 배열로 저장됨
        console.log(`Todo Removed: ${deleted[0]}`);  
      } else {
        console.log('Invalid Input. Please type the number of the index.')
      }
  } 
}
console.log('OK, YOU QUIT THE APP');

