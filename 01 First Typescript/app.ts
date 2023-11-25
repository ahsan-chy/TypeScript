// let userName: string = "anonymous";
// let firstMonthSalary = 100000;
// let SecondMonthSalary = 200000;

// function calculate(num1: number, num2: number) {
//   return num1 + num2;
// }

// console.log(calculate(firstMonthSalary, SecondMonthSalary));

// + Type Alias

type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): User {
  return user;
}

console.log(createUser({ name: "anonymous", age: 21, isActive: true }));

//+ Interface

interface Student {
  readonly userId: number;
  email: string;
  studentId: number;
  googleID?: number;
  startTrail: () => string;
  endTrail(): string;
  fee(challanNo: number): number;
}

interface Student {
  libraryCard: number;
}

interface SeniorStudent extends Student {
  role: "Admin" | "Head Boy" | "CR";
}

const Ali: Student = {
  userId: 11,
  email: "ali@enablehours.com",
  studentId: 222,
  startTrail: () => {
    return "very soon";
  },
  endTrail: () => {
    return "After Trails End";
  },
  fee: (no: 151515) => {
    return 7000;
  },
  libraryCard: 999
};

console.log("Ali", Ali);
