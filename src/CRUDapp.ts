const stdName = document.getElementById("stdInput") as HTMLInputElement;
const stdMaj = document.getElementById("majInput")as HTMLInputElement;
const submitBtn = document.getElementById("submit")as HTMLButtonElement;
const tableBody = document.getElementById("tbody")as HTMLTableSectionElement;

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let name = stdName.value;
    let major = stdMaj.value;
    console.log('button pressd')
    if (name && major) {
        
    }
})