// console.log("npm install axios")

import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {

    const fetchStudents = async () => {
      try {
        const url = `https://raw.githubusercontent.com/getfutureproof/fp_study_notes_hello_github/main/auguste/roster.json`

        const { data } = await axios.get(url)
        console.log('I was mounted')
        setStudents(data.students)
      } catch (err) {
        console.log(err)
      }
    }
    fetchStudents()
  }, [])

  // nothing => useEffect will run like crazy
  // [] => useEffect will run once
  // [search] => useEffect will run everytime the value changes

  console.log(students)
  const renderedStudents = students.map(st => {
    return (
      <li key={st.github}>{st.name}</li>
    )
  })

  return (
    <div className="App">
      <header className="App-header">
        <ul> {renderedStudents} </ul>
      </header>
    </div>
  );
}

export default App;
