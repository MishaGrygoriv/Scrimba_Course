import "./MemeComponent.scss";

import React from "react";
import Picture from "../../../assets/picture.png";
import { motion } from "framer-motion";
import memesData from "../../../store/memesData";

export const MemeComponent = () => {
  ///Test How to Add an Item///////////////////////////////////////////////////
//   const [thing, setThings] = React.useState(["Thing1", "Thing2"]);

//   function addItem() {
//     const newThingText = `Thing ${thing.length + 1}`;
//     setThings((prevState) => [...prevState, newThingText]);
//   }
//   const thingsElements = thing.map((thing) => <p key={thing}>{thing}</p>);
  ///Test How to add item////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///Test Greeting depending on the current time of day//////////////////////////////////////////////////// 
  //   function greeting(name) {
  //     const date = new Date()
  //     const hours = date.getHours()
      
  //     let timeOfDay
  //     if(hours >= 4 && hours < 12) {
  //         timeOfDay = "morning"
  //     } else if(hours >= 12 && hours < 17) {
  //         timeOfDay = "afternoon"
  //     } else if(hours >= 17 && hours < 20) {
  //         timeOfDay = "evening"
  //     } else {
  //         timeOfDay = "night"
  //     }
      
  //     return `Good ${timeOfDay}, ${name}!`
  // }
  
  // console.log(greeting("Michael"))
  ///Test Greeting depending on the current time of day//////////////////////////////////////////////////// 
  //////////////////////////////////////////////////////////////////////////////
  ///Practice React.useState()//////////////////////////////////////////////////// 
  // const [count, setCount] = React.useState(0)
    
/**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
  ///Best practice to use////////////////////////////////////////////////////////////////
//   function add() {
//     setCount(function(oldValue) {
//         return oldValue + 1
//     })
// }

// function add() {
//   setCount(prevCount => prevCount + 1)
// }
    
  //   function subtract() {
  //       setCount(prevCount => prevCount - 1)
  //   }
  ///Practice React.useState()//////////////////////////////////////////////////// 

///Change Mind "Yes" "No" useState()//////////////////////////////////////////////////
// const [isGoingOut, setIsGoingOut] = React.useState(true)
//     /**
//      * Challenge: 
//      * - Initialize state for `isGoingOut` as a boolean
//      * - Make it so clicking the div.state--value flips that
//      *   boolean value (true -> false, false -> true)
//      * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
//      */
//     function changeMind() {
//         setIsGoingOut(prevState => !prevState)
//     }
///Change Mind "Yes" "No" useState()//////////////////////////////////////////////////
///Add an Item with React.useState**********************************
// const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

// function addItem() {
//   setThingsArray(prevThingsArray => {
//     return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//   })
// }

// const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
///Add an Item with React.useState**********************************

    const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/28j0te.jpg"
    });
    
    const [allMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
          return {
            ...prevMeme,
            randomImage: url
          }
        });
    };

  return (
    <div className="MemeComponent">
      <div className="MemeComponent__form">
        <input
          type="text"
          placeholder="Top Text"
          className="MemeComponent__form-input"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="MemeComponent__form-input"
        />
        <motion.button
          className="MemeComponent__form-btn"
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 1 }}
          onClick={getMemeImage}
        >
          Get a new meme image
          <img src={Picture} alt="Pic" className="MemeComponent__picture" />
        </motion.button>
      </div>
      <img src={meme.randomImage} alt="MemeImage" className="MemeComponent__img" />
      {/* <div>
        <button onClick={addItem}>Add Item</button>
        {thingsElements}
      </div> */}
       {/* <div>
            <button onClick={subtract}>–</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={add}>+</button>
        </div> */}
        {/* <div>
            <h1>Do I feel like going out tonight?</h1>
            <div onClick={changeMind}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div> */}
        {/* <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div> */}
    </div>
  );
};
