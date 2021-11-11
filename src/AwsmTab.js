import {React, useState} from "react";

const AwsmTab = () => {
    const [toggleState, setToggleState] = useState(0);
    const [display, setDisplay]=useState(true)

    const toggleTab = (index,e) => {
      setToggleState(index);
      setDisplay(true)
    };

    const close=()=>{
        setDisplay(false)
    }
  
  const Data = [
    {
      eventName: "Marvel",
      Description:
        "Marvel.com is the official site of Marvel Entertainment! Browse official Marvel movies",
    },
    {
      eventName: "DCU",
      Description:
        "Digital Federal Credit Union - Come to us for a better deal on free checking",
    },
    {
      eventName: "Ironman",
      Description:
        "Anthony Edward Stark is the son of wealthy industrialist and head of Stark Industries",
    },
    {
      eventName: "Disney",
      Description: "The Walt Disney Company, commonly just Disney",
    },
    { eventName: "Warner", Description: "Warner Bros. Entertainment Inc" },
    {
      eventName: "Bros",
      Description: "American diversified multinational mass media",
    },
    {
      eventName: "Batman",
      Description:
        "Batman is a superhero who appears in American comic books published by DC",
    },
    {
      eventName: "Starlord",
      Description:
        "Star-Lord is a fictional character and superhero appearing in America",
    },
    {
      eventName: "Vampire",
      Description:
        "A vampire is a creature from folklore that subsists by feeding on the vital",
    },
    {
      eventName: "Blade",
      Description:
        "Blade, who is part-vampire and part-mortal, becomes a vampire",
    },
    {
      eventName: "Eternals",
      Description: "The Eternals, a race of immortal beings with superhuman",
    },
    {
      eventName: "Thena",
      Description:
        "Thena is a fictional character appearing in American comic books published by Marvel",
    },
    {
      eventName: "Ikaris",
      Description:
        "Ikaris is a fictional character appearing in American comic books",
    },
    {
      eventName: "Black",
      Description:
        "Dane Whitman is a fictional superhero appearing in American",
    },
    {
      eventName: "Knight",
      Description: "bear the Black Knight name, he was created by writer Roy",
    },
    {
      eventName: "Sanple",
      Description:
        "The Black Knight soon returned to the Avengers, having abandoned ",
    },
    {
      eventName: "Update",
      Description:
        "Sir Percy of Scandia, a knight of Camelot. This early Marvel",
    },
    {
      eventName: "Global",
      Description:
        "In 2015, world leaders agreed to 17 Global Goals (officially known",
    },
    {
      eventName: "Polpulation",
      Description:
        "The current world population is 7.9 billion as of November 2021",
    },
    {
      eventName: "Track",
      Description:
        "Track Consignment. Toggle navigation. Tools. Tools. Track Consignment",
    },
    {
      eventName: "India",
      Description:
        "India, officially the Republic of India, is a country in South Asia.",
    },
    {
      eventName: "USA",
      Description:
        "The U.S. is a country of 50 states covering a vast swath of North America",
    },
    {
      eventName: "Germany",
      Description:
        "Germany is a Western European country with a landscape of forests, rivers",
    },
  ];
  return (
    <div className="MainContainer">
      <div className="leftSide">
        <h1>Events Viewer</h1>
        <div className="eventList">
          {Data.map((data, index) => (
            <button
              className={toggleState === index && display ? "btnActive" : "tabs"}
              onClick={() => toggleTab(index)}
            >
              Event Type {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="rightSide">
        <div className="tabTitle">
          <span className={display?'Span':'notActive'}>Event Type {toggleState+1} <p onClick={close}>x</p></span>
        </div>
        <div className={display?'tabData':'notActive'}>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
          <table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>{Data[toggleState].eventName}</td><td>{Data[toggleState].Description}</td></tr></tbody></table>
        </div>
      </div>
    </div>
  );
};

export default AwsmTab;
