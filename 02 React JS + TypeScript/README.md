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


## Define a Functionbase component in Typescript

**Snipit to use/Import Typescript**  Write **`fc`** & Enter

```javascript
import { FC } from "react";

const User: FC = () => {    // React.FC - You can also use. 
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
  const [item, setItem] = useState<string>("");
  const [message, setMessage] = useState<string>('');
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
import React from 'react';

interface ChildProps {
  user: {
    name: string;
    age: number;
    email: string;
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
