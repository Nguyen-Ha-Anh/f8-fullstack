// Teams
const teams = [
    { id: 1, name: "Reactjs" },
    { id: 2, name: "Expressjs" },
    { id: 3, name: "Nestjs" }
  ];
  
  // Employees
  const employees = [
    { id: 1, name: "Nguyen Minh Viet", teamId: 1 },
    { id: 2, name: "Tran Thuy Quynh", teamId: 2 },
    { id: 3, name: "Tran Cong Tin", teamId: 1 },
    { id: 4, name: "Nguyen Nam Tao", teamId: 2 },
    { id: 5, name: "Bui Kong Minh", teamId: 3 }
  ];
  
  // Absence Times
  const absences = [
    { id: 1, employeeId: 1, date: "mon", time: "8:00-9:00" },
    { id: 2, employeeId: 1, date: "tue", time: "16:00-17:00" },
    { id: 3, employeeId: 3, date: "thu", time: "11:00-12:00" },
    { id: 4, employeeId: 2, date: "wed", time: "11:00-12:00" },
    { id: 5, employeeId: 5, date: "fri", time: "9:00-11:00" },
    { id: 6, employeeId: 3, date: "mon", time: "8:00-9:00" }
  ];
/*
  const employees = [
    { id: 1, name: "Nguyen Minh Viet", team: 'React', mon: '8:00-9:00 , thu: '16:00-17:00', wed: null},
    { id: 2, name: "Tran Thuy Quynh", teamId: 2 },
    { id: 3, name: "Tran Cong Tin", teamId: 1 },
    { id: 4, name: "Nguyen Nam Tao", teamId: 2 },
    { id: 5, name: "Bui Kong Minh", teamId: 3 }
  ];
*/

employees.forEach(e => {
    // console.log(e.teamId)

    const team = teams.find(t => {
        return t.id === e.teamId
    })

    e.team = team.name
})

console.log(employees)


const tbody = document.querySelector('#empTable tbody');
const searchInput = document.getElementById('searchInput');
const team = document.getElementById('team');


function renderTable() {
    tbody.innerHTML = "";

    employees.forEach(emp => {
        const trRef = document.createElement('tr')
        const nameColRef = document.createElement('td')
        const teamColRef = document.createElement('td')
        const scheduleMon = document.createElement('td')
        const scheduleTue = document.createElement('td')
        const scheduleWed = document.createElement('td')
        const scheduleThu = document.createElement('td')
        const scheduleFri = document.createElement('td')
        nameColRef.innerText = emp.name
        teamColRef.innerText = emp.team
        scheduleMon.innerText = emp.mon
        scheduleTue.innerText = emp.tue
        scheduleWed.innerText = emp.wed
        scheduleThu.innerText = emp.thu
        scheduleFri.innerText = emp.fri
        trRef.appendChild(nameColRef)
        trRef.appendChild(teamColRef)
        trRef.appendChild(scheduleMon)
        trRef.appendChild(scheduleTue)
        trRef.appendChild(scheduleWed)
        trRef.appendChild(scheduleThu)
        trRef.appendChild(scheduleFri)

        tbody.appendChild(trRef)

        // employees.forEach(emp => {
        //     const team = team.find(t => t.id === emp.teamId)
        //     emp.mon = ''
        //     emp.tue = ''
        //     emp.tue = ''
        //     emp.thu = ''
        //     emp.fri = ''
        // })

    const scheduleA = absences.filter(a => a.employeeId === emp.id)
    scheduleA.forEach(a => {
        if (emp[a.date] !== undefined) {
  }
});


    })

}

renderTable();

