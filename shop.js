const Pro = document.querySelectorAl('Pro');

const allFilterBtns= document.querySelectorAl('filter-btns');

allFilterBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    showFilteredContent(btn)
    });
});
    

function showFilteredContent(btn){
    Pro.forEach((pro)=>{
        if(pro.classList.contains(btn.id)){
            pro.style.display="block"
        } else{
            pro.style.display="none"
        }
    })
}