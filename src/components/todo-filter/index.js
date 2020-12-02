import React , {useState} from 'react'
import './index.scss'

//clearAllMethod  filterActionMethod  activeCount completedCount selectedBtnIndex
export default function TodoFilter(props){

    const [selectedBtnIndex, setSelectedBtnIndex] = useState(0);

    function clearCompletedAction(){
        console.log('clearCompletedAction...')
        props.clearAllMethod()
    }

    function filterAction(index){
        props.filterActionMethod(index)
        setSelectedBtnIndex(index)
    }
    

    return (
        <div className="todo-filter-bg">
            <label className='todo-count'>{props.activeCount} items left</label>
            <div className="actions">
                <button onClick={()=>{filterAction(0)}} className={selectedBtnIndex === 0 ? 'btn-selected':'btn-normal'}>All</button>
                <button onClick={()=>{filterAction(1)}} className={selectedBtnIndex === 1 ? 'btn-selected':'btn-normal'}>Active</button>
                <button onClick={()=>{filterAction(2)}} className={selectedBtnIndex === 2 ? 'btn-selected':'btn-normal'}>Completed</button>
            </div>
            <button hidden={props.completedCount ===0 } onClick={clearCompletedAction} className="clear-btn">Clear completed</button>
        </div>
    )
}