
const add = (deleteItem) => {
    var inputValue = document.getElementById("data").value;
    var inputBox = document.getElementById("content");
    const li = document.createElement("li");
    const node = document.createTextNode(inputValue);

    li.appendChild(node);
    inputBox.appendChild(li);
    document.getElementById("data").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    deleteItem();

}
function reset() {
    const hello = document.getElementById('content');
    console.log(hello);
    if (hello.innerHTML != "") {
        hello.innerHTML = " ";
    }
    else
        alert('Please enter your work');
}

const Item = document.getElementsByClassName('close');
Item.addEventListener("click", deleteItem);
function deleteItem() {
    var div = this.parentElement;
    div.style.display = "none";
}




