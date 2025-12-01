const btnAdd =document.getElementById('btnAdd')
const btnView =document.getElementById('btnView')
const displayContainer= document.getElementById('displayContainer')




btnView.addEventListener('click',()=>{

if(displayContainer.style.display ==='none'){
displayContainer.style.display='block'
}
else{
    displayContainer.style.display='none'
}


})

export{btnView}