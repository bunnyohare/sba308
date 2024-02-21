// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getStudentIds(submissions) {
  const studentIDs = new Set();

  submissions.forEach((submissions) => {
    studentIDs.add(submissions.learner_id);
  });

  const studentGrades = [];
  const students = Array.from(studentIDs);
  students.forEach((student) => {
    let addID = {
      id: student,
    };
    studentGrades.push(addID);
  });
  return studentGrades;
}
// 
function getSubmissionsByID(studentGrades, submissions, assignmentsAG) {
  for (let i = 0; i < studentGrades.length; i++) {
    submissions.forEach((submission) => {
      // student id per submitted task
      let submissionID = submission.learner_id;
      // student id in array of studentGrades
      let studentID = studentGrades[i].id;
      // get id of the assignment from the submitted data
      let submissionAssignment = submission.assignment_id;
      // group of all assignments 
      let findAssignment = assignmentsAG.assignments;
      // find the Assgnment info on the submitted task
      let currentAssignment = findAssignment.find(({id}) => id == submissionAssignment);
      // find the Assigned point value for the submitted task
      let assignmentPoints = currentAssignment.points_possible

      let submissionScore = submission.submission.score;
      let rawScore = submissionScore/assignmentPoints

      if (submissionID == studentID) {
        studentGrades[i][submissionAssignment] = rawScore;
      }
    });
  }
  return studentGrades;
}

// checks to see if Assignment is due yet
function validAssignmentCheck(ag) {
  const todayS = "2024-02-21";
  const today = new Date(todayS);
  const items = [];
  for (let i = 0; i < ag.assignments.length; i++) {
    let inputDate = new Date(ag.assignments[i].due_at);
    if (inputDate <= today) {
      items.push(ag.assignments[i].id)
    } else {
      continue;
    }
  }
 

  return items;
}


function getLearnerData(course, ag, submissions) {
  studentGrades = getStudentIds(submissions);
  studentGrades = getSubmissionsByID(studentGrades, submissions, ag)
  assignmentsInRange = validAssignmentCheck(ag);
  return studentGrades;
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
