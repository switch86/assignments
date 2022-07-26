const colors = ["red", "blue", "green"];

document.getElementById("add").addEventListener("click", function(){
    const subItem = createSubItem();
    document.getElementById("list").appendChild(subItem);
})


function createDropDown(){
    const dropDown = document.createElement("select");
    for (let i = 0; i < colors.length; i++){
        var option = document.createElement("option");
        option.append(colors[i]);
        dropDown.append(option);
    } 
    dropDown.onchange = changeColor
    function changeColor() {
            dropDown.parentElement.setAttribute("class", colors[dropDown.selectedIndex]); 
        } 
    return dropDown; 
}
   

function createSubItem(){
    const subItem = document.createElement("div");
    var subItemValue = document.getElementById("input").value;
    subItem.textContent = subItemValue;
    const dropDown = createDropDown();
    subItem.appendChild(dropDown);
    subItem.setAttribute("class", "subItem");
    return subItem;
}


