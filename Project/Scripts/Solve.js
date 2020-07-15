<script>
    // allow the use to press enter to begin function
    var input = document.getElementById("fbInput2");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById("btnFB").click();
        }
    });

	$("#fbOutBox").hide();

    $("#btnFB").on("click", function () {
        let fizzMod = 0;
        let buzzMod = 0;
        //let output = "";
        let output = new Array();

        let fizzNum = parseInt($("#fbInput1").val());
        let buzzNum = parseInt($("#fbInput2").val());

        for (let loop = 1; loop <= 100; loop++) {
            fizzMod = loop % fizzNum;
            buzzMod = loop % buzzNum;

            if (fizzMod == 0 && buzzMod == 0) {
                //output += "<span class='fizzbuzz'>FizzBuzz</span>, ";
                output.push("<span class='fizzbuzz'>FizzBuzz</span><br>")
            }
            else if (fizzMod == 0) {
                //output += "<span class='fizz'>Fizz</span>, ";
                output.push("<span class='fizz'>Fizz</span><br>")
            }
            else if (buzzMod == 0) {
                //output += "<span class='buzz'>Buzz</span >, ";
                output.push("<span class='buzz'>Buzz</span><br>");
            }
            else {
                //output += loop + ",";
                output.push(loop);
            }
        }
        $("#fbOut").html(output.join(', '));
		$("#fbOutBox").show();
    });
</script>