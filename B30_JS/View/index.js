//khái niệm cơ bản: biến và kiểu dữ liệu, lện nhập xuất

//1. Khai báo biến
//let nubmer = 1;
//lệnh nhập: prompt

//lệnh xuất: console.log(); và document.write();

// let hoTen = prompt("Nhập vào họ tên của bạn: ");
// console.log(hoTen);
// document.write(hoTen);

/*
    các lệnh tương tác với giao diện
    1 thẻ = 1 DOM (document object model)
    taginput
        +className
        +id
        +value

    cú pháp thao tác thẻ: cú pháp DOM
    document.querySelector('selecter_name');

*/

let taginput = document.querySelector('#username');
taginput.className = 'form-control d-inline w-25 bg-success';
taginput.value = "Nguyễn Văn A";

let lstDivFormGroup = document.querySelectorAll('.form-group');
// [object, object]:
for(let div of lstDivFormGroup){ //tương đương foreach
    div.classList.add("border","border-primary", "mt-2")
}

console.log(taginput);
console.log(lstDivFormGroup);

/*
    handle event javascript
*/
//hoisting
window.handleClick() = function(){
    console.log("Hello world");
    console.log('123');
}