# Typescript

Table of Content
- What is Typescript - Why we should use typescript
- Difference between JS & TS
- Setup TypeScript
- Type Anotation 
- **Type Aliases** in Typescript
- **Interface** in Typescript
- Any in TypeScript




#### TS Terms

- `Anotate`: Notation - Note - Comment - Footnote
  An additional piece of information printed at the bottom of a page.
- `Explicitly`: Clear - Obviously - Explained - Undeniably
- `Implicitly`: Completely - Absolutely - Totally - Utterly
- ``
- ``


### What is Typescript - Why we should use typescript

 TypeScript is a superset of JavaScript that adds static typing to the language, and it's commonly used in React development to catch errors early and improve code quality. 



##### [Getting Started with TypeScript in React](https://medium.com/@kamindugayantha/getting-started-with-typescript-in-react-a-comprehensive-guide-650e73a4d84a)

Different features of TS:
- Interface
- Enums
- Tuples
- Generic
- Classes, Abstract Class


**Opt-In**



### Difference between Javascript & Typescript

![JS-TS](https://www.boardinfinity.com/blog/content/images/2023/01/Copy-of-Copy-of-DIFFERENCES-JAVA-AND-JAVASCRIPT.png)



| JavaScript  | TypeScript |
| ------------- | ------------- |
| Weekly Typed Language  | Strongly Typed Language  |
| Seprate Programming Language  | Is Programming language which is build on top of Javascript with new features  |
| Mostly Errors on Runtime  | Errors on Compile time  |
| Mostly browsers support Js  | TS require Transpiler to convert to JS, like Babel  |
| Easy to Write & Difficult to maintane  | Hard to write  |


More Difference 

![JS-TS](https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/comparison-between-typescript-and-javascript-713x1024.png)




### Setup TypeScript

To install and use TypeScript on Windows, follow these steps:

**1.** Install Node.js: 
**2.** Open a Command Prompt or PowerShell:
**3.** Install TypeScript: 

```javascript
npm install -g typescript
```

Date: 25-11-23 current TSC version is `5.3.2`



**4.** Verify the Installation: 
```javascript
tsc --version
```
help and more commonds: 
```javascript
tsc --help
```

- Create File with **`app.ts`** and transpile **tsc app.ts** this will generate `app.js` file now run commond **`node app.js`**

 Hurray TS Code is running 🥳🎈



**5. Other Method** Create & Run TypeScript file

- Create Folder & Open VS Code 
 
```diff 
! npm init
```

```diff 
! npm install typescript
```

**6.** Compile TypeScript to JavaScript

```diff 
! npx tsc index.ts
```
This is becaus **compiler can't understand directly typescript**. his command invokes the TypeScript compiler (**tsc**) and generates a corresponding JavaScript file (**index.js**) based on your TypeScript code.



<br>

**7.** Run the JavaScript file:

```diff 
! node index.js
```


##### Typescript Code 

```typescript
let n:number = 10;

console.log(n)
```


## Different Datatypes in Typescript

- Object 
- Array
- String 
- Boolean
- Function





## Type annotations

Type annotations in TypeScript are used to explicitly specify 
- the types of variables, 
- function parameters, and 
- function return values. 
By adding type annotations, you can provide additional information to the TypeScript compiler and enforce type safety in your code.


##### Variable Type Annotation:

```typescript
let age: number = 25;
let name: string = "John";
let isStudent: boolean = true;

```

##### Function Parameter Type Annotation:

```typescript
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}
```



##### Function Return Type Annotation:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```


##### Object Type Annotation:

```typescript
let person: { name: string, age: number } = {
  name: "John",
  age: 25
};
```

Type annotations help **`catch`** potential type errors during development, provide better tooling support, and enhance code documentation. However, TypeScript also supports type inference, so in many cases, you don't need to explicitly specify types as they can be automatically inferred based on the assigned values.



## Type Aliases in Typescript

Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types 

This can be helpful for making complex types more readable or for creating reusable types in your code.



Example without Type **Alias**

```javascript
function greet(person: { name: string; age: number }) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const user = { name: 'John', age: 25 };

greet(user);

```


Example **with Type Alias**

```javascript
type Person = { name: string; age: number };

function greet(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const user: Person = { name: 'John', age: 25 };

greet(user);

```



Another Example **With Type Alias**
```javascript
type User = {
  name: string;
  age: number;
  isActive: boolean;
};

function createUser(user: User): User{
  return user;
}

console.log(createUser({ name: "anonymous", age: 21, isActive: true }));
```








## Interface in Typescript



You can say Interface is loose type of class. 


```javascript

interface Student {
  readonly userId: number;
  email: string;
  studentId: number;
  googleID?: number;
  startTrail: () => string;
  endTrail(): string;
  fee(challanNo: number): number; // You can pass multiple parameters.
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
  }
};
```



#### Optional (?)

Optional parameter help us to pass variables which are not necessary and may be you will use them in future. 

```diff
interface Student {
  email: string,
  studentId: number,
!  googleID?: number

}
```

#### ReadOnly

By defining readonly you can't reasign the value to Readonly variable.

```diff
interface Student {
!  readonly userId: number
  email: string,
  studentId: number,
}
```

#### Function in interface


```diff
interface Student {
  readonly userId: number;
  email: string;
  studentId: number;
  googleID?: number;
!  startTrail: () => string;
!  endTrail(): string;
!  fee(challanNo: number): number;
}
```

Some people say **`You can reopen interface🤣`**`

```javascript

interface Student {
  readonly userId: number;
  email: string;
  studentId: number;
  googleID?: number;
  startTrail: () => string;
  endTrail(): string;
  fee(challanNo: number): number;
}
```

```javascript
interface Student {
  libraryCard: number
}
```



You can do inheritence / Extend with Interface. 

```javascript
interface SeniorStudent extends Student {
  role: "Admin" | "Head Boy" | "CR";
}
```



## Interface vs Typescript

[Refrence Link](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)


## Any in TypeScript

Using `any` in TypeScript essentially disables type checking for the values it represents. While there might be scenarios where using `any` is necessary (e.g., when migrating a JavaScript codebase to TypeScript or when dealing with values of unknown types), it's generally recommended to avoid `any` whenever possible. The reason is that TypeScript's static type system provides several benefits, including catching potential errors at compile-time and improving code readability and maintainability.

Here's an example to illustrate why using `any` should be approached with caution:

- Using 'any'
```typescript
function add(a: any, b: any): any {
  return a + b;
}

const result: any = add(5, '10'); // No type errors, but unexpected behavior
```

- Without 'any'

```javascript
function addTyped(a: number, b: number): number {
  return a + b;
}

// TypeScript will catch the error at compile-time
const resultTyped: number = addTyped(5, '10'); // Type error
```






