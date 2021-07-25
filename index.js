function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(quality="*") {
    return function(adjective = "special") {
        return `You are ${quality}${adjective}${quality}!`
    }
}

const Calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    }
}

let actionApplyer = function (start, ray) {
    let a = start

    for (let x = 0; x < ray.length; x++) {
        a = ray[x](a)
    }

    return a
}
