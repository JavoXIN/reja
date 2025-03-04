//const { response } = require("../app");

console.log("FrontEnd JS ishga tushdi");

function itemTemplate(item) {
    return ` <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
          <span style="item-text">${ item.reja  }</span>
          <div>
            <button   
            data-id="${item._id}"   
            class="edit-me btn btn-secondary btn-sm mr-1">

            Ozgartirish

            </button>
            <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
          </div>
        </li>  `;
}
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) { 
    e.preventDefault();
 

    axios.post("/create-item", { reja: createField.value }).then( (response) => { 
        document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
        createField.value = "";
        createField.focus();

    })
    .catch((err) => { 
        console.log("Please try again");
    });
    // console.log("Form submitted");
    // axios.post("/create-item", { reja: document.getElementById("reja").value }).then(function () {
    //     document.getElementById("reja").value = "";
    //     document.getElementById("reja").focus();
    // }).catch(function () {
    //     console.log("Please try again later");
    // });
});


document.addEventListener("click", function (e) {
    // Update part
    //if (e.target.classList.contains("edit-me")) {

    console.log(e.target);
    // delete operation
    if(e.target.classList.contains("delete-me")) {
        if (confirm("O'chirishni tasdiqlaysizmi?")) {
            axios.post("/delete-item", { id: e.target.getAttribute("data-id")})
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.remove();
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }
    }


    //edit operation
    if (e.target.classList.contains("edit-me")) {
        //alert("Siz edit tugmasini bosdingiz");  //28 - darsda o'chirildi
        let userInput = prompt("O'zgartirish kiriting", 
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput) {
            axios.post("/edit-item", { id: e.target.getAttribute("data-id"), new_input: userInput })
            .then((response) => {
                console.log(response.data);
                e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
            })
            .catch((err) => {
                console.log("Iltimos qaytadan harakat qiling!");
            });
        }

    }

    //     let userInput = prompt("Yangi matnni kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    //     if (userInput) {
    //         axios.post("/update-item", { text: userInput, id: e.target.getAttribute("data-id") }).then(function () {
    //             e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
    //         }).catch(function () {
    //             console.log("Please try again later");
    //         });
    //     }
    // }
    // // Delete part
    // if (e.target.classList.contains("delete-me")) {
    //     if (confirm("O'chirishni tasdiqlaysizmi?")) {
    //         axios.post("/delete-item", { id: e.target.getAttribute("data-id") }).then(function () {
    //             e.target.parentElement.parentElement.remove();
    //         }).catch(function () {
    //             console.log("Please try again later");
    //         });
    //     }
    // }


});


document.getElementById("clean-all").addEventListener("click", function () {
    axios.post("/delete-all", {delete_all: true}).then(respose => {
        alert(respose.data.state);
        document.location.reload();
    })
    
});