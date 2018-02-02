start.addEventListener("click", function() {
    document.getElementById('hider').style.display = "inline-block";
    document.getElementById('playdiv').style.display = "none";
    hangman()
})

var userinput = document.getElementById("userinput");
var guess = document.getElementById("guess");
var used = document.getElementById("usedletters");
var life = 5;
var check = false;
var audiolose = new Audio("audio/youdied.mp3");
var audiowin = new Audio("audio/youwin.mp3")
var words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
var hints = ["you are staring at it", "you make these", "you run these", "you tap on this", "Script", "do this to relax", "connect to this"]
var index = Math.floor(Math.random() * words.length);
var rand = words[index];
var life2 = rand.length;
rand = rand.split('');
document.getElementById("hints").innerHTML = hints[index];

function hangman() {

    for (var i = 0; i < rand.length; i++) {
        let box = document.createElement('div');
        let letter = (rand[i]);
        box.setAttribute('class', 'boxcss');
        document.getElementById("theword").appendChild(box);
        guess.addEventListener("click", function() {
            var input = userinput.value.toLowerCase();

            if (input == letter) {
                box.innerHTML = letter;
                check = true;
            }


        })
    }
    guess.addEventListener("click", function() {
        used.innerHTML += userinput.value + ' ';
        for (var i = 0; i < rand.length; i++) {
            if (rand[i] == userinput.value.toLowerCase()) {
                life2--;
                rand[i] = false;
            }
            if (life2 == 0) {
                document.getElementById("main").innerHTML = " ";
                document.body.style.backgroundImage = "url('images/victory.jpg')";
                document.body.style.backgroundSize = "cover";
                audiowin.play(1);
            }

        }

        if (check == false) { life-- }
        if (life <= 0) {
            document.getElementById("main").innerHTML = " ";
            document.body.style.backgroundImage = "url('images/youdied.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "repeat-y";
            audiolose.play();
        }
        check = false;

    })
}