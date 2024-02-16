// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
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
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getStudentIds(submissions){
  const studentIDs = new Set;

  submissions.forEach(submissions => {
      studentIDs.add(submissions.learner_id)
  });

  const studentGrades = [];
  const students = Array.from(studentIDs);
  students.forEach(student => {
    let addID = {
    "id" : student
    }
    studentGrades.push(addID);
  });
return studentGrades;
}

function getSubmissionsByID(studentGrades, submissions){
  for (let i = 0; i < studentGrades.length; i++){
    submissions.forEach(submission => {
    let subID = submission.learner_id;
    let stuID = studentGrades[i].id;
    let subA = submission.assignment_id;
    let subS = submission.submission.score;
    if (subID == stuID){
    let grade = {
      }
    grade[subA] = subS;
    studentGrades[i][subA] = subS; 
    }
    });
  }
  console.log(studentGrades) 
}

function getLearnerData(course, ag, submissions) {
 

studentGrades = getStudentIds(submissions);
studentGrades = getSubmissionsByID(studentGrades, submissions);
console.log(studentGrades);



  // Parse submission data.
  //console.log(`Submission Data:`, submissions );
  // Check to see if the submission was late; if so, deduct 10% of the maximum possible points.
  // Find existing data for this learner, if any.
  // If the learner already has data, add the new score to the existing data.
  // Calculate the average score for each learner and remove the extra data.

  //==== PUT CODE HERE =====//


 // return result;
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

// console.log(result);
