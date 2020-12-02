import React , {useState} from 'react'
import './index.scss'

//index, item, content, isCompleted selectAction deleteAction
export default function TodoItem(props){


    return (
        <div className="todo-item-bg">
            <button onClick={()=>{props.selectAction(props.item,props.index)}} className={props.isCompleted === true ? 'item-btn-complated':'item-btn-normal'}></button>
            <label className={props.isCompleted === true ? 'content-complated':'content-normal'}>{props.content}</label>
            <label className='delete-item' onClick={()=>{props.deleteAction(props.item,props.index)}}>X</label>
        </div>
    )
}