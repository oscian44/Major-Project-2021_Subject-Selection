
var subCount = localStorage.getItem("subCount")

if(subCount == null){
  subCount = 1;
}

var subjects = [{
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

function selectSubject() {
  if (subCount == 1) {
    console.log(subjects[num].name + " " + subjects[num].units + " - Selected as sub1")

    subjects[num].sel = 1

    var subName1 = (subjects[num].name)
    var subUnits1 = (subjects[num].units) + " Units"

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

      var subName2 = (subjects[num].name)
      var subUnits2 = (subjects[num].units) + " Units"

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

      var subName3 = (subjects[num].name)
      var subUnits3 = (subjects[num].units) + " Units"

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

      var subName4 = (subjects[num].name)
      var subUnits4 = (subjects[num].units) + " Units"

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

      var subName5 = (subjects[num].name)
      var subUnits5 = (subjects[num].units) + " Units"

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

      var subName6 = (subjects[num].name)
      var subUnits6 = (subjects[num].units) + " Units";

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

      var subName7 = (subjects[num].name)
      var subUnits7 = (subjects[num].units) + " Units"

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

      var subName8 = (subjects[num].name)
      var subUnits8 = (subjects[num].units) + " Units"

      localStorage.setItem("subName8", subName8)
      localStorage.setItem("subUnits8", subUnits8)

      subCount = 9
      localStorage.setItem("subCount", subCount)
    }
  } else if (subCount == 9) {
    alert("Selected Subject Limit Reached, Please Clear Selection")
  }
}

function subChange() {

  var subjectName1 = localStorage.getItem("subName1")
  var subjectUnits1 = localStorage.getItem("subUnits1")
  console.log(subjectName1 + " " + subjectUnits1 + " - Displayed on html as subject 1")
  document.getElementById("sub1").innerHTML = subjectName1
  document.getElementById("units1").innerHTML = subjectUnits1

  var subjectName2 = localStorage.getItem("subName2")
  var subjectUnits2 = localStorage.getItem("subUnits2")
  console.log(subjectName2 + " " + subjectUnits2 + " - Displayed on html as subject 2")
  document.getElementById("sub2").innerHTML = subjectName2
  document.getElementById("units2").innerHTML = subjectUnits2

  var subjectName3 = localStorage.getItem("subName3")
  var subjectUnits3 = localStorage.getItem("subUnits3")
  console.log(subjectName3 + " " + subjectUnits3 + " - Displayed on html as subject 3")
  document.getElementById("sub3").innerHTML = subjectName3
  document.getElementById("units3").innerHTML = subjectUnits3

  var subjectName4 = localStorage.getItem("subName4")
  var subjectUnits4 = localStorage.getItem("subUnits4")
  console.log(subjectName4 + " " + subjectUnits4 + " - Displayed on html as subject 4")
  document.getElementById("sub4").innerHTML = subjectName4
  document.getElementById("units4").innerHTML = subjectUnits4

  var subjectName5 = localStorage.getItem("subName5")
  var subjectUnits5 = localStorage.getItem("subUnits5")
  console.log(subjectName5 + " " + subjectUnits5 + " - Displayed on html as subject 5")
  document.getElementById("sub5").innerHTML = subjectName5
  document.getElementById("units5").innerHTML = subjectUnits5

  var subjectName6 = localStorage.getItem("subName6")
  var subjectUnits6 = localStorage.getItem("subUnits6")
  console.log(subjectName6 + " " + subjectUnits7 + " - Displayed on html as subject 6")
  document.getElementById("sub6").innerHTML = subjectName6
  document.getElementById("units6").innerHTML = subjectUnits6

  var subjectName7 = localStorage.getItem("subName7")
  var subjectUnits7 = localStorage.getItem("subUnits7")
  console.log(subjectName7 + " " + subjectUnits7 + " - Displayed on html as subject 7")
  document.getElementById("sub7").innerHTML = subjectName7
  document.getElementById("units7").innerHTML = subjectUnits7

  var subjectName8 = localStorage.getItem("subName8")
  var subjectUnits8 = localStorage.getItem("subUnits8")
  console.log(subjectName8 + " " + subjectUnits8 + " - Displayed on html as subject 8")
  document.getElementById("sub8").innerHTML = subjectName8
  document.getElementById("units8").innerHTML = subjectUnits8
}

function subClear() {
  localStorage.clear();
  subChange()
  subCount = 1
  localStorage.setItem("subCount", subCount)

  for (i = 0; i < subjects.length; i++) {
    subjects[i].sel = 0
  }
}