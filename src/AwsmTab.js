import { React, useState, useEffect } from "react";

const AwsmTab = () => {
  const [toggleState, setToggleState] = useState(1);
  const [display, setDisplay] = useState(false);
  const [tabArr, setTabArra] = useState([]);

  const [tabActive, setTabActive] = useState(false);


  var flag;
  const toggleTab = (data) => {
    setToggleState(data.id);
    setDisplay(true);

    if (tabArr.length < 5){
     flag= tabArr.push(data);
    }
    console.log(tabArr);
    return flag
  };

  const close = (index) => {
    // delete tabArr[index]
    tabArr.splice(index,1)
    console.log(tabArr);
    if(tabArr.length==0){
      setDisplay(false)
    }
    setTabActive(false);
  };

  const DataTab = (id) => {
    setToggleState(id);
    setTabActive(true);
  };

  const Data = [
    {
      eventName: "Marvel",
      id: 1,
      Description:
        "Marvel.com is the official site of Marvel Entertainment! Browse official Marvel movies",
    },
    {
      eventName: "DCU",
      id: 2,
      Description:
        "Digital Federal Credit Union - Come to us for a better deal on free checking",
    },
    {
      eventName: "Ironman",
      id: 3,
      Description:
        "Anthony Edward Stark is the son of wealthy industrialist and head of Stark Industries",
    },
    {
      eventName: "Disney",
      id: 4,
      Description: "The Walt Disney Company, commonly just Disney",
    },
    {
      eventName: "Warner",
      id: 5,
      Description: "Warner Bros. Entertainment Inc",
    },
    {
      eventName: "Bros",
      id: 6,
      Description: "American diversified multinational mass media",
    },
    {
      eventName: "Batman",
      id: 7,
      Description:
        "Batman is a superhero who appears in American comic books published by DC",
    },
    {
      eventName: "Starlord",
      id: 8,
      Description:
        "Star-Lord is a fictional character and superhero appearing in America",
    },
    {
      eventName: "Vampire",
      id: 9,
      Description:
        "A vampire is a creature from folklore that subsists by feeding on the vital",
    },
    {
      eventName: "Blade",
      id: 10,
      Description:
        "Blade, who is part-vampire and part-mortal, becomes a vampire",
    },
    {
      eventName: "Eternals",
      id: 11,
      Description: "The Eternals, a race of immortal beings with superhuman",
    },
    {
      eventName: "Thena",
      id: 12,
      Description:
        "Thena is a fictional character appearing in American comic books published by Marvel",
    },
    {
      eventName: "Ikaris",
      id: 13,
      Description:
        "Ikaris is a fictional character appearing in American comic books",
    },
    {
      eventName: "Black",
      id: 14,
      Description:
        "Dane Whitman is a fictional superhero appearing in American",
    },
    {
      eventName: "Knight",
      id: 15,
      Description: "bear the Black Knight name, he was created by writer Roy",
    },
    {
      eventName: "Sanple",
      id: 16,
      Description:
        "The Black Knight soon returned to the Avengers, having abandoned ",
    },
    {
      eventName: "Update",
      id: 17,
      Description:
        "Sir Percy of Scandia, a knight of Camelot. This early Marvel",
    },
    {
      eventName: "Global",
      id: 18,
      Description:
        "In 2015, world leaders agreed to 17 Global Goals (officially known",
    },
    {
      eventName: "Polpulation",
      id: 19,
      Description:
        "The current world population is 7.9 billion as of November 2021",
    },
    {
      eventName: "Track",
      id: 20,
      Description:
        "Track Consignment. Toggle navigation. Tools. Tools. Track Consignment",
    },
    {
      eventName: "India",
      id: 21,
      Description:
        "India, officially the Republic of India, is a country in South Asia.",
    },
    {
      eventName: "USA",
      id: 22,
      Description:
        "The U.S. is a country of 50 states covering a vast swath of North America",
    },
    {
      eventName: "Germany",
      id: 23,
      Description:
        "Germany is a Western European country with a landscape of forests, rivers",
    },
  ];

  return (
    <div className="MainContainer">
      <div className="leftSide">
        <h1>Events Viewer</h1>
        <div className="eventList">
          {Data.map((data) => (
            <button
              className={
                toggleState === data.id && display ? "btnActive" : "tabs"
              }
              onClick={() => toggleTab(data)}
            >
              Event Type {data.id}
            </button>
          ))}
        </div>
      </div>
      <div className="rightSide">
        <div className="tabTitle">
          {tabArr.map((tabb, index) => (
            <span
              className={toggleState === tabb.id ? "ASpan" : "Span"}
              onClick={() => DataTab(tabb.id)}
            >
              {tabArr ? "Event Type" : null} {tabb.id} 
              <p onClick={()=>close(index)}>x</p>
            </span>
          ))}
        </div>
        <div className="tabData">
          {display ? (
            <>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{Data[toggleState-1].eventName}</td>
                  <td>{Data[toggleState-1].Description}</td>
                </tr>
              </tbody>
            </table>
            </>
          ) : (
            <h1>No Data</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default AwsmTab;
