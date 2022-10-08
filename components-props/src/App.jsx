export function App() {

  return (
      <div className="App">
        <Person name="Wallysson" age={32} email="wallysson@email.com"></Person>
        <Person name="Leticia" age={25} email="leticia@email.com"></Person>
        <Person name="Renato" age={28} email="renato@email.com"></Person>

      </div>
    );
}

function Person ({name, age, email}) {  
  return (
    <div className="App">
        <p> {name} </p>
        <p> {age} </p>
        <p> {email} </p>
    </div>
  );
}