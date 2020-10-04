var list = document.getElementById('list');
var button = document.getElementById('button');
var input = document.getElementById('input');

var count = 1;


button.addEventListener('click', clickButton);

function clickButton(){
    var li = document.createElement('li');
    
    li.setAttribute("id", "li"+count);
    li.setAttribute("class", "list-group");

    li.innerHTML = input.value;
    li.innerHTML += "<button class='btn btn-danger btn-xs' style='float: right'; onclick='remove("+count+")'>삭제</button>";

    list.appendChild(li);

    input.value = ""; //

    count = count+1; // count++;
}

function remove(count){
    var li = document.getElementById('li'+count);
    list.removeChild(li);


}

const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function dgt(base){
    return (base > 9 ? base : `0${base}`)
}

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${dgt(hours)}:${dgt(minutes)}:${dgt(seconds)}`; 
}

function init(){
    setInterval(getTime,1000);
}
init();
