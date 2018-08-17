$(document).ready(function () {
    $("#btnmath").click(function () {
        //First we need to get the user input
        var num1 = Number($("#input1").val());
        var num2 = Number($("#input2").val());
        var num3 = Number($("#input3").val());
        var num4 = Number($("#input4").val());
        var num5 = Number($("#input5").val());
        //Next we need to perform the necessary calculations
        var sum = num1 + num2 + num3 + num4 + num5;
        var product = num1 * num2 * num3 * num4;
        var average = sum / 5;
        var smallest = Math.min(num1, num2, num3, num4, num5);
        var largest = Math.max(num1, num2, num3, num4, num5);
        //finally we need to output the results
        $('#sum').text("the sum is :" + sum);
        $('#product').text("the product is:" + product)
        $('#average').text("the average is:" + average)
        $('#smallest').text("the smallest number is :" + smallest)
        $('#largest').text("the largest number is :" + largest)
    });
    $("#mathcode").hide();
    $("#btncodemath").click(function () {
        $("#mathcode").toggle();
    })
    $("#fabout").click(function () {
        //Step 1: get the information from the user
        var num1 = Number($("#fbnum1").val());
        var num2 = Number($("#fbnum2").val());
        //var numbers = [];
        var output = "";
        // Step 2 : perform the algorithm
        for (var loop = 1; loop <= 100; loop++) {
            // Here is where we determine whether to print Fizz, Buzz , FizzBuzz or the loop counter
            if (loop % num1 == 0 && loop % num2 == 0) {
                //$("#fbout").text("FizzBuzz");
                //numbers.push("FizzBuzz")
                output += "Fizzbuzz, "
            }
            else if (loop % num1 == 0) {
                //$("#fbout").text("Fizz");
                //numbers.push("Fizz")
                output += "Fizz, "
            }
            else if (loop % num2 == 0) {
                //$("#fbout").text("Buzz");
                //numbers.push("Buzz");
                output += "Buzz, "
            }
            else {
                //$("#fbout").text(loop);
                //numbers.push(loop);
                output += loop + ", "
            }

        }
        // Step 3 : Output the result
        //var output1 = numbers.join(' ');
        $("#fbout").text(output);
    });
    $("#fizzcode").hide();
    $("#btncodefizz").click(function () {
        $("#fizzcode").toggle();
    })
    $("#btnfact").click(function(){
        var num1 = Number($("#factorial").val());
        tempvalue = 1;
        for (i = num1; i > 0; i--) {
            tempvalue *= i;
            // this is same as the   tempvalue =  tempvalue * i ;
        }
        $("#fact").text("Factorial of " + num1 + " is :" + tempvalue);
    
    })
    $("#factcode").hide();
    $("#btncodefact").click(function () {
        $("#factcode").toggle();
    })
})
        