function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


//This is for the hacking animation

alphabet = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
letter_count = 0;
el = $("#loading");
word = el.html().trim();
finished = false;

el.html("");
for (var i = 0; i < word.length; i++) {
    el.append("<span>"+word.charAt(i)+"</span>");
}

setTimeout(write, 75);
incrementer = setTimeout(inc, 1000);

function write() {
    for (var i = letter_count; i < word.length; i++) {
        var c = Math.floor(Math.random() * 36);
        $("span")[i].innerHTML = alphabet[c];
    }
    if (!finished) {
        setTimeout(write, 75);
    }
}

function inc() {
    $("span")[letter_count].innerHTML = word[letter_count];
    $("span:eq("+letter_count+")").addClass("glow");
    letter_count++;
    if (letter_count >= word.length) {
        finished = true;
        setTimeout(reset, 1500);
    } else {
        setTimeout(inc, 1000);
    }
}

function reset() {
    letter_count = 0;
    finished = false;
    setTimeout(inc, 1000);
    setTimeout(write, 75);
    $("span").removeClass("glow");
}