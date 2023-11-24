type ProfileProps = {
    userName: string
    age: number
}

const Profile = (props: ProfileProps) => {

  return (
    <div style={{textAlign: 'center'}}>
      <h3>Typescript Props</h3>
      <p>{props.userName} age is {props.age} </p>
    </div>
  );
};

export default Profile;

// type ProfileProps = {
//     userName: string
//     age: number
// }

// const Profile = (props: ProfileProps) => {
//   const { userName, age } = props;

//   return (
//     <div style={{textAlign: 'center'}}>
//       <h3>Typescript Props</h3>
//       <p>{userName} age is {age} </p>
//     </div>
//   );
// };

// export default Profile; 
