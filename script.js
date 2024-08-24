let screen = document.querySelector('.display');
let buttons = document.querySelectorAll('.digits');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let value = e.target.dataset.num;
        if (value != undefined) {
            screen.innerHTML += value;
        }
    });
});
equal.addEventListener("click",  (e)=> {
    if (screen.innerHTML === '') {
        screen.innerHTML = "Please Enter"
    } else {
        try {
            let ans = eval(screen.innerHTML)
            screen.innerHTML = ans;
        }
        catch (error) {
            screen.innerHTML = "error";
        }
    }
});
clear.addEventListener("click",  (e)=> {
    screen.innerHTML = "";
});

