import React from 'react';
import { data } from './data';

function App() {

  const [people, setPeople] = React.useState(data);
  const Delete=()=>{
    setPeople([])
  }

  const deleteOne=(age)=>{
    const final=people.filter((person)=>person.age!==age);
    setPeople(final)
  }
  return (
    <div className="App">
      <h1>BIRTHDAY SCHEDULING</h1>
      {
        people.map((person) => {
          const { age, name } = person;
          return (
            <div className="Data" key={age}>
              <h3>{name}</h3>
              <h3>{age}</h3>
              <button className='btn' onClick={()=>deleteOne(age)}>Remove</button>
            </div>
          );
        })
      }
       <button className='btn' onClick={Delete}>Clear Dates</button>
    </div>
  );
}

export default App;
