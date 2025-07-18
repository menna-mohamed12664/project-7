let contentProduct = document.getElementById("contentProduct");
let comments = document.getElementById("comments");
let btnComment2 = document.getElementById("btnComment2");
let addBtn1 = document.getElementById("addBtn1");
let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let addBtn2 = document.getElementById("addBtn2");
let count = document.getElementById("count");
let preparation = document.getElementById("preparation");
let edit = null 

let allProduct = [
    {id: 1 , name: "Macarona Negresco Recipe (Egyptian Béchamel Pasta with Chicken)"}
]

let allPreparation = [{ id: 1 , name:"Pasta and meat bechamel sauce"}]
function drow(){
    contentProduct.innerHTML = ""
    allProduct.forEach((ele)=>{
        contentProduct.innerHTML += `${ele.id} - ${ele.name} <button onclick="editBtn(${ele.id})"> Edit </button>  <button onclick="deleteBTN(${ele.id})"> Del </button>   </br></br> `
    })
}
drow()
function drow2(){
    allPreparation.forEach((ele)=>{
        preparation.innerHTML += `${ele.id} - ${ele.name} <i class="fa-solid fa-heart"></i></br>`
    })
}
drow2(allPreparation)

//add
addBtn1.setAttribute("disabled" , true)
inp1.addEventListener("input",()=>{
    if(inp1.value == ""){
    addBtn1.setAttribute("disabled" , true)
    }else{
    addBtn1.removeAttribute("disabled")
    }
})
addBtn2.setAttribute("disabled" , true)
inp2.addEventListener("input",()=>{
    if(inp2.value == ""){
    addBtn2.setAttribute("disabled" , true)
    }else{
    addBtn2.removeAttribute("disabled")
    }
})
addBtn1.addEventListener("click",()=>{
    setTimeout(()=>{
        addBtn1.innerHTML="Add"
    },1000)
    addBtn1.innerHTML="Ok"

    if(edit){
        let findProduct = allProduct.find(f => f.id === edit)
        if(findProduct){
            findProduct.name = inp1.value
            drow()
        }
        edit = null
        addBtn1.innerText = "Add"
    }else{
        let lastID = allProduct.length ? allProduct[allProduct.length -1].id : 0
        allProduct.push({id: ++lastID , name: inp1.value})
        let newProduct = allProduct[allProduct.length -1]
        contentProduct.innerHTML += `${newProduct.id} - ${newProduct.name} <button onclick="editBtn(${allProduct.id})"> Edit </button>  <button onclick="deleteBTN(${allProduct.id})"> Del </button></br>`        
    }
    count.innerHTML = `${allProduct.length}`
    inp1.value = ""
    addBtn1.setAttribute("disabled" , true)
    count.innerHTML = `<b>Number of deshes</b> <hr>${allProduct.length}`
})
addBtn2.addEventListener("click",()=>{
    setTimeout(()=>{
        addBtn2.innerHTML="Add"
    },1000)
    addBtn2.innerHTML = "Ok"
    let lastID = allPreparation[allPreparation.length -1].id
    allPreparation.push({id: ++lastID })
    let newProduct = allPreparation[allPreparation.length -1]
    preparation.innerHTML += `${newProduct.id} - ${inp2.value}<i class="fa-solid fa-heart"></i></br>`        
    inp2.value = ""
    addBtn2.setAttribute("disabled" , true)
})
count.innerHTML += `<b>Number of deshes</b> <hr> ${allProduct.length}`
// comment
comments.addEventListener("input",()=>{
    if(comments.value == ""){
        btnComment2.setAttribute("disabled",true)
    }else{
        btnComment2.removeAttribute("disabled")
    }
})
btnComment2.addEventListener("click",()=>{
    comments.value = ""
    alert("Thanks For You Comment")
    btnComment2.setAttribute("disabled",true)
})
//delete
function deleteBTN(id){
    let index = allProduct.map((del)=>{
        return del.id
    }).indexOf(id)
    if(index != -1){
        allProduct.splice(index,1)
    }
    drow()
    count.innerHTML = `<b>Number of deshes</b> <hr>${allProduct.length}`
    console.log(allProduct)
}
//edit
function editBtn(id){
    let findProduct = (allProduct.find(f => f.id === id))
    if(findProduct){
        inp1.value = findProduct.name
        addBtn1.removeAttribute("disabled")
        addBtn1.innerHTML = "Save Data"
        edit = id
    }
}

























