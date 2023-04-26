const grid = document.getElementById("my-grid");

for( let i=1; i <= 100; i++ ){
    const newSquare = document.createElement("div");
    newSquare.classList.add("my-square");
    newSquare.innerHTML = i;
    newSquare.addEventListener("click", function(){
        this.classList.toggle("bg-success");
        console.log(`Hai cliccato il ${i}° quadrato`);
    })
    grid.append(newSquare);
}