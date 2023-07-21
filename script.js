const modalBtn= document.querySelector(".modal-btn");
const modalOver= document.querySelector(".modal-overlay");
const closeBtn=document.querySelector(".close-btn");

console.log("vuhsdkv")

modalBtn.addEventListener('click', function() {
    console.log("abc")
    modalOver.classList.add("open-modal")


})

closeBtn.addEventListener('click', function() {
    modalOver.classList.remove("open-modal")

})