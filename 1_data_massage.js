/*
  This array of objects contains three main objects representing three different people, each of which includes properties such as `id`, `name`, `age`, `address`, `hobbies`, and `jobs`. The `address` property is an object with properties such as `street`, `city`, `state`, and `zip`, and the `hobbies` and `jobs` properties are arrays. The `jobs` property is an array of objects, each of which includes properties such as `company`, `position`, `startDate`, `endDate`, and `responsibilities`.
*/

const data = [
  {
    id: 1,
    name: "John Smith",
    age: 30,
    address:
    {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001"
    },
    hobbies: ["reading", "hiking", "traveling"],
    jobs: [
      {
        company: "Acme Inc.",
        position: "Developer",
        startDate: "2020-01-01",
        endDate: "2022-12-31",
        responsibilities: ["Developing web applications", "Debugging code", "Writing documentation"]
      },
      {
        company: "Beta Corp.",
        position: "Senior Developer",
        startDate: "2022-01-01",
        endDate: null,
        responsibilities: ["Leading a team of developers", "Mentoring junior developers", "Improving codebase"]
      }
    ]
  },
  {
    id: 2,
    name: "Jane Doe",
    age: 25,
    address: {
      street: "456 Park Ave",
      city: "Los Angeles",
      state: "CA",
      zip: "90001"
    },
    hobbies: ["cooking", "gardening", "yoga"],
    jobs: [
      {
        company: "Gamma LLC.",
        position: "QA Engineer",
        startDate: "2019-01-01",
        endDate: "2021-12-31",
        responsibilities: ["Testing web applications", "Creating test cases", "Providing feedback"]
      },
      {
        company: "Delta Inc.",
        position: "Senior QA Engineer",
        startDate: "2022-01-01",
        endDate: null,
        responsibilities: ["Leading a team of QA engineers", "Developing automation tests", "Improving quality processes"]
      }
    ]
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    address: {
      street: "789 Elm St",
      city: "Chicago",
      state: "IL",
      zip: "60001"
    },
    hobbies: ["fishing", "camping", "surfing"],
    jobs: [
      {
        company: "Epsilon Inc.",
        position: "Data Analyst",
        startDate: "2018-01-01",
        endDate: "2020-12-31",
        responsibilities: ["Analyzing data", "Creating reports", "Providing insights"]
      },
      {
        company: "Zeta Corp.",
        position: "Senior Data Analyst",
        startDate: "2021-01-01",
        endDate: null,
        responsibilities: ["Leading a team of data analysts", "Developing machine learning models", "Improving data processes"]
      }
    ]
  }
];

// Question 1: Extract to an array a list of all the people's names from the data.

const names = data.map(person => person.name);
console.log(names);

// Question 2: Extract to an array all the job positions for all the people.

const peoplePositions = data.map(person => {
  const positions = person.jobs.map(job  => job.position)
  return {
    name : person.name,
    "positions" : positions };
})

console.log(peoplePositions);

// Question 3: Find the average age of the people.

const avgAge = () => {
  let ageSum = 0;
  data.forEach((person) => ageSum+= person.age);
  return ageSum/data.length;
}

console.log(avgAge());

// Question 4: Return an array with the unique cities where the people live.

// this is not distinct 
const cities = data.map(person => person.address.city);
console.log(cities);


// Question 5: Extract to an array a list of all the people's hobbies in alphabetical order.

let hoppies = [];
data.forEach(person => hoppies.push(...person.hobbies));
hoppies = hoppies.sort();
console.log(hoppies);


// Question 6: Get the total number of years of experience for all the people in the data.

function getDateDifferenceInYears(date1, date2) {
  // Create date objects from the strings
  let d1 = new Date(date1);
  let d2 = new Date(date2);

  // Get the difference in milliseconds
  let diff = d2.getTime() - d1.getTime();

  // Convert milliseconds to years
  let diffInYears = diff / (1000 * 60 * 60 * 24 * 365.25);

  return diffInYears;
}


const peopleAvgExperiance = data.map(person => {
  let experiance = 0;
  person.jobs.forEach(job => {
    if(job.endDate){
      experiance += getDateDifferenceInYears(job.startDate , job.endDate);
    }
    else {
      experiance += getDateDifferenceInYears(job.startDate , new Date());
    }
  })
  experiance = experiance.toFixed(2);
  return {
    name : person.name,
    experiance : experiance
  }
});

console.log(peopleAvgExperiance);

// Question 7: Extract to an array all the names of the people who live in California and have a job as a "Senior QA Engineer" and have "cooking" as a hobby, and sort them alphabetically.

const seniorQaEngineersInCaliforniaWhoLovesCooking = data.filter(person => {
  if(person.address.state === "CA")
  {
    if(person.jobs.filter(job => job.position === "Senior QA Engineer").length > 0){
      if(person.hobbies.filter(hobby => hobby === "cooking").length > 0){
        return true;
      }
    }
  }
  return false;
}).sort();

console.log("seniorQaEngineersInCaliforniaWhoLovesCooking" , seniorQaEngineersInCaliforniaWhoLovesCooking);
// Question 8: Extract to an array all the responsibilities of the people who live in Chicago and are currently employed as "Senior Data Analysts".

//const responsibilitiesChicagoSeniorDataAnalysts = data.filter(person => person.address.city === "Chicago" && person.jobs.filter(job => job.position === "Senior Data Analysts").length > 0).map(person => ...person.responsibilities);

// Question 9: Extract to an array of objects with the names of all the people who have "hiking" as a hobby and a field "job_experience" which is the sum of the number of months they have worked in each job.

// Question 10: Extract to an array of objects with the names of all the people who have "traveling" as a hobby, and create a new field "most_recent_job" which is an object containing the company, position, and start date of their most recent job.

// Question 11: Extract to an array of objects with the name of all the people who have "yoga" as a hobby, and create a new field "job_history" which is an array of objects containing the company, position, start date, and end date of all the jobs they have held.

