var employee = document.getElementById("employee");

var e = document.getElementById("prof");

let prof = [
    {id:1, name:"John", age:"18", profession:"developer"},
    {id:2, name:"Jack", age:"20", profession:"developer"},
    {id:3, name:"Karen", age:"19", profession:"admin"}
]

var value = '';

if(value == '') {
    renderHTML(prof);
}

function selectProf() {
    value = e.options[e.selectedIndex].value;
    // console.log(value);
}


function filter() {
    if(value == '') {
        return alert('Please select the profession')
    }
    var result = prof.filter(checkProfession);

    console.log(result);
    renderHTML(result);
}

function checkProfession(item) {
    if(item.profession == value) {
        return item;
    }
}

function renderHTML(item) {
    employee.innerHTML = item.reduce((htmlString, item) => {
        return htmlString + `
            <div class="employeeItem">
                <span>
                    ${item.id}.
                </span>
                <span>
                    name: ${item.name}
                </span>
                <span>
                    age: ${item.age}
                </span>
                <span>
                    profession: ${item.profession}
                </span>
                
            </div>
        `;
    }, "");
    // employee.innerHTML = `
    //     <div class="employeeItem">
    //         <span>
    //             ${item.id}.
    //         </span>
    //         <span>
    //             Name: ${item.name}
    //         </span>
    //         <span>
    //             Age: ${item.age}
    //         </span>
    //         <span>
    //             Profession: ${item.profession}
    //         </span>
    //     </div>
    // `;
}
