// import React from "react";
// import { useTranslation } from "react-i18next";

// function App() {
//   const { t, i18n } = useTranslation();

//   const changeLanguage = (lng) => i18n.changeLanguage(lng);

//   const chnageSelect = (e) => {
//     console.log(e.target.value);
//     i18n.changeLanguage(e.target.value);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <select onChange={chnageSelect}>
//           <option value="ru">ru</option>
//           <option value="en">en</option>
//         </select>
//         <button onClick={() => changeLanguage("ru")}>ru</button>
//         <button onClick={() => changeLanguage("en")}>en</button>
//         <h1>{t("Welcome to React")}</h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
