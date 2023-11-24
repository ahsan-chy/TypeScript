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

## Handle Props (Passing Props - Receiving Props)

Passing props

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
