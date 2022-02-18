import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SA Meeting Tracker</h1>
        <h4>Scripted Meetings</h4>
        <input className='input-one'
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <h4>Scripted Assets Reused</h4>
        <input className='input-one'
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
        <h4>Scripted Assets Created</h4>
        <input className='input-one'
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
        <h4>Advisory Meeting</h4>
        <input className='input-one'
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
        <h4>Advisory Assets Reused</h4>
        <input className='input-one'
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
        <h4>Advisory Assets Created</h4>
        <input className='input-one'
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
        <h4>SA Not Required Meetings</h4>
        <input className='input-one'
          onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
        <h4>Additional Notes</h4>
        <input className='input-last'/>
      </header>
    </div>
  );
}

export default App;
