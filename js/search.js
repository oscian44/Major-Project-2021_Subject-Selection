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

var subjectHeaders = ["headEn", "headMa", "headD", "headEc", "headG", "headH", "headL", "headMu", "headPdhpe", "headS", "headT", "headVa", "headP"]



//Binary Search Function for the list of subjects
function searchSub() {
    var searchTerm = document.getElementById("searchBar").value
    var tempTerm = ""
    var searchResult = ""

    //Sorts subjects alphabetically prior to binary search
    subjects = sortsubjects()

    //Convert search term to its relative subject code for use in binary search
    tempTerm = simpTerm(searchTerm)

    //Validates search term
    if (tempTerm == "invalid") {
        searchResult = "null";
    } else {
        //Executes binary Search Function
        searchResult = binarySearch(subjects, tempTerm)
    }

    //Displays search results
    if (searchResult == "null") {
        alert("No Results")
        showDivs()
    } else {
        hideDivs()

        document.getElementById(subjects[searchResult].name).style.display = "Block"
    }


}

//Binary Search Function
var binarySearch = function (items, value) {
    var startIndex = 0,
        stopIndex = items.length - 1,
        middle = Math.floor((stopIndex + startIndex) / 2);

    while (items[middle].name != value && startIndex < stopIndex) {

        //adjust search area
        if (value < items[middle].name) {
            stopIndex = middle - 1;
        } else if (value > items[middle].name) {
            startIndex = middle + 1;
        }

        //recalculate middle
        middle = Math.floor((stopIndex + startIndex) / 2);
    }

    //make sure it's the right value
    return (items[middle].name != value) ? -1 : middle;
}

//Simplifies the search term to its relative code
function simpTerm(term) {
    term = term.toLowerCase();
    switch (term) {
        case "english studies":
            return ("enStud");
        case "english eal/d":
        case "english eald":
            return ("enEald");
        case "english standard":
        case "standard english":
        case "english (standard)":
            return ("enStand");
        case "english advanced":
        case "advanced english":
        case "english (advanced)":
            return ("enAdv");
        case "english extension 1":
            return ("enExt1");
        case "english extension 2":
            return ("enExt2");
        case "maths standard":
        case "mathematics standard":
        case "mathematics (standard)":    
            return ("maStand");
        case "maths advanced":
        case "advanced maths":
        case "mathematics advanced":
            return ("maAdv");
        case "mathematics extension 1":
        case "maths extension 1":
            return ("maExt1");
        case "mathematics extension 2":
        case "maths extension 2":
            return ("maExt2");
        case "drama":
            return ("dDram");
        case "business":
        case "business studies":
            return ("ecBus");
        case "economics":
            return ("ecEco");
        case "geo":
        case "geography":
            return ("gGeo");
        case "ancient history":
            return ("hAnc");
        case "extension history":
        case "history extension":
            return ("hExt")
        case "legal":
        case "legal studies":
            return ("hLeg");
        case "modern history":
            return ("hMod");
        case "external language":
        case "external language course":
            return ("lExt");
        case "french":
            return ("lFre");
        case "chinese":
            return ("lChi");
        case "latin":
            return ("lLat");
        case "modern greek":
        case "greek":
            return ("lGre");
        case "music 1":
            return ("mu1");
        case "music 2":
            return ("mu2");
        case "extension music":
        case "music extension":
            return ("muExt");
        case "pdhpe":
            return ("pdhpe");
        case "studies of religion i":
        case "studies of religion 1":
        case "sor 1":
            return ("pSr1");
        case "studies of religion ii":
        case "studies of religion 2":
        case "sor 2":
            return ("pSr2");
        case "bio":
        case "biology":
            return ("sBio");
        case "chem":
        case "chemistry":
            return ("sChe");
        case "earth and enviromental":
        case "earth and enviromental science":
            return ("sEes");
        case "physics":
            return ("sPhy");
        case "extension science":
        case "science extension":
        case "year 12 hsc science extension":
            return ("sExt");
        case "dt":
        case "design and technology":
        case "design and tech":
        case "d and t":
        case "design technology":
        case "design tech":
            return ("tDt");
        case "engineering studies":
        case "engineering":
            return ("tEs");
        case "industrial technology":
        case "industrial tech":
            return ("tIt");
        case "ipt":
        case "information processes and technlogy":
            return ("tIpt");
        case "sdd":
        case "software development and design":
            return ("tSdd");
        case "art":
        case "va":
        case "visual arts":
            return ("va");
        default:
            return ("invalid");
    }
}



//Sorts alphabetically the list of subjects
function sortsubjects() {

    function compare(a, b) {
        const thingA = a.name.toUpperCase();
        const thingB = b.name.toUpperCase();

        let comparison = 0;
        if (thingA > thingB) {
            comparison = 1;
        } else if (thingA < thingB) {
            comparison = -1;
        }
        return comparison;
    }
    return subjects.sort(compare);

}

//Hides all subject divs
function hideDivs() {
    for (i = 0; i < subjectHeaders.length; i++) {
        document.getElementById(subjectHeaders[i]).style.display = "none";
    }
    for (i = 0; i < subjects.length; i++) {
        document.getElementById(subjects[i].name).style.display = "none";
    }
}

//Reveals all subject divs
function showDivs() {
    for (i = 0; i < subjectHeaders.length; i++) {
        document.getElementById(subjectHeaders[i]).style.display = "Block";
    }
    for (i = 0; i < subjects.length; i++) {
        document.getElementById(subjects[i].name).style.display = "Block";
    }
}