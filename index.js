let A_score = 2;
let B_score = 2;
var num = null;

function randomNum() {
    num = Math.floor(Math.random() * 6) + 1;
    document.getElementById("show").innerHTML = "Previous Result: " + num;
    document.getElementById("A").innerHTML = "The Number of Remaining Tokens of A are: " + A_score;
    document.getElementById("B").innerHTML = "The Number of Remaining Tokens of B are: " + B_score;
}

function find_id_of_element(str) {
    let arr = [];
    for (let i = 0; i < 28; i++) {
        if (document.querySelectorAll('.cell')[i].innerHTML == str) {
            arr.push(document.querySelectorAll('.cell')[i].id);
        }
    }
    return arr;
}

function lockerFree_A() {
    if (document.getElementsByClassName("locker_A")[0].innerHTML == "2A") {
        document.getElementsByClassName("locker_A")[0].innerHTML = "1A";
        if (document.getElementById("1").innerHTML == "1B") {
            if (document.getElementsByClassName("locker_B")[0].innerHTML == "1B") {
                document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
            }
            else if (document.getElementsByClassName("locker_B")[0].innerHTML == "") {
                document.getElementsByClassName("locker_B")[0].innerHTML = "1B";
            }
        }
        else if (document.getElementById("1").innerHTML == "2B") {
            document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
        }
        document.getElementById("1").innerHTML = "1A";
    }
    else if (document.getElementsByClassName("locker_A")[0].innerHTML == "1A") {
        document.getElementsByClassName("locker_A")[0].innerHTML = "";
        if (document.getElementById("1").innerHTML == "1B") {
            if (document.getElementsByClassName("locker_B")[0].innerHTML == "1B") {
                document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
                document.getElementById("1").innerHTML = "1A";
            }
            else if (document.getElementsByClassName("locker_B")[0].innerHTML == "") {
                document.getElementsByClassName("locker_B")[0].innerHTML = "1B";
                document.getElementById("1").innerHTML = "1A";
            }
        }
        else if (document.getElementById("1").innerHTML == "2B") {
            document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
            document.getElementById("1").innerHTML = "1A";
        }

        else if (document.getElementById("1").innerHTML == "1A") {
            document.getElementById("1").innerHTML = "2A";
        }
        else if (document.getElementById("1").innerHTML == "") {
            document.getElementById("1").innerHTML = "1A";
        }

    }
}
function lockerFree_B() {
    if (document.getElementsByClassName("locker_B")[0].innerHTML == "2B") {
        document.getElementsByClassName("locker_B")[0].innerHTML = "1B";
        if (document.getElementById("15").innerHTML == "1A") {
            if (document.getElementsByClassName("locker_A")[0].innerHTML == "1A") {
                document.getElementsByClassName("locker_A")[0].innerHTML = "2A";
            }
            else if (document.getElementsByClassName("locker_A")[0].innerHTML == "") {
                document.getElementsByClassName("locker_A")[0].innerHTML = "1A";
            }
        }
        else if (document.getElementById("15").innerHTML == "2A") {
            document.getElementsByClassName("locker_B")[0].innerHTML = "2A";
        }
        document.getElementById("15").innerHTML = "1B";
    }
    else if (document.getElementsByClassName("locker_B")[0].innerHTML == "1B") {
        document.getElementsByClassName("locker_B")[0].innerHTML = "";
        if (document.getElementById("15").innerHTML == "1A") {
            if (document.getElementsByClassName("locker_A")[0].innerHTML == "1A") {
                document.getElementsByClassName("locker_A")[0].innerHTML = "2A";
                document.getElementById("15").innerHTML = "1B";
            }
            else if (document.getElementsByClassName("locker_A")[0].innerHTML == "") {
                document.getElementsByClassName("locker_A")[0].innerHTML = "1A";
                document.getElementById("15").innerHTML = "1B";
            }
        }
        else if (document.getElementById("15").innerHTML == "2A") {
            document.getElementsByClassName("locker_A")[0].innerHTML = "2A";
            document.getElementById("15").innerHTML = "1B";
        }
        else if (document.getElementById("15").innerHTML == "1B") {
            document.getElementById("15").innerHTML = "2B";
        }
        else if (document.getElementById("15").innerHTML == "") {
            document.getElementById("15").innerHTML = "1B";
        }
    }
}

function move_A(initial_id, num) {
    final = (initial_id + num);
    final_id = final.toString();

    if (parseInt(final_id) < 28) {
        if (document.getElementById(initial_id.toString()).innerHTML == "1A") {
            document.getElementById(initial_id.toString()).innerHTML = "";
        }
        else if (document.getElementById(initial_id.toString()).innerHTML == "2A") {
            document.getElementById(initial_id.toString()).innerHTML = "1A";
        }
        func_A();
    }
    else if (parseInt(final_id) == 28) {
        if (document.getElementById(final_id).innerHTML == "1B") {
            document.getElementById(final_id).innerHTML = "";
            document.getElementById(initial_id.toString()).innerHTML = "";
            A_score--;
            if (document.getElementsByClassName("locker_B")[0].innerHTML == "1B") {
                document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
            }
            else if (document.getElementsByClassName("locker_B")[0].innerHTML == "") {
                document.getElementsByClassName("locker_B")[0].innerHTML = "1B";
            }
        }
        else if (document.getElementById(final_id).innerHTML == "2B") {
            document.getElementById(final_id).innerHTML = "";
            document.getElementById(initial_id.toString()).innerHTML = "";
            document.getElementsByClassName("locker_B")[0].innerHTML == "2B"
            A_score--;
        }
        else {
            document.getElementById(final_id).innerHTML = "";
            document.getElementById(initial_id.toString()).innerHTML = "";
            A_score--;
        }
        document.getElementById("A").innerHTML = "The Number of Remaining Tokens of A are: " + A_score;
        document.getElementById("B").innerHTML = "The Number of Remaining Tokens of B are: " + B_score;
        if (A_score == 0 || B_score == 0) {
            btn_A.style.display = 'none';
            btn_B.style.display = 'none';
            if (A_score == 0) {
                show.innerHTML = "<b>Player A has Won</b>";
            }
            else {
                show.innerHTML = "<b>Player B has Won</b>";
            }
        }
    }
}

function move_B(initial_id, num) {
    final = (initial_id + num);
    final_id = final.toString();
    if (parseInt(initial_id) <= 14) {
        if (parseInt(final_id) == 14) {
            if (document.getElementById(final_id).innerHTML == "1A") {
                document.getElementById(final_id).innerHTML = "";
                document.getElementById(initial_id.toString()).innerHTML = "";
                B_score--;
                if (document.getElementsByClassName("locker_A")[0].innerHTML == "1A") {
                    document.getElementsByClassName("locker_A")[0].innerHTML = "2A";
                }
                else if (document.getElementsByClassName("locker_A")[0].innerHTML == "") {
                    document.getElementsByClassName("locker_A")[0].innerHTML = "1A";
                }
            }
            else if (document.getElementById(final_id).innerHTML == "2A") {
                document.getElementById(final_id).innerHTML = "";
                document.getElementById(initial_id.toString()).innerHTML = "";
                document.getElementsByClassName("locker_A")[0].innerHTML == "2A"
                B_score--;
            }
            else {
                document.getElementById(final_id).innerHTML = "";
                document.getElementById(initial_id.toString()).innerHTML = "";
                B_score--;
            }
            document.getElementById("A").innerHTML = "The Number of Remaining Tokens of A are: " + A_score;
            document.getElementById("B").innerHTML = "The Number of Remaining Tokens of B are: " + B_score;
            if (A_score == 0 || B_score == 0) {
                btn_A.style.display = 'none';
                btn_B.style.display = 'none';
                if (A_score == 0) {
                    show.innerHTML = "<b>Player A has Won</b>";
                }
                else {
                    show.innerHTML = "<b>Player B has Won</b>";
                }
            }
        }
        else if (parseInt(final_id) > 14) {
            final_id = "0";
        }
    }
    if (parseInt(final_id) > 15 && parseInt(final_id) <= 28) {
        if (document.getElementById(initial_id.toString()).innerHTML == "1B") {
            document.getElementById(initial_id.toString()).innerHTML = "";
        }
        else if (document.getElementById(initial_id.toString()).innerHTML == "2B") {
            document.getElementById(initial_id.toString()).innerHTML = "1B";
        }
        func_B();
    }
    else if (parseInt(final_id) >= 1 && parseInt(final_id) < 14) {
        if (document.getElementById(initial_id.toString()).innerHTML == "1B") {
            document.getElementById(initial_id.toString()).innerHTML = "";
        }
        else if (document.getElementById(initial_id.toString()).innerHTML == "2B") {
            document.getElementById(initial_id.toString()).innerHTML = "1B";
        }
        func_B();
    }
    else if (parseInt(final_id) > 28 && parseInt(final_id) < 42) {
        if (initial_id > 28 && initial_id < 42) {
            initial_id -= 28;
        }
        if (document.getElementById(initial_id.toString()).innerHTML == "1B") {
            document.getElementById(initial_id.toString()).innerHTML = "";
        }
        else if (document.getElementById(initial_id.toString()).innerHTML == "2B") {
            document.getElementById(initial_id.toString()).innerHTML = "1B";
        }
        final -= 28;
        final_id = final.toString();
        func_B();
    }
}


function func_A() {
    if (document.getElementById(final_id).innerHTML == "") {
        document.getElementById(final_id).innerHTML = "1A";
    }
    else if (document.getElementById(final_id).innerHTML == "1A") {
        document.getElementById(final_id).innerHTML = "2A";
    }
    else if (document.getElementById(final_id).innerHTML == "1B") {
        document.getElementById(final_id).innerHTML = "1A";
        if (document.getElementsByClassName("locker_B")[0].innerHTML == "1B") {
            document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
        }
        else if (document.getElementsByClassName("locker_B")[0].innerHTML == "") {
            document.getElementsByClassName("locker_B")[0].innerHTML = "1B";
        }
    }
    else if (document.getElementById(final_id).innerHTML == "2B") {
        document.getElementById(final_id).innerHTML = "1A";
        document.getElementsByClassName("locker_B")[0].innerHTML = "2B";
    }
}

function func_B() {
    if (document.getElementById(final_id).innerHTML == "") {
        document.getElementById(final_id).innerHTML = "1B"
    }
    else if (document.getElementById(final_id).innerHTML == "1B") {
        document.getElementById(final_id).innerHTML = "2B"
    }
    else if (document.getElementById(final_id).innerHTML == "1A") {
        document.getElementById(final_id).innerHTML = "1B";
        if (document.getElementsByClassName("locker_A")[0].innerHTML == "1A") {
            document.getElementsByClassName("locker_A")[0].innerHTML = "2A";
        }
        else if (document.getElementsByClassName("locker_A")[0].innerHTML == "") {
            document.getElementsByClassName("locker_A")[0].innerHTML = "1A";
        }
    }
    else if (document.getElementById(final_id).innerHTML == "2A") {
        document.getElementById(final_id).innerHTML = "1B";
        document.getElementsByClassName("locker_A")[0].innerHTML = "2A";
    }
}

function roll_A() {
    if (A_score != 0 && B_score != 0) {
        btn_B.style.display = 'none';
        randomNum();
        if (num == 6) {
            if (document.getElementById("locker_A").innerHTML == "2A") {
                lockerFree_A();
            }
            else if (document.getElementById("locker_A").innerHTML == "1A") {
                /*if (clicking(document.getElementById("locker_A"))) {
                    lockerFree_A();
                }
                else if (clicking(document.getElementById((find_id_of_element("1A"))[0]))) {
                    move_A(parseInt((find_id_of_element("1A"))[0]), num);
                }*/
                document.getElementById("locker_A").onclick = lockerFree_A();
                // document.getElementById((find_id_of_element("1A"))[0]).onclick = move_A(parseInt((find_id_of_element("1A"))[0]), num);
            }
            else if (document.getElementById("locker_A").innerHTML == "") {
                /* if (clicking(document.getElementById((find_id_of_element("1A"))[0]))) {
                     move_A(parseInt((find_id_of_element("1A"))[0]), num);
                 }
                 else if (clicking(document.getElementById((find_id_of_element("1A"))[1]))) {
                     move_A(parseInt((find_id_of_element("1A"))[1]), num);
                 }*/
                if (document.getElementById((find_id_of_element("2A"))[0]).innerHTML == "2A") {
                    document.getElementById((parseInt((find_id_of_element("2A"))[0]) + num).toString()).innerHTML = "1A";
                    document.getElementById((find_id_of_element("2A"))[0]).innerHTML = "1A";
                }
                else {
                    document.getElementById((find_id_of_element("1A"))[0]).onclick = move_A(parseInt((find_id_of_element("1A"))[0]), num);
                    // (document.getElementById((find_id_of_element("1A"))[1]).onclick = move_A(parseInt((find_id_of_element("1A"))[1]), num));
                }
            }
        }

        else {
            btn_A.style.display = 'none';
            btn_B.style.display = 'block';
            if (document.getElementById("locker_A").innerHTML == "1A") {
                move_A(parseInt((find_id_of_element("1A"))[0]), num);
            }
            else if (document.getElementById("locker_A").innerHTML == "") {
                /*if (clicking(document.getElementById((find_id_of_element("1A"))[0]))) {
                    move_A(parseInt((find_id_of_element("1A"))[0]), num);
                }
                else if (clicking(document.getElementById((find_id_of_element("1A"))[1]))) {
                    move_A(parseInt((find_id_of_element("1A"))[1]), num);
                }*/
                if (document.getElementById((find_id_of_element("2A"))[0]).innerHTML == "2A") {
                    document.getElementById((parseInt((find_id_of_element("2A"))[0]) + num).toString()).innerHTML = "1A";
                    document.getElementById((find_id_of_element("2A"))[0]).innerHTML = "1A";
                }
                else {
                    document.getElementById((find_id_of_element("1A"))[0]).onclick = move_A(parseInt((find_id_of_element("1A"))[0]), num);
                    // (document.getElementById((find_id_of_element("1A"))[1]).onclick = move_A(parseInt((find_id_of_element("1A"))[1]), num));
                }
            }
        }
    }
    else if (A_score == 0 || B_score == 0) {
        btn_A.style.display = 'none';
        btn_B.style.display = 'none';
        if (A_score == 0) {
            show.innerHTML = "<b>Player A has Won</b>";
        }
        else {
            show.innerHTML = "<b>Player B has Won</b>";
        }
    }
}

function roll_B() {
    if (A_score != 0 && B_score != 0) {
        btn_A.style.display = 'none';
        randomNum();
        if (num == 6) {
            if (document.getElementById("locker_B").innerHTML == "2B") {
                lockerFree_B();
            }
            else if (document.getElementById("locker_B").innerHTML == "1B") {
                document.getElementById("locker_B").onclick = lockerFree_B();
                // document.getElementById((find_id_of_element("1B"))[0]).onclick = move_B(parseInt((find_id_of_element("1B"))[0]), num);
            }
            else if (document.getElementById("locker_B").innerHTML == "") {
                if (document.getElementById((find_id_of_element("2B"))[0]).innerHTML == "2B") {
                    document.getElementById((parseInt((find_id_of_element("2B"))[0]) + num).toString()).innerHTML = "1B";
                    document.getElementById((find_id_of_element("2B"))[0]).innerHTML = "1B";
                }
                else {
                    document.getElementById((find_id_of_element("1B"))[0]).onclick = move_B(parseInt((find_id_of_element("1B"))[0]), num);
                    // (document.getElementById((find_id_of_element("1B"))[1]).onclick = move_B(parseInt((find_id_of_element("1B"))[1]), num));
                }
            }
        }
        else {
            btn_B.style.display = 'none';
            btn_A.style.display = 'block';
            if (document.getElementById("locker_B").innerHTML == "1B") {
                move_B(parseInt((find_id_of_element("1B"))[0]), num);
            }
            else if (document.getElementById("locker_B").innerHTML == "") {
                if (document.getElementById((find_id_of_element("2B"))[0]).innerHTML == "2B") {
                    document.getElementById((parseInt((find_id_of_element("2B"))[0]) + num).toString()).innerHTML = "1B";
                    document.getElementById((find_id_of_element("2B"))[0]).innerHTML = "1B";
                }
                else {
                    document.getElementById((find_id_of_element("1B"))[0]).onclick = move_B(parseInt((find_id_of_element("1B"))[0]), num);
                    // (document.getElementById((find_id_of_element("1B"))[1]).onclick = move_B(parseInt((find_id_of_element("1B"))[1]), num));
                }
            }
        }
    }
    else if (A_score == 0 || B_score == 0) {
        btn_A.style.display = 'none';
        btn_B.style.display = 'none';
        if (A_score == 0) {
            show.innerHTML = "<b>Player A has Won</b>";
        }
        else {
            show.innerHTML = "<b>Player B has Won</b>";
        }
    }
}


function clicking(id) {
    //document.getElementById(id).onclick = function () { console.log("Clicked!") };
    document.getElementById(id).addEventListener("click", function () { console.log("Clicked!") })
    return true;
}

document.getElementById("1").style.background = "rgb(247, 98, 98)";
document.getElementById("28").style.background = "salmon";
document.getElementById("15").style.background = "rgb(79, 158, 189)";
document.getElementById("14").style.background = "skyblue";