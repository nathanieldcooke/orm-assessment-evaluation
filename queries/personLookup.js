const { Person, Course  } = require('../models');

async function lookupPersonAndCourses(personId) {
  // const personAndCourses = await Person.findByPk(personId, {
  //   include: [Course]
  // })

  const personAndCourses = await Person.findOne({
    include: [Course],
    where: {
      id: personId
    }
  })

  return personAndCourses
};

async function lookupPersonByLastName(lastName) {

  const person = await Person.findAll({
    where: {
      lastName
    }
  })


  return person
};

async function lookupCoursesByPersonEmail(email) {
  const courses = await Person.findOne({
    where: {
      email: email
    },
    include: [Course]
  })

  console.log('Return Val: ', courses.Courses)
  return courses
};

module.exports = {
  lookupPersonAndCourses,
  lookupPersonByLastName,
  lookupCoursesByPersonEmail,
};
