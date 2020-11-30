import pentagon from './images/pentagon.png'
import square from './images/square.png'
import triangle from './images/triangle.png'
import start from './images/start.png'
import minimize from './images/minimize.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Creating Shapes with Scratch
        </h1>
        <br/>
        <a
          href="https://snap.berkeley.edu/snap/snap.html#present:Username=ashvinccccc&ProjectName=Base%20Template"
          target="_blank"
          rel="noopener noreferrer"
        >
          Starter Code (use this to start off building the projects)
        </a>
        <p>Press the <img style={{'vertical-align':'middle'}} src={minimize} /> to start coding and the <img style={{'vertical-align':'middle'}} src={start} /> to run the code</p>
        <br/>
        <br/>
        <br/>

        <div className="assignment">
        <p>
          Assignment #1 : Create a Triangle
          <br/>    
          <a
          href="https://snap.berkeley.edu/snap/snap.html#present:Username=ashvinccccc&ProjectName=Triangle"
          target="_blank"
          rel="noopener noreferrer"
        >
          [SOLUTION]
        </a>
        </p>
        <img src={triangle} className="example" alt="triangle" />
        </div>

        <div className="assignment">
        <p>
          Assignment #2 : Create a Square 
          <br/>  
          <a
          href="https://snap.berkeley.edu/snap/snap.html#present:Username=ashvinccccc&ProjectName=Square"
          target="_blank"
          rel="noopener noreferrer"
        >
          [SOLUTION]
        </a> 
        </p>
        <img src={square} className="example" alt="square" />
        </div>

        <div className="assignment">
        <p>
          
          Assignment #3 : Create a Pentagon 
          <br/>  
          <a
          href="https://snap.berkeley.edu/snap/snap.html#present:Username=ashvinccccc&ProjectName=Pentagon"
          target="_blank"
          rel="noopener noreferrer"
        >
          [SOLUTION]
        </a>
          </p>
        <img src={pentagon} className="example" alt="pentagon" />
        </div>


      </header>
    </div>
  );
}

export default App;
