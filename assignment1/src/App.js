import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [{
    id: 1,
    book: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
  },{
    id: 2,
    book: "The Alchemist",
    author: "Paulo Coelho",
  },{
    id: 3,
    book: 'And Then There Were None',
    author: "Agatha Christie",
  }]
  
    return (
      <div className='app'>
       <h1 classname ="title">NhungNhung Book Store</h1>
       <ExpenseItem book = {expenses[0].book} author = {expenses[0].author} ></ExpenseItem>
       <ExpenseItem book = {expenses[1].book} author = {expenses[1].author} ></ExpenseItem>
       <ExpenseItem book = {expenses[2].book} author = {expenses[2].author} ></ExpenseItem>
      </div>
    )
  }
  
  export default App;
  