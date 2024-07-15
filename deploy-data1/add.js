let tbody = document.querySelector("tbody");
let url = "https://northwind.vercel.app/api/suppliers/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.forEach((element, i) => {
      tbody.innerHTML += `
      <tr class="table-active">
          <td>${element.companyName}}</td>
          <td>${element.address?.city}</td>
          <td>${element.address?.country}</td>
          <td><button name =${i} class="btn btn-warning infoBtn">info</button></td>
          <td><button name=${element.id} class="btn btn-danger deleteBtn">delete</button></td>
         
        </tr>`;

      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());
        });
      }
      //DELETE methodu
      fetch(url + this.name, {
        method: "DELETE",
      });

      //info
      let infoBtn = document.querySelectorAll(".infoBtn");
      for (let btn of infoBtn) {
        btn.addEventListener("click", function () {
          //     console.log(data[btn.name].companyName);
          Swal.fire({
            title: `${data[btn.name].companyName}`,
            text: `${data[btn.name].address?.street}`,
            footer: `${data[btn.name].address?.phone}`,
          });
        });
      }
    });
  })
  .catch((err) => console.log(err));

//GET methodu
//id-e gore tapma
// fetch(url + "11")
//   .then((res) => res.json)
//   .then((data) => {
//     console.log(data);
//   });

//POST methodu
let form = document.querySelector(".form");
let city = document.querySelector("#city");

let country = document.querySelector("#country");

let company = document.querySelector("#company");
let postbutton = document.querySelector(".post");

postbutton.addEventListener("click", function (e) {
  e.preventDefault();
  let obj = {
    address: {},
  };
  obj.companyname = company.value;
  obj.address.city = city.value;
  obj.address.country = country.value;

  console.log(obj);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      tbody.innerHTML += `
      <tr class="table-active">
          <td>${company.value}}</td>
          <td>${city.value}</td>
          <td>${country.value}</td>
          <td><button  class="btn btn-warning">info</button></td>
          <td><button name=${data.id} class="btn btn-danger deleteBtn">delete</button></td>

        </tr>
      `;
      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());
        });
      }
      fetch(url + this.name, {
        method: "DELETE",
      });
    });
});
//PUT methodu
let putbutton = document.querySelector(".put");
let id = document.querySelector("#id");
putbutton.addEventListener("click", function (e) {
  e.preventDefault();
  let obj1 = {
    address: {},
  };
  obj1.companyname = company.value;
  obj1.address.city = city.value;
  obj1.address.country = country.value;
  console.log(obj1);

  fetch(url + id.value, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj1),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      tbody.innerHTML += `
      <tr class="table-active">
          <td>${company.value}}</td>
          <td>${city.value}</td>
          <td>${country.value}</td>
          <td><button  class="btn btn-warning">info</button></td>
          <td><button name=${data.id} class="btn btn-danger deleteBtn">delete</button></td>

        </tr>
      `;
      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());
        });
      }
      fetch(url + this.name, {
        method: "DELETE",
      });
    });
});

//PATCH metodu
let patchbutton = document.querySelector(".patch");

patchbutton.addEventListener("click", function (e) {
  e.preventDefault();
  let obj2 = {
    address: {},
  };
  obj2.companyName = company.value;
  // obj2.address.city = city.value;
  // obj2.address.country = country.value;
  console.log(obj2);

  fetch(url + id.value, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj2),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      tbody.innerHTML += `
      <tr class="table-active">
          <td>${company.value}}</td>
          <td>${city.value}</td>
          <td>${country.value}</td>
          <td><button  class="btn btn-warning">info</button></td>
          <td><button name=${data.id} class="btn btn-danger deleteBtn">delete</button></td>

        </tr>
      `;
      let deleteBtns = document.querySelectorAll(".deleteBtn");
      for (let btn of deleteBtns) {
        btn.addEventListener("click", function () {
          console.log(this.parentElement.parentElement.remove());
        });
      }
      fetch(url + this.name, {
        method: "DELETE",
      });
    });
});
