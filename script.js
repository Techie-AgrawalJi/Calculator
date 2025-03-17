let screen = document.querySelector('.display');
let buttons = document.querySelectorAll('.digits');
let clear = document.querySelector('.clear');
let equal = document.querySelector('.equal');
const maxDigits = 15; // Set the max limit
buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let val = e.target.dataset.num;
        if (val != undefined) {
            if (screen.value.length < maxDigits) {
                screen.value += val;
            }
        }
    });
});
equal.addEventListener("click", (e) => {
    if (screen.value === '') {
        screen.value = "Please Enter";
    } else {
        try {
            let ans = eval(screen.value)
            if (ans == Infinity) screen.value = "Invalid";
            let ansStr = ans.toString();
            if (ansStr.length > maxDigits)
                screen.value = ansStr.slice(0, maxDigits);
            else screen.value = ansStr;
        }
        catch (error) {
            screen.value = "error";
        }
    }
});
clear.addEventListener("click", (e) => {
    screen.value = "";
});
//ans is a number so we can not use ans.value.length directly. can be used on objects.
