
    var subCount = 1


function selectSubject(){
  

    var subjects = [
      "English Studies",
      "English EAL/D",
      "English Standard",
      "English Advanced",
      "English Extension 1",
      "English Extension 2",
      "Math Standard",
      "Math Advanced",
      "Math Extension 1",
      "Math Extension 2",
      "Drama",
      "Business Studies",
      "Economics",
      "Geography",
      "Ancient History",
      "History Extenson",
      "Legal Studies",
      "Modern History",
      "External Lanuage Course",
      "French",
      "Chinese",
      "Latn",
      "Modern Greek",
      "Music 1",
      "Music 2",
      "Music Extension",
      "PDHPE",
      "Studies of Religion 1",
      "Studies of Religion 2",
      "Biology",
      "Chemistry",
      "Earth and Enviromental Science",
      "Physics",
      "Science Extension",
      "Design and Technology",
      "Enginerring Studies",
      "Industrial Technology",
      "IPT",
      "Software Design and Development",
      "Visual Arts"
  ];
    
  
    if(subCount == 1){
    console.log(subjects[num])
    
    var subName1 = (subjects[num])

   localStorage.setItem("subName1", subName1)

   subCount = 2
} else if(subCount == 2){

    console.log(subjects[num])
    
    var subName2 = (subjects[num])

   localStorage.setItem("subName2", subName2)

   subCount = 3
} else if(subCount == 3){

    console.log(subjects[num])
    
    var subName3 = (subjects[num])

   localStorage.setItem("subName3", subName3)

   subCount = 4
} else if(subCount == 4){

    console.log(subjects[num])
    
    var subName4 = (subjects[num])

   localStorage.setItem("subName4", subName4)

   subCount = 5
} else if(subCount == 5){

    console.log(subjects[num])
    
    var subName5 = (subjects[num])

   localStorage.setItem("subName5", subName5)

   subCount = 6
} else if(subCount == 6){

    console.log(subjects[num])
    
    var subName6 = (subjects[num])

   localStorage.setItem("subName6", subName6)

   subCount = 7
} else if(subCount == 7){

    console.log(subjects[num])
    
    var subName7 = (subjects[num])

   localStorage.setItem("subName7", subName7)

   subCount = 8
} else if(subCount == 8){

    console.log(subjects[num])
    
    var subName8 = (subjects[num])

   localStorage.setItem("subName8", subName8)

   subCount = 8
}
  }

  function subChange(){
     var subjectName1 = localStorage.getItem("subName1")
console.log(subjectName1)
      document.getElementById("sub1").innerHTML = subjectName1

      var subjectName2 = localStorage.getItem("subName2")
      console.log(subjectName2)
            document.getElementById("sub2").innerHTML = subjectName2

       var subjectName3 = localStorage.getItem("subName3")
      console.log(subjectName3)
            document.getElementById("sub3").innerHTML = subjectName3

       var subjectName4 = localStorage.getItem("subName4")
      console.log(subjectName4)
            document.getElementById("sub4").innerHTML = subjectName4

       var subjectName5 = localStorage.getItem("subName5")
            console.log(subjectName5)
                  document.getElementById("sub5").innerHTML = subjectName5

        var subjectName6 = localStorage.getItem("subName6")
                  console.log(subjectName6)
                        document.getElementById("sub6").innerHTML = subjectName6

        var subjectName7 = localStorage.getItem("subName7")
      console.log(subjectName7)
            document.getElementById("sub7").innerHTML = subjectName7

        var subjectName8 = localStorage.getItem("subName8")
      console.log(subjectName8)
            document.getElementById("sub8").innerHTML = subjectName8
  }

  function subClear(){
localStorage.clear();
  }

  

  


  

  