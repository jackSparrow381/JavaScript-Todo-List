var a;
let addbtn = document.getElementById('addbtn');
let update = document.getElementById('update');



// creating function when button click li element is created
function click1() {

    let goes = document.getElementById('goes1');
    let myinput = document.getElementById('input1').value;

    // declaring num for getting ids
    var num = Math.random() * 100;

    let list = document.createElement("li");
    list.id = "listId" + num;
    let btn1 = document.createElement("button");
    let btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    btn3.id = "updatedisplay";
    btn3.innerHTML = "Update";
    let span = document.createElement("span");
    span.id = "spn" + num;
    btn1.innerHTML = "Delete";
    btn2.innerHTML = "Edit";


    span.innerHTML = myinput;

    // condition to write text on input field
    if (myinput === '') {
        alert('Please write someting!')
    }
    else {
        goes.appendChild(list);
        document.getElementById('input1').value = '';
    }
    
    // append buttom inside the list
    list.appendChild(span);
    list.appendChild(btn1);
    list.appendChild(btn2);

    // defining function on delete button to del all content

    btn1.onclick = function () {
        deleteit("listId" + num);
    }

    // calling function on edit button to edit the input content

    btn2.onclick = function () {
        editIt("spn" + num);
        document.getElementById('update').appendChild(btn3);
    }

    // calling function on update button
    btn3.onclick = function () {
        updateIt("spn" + num);
        // document.getElementById('input1').value = "";
    }

}



// creating function of delete button
function deleteit(id) {
    let y = document.getElementById(id);
    y.remove();
    a = id;
}

// creating function on edit button

function editIt(id) {
    addbtn.style.display = "none";
    update.style.display = "inline-block";
    let spn = document.getElementById(id);
    document.getElementById('input1').value = spn.innerHTML;
}

// creating function on update button

function updateIt(a) {
    addbtn.style.display = "inline-block";
    // let spn = document.getElementById(a);
    let myinput = document.getElementById('input1').value;
    document.getElementById(a).innerHTML = myinput;
    document.getElementById('input1').value = "";
    let m = document.getElementById('updatedisplay');
    m.remove();
    console.log(a);
}