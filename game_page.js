player1_name  = localStorage.getItem("player1_name");
player2_name  = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    console.log(num1);
    console.log(num2);
    answer = num1 * num2;
    console.log(answer);

    question_word = "<h4 id='word_display'> Question : "+num1+" X "+num2+"</h4><br>";
    input_box = "Answer : <input type='text' id='input_check_box' placeholder='Type The Answer'><br><br>";
    check_btn = "<button class='btn btn-info' onclick='check()'>Check</button><br><br>";
    row = question_word + input_box + check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer
    console.log(get_answer);
    
    if(get_answer == answer) {
        if(answer_turn == "player1"){
            player1_score += 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score += 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }

    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
}