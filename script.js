let tasks = [];

function render(a) {
    let html = '';
    for(let i = 0; i < a.length; i++) {
        html += '<div class="block"><span>' + a[i] + '</span><i onclick="remove('+ i +')" class="far fa-trash-alt"></i></div>';
    }

    const block = document.getElementById('block');
    block.innerHTML = html;
}


function addTask(e) {
    if (e.keyCode == 13 && e.target.value != '' ) {
        tasks.push(e.target.value);
        render(tasks);
        e.target.value = "";
    } 

}
function remove(i) {
    tasks.splice(i, 1);
    let src = document.getElementById('search');

    if (src.value !='') {
        const filterdTask = searchInArray(tasks, src.value);
        render(filterdTask);
    } else {

        render(tasks);
    }
    
}

function searchInArray(arr, string) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].search(string) > -1) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }

function search(e) {
 
        const filterdTask = searchInArray(tasks, e.target.value);
        render(filterdTask);
    
}