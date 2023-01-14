

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber)

document.querySelector(".btn").addEventListener("click", () => {
    const guessNumber = Number(document.querySelector(".input").value);

    if(randomNumber > guessNumber){
        alert( "Hoopp çok uçtuinn azıcık in ")
    }else if(randomNumber < guessNumber){
        alert("Ufff çok düştün çık çık çık")
    }else{
        alert("Harikasın bildinnn")
    }


})