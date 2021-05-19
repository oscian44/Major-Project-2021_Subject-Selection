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



//Binary Search Function for the list of subjects
function searchSub(searchTerm) {

    //Sorts subjects alphabetically prior to binary search
    sortsubjects()


    //Binary Search Function
    
}

function subjectPick(inputSub) {




}

//Sorts alphabetically sorts the list of subjects
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
