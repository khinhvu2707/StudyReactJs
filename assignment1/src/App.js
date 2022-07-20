import Expenses from './components/Expenses';

function App() {
  const expenses = [{
    id: 1,
    title: 'Notebook',
    amount: 27.7,
    date: new Date(2022,7,27),
  },{
    id: 2,
    title: 'Pen',
    amount: 30.9,
    date: new Date(2022,9,26),
  },{
    id: 3,
    title: 'Book',
    amount: 99.7,
    date: new Date(2022,8,22),
  }]
  
    return (
<div>
  <Expenses item={expenses}></Expenses>
</div>
    )
  }
  
  export default App;
  