//Indrawan Saputra
//CPSC 473
//Assignment 3
//March 7, 2016

//1.  
function exercise1(nums) {
    var sum = 0;
    var avg = 0;

    for (var i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }

    avg = sum / nums.length;

    return avg;
}	

var e = exercise1([1,2,3,4]);
document.getElementById("exercise1").innerHTML = e;

//2. 
function exercise2(nums) {
    var largestNum = 0;
    var currentNum = 0;

    for (var i = 0; i < nums.length; i++) {
        currentNum = nums[i];

        if (currentNum > largestNum) {
            largestNum = currentNum;
        }
    }

    return largestNum;
}

var e = exercise2([1,2,3,4]);  //4
document.getElementById("exercise2").innerHTML = e;

//3. 
function exercise3(nums) {
    var evenNum = false;
    var x = 0;

    for (var i = 0; i < nums.length; i++) {
        x = nums[i] % 2;

        if (x == 0) {
            evenNum = true;
            break;
        }
    }
    return evenNum;

}
var e = exercise3([1,2,3,4]); // true
document.getElementById("exercise3").innerHTML = e;

//4. 
function exercise4(nums) {
    evenNums = true;
    var x = 0;

    for (var i = 0; i < nums.length; i++) {
        x = nums[i] % 2;

        if (x != 0) {
            evenNums = false;
        }
    }
    return evenNums;
}
var e = exercise4([1,2,3,4]); // false
document.getElementById("exercise4").innerHTML = e;

//5. 
function arrayContains(words, x) {
    var y = false;

    words.forEach(function(value) {
            if (value == x) {
                y = true;
            }
        });
        return y;
    }
var e = arrayContains(["hello", "world"], "hello"); // true
document.getElementById("exercise5").innerHTML = e;

//6. 
function arrayContainsTwo(x, y) {
    var count = 0;
    var z = false;

    x.forEach(function(value) {
            if (value == y) {
                count++;
            }

            if (count == 2) {
                z = true;
            }
        });
        return z;
    }
var e = arrayContainsTwo(["a","b","c","a"], "a"); //true
document.getElementById("exercise6").innerHTML = e;

function arrayContainsThree(x, y) {
    var count = 0;
    var z = false;

    x.forEach(function(value) {
            if (value == y) {
                count++;
            }

            if (count == 3) {
                z = true;
            }
        });
        return z;
    }
var e = arrayContainsThree(["a","b","c","a"], "a"); //true
document.getElementById("exercise7").innerHTML = e;

function arrayContainsNTimes(x, y, z) {
    var count;
    var containsNtimes = false;

    x.forEach(function(value) {
            if (value == y) {
                count++;
            }

            if(count == z) {
                containsNtimes = true;
            }
        });
        return containsNtimes;
    }
var e = arrayContainsNTimes(["a","b","a","c","a"],"a",3);
document.getElementById("exercise8").innerHTML ="arrayContainsNTimes = " + e;

//underscore JS
function exercise2UnderscoreJS(nums) {
	var maxNum = _.max(nums, function(num){ return num; });
	return maxNum;
}
var e = exercise2UnderscoreJS([1,2,3,4]);  //4
document.getElementById("exercise9").innerHTML = e;


function exercise3UnderscoreJS(nums) {

	var evenNum = _.find(nums, function(num){ return num % 2 == 0 ? true : false});
	return evenNum;
}
var e = exercise3UnderscoreJS([1,2,3,4]);  //4
document.getElementById("exercise10").innerHTML = e;

function exercise4UnderscoreJS(nums) {

}
