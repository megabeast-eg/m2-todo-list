let taskArray = [];
let input = document.querySelector('input');
let taskList = document.querySelector('.task-list');
let addButton = document.querySelector('.add');
let sortButton = document.querySelector('.sort_button');

function clickButton(){
    if(input.value == " "){
        return;
    }  else {
    taskArray.push(input.value);
    console.log(taskArray);
    taskList.style.display = "block";
    addTask(input.value)
    input.value = " ";
    }
}

function addTask(taskName){
    let listItem = document.createElement('div');
    let taskContent = document.createElement('div');
    let deleteButton = document.createElement('div');
    deleteButton.addEventListener('click', deleteListItem);
    let deleteButtonImage = document.createElement('img');
    deleteButtonImage.src = "/img/delete.png";
    deleteButton.append(deleteButtonImage);
    listItem.append(taskContent);
    listItem.append(deleteButton);
    taskList.append(listItem);
    listItem.classList.add('task-item');
    taskContent.classList.add('task-content');
    deleteButton.classList.add('delete-button', 'violet');
    taskContent.innerText = taskName;
}

function deleteListItem(event){
    let element = this.closest('.task-item');
    let string = element.innerText;
    let stringIndex = taskArray.indexOf(string);
    taskArray.splice(stringIndex, 1);
    element.remove();
    if (taskList.innerText == ""){
        taskList.style.display = 'none';
    } else{
        taskList.style.display = 'block';
    }
    console.log(taskArray);
    console.log(element)
    console.log(element.innerText)
}

function clickSortButton(){
    sortButton.classList = sortButton.classList == 'sort_button' ? 'sort_button_up' : 'sort_button';
    let sortNode = document.querySelectorAll('.task-content');
    let sortArray = [];
    sortNode.forEach((node) => {
        sortArray.push(node.innerText);
    });
    if (sortButton.classList == 'sort_button'){
        sortArray = sortArray.sort().reverse();
    } else{
        sortArray = sortArray.sort();
    }
   
   sortNode.forEach((node) =>{
    node.innerText = sortArray[0];
    sortArray.shift();
   });
}

addButton.addEventListener('click',(event)=>{
    event.preventDefault();
});

addButton.addEventListener('click', clickButton);

sortButton.addEventListener('click', clickSortButton);
