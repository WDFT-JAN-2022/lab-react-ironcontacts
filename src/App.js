import React from 'react'
import contacts from "./contacts.json";
import './App.css';



function App() {
  let fiveArr = contacts.slice(0, 5);
  let remainArr = contacts.slice(5, contacts.length);

  const [celebs, setCelebs] = React.useState(fiveArr);


  return (
    <div className="App">
 <table style={{ border: "1px solid black" }}>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
          <th>Action</th>
        </tr>

        {celebs.map((props, i) => {
          return (
            <tr key={i}>
              <td>
                <img style={{ width: "100px" }} src={props.pictureUrl} />
              </td>
              <td>
                <p>{props.name}</p>
              </td>
              <td>
                <p>{Math.round(props.popularity * 100) / 100}</p>
              </td>
              <td>
                <p>{props.wonOscar ? "🏆" : ""}</p>
              </td>
              <td>
                <p>{props.wonEmmy ? "🏆" : ""}</p>
              </td>
              <td>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;
