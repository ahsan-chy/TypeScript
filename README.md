# Typescript

Table of Content
- What is Typescript - Why we should use typescript
- Setup TypeScript
- Type Anotation 


### What is Typescript - Why we should use typescript

 TypeScript is a superset of JavaScript that adds static typing to the language, and it's commonly used in React development to catch errors early and improve code quality. 



##### [Getting Started with TypeScript in React](https://medium.com/@kamindugayantha/getting-started-with-typescript-in-react-a-comprehensive-guide-650e73a4d84a)



### Setup TypeScript

To install and use TypeScript on Windows, follow these steps:

**1.** Install Node.js: 
**2.** Open a Command Prompt or PowerShell:
**3.** Install TypeScript: 

```javascript
npm install -g typescript
```

**4.** Verify the Installation: 
```javascript
tsc --version
```

**5.** Create & Run TypeScript file

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


