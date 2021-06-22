import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./images/pic-3-female.jpg"
import profile2 from "./images/pic-2-react.jpg"
import profile3 from "./images/pic-react-1.jpg"
import SingleComment from "./SingleComment"
import UserCard from "./UserCard"

const App = () => {


    return (

  <div className = "ui comments">
    
    <UserCard header = "Sarah Augustine">
        <SingleComment name = "Sarah" date = "Today at 5pm"
        text = "It's amazing" avatar = {profile1}/>
    </UserCard>
    <UserCard header = "Jack Windsow">
        <SingleComment name = "Jack" date = "Today at 7pm"
        text = "It's awesome"  avatar = {profile3}/>
    </UserCard>
    <UserCard header = "Alex Usifo">
        <SingleComment name = "Alex" date = "Today at 10pm" 
        text = "It's cool"  avatar = {profile2}/>
   </UserCard>
       
  </div>

)
}

ReactDOM.render (
    <App/>,
    document.querySelector("#root")
)