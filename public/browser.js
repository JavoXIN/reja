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