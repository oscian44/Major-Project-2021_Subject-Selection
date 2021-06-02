var subjects = [{
        name: "enStud",
    },
    {
        name: "enEald"
    },
    {
        name: "enStand"
    },
    {
        name: "enAdv"
    },
    {
        name: "enExt1"
    },
    {
        name: "enExt2"
    },
    {
        name: "maStand"
    },
    {
        name: "maAdv"
    },
    {
        name: "maExt1"
    },
    {
        name: "maExt2"
    },
    {
        name: "dDram"
    },
    {
        name: "ecBus"
    },
    {
        name: "ecEco"
    },
    {
        name: "gGeo"
    },
    {
        name: "hAnc"
    },
    {
        name: "hExt"
    },
    {
        name: "hLeg"
    },
    {
        name: "hMod"
    },
    {
        name: "lExt"
    },
    {
        name: "lFre"
    },
    {
        name: "lChi"
    },
    {
        name: "lLat"
    },
    {
        name: "lGre"
    },
    {
        name: "mu1"
    },
    {
        name: "mu2"
    },
    {
        name: "muExt"
    },
    {
        name: "pdhpe"
    },
    {
        name: "pSr1"
    },
    {
        name: "pSr2"
    },
    {
        name: "sBio"
    },
    {
        name: "sChe"
    },
    {
        name: "sEes"
    },
    {
        name: "sPhy"
    },
    {
        name: "sExt"
    },
    {
        name: "tDt"
    },
    {
        name: "tEs"
    },
    {
        name: "tIt"
    },
    {
        name: "tIpt"
    },
    {
        name: "tSdd"
    },
    {
        name: "va"
    }
];

var selectedSub = [];

var subjectHeaders = ["headEn", "headMa", "headD", "headEc", "headG", "headH", "headL", "headMu", "headPdhpe", "headS", "headT", "headVa"]



//Binary Search Function for the list of subjects
function searchSub(searchTerm) {
    var tempTerm = ""
    var searchResult = ""
    //Sorts subjects alphabetically prior to binary search
    sortsubjects()

    //Convert search term to its relative subject code for use in binary search
    tempTerm = simpTerm(searchTerm)

    //Executes binary Search Function
    searchResult = binarySearch(subjects, tempTerm)

    hideDivs()

    document.getElementById(subjects.name[searchResult]).style.display = "Block"

}

//Binary Search Function
function binarySearch(items, value) {
    var startIndex = 0
    var endIndex = items.length - 1
    var middle = Math.floor((endIndex + startIndex) / 2)

    while (items.name[middle] != value && startIndex < endIndex) {

        //Changes search location
        if (value < items.name[middle]) {
            endIndex = middle - 1;
        } else if (value > items.name[middle]) {
            endIndex = middle + 1;
        }

        //Returns to centre of search
        middle = Math.floor((endIndex + startIndex) / 2);
    }

    //Assures value is correct and returns it
    return (items.name[middle] != value) ? -1 : middle;
}

//Selects user's desired subject and adds to the selected list
function subjectPick(inputSub) {




}

//Simplifies the search term to its relative code
function simpTerm(term) {
    term = term.toLowerCase
    switch (term) {
        case "english studies":
            return ("enStud");
        case "english eal/d":
        case "english eald":
            return ("enEald");
        case "english standard":
        case "english (standard)":
            return("enStand");
        case "english advanced":
        case "english (advanced)":
            return("enAdv");
        case "english extension 1":
            return("enExt1");
        case "english extension 2":
            return("enExt2");
    }
}



//Sorts alphabetically the list of subjects
function sortsubjects() {
    subjects.sort(function (a, b) {
        var x = a.name.toLowerCase();
        var y = b.name.toLowerCase();
        if (x < y) {
            return -1;
        }
        if (x > y) {
            return 1;
        }
        return 0;
    });

    console.log(subjects)
}

//Hides all subject divs
function hideDivs() {
    for (i = 0; i < subjectHeaders.length; i++) {
        document.getElementById(subjectHeaders[i]).style.display = "none";
    }
    for (i = 0; i < subjects.length; i++) {
        document.getElementById(subjects.name[i]).style.display = "none";
    }
}

//Reveals all subject divs
function showDivs() {
    for (i = 0; i < subjectHeaders.length; i++) {
        document.getElementById(subjectHeaders[i]).style.display = "Block";
    }
    for (i = 0; i < subjects.length; i++) {
        document.getElementById(subjects.name[i]).style.display = "Block";
    }
}