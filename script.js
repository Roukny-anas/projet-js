var content = document.querySelector('.courses');

function creationCours(path, title, price) {
    let div = document.createElement('div');

    div.setAttribute('class', 'card col-3 me-2 mb-2 cours');
    let img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');
    img.src = path;
    img.setAttribute('class', 'card-img');
    let contenu = document.createTextNode(title);
    p.appendChild(contenu);
    p.setAttribute('class', 'card-tilte');
    let contenu2 = document.createTextNode(price);
    span.appendChild(contenu2);
    span.setAttribute('class', 'card-text')
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content.append(div)
    div.style.background = '#11ffee00';
    div.style.border = '0px';
    img.style.margin = ' 0px 0px 15px 0px ';
    p.style.color = 'white';
    span.style.color = 'white';
}

//getting courses by category

courses.forEach(function (element) {
    creationCours(element.image, element.title, element.price);
})
function checkCategory(el) {
    for (var i = 0; i < courses.length; i++) {
        if (el == courses[i].category) {
            document.getElementsByClassName("cours")[i].style.display = "block"
        }
        else {
            document.getElementsByClassName("cours")[i].style.display = "none"
        }
    }
}
document.getElementById("ALL").addEventListener("click", function () {
    for (var i = 0; i < courses.length; i++) {

        document.getElementsByClassName("cours")[i].style.display = "block"



    }
}
)
//by price
document.getElementById("price").addEventListener("click", function () {
    document.getElementById("showprice").innerHTML = document.getElementById("price").value;
    for (var i = 0; i < courses.length; i++) {
        if (document.getElementById("price").value >= courses[i].price) {
            document.getElementsByClassName("cours")[i].style.display = "block";
        }
        else {
            document.getElementsByClassName("cours")[i].style.display = "none";
        }
    }
}
)
//by search
function CheckBySearch() {
    for (var i = 0; i < courses.length; i++) {
        var input = document.getElementById("input").value.toUpperCase();
        if (courses[i].title.toUpperCase().indexOf(input) > -1) {
            document.getElementsByClassName("cours")[i].style.display = "block";
        }
        else {
            document.getElementsByClassName("cours")[i].style.display = "none";
        }
    }
}