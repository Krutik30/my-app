import './App.css';
import notes from './notes';

function Header(){
  return (
    <h1 className="heading">Keeper</h1>
  )
}

function Notes(props){
  return (
    <div className="notebox">
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  )
}

function Footer(){
  return (
    <div className='footer'>copyright 2023</div>
  )
}

function CreateNotes(note){
  return(
    <Notes 
      key={note.id}
      title={note.title}
      content = {note.content}
    />
  )
}

function App() {
  return (
    <div>
      <Header />
      <div class="flex">
        {notes.map(CreateNotes)}
      </div>
      <Footer />
    </div>
  )
}

export default App;


