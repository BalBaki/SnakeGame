$(document).ready(function () {
    var score = 0;
    var sneakSpeedTime = 100;

    function getLeft() {
        return parseInt($('#snake-body').css('left'));
    }

    function getTop() {
        return parseInt($('#snake-body').css('top'));
    }

    function dead() {

        var a = getLeft();
        var b = getTop();
        if (a < 1 || a > 476 || b < 1 || b > 476) {
            alert("Oyun bitti. Skorunuz : " + score)
            $('#snake-body').css("top", 226);
            $('#snake-body').css("left", 226);
            clearInterval(intervalId);
            score = 0;
            sneakSpeedTime = 100;
            console.log("Game Finished ! ... ")
        }

    }

    function createBait() {
        $('#gameArea').append(
            $('<div>').addClass("bait")
        )
        baitLocation();
    }

    function baitLocation() {

        topLocation = Math.floor(Math.random() * 19) * 25 + 1
        leftLocation = Math.floor(Math.random() * 19) * 25 + 1

        $('.bait').css("top", topLocation)
        $('.bait').css("left", leftLocation)
        console.log("Bait created at : " + topLocation + "  " + leftLocation)
    }   

    function cathBait() {
        if (parseInt($('#snake-body').css('left')) == parseInt($('.bait').css('left')) && parseInt($('#snake-body').css('top')) == parseInt($('.bait').css('top'))) {
            score++;
            if (  score > 1 && score % 5 == 1 ) {
                if (sneakSpeedTime > 20)
                    sneakSpeedTime -= 10;
            }
            console.log("Score : " + score)
            console.log("Snake Speed : " + sneakSpeedTime)
            console.log("--------------");
        
        
            baitLocation();
        }
    }

    var intervalId = null;
    createBait()
    document.addEventListener('keydown', function (e) {
        var keyCode = e.keyCode;
        switch (keyCode) {
            case 87:
                clearInterval(intervalId);
                intervalId = setInterval(function () {
                    $('#snake-body').css("top", getTop() - 25)
                    cathBait()
                    dead()
                }, sneakSpeedTime)
                break;

            case 83:
                clearInterval(intervalId);
                intervalId = setInterval(function () {
                    $('#snake-body').css("top", getTop() + 25)
                    cathBait()
                    dead()
                }, sneakSpeedTime)
                break;

            case 65:
                clearInterval(intervalId);
                intervalId = setInterval(function () {
                    $('#snake-body').css("left", getLeft() - 25)
                    cathBait()
                    dead()
                }, sneakSpeedTime)
                break;

            case 68:
                clearInterval(intervalId);
                intervalId = setInterval(function () {
                    $('#snake-body').css("left", getLeft() + 25)
                    cathBait()
                    dead()
                }, sneakSpeedTime)
                break;
        }

    })



})


