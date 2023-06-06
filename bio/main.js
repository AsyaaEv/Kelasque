const love = document.getElementById('love');
const like = document.getElementById('like');
let count = 0;


love.addEventListener("click", function () {
    if (count == 0) {
        love.style.color = 'red';
        like.innerHTML = +1;
        count = 1;
    } else {
        love.style.color = 'white';
        like.innerHTML = 1;
        like.innerHTML--;
        count = 0;
    }
});

var btn = document.getElementById('toggle-btn');

function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("show-dropdown");
    count = 1; 
}
    document.addEventListener('click', function (e) {
        if (!love.contains(e.target)){
            if (!btn.contains(e.target) && !btn.contains(e.target)) {
                dropdown.classList.remove('show-dropdown');
                count = 0;
            }
        }
    });



