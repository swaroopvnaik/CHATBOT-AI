let prompt = document.querySelector("#prompt");


prompt.addEventListener("keydown" , (e) =>{
    if(e.target.key=="Enter"){
        console.log(prompt.value);
    }
    console.log(e);
});