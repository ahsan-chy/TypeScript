# TypeScript with React Js

Table of Content

- How to setup Typescript in React JS - Next JS - Node
- type - interface
- Prop Types
- State in Typescript
- Event Handling
- Generic Types
- Module System
- Creating Declaration (.d) (.ts)
-

## Initial Setup Typescript in React Project

- How to setup Typescript in React Project
- Typescript Configuration - **tsconfig.json**
- Typescript **(.tsx / .ts)**

### How to setup Typescript in React Project

### Typescript Configuration (tsconfig.json)

- ChatGPT Configurations

```javascript
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx", // or "react-jsxdev" for development
    "declaration": true,
    "outDir": "./build",
    "rootDir": "./src"
  },
  "include": ["src/**/*.tsx", "src/**/*.ts"],
  "exclude": ["node_modules", "build"]
}
```

- **Advance Configurations**

```javascript
{
  "compilerOptions": {
    "baseUrl": "src",
    "target": "es5",
    "lib": ["es6", "dom", "ES2021.String"],
    "strict": true,
    "noEmit": true,
    "allowJs": true,
    "module": "esnext",
    "jsx": "react-jsx",
    "skipLibCheck": true,
    "noImplicitAny": true,
    "noImplicitThis": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "noFallthroughCasesInSwitch": true,
    "useUnknownInCatchVariables": false,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "strictPropertyInitialization": false
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/pages/NewDashboard/NewDashboardContent",
    "src/pages/AffiliateCreateAccount"
  ],
  "exclude": ["node_modules"]
}
```

#### TS Configuration Settings

- **Target:**

```javascript
target: "es5";
target: "es6";
target: "ESNext";
```

- **Module**

```javascript
"module": "commonjs",   // Uses the CommonJS module system, which is standard for Node.js.
"module": "esnext"  //Uses the latest ECMAScript standard for modules. This setting is forward-compatible with future versions of ECMAScript.
"module": "es6" // es6 - es2015
"module": "system"
"module": "umd"
"module": "none"
```

- ***

```javascript

```

- ***

```javascript

```

## Typescript Ignore

```javascript
@ts-ignore
```

or

```javascript
/* @ts-ignore */
```

or

```javascript
//  @ts-ignore
```

### Different Type of errors in Typescript

- Syntax Error
- Assignability Error 
- Type Error


## Type Aliases in Typescript

Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types

This can be helpful for making complex types more readable or for creating reusable types in your code.

Example without Type **Alias**

```javascript
function greet(person: { name: string, age: number }) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const user = { name: "John", age: 25 };

greet(user);
```

Example **with Type Alias**

```javascript
type Person = { name: string, age: number };

function greet(person: Person) {
  console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const user: Person = { name: "John", age: 25 };

greet(user);
```

Another Example **With Type Alias**

```javascript
type User = {
  name: string,
  age: number,
  isActive: boolean,
};

function createUser(user: User): User {
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
  libraryCard: number;
}
```

You can do inheritence / Extend with Interface.

```javascript
interface SeniorStudent extends Student {
  role: "Admin" | "Head Boy" | "CR";
}
```

## Define a Functionbase component in Typescript

**Snipit to use/Import Typescript** Write **`fc`** & Enter

```javascript
import { FC } from "react";

const User: FC = () => {
  // React.FC - You can also use.
  return (
    <div>
      <h2>Add New User</h2>
      <p>Hello I am New User</p>
      <button>ADD + </button>
    </div>
  );
};

export default User;
```

How to define **USeState** in Typescript

```javascript
const [item, setItem] = useState < string > "";
const [message, setMessage] = useState < string > "";
```

**Example 2: Managing a State with Union Types**

```diff
import React, { useState } from 'react';

! type Status = 'idle' | 'loading' | 'success' | 'error';

const Example2: React.FC = () => {
!  const [status, setStatus] = useState<Status>('idle');

  return (
    <div>
      <p>Status: {status}</p>
      <button onClick={() => setStatus('loading')}>Start Loading</button>
      <button onClick={() => setStatus('success')}>Finish Loading</button>
      <button onClick={() => setStatus('error')}>Error Loading</button>
    </div>
  );
};

export default Example2;
```

**Managing a State with an Object**

```diff
import React, { useState } from 'react';

! interface User {
  name: string;
  age: number;
}

const UserComponent: React.FC = () => {
!  const [user, setUser] = useState<User>({ name: 'John', age: 25 });

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ name: 'Jane', age: 30 })}>Update User</button>
    </div>
  );
};

export default UserComponent;
```

## Handle Props (Passing Props - Receiving Props)

- Passing props

```javascript
<Profile userName="Anonymous" age={12} />
```

Receiving Props

- **Define Typescript Props**

```javascript
type ProfileProps = {
    userName: string
    age: number
}
```

- **Use/Call Props**

```javascript
const Profile = (props: ProfileProps) => {
  const { userName, age } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <h3>Typescript Props</h3>
      <p>
        {userName} age is {age}{" "}
      </p>
    </div>
  );
};
```

2nd method to call props
instead of using destructuring you can directly call the props. But this is not preferable.

```javascript
<p>
  {props.userName} age is {props.age}{" "}
</p>
```

### Different types of props

- Standard Props
- Optional Props
- Default Props
- Object Props
- Array Props
- Function Props
- Children Props
-
-

#### 1. Passing Object Prop:

Passing Props

```javascript
const user = {
  name: "John Doe",
  age: 25,
  email: "john@example.com",
};

return <ChildComponent user={user} />;
```

Create interface Prop

```javascript
// ChildComponent.tsx
import React from "react";

interface ChildProps {
  user: {
    name: string,
    age: number,
    email: string,
  };
}
```

Use Props

```javascript
const ChildComponent: React.FC<ChildProps> = ({ user }) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};
```

## Component define in Typescript

```javascript

```

## Receiving props React JS

- **Prop type any**

```javascript
const ProcessCard = (props: any) => {
  return (
    <div>
      <div
        onClick={() => props.onClick && props.onClick()}
        className={`process-card-container relative ${props.bgClass} mobile:mt-20 cursor-pointer ${
          props.disabled ? "opacity-50 cursor-default" : "opacity-100"
        }`}>
        <Image src={props.icon} alt={props.heading} className="absolute -top-44" />
        <div className="flex flex-col justify-between h-full">
          <h3 className="font-inter text-3xl font-black mt-16">{props.heading}</h3>
          <p className="font-karla text-lg leading-7 my-4">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
```

- **Children Prop**

```javascript
const KycBoard = ({ children }: { children: React.ReactNode }) => {
  return (
)}
```

- **Interface prop**

```javascript
interface AccordionProps {
  title: string;
  subtitle: React.ReactNode;
}

const CustomAccordion: React.FC<AccordionProps> = ({ title, subtitle }) => {
  return (
  )}
```

- **Without interface props**
- Button component

```javascript
import React from "react";

const Button = ({
  children,
  className,
  onClick,
  variant = "primary",
  type,
}: {
  children: React.ReactNode,
  onClick?: () => void,
  className?: string,
  variant?: string,
  type?: "button" | "submit" | "reset",
}) => {
  const border = variant === "primary" ? "border-primary" : "border-border";

  const textColor = variant === "primary" ? "text-white" : "text-white";
  return (
    <button
      className={`px-4 py-2 border-solid border-[2px] rounded-sm 
        ${className} ${border}`}
      onClick={onClick}
      type={type}>
      <span className={`font-black text-lg ${textColor}`}>{children}</span>
    </button>
  );
};

export default Button;
```

- **Input Component**

```javascript
const Input = ({
  onChange,
  containerClassname,
  inputClassname,
  type = "string",
  placeholder,
  label,
  onBlur,
  value,
  name,
  error,
  touch,
}: {
  type?: string,
  inputClassname?: string,
  placeholder?: string,
  label?: string,
  value?: any,
  name?: string,
  error?: string,
  touch?: boolean,
  containerClassname?: string,
  onBlur?: (text: any) => void,
  onChange?: (text: any) => void,
}) => {
  return (
    <div className={`flex flex-col gap-4 w-full ${containerClassname}`}>
      {label && <label className="font-inter font-bold">{label}</label>}
      <input
        onChange={onChange}
        type={type}
        className={`w-full bg-transparent border-border border-solid border-2 p-3 rounded-lg ring-0 outline-none ${inputClassname}`}
        placeholder={placeholder}
        onBlur={onBlur}
        value={value}
        name={name}
      />
      {touch && error && <p className="text-red-400">{error}</p>}
    </div>
  );
};

export default Input;
```

- **Passing prop to function**

```javascript
<p key={index} className="font-inter font-semibold text-lg text-neutral-400">
  {splitText({ text: data.value, maxLength: 10 })}
</p>
```

```javascript
export const splitText = ({ text, maxLength }: any) => {
  const words = text.split(" ");

  if (words.length > maxLength) {
    return words.slice(0, maxLength).join(" ") + " ...";
  }

  return text;
};

export function splitLetters(text: string, maxLength: number): string {
  if (text?.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
}
```

- **Map**

```javascript
{
  taxes.map((tax: any, index: number) => (
    <div key={index} className="mt-5 flex gap-5 flex-col">
      <ListItems left="Additional Tax" right={`${tax.walletAddress}`} />
    </div>
  ));
}
```

- **Map with Interface**

```javascript
<div className="flex flex-col gap-3">
  {phaseOne.map((data: PhaseField, index: number) => (
    <p key={index} className="font-inter font-semibold text-lg text-neutral-400">
      {data.value}
    </p>
  ))}
</div>
```

## UseState in Typescript
