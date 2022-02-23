import React from "react";
import contacts from "./contacts.json";
import "./App.css";

function App() {
  let fiveArr = contacts.slice(0, 5);
  let remainArr = contacts.slice(5, contacts.length);

  const [celebs, setCelebs] = React.useState(fiveArr);

  const generateRandom = () => {
    let randomIndex = Math.floor(Math.random() * contacts.length);
    let newValue = true;

    celebs.forEach((contact) => {
      if (contact.name === contacts[randomIndex].name) {
        newValue = false;
      }
    });

    if (!newValue) {
      generateRandom();
    } else {
      setCelebs(celebs.concat(contacts[randomIndex]));
    }
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          generateRandom();
        }}
      >
        Add Random Celeb
      </button>
      <table style={{ border: "1px solid black" }}>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>

        {celebs.map((celeb, i) => {
          return (
            <tr key={i}>
              <td>
                <img style={{ width: "100px" }} src={celeb.pictureUrl} />
              </td>
              <td>
                <p>{celeb.name}</p>
              </td>
              <td>
                <p>{Math.round(celeb.popularity * 100) / 100}</p>
              </td>
              <td>
                <p>{celeb.wonOscar ? "🏆" : ""}</p>
              </td>
              <td>
                <p>{celeb.wonEmmy ? "🏆" : ""}</p>
              </td>
              <td></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
