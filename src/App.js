
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do App</h1>

      </header>

      <main>
        <label for="task">Task: </label>
        <input type="text" id="task" name="task"></input>


        <h2>List of Things to Do:</h2>
        <ul></ul>

      </main>



    </div>
  );
}

export default App;
