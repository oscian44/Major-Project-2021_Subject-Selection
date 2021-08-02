//Pulls value indicating how many subjects are selected from localstorage
var subCount = localStorage.getItem("subCount")

if (subCount == null) {
  subCount = 1;
}

//Pulls subject array from localstorage
var subjects = JSON.parse(localStorage.getItem("subjects"))

//Sets subject array if the localstorage is empty
if (subjects == null || subjects[1].name == null) {
  subjects = [{
      name: "English Studies",
      units: "2",
      sel: 0
    },
    {
      name: "English EAL/D",
      units: "2",
      sel: 0
    },
    {
      name: "English Standard",
      units: "2",
      sel: 0
    },
    {
      name: "English Advanced",
      units: "2",
      sel: 0
    },
    {
      name: "English Extension 1",
      units: "1",
      sel: 0
    },
    {
      name: "English Extension 2",
      units: "1",
      sel: 0
    },
    {
      name: "Math Standard",
      units: "2",
      sel: 0
    },
    {
      name: "Math Advanced",
      units: "2",
      sel: 0
    },
    {
      name: "Math Extension 1",
      units: "1",
      sel: 0
    },
    {
      name: "Math Extension 2",
      units: "1",
      sel: 0
    },
    {
      name: "Drama",
      units: "2",
      sel: 0
    },
    {
      name: "Business Studies",
      units: "2",
      sel: 0
    },
    {
      name: "Economics",
      units: "2",
      sel: 0
    },
    {
      name: "Geography",
      units: "2",
      sel: 0
    },
    {
      name: "Ancient History",
      units: "2",
      sel: 0
    },
    {
      name: "History Extension",
      units: "1",
      sel: 0
    },
    {
      name: "Legal Studies",
      units: "2",
      sel: 0
    },
    {
      name: "Modern History",
      units: "2",
      sel: 0
    },
    {
      name: "External Lanuage Course",
      units: "2",
      sel: 0
    },
    {
      name: "French",
      units: "2",
      sel: 0
    },
    {
      name: "Chinese",
      units: "2",
      sel: 0
    },
    {
      name: "Latin",
      units: "2",
      sel: 0
    },
    {
      name: "Modern Greek",
      units: "2",
      sel: 0
    },
    {
      name: "Music 1",
      units: "2",
      sel: 0
    },
    {
      name: "Music 2",
      units: "2",
      sel: 0
    },
    {
      name: "Music Extension",
      units: "1",
      sel: 0
    },
    {
      name: "PDHPE",
      units: "2",
      sel: 0
    },
    {
      name: "Studies of Religion 1",
      units: "1",
      sel: 0
    },
    {
      name: "Studies of Religion 2",
      units: "2",
      sel: 0
    },
    {
      name: "Biology",
      units: "2",
      sel: 0
    },
    {
      name: "Chemistry",
      units: "2",
      sel: 0
    },
    {
      name: "Earth and Environmental Science",
      units: "2",
      sel: 0
    },
    {
      name: "Physics",
      units: "2",
      sel: 0
    },
    {
      name: "Science Extension",
      units: "1",
      sel: 0
    },
    {
      name: "Design and Technology",
      units: "2",
      sel: 0
    },
    {
      name: "Engineering Studies",
      units: "2",
      sel: 0
    },
    {
      name: "Industrial Technology",
      units: "2",
      sel: 0
    },
    {
      name: "IPT",
      units: "2",
      sel: 0
    },
    {
      name: "Software Design and Development",
      units: "2",
      sel: 0
    },
    {
      name: "Visual Arts",
      units: "2",
      sel: 0
    }
  ];
}

//Recives details of subject from HTML button and adds to localstorage, has validation to protect against duplicate subjects
function selectSubject() {
  if (subCount == 1) {
    console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub1")

    subjects[num].sel = 1
    localStorage.setItem("subjects", JSON.stringify(subjects));

    var subName1 = (subjects[num].name)
    var subUnits1 = (subjects[num].units)

    localStorage.setItem("subName1", subName1)
    localStorage.setItem("subUnits1", subUnits1)

    subCount = 2
    localStorage.setItem("subCount", subCount)
  } else if (subCount == 2) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub2")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName2 = (subjects[num].name)
      var subUnits2 = (subjects[num].units)

      localStorage.setItem("subName2", subName2)
      localStorage.setItem("subUnits2", subUnits2)

      subCount = 3
      localStorage.setItem("subCount", subCount)
    }

  } else if (subCount == 3) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub3")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName3 = (subjects[num].name)
      var subUnits3 = (subjects[num].units)
      localStorage.setItem("subName3", subName3)
      localStorage.setItem("subUnits3", subUnits3)

      subCount = 4
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 4) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub4")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName4 = (subjects[num].name)
      var subUnits4 = (subjects[num].units)

      localStorage.setItem("subName4", subName4)
      localStorage.setItem("subUnits4", subUnits4)

      subCount = 5
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 5) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub5")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName5 = (subjects[num].name)
      var subUnits5 = (subjects[num].units)

      localStorage.setItem("subName5", subName5)
      localStorage.setItem("subUnits5", subUnits5)

      subCount = 6
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 6) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub6")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName6 = (subjects[num].name)
      var subUnits6 = (subjects[num].units);

      localStorage.setItem("subName6", subName6)
      localStorage.setItem("subUnits6", subUnits6)

      subCount = 7
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 7) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub7")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName7 = (subjects[num].name)
      var subUnits7 = (subjects[num].units)

      localStorage.setItem("subName7", subName7)
      localStorage.setItem("subUnits7", subUnits7)

      subCount = 8
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 8) {

    if (subjects[num].sel == 1) {
      alert("Cannot Select Same Subject Multiple Times")
    } else {
      console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub8")

      subjects[num].sel = 1
      localStorage.setItem("subjects", JSON.stringify(subjects));

      var subName8 = (subjects[num].name)
      var subUnits8 = (subjects[num].units)

      localStorage.setItem("subName8", subName8)
      localStorage.setItem("subUnits8", subUnits8)

      subCount = 9
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 9) {
    alert("Selected Subject Limit Reached, Please Clear Selection")
  }
}

//Refreshes the saved list of subjects on the webpage from localstorage
function subChange() {

  if (localStorage.getItem("subUnits1") == null) {} else {

    var subjectName1 = localStorage.getItem("subName1")
    var subjectUnits1 = localStorage.getItem("subUnits1")
    console.log(subjectName1 + " " + subjectUnits1 + " - Displayed on html as subject 1")
    document.getElementById("sub1").innerHTML = subjectName1
    document.getElementById("units1").innerHTML = subjectUnits1 + " Units"
  }

  if (localStorage.getItem("subUnits2") == null) {} else {
    var subjectName2 = localStorage.getItem("subName2")
    var subjectUnits2 = localStorage.getItem("subUnits2")
    console.log(subjectName2 + " " + subjectUnits2 + " - Displayed on html as subject 2")
    document.getElementById("sub2").innerHTML = subjectName2
    document.getElementById("units2").innerHTML = subjectUnits2 + " Units"
  }

  if (localStorage.getItem("subUnits3") == null) {} else {
    var subjectName3 = localStorage.getItem("subName3")
    var subjectUnits3 = localStorage.getItem("subUnits3")
    console.log(subjectName3 + " " + subjectUnits3 + " - Displayed on html as subject 3")
    document.getElementById("sub3").innerHTML = subjectName3
    document.getElementById("units3").innerHTML = subjectUnits3 + " Units"
  }

  if (localStorage.getItem("subUnits4") == null) {} else {
    var subjectName4 = localStorage.getItem("subName4")
    var subjectUnits4 = localStorage.getItem("subUnits4")
    console.log(subjectName4 + " " + subjectUnits4 + " - Displayed on html as subject 4")
    document.getElementById("sub4").innerHTML = subjectName4
    document.getElementById("units4").innerHTML = subjectUnits4 + " Units"
  }

  if (localStorage.getItem("subUnits5") == null) {} else {
    var subjectName5 = localStorage.getItem("subName5")
    var subjectUnits5 = localStorage.getItem("subUnits5")
    console.log(subjectName5 + " " + subjectUnits5 + " - Displayed on html as subject 5")
    document.getElementById("sub5").innerHTML = subjectName5
    document.getElementById("units5").innerHTML = subjectUnits5 + " Units"
  }

  if (localStorage.getItem("subUnits6") == null) {} else {
    var subjectName6 = localStorage.getItem("subName6")
    var subjectUnits6 = localStorage.getItem("subUnits6")
    console.log(subjectName6 + " " + subjectUnits6 + " - Displayed on html as subject 6")
    document.getElementById("sub6").innerHTML = subjectName6
    document.getElementById("units6").innerHTML = subjectUnits6 + " Units"
  }

  if (localStorage.getItem("subUnits7") == null) {} else {
    var subjectName7 = localStorage.getItem("subName7")
    var subjectUnits7 = localStorage.getItem("subUnits7")
    console.log(subjectName7 + " " + subjectUnits7 + " - Displayed on html as subject 7")
    document.getElementById("sub7").innerHTML = subjectName7
    document.getElementById("units7").innerHTML = subjectUnits7 + " Units"
  }

  if (localStorage.getItem("subUnits8") == null) {} else {
    var subjectName8 = localStorage.getItem("subName8")
    var subjectUnits8 = localStorage.getItem("subUnits8")
    console.log(subjectName8 + " " + subjectUnits8 + " - Displayed on html as subject 8")
    document.getElementById("sub8").innerHTML = subjectName8
    document.getElementById("units8").innerHTML = subjectUnits8 + " Units"
  }
  


}

//Clears localstorage values
function subClear() {
  localStorage.clear();
  subChange()
  subCount = 1
  localStorage.setItem("subCount", subCount)

  for (i = 0; i < subjects.length; i++) {
    subjects[i].sel = 0
    localStorage.setItem("subjects", JSON.stringify(subjects));
  }
  subChange()
  location.reload()
}

//Totals unit value of selection and begins subject validation
function subSubmit() {
  

  var sub1 = Number(localStorage.getItem("subUnits1"))
  var sub2 = Number(localStorage.getItem("subUnits2"))
  var sub3 = Number(localStorage.getItem("subUnits3"))
  var sub4 = Number(localStorage.getItem("subUnits4"))
  var sub5 = Number(localStorage.getItem("subUnits5"))
  var sub6 = Number(localStorage.getItem("subUnits6"))
  var sub7 = Number(localStorage.getItem("subUnits7"))
  var sub8 = Number(localStorage.getItem("subUnits8"))

  var subs = sub1 + sub2 + sub3 + sub4 + sub5 + sub6 + sub7 + sub8

  var sublist = [localStorage.getItem("subName1"), localStorage.getItem("subName2"), localStorage.getItem("subName3"), localStorage.getItem("subName4"), localStorage.getItem("subName5"), localStorage.getItem("subName6"), localStorage.getItem("subName7"), localStorage.getItem("subName8"), ]

  switch (subs) {
    case 0:
    case null:
      alert("Subject Selection Cannot Be Completely Empty")
      break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      alert("Units must total at least 10")
      break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
      checkEnglish(sublist);

  }
}

//Function to check for overlaps between english standard and advanced
function checkEnglish(sublist) {

  var subN1 = localStorage.getItem("subName1")
  var subN2 = localStorage.getItem("subName2")
  var subN3 = localStorage.getItem("subName3")
  var subN4 = localStorage.getItem("subName4")
  var subN5 = localStorage.getItem("subName5")
  var subN6 = localStorage.getItem("subName6")
  var subN7 = localStorage.getItem("subName7")
  var subN8 = localStorage.getItem("subName8")

  var subNs1 = ""
  var subNs2 = ""
  var subNs3 = ""
  var subNs4 = ""
  var subNs5 = ""
  var subNs6 = ""
  var subNs7 = ""
  var subNs8 = ""

  var subNp1 = ""
  var subNp2 = ""
  var subNp3 = ""
  var subNp4 = ""
  var subNp5 = ""
  var subNp6 = ""
  var subNp7 = ""
  var subNp8 = ""

  if(subN1 != null){
    subNs1 = subN1.split(" ").shift()
    subNp1 = subN1.split(" ")
  }

  if(subN2 != null){
    subNs2 = subN2.split(" ").shift()
    subNp2 = subN2.split(" ")
  }
  if(subN3 != null){
    subNs3 = subN3.split(" ").shift()
    subNp3 = subN3.split(" ")
  }
  if(subN4 != null){
    subNs4 = subN4.split(" ").shift()
    subNp4 = subN4.split(" ")
  }
  if(subN5 != null){
    subNs5 = subN5.split(" ").shift()
    subNp5 = subN5.split(" ")
  }
  if(subN6 != null){
    subNs6 = subN6.split(" ").shift()
    subNp6 = subN6.split(" ")
  }
  if(subN7 != null){
    subNs7 = subN7.split(" ").shift()
    subNp7 = subN7.split(" ")
  }
  if(subN8 != null){
    subNs8 = subN8.split(" ").shift()
    subNp8 = subN8.split(" ")
  }

  var subNP = []

  subNP = subNp1.concat(subNp2, subNp3, subNp4, subNp5, subNp6, subNp7, subNp8);

  var subNS = [subNs1, subNs2, subNs3, subNs4, subNs5, subNs6, subNs7, subNs8]


  switch (countInArray(subNS, "English")) {
    case 1:
      if (countInArray(sublist, "English Extension 1") == 0 || countInArray(sublist, "English Extension 2") == 0) {
        checkMaths(subNS, subNP, sublist)
      } else {
        alert("Only one subject of English May Be Selected")
      }
      break;
    case 2:
      if (countInArray(subNP, "Extension") >= 1 && countInArray(sublist, "English Standard") == 0) {
        checkMaths(subNS, subNP, sublist)
      } else {
        alert("Only one subject of English May Be Selected")
      }
      break;
    case 3:
      if (countInArray(sublist, "English Extension 1") == 1 && countInArray(sublist, "English Extension 2") == 1) {
        checkMaths(subNS, subNP, sublist)
      } else {
        alert("Only one subject of English May Be Selected")
      }
      break;
    default:
      alert("Only one subject of English May Be Selected")

  }
}

//Function to check for overlaps between standard and advanced mathematics
function checkMaths(subNS, subNP, sublist) {
  switch (countInArray(subNS, "Math")) {
    case 0:
      subDiv()
      break;
    case 1:
      if (countInArray(sublist, "Math Extension 1") == 1 || countInArray(sublist, "Math Extension 2") == 1) {
        alert("Only one subject of Maths May Be Selected")
      }else{
        subDiv()
      }
      break;
    case 2:
      if (countInArray(sublist, "Math Extension 1") == 1 && countInArray(sublist, "Math Extension 2") == 0){
        subDiv()
      }else{
        alert("Only one subject of Maths May Be Selected")
      }
      break;
      case 3:
        if(countInArray(sublist, "Math Extension 1") == 1 || countInArray(sublist, "Math Extension 2") == 1){
          subDiv()
        }
  }
}

//Function that indicates the subjects were valid on the webpage
function subDiv() {
  document.getElementById("resultRes1").innerHTML = "Subjects Selection Valid"
  document.getElementById("resultRes2").innerHTML = "Results Have Been Submitted For Review"
}

//Function that counts how many times a certain string appears in an array
function countInArray(array, what) {
  return array.filter(item => item == what).length;
}