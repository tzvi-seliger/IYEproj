let users = [
    {
        personalInfo:{
            firstName: "Tzvi",
            lastName: "Seliger",
            address: "5640 Beacon st.",
            email: "tzviseliger@gmail.com",
        },
        skills: [
            {
                name: "People Management",
                description: "Supervising people and keeping hand on their needs and progress"
            }
        ],
        talents: [
            {
                name: "Vocals",
                description: "Cantorial Singing"
            }
        ],
        positions: [
            {
                name: "Account Manager",
                description: "handle vendor accounts for ecommerce business",
                heldFrom: "06/01/2015",
                heldTo: "05/01/2017"

            }
        ],
        trainings: [
            {
                name: "C# Development",
                description: "knowledge of basic C# programming",
                status: "completed",
                level: "intermediate"
            }
        ]
    }
]
function displayPersonalInfo(user){
    let div = document.createElement("div")


    let nameP = document.createElement("p")
    let addressP = document.createElement("p")
    let emailP = document.createElement("p")

    nameP.innerHTML = user.personalInfo.firstName + " " + user.personalInfo.lastName
    addressP.innerHTML = user.personalInfo.address
    emailP.innerHTML = user.personalInfo.email

    div.appendChild(nameP)
    div.appendChild(addressP)
    div.appendChild(emailP)

    document.getElementById("root").appendChild(div)       

}

function displaySkills(user){
    user.skills.forEach(skill => {
        let tr = document.createElement("tr")  
        let tdName = document.createElement("td")  
        let tdDescription = document.createElement("td")  
        tdName.innerHTML = skill.name
        tdDescription.innerHTML = skill.description
        tr.appendChild(tdName)
        tr.appendChild(tdDescription)
        document.getElementById("skillbody").appendChild(tr)
    });
}


console.log(users)
