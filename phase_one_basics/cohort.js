const cohort = {
  name: 'May 2022',
  id: 1234,
  student_names: ['Joe', 'Irina', 'Paris', 'Ev']
};




const statement = (cohort) => {
  return `${cohort.id} - ${cohort.name} - ${cohort.student_names.length} students in this cohort`;
}

console.log(statement(cohort))