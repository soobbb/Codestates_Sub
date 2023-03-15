
function studentReports(students) {
  return students.filter(el=>el.gender === "female").map(el => {
    const sum = el.grades.reduce((acc,cur) => acc + cur)
    const avg = sum / el.grades.length;
    el.grades = avg;
    return el;
  })
  }