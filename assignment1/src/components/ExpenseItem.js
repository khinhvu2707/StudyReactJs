import './Expense.css';

function ExpenseItem(props) {
return(
        <div className='expenses'>
          <div>
            <h3>{props.book}</h3>
            <div>--- {props.author} ---</div>
          </div>
        </div>
    )
}

export default ExpenseItem;