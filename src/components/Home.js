// import React from "react";
// import Notes from "./Notes";

// const Home = (props) => {
//   const { showAlert } = props;
//   return (
//     <div>
//       <Notes showAlert={showAlert} />
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { Link } from "react-router-dom";
import homepage from './homepage.jpg'

const Home = () => {


 
  return (

  //  { /* <div classNameNameName=" container contant"><h3 >this is in Home</h3>
  //     <Link to="/AddNote" classNameNameName="btn btn-primary ">
  //       Your Notes
  //     </Link>
  //   </div> */}
<>
<div className= 'home-container'>
<div className="container_content">
<div className="container_content_inner">
<div className="title">
  <h1>Welcome to My-Notes</h1>
</div>
<div className="par">
<p  className="p-home">
Click on your notes for Display Your Saved Notes , if you are Already logged in else Please Log-In first.
Please Make sure you have an account on our Website otherwise Sign-up and move on.
</p>
</div>
<div className="btns">
<Link to="/AddNote" className="btn btn-primary  ">
    Your Notes
     </Link>
</div>
</div>
</div>
 <div className="container_outer_img">
 <div className="img-inner">
 {/* <img src='https://images.unsplash.com/photo-1517911041065-4960862d38f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'  alt="" className="container_img"/> */}
 <img src={homepage}  alt="idfjb" className="container_img"/>
       </div>
     </div>
  </div>
{/* <div className="overlay"></div> */}
</>
  );
};

export default Home;
