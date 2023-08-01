// Write the code as per the youtuber does
// Make the 3 rd element in the list have green background color
// Make all the elements in the list have bold color font


var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].innerHTML="HELLO";
items[2].style.backgroundColor="green";

// items.style.border="5px bold yellow";  not work use loop to iterate

for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor="red";
}