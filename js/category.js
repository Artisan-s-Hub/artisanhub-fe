const toggleBeauty = document.getElementById('toggle-beauty');
const toggleCraft = document.getElementById('toggle-craft');

const toggleBtnBeauty = document.getElementById('toggle-btn-beauty');
const toggleBtnCraft = document.getElementById('toggle-btn-craft');

toggleBtnCraft.addEventListener('click', (e) => {
    if(toggleBeauty.style.display === "block"){
        toggleCraft.style.display = "block";
        toggleBeauty.style.display = "none";
    }
})

toggleBtnBeauty.addEventListener('click', (e) => {
    if(toggleBeauty.style.display === "none"){
        toggleCraft.style.display = "none";
        toggleBeauty.style.display = "block";
    }
})


const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const categoryList = document.getElementById("category-list")
    const category = document.querySelectorAll(".item")
    const pname = categoryList.getElementsByTagName("h4")
   
    for (var i=0; i < pname.length; i++){
        let match = category[i].getElementsByTagName('h4')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                category[i].style.display = "";
            }else{
                category[i].style.display = "none"
            }
        }
    }
}
