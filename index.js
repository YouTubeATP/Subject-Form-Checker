function formToData() {
    for (i = 1, x = []; i < 16; i++) {
        x.push([document.forms["prefs"][`subj${i}`].id, document.forms["prefs"][`subj${i}`].value - 1]);
    }
    for (i = 1, x1 = []; i < 8; i++) {
        x1.push([document.forms["prefs"][`x1subj${i}`].id, document.forms["prefs"][`x1subj${i}`].value - 1]);
    }
    for (i = 1, x2 = []; i < 8; i++) {
        x2.push([document.forms["prefs"][`x2subj${i}`].id, document.forms["prefs"][`x2subj${i}`].value - 1]);
    }
    for (i = 1, x3 = []; i < 9; i++) {
        x3.push([document.forms["prefs"][`x3subj${i}`].id, document.forms["prefs"][`x3subj${i}`].value - 1]);
    }
    return [x, x1, x2, x3]
}

function dataToArray(array) {
    j = 0
    res = []
    while (res.length < array.length) {
        for (let i = 0; i < array.length; i++) {
            if (Number(array[i][1]) === j) {
                res.push(array[i][0]);
                j++;
            }
        }
    }
    return res
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    for (var i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

function handler() {
    const [x, x1, x2, x3] = formToData();
    xPref = dataToArray(x);
    x1Pref = dataToArray(x1);
    x2Pref = dataToArray(x2);
    x3Pref = dataToArray(x3);

    x1Remove = ["subj1", "subj5", "subj6", "subj7", "subj10", "subj12", "subj13", "subj15"]
    x2Remove = ["subj2", "subj3", "subj5", "subj8", "subj9", "subj11", "subj12", "subj15"]
    x3Remove = ["subj1", "subj2", "subj6", "subj8", "subj9", "subj10", "subj13"]

    let temp = xPref

    var x1Comp = temp.filter(function (item) {
        return x1Remove.indexOf(item) === -1;
    });

    temp = xPref

    var x2Comp = temp.filter(function (item) {
        return x2Remove.indexOf(item) === -1;
    });

    temp = xPref

    var x3Comp = temp.filter(function (item) {
        return x3Remove.indexOf(item) === -1;
    });

    subjList = {
        "x1subj1": "subj2",
        "x1subj2": "subj3",
        "x1subj3": "subj4",
        "x1subj4": "subj8",
        "x1subj5": "subj9",
        "x1subj6": "subj11",
        "x1subj7": "subj14",
        "x2subj1": "subj1",
        "x2subj2": "subj4",
        "x2subj3": "subj6",
        "x2subj4": "subj7",
        "x2subj5": "subj10",
        "x2subj6": "subj13",
        "x2subj7": "subj14",
        "x3subj1": "subj3",
        "x3subj2": "subj4",
        "x3subj3": "subj5",
        "x3subj4": "subj7",
        "x3subj5": "subj11",
        "x3subj6": "subj12",
        "x3subj7": "subj14",
        "x3subj8": "subj15"
    }

    for (let i = 0; i < x1Pref.length; i++) {
        x1Pref[i] = subjList[x1Pref[i]];
    }

    for (let i = 0; i < x2Pref.length; i++) {
        x2Pref[i] = subjList[x2Pref[i]];
    }

    for (let i = 0; i < x3Pref.length; i++) {
        x3Pref[i] = subjList[x3Pref[i]];
    }

    console.log(JSON.stringify(x1Pref));
    console.log(JSON.stringify(x1Comp));
    console.log(JSON.stringify(x2Pref));
    console.log(JSON.stringify(x2Comp));
    console.log(JSON.stringify(x3Pref));
    console.log(JSON.stringify(x3Comp));

    if (arraysEqual(x1Pref, x1Comp) && arraysEqual(x2Pref, x2Comp) && arraysEqual(x3Pref, x3Comp)) {
        alert("All is good!\nYour general preference matches your X1, X2, X3 preference.")
    } else {
        alert("Something might be wrong!\nYou might want to check whether your arrangements are correct.")
    }
}