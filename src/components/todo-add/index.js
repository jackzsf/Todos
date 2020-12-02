import React from 'react';
import './index.scss'


//allMethod addMethod
export default function TodoAdd(props){

    function selectAll(){
        console.log('select or unselect All...')
        props.allMethod()
    }

    function inputChanged(e){
        // console.log('inputChanged... e is ' ,e)
        const addInput = document.getElementById('add-input')
        var nowValue = addInput.value 
        // console.log('newValue is ', nowValue)
        
    }

    function inputKeyDown(e){
        const addInput = document.getElementById('add-input')
        var nowValue = addInput.value 
        if(e.keyCode === 13 && nowValue.length > 0){
            // console.log('inputKeyDown...send value is ',nowValue)
            addInput.value = ''
            props.addMethod(nowValue)
        }
    }

    
    // addInput.addEventListener('change',(e)=>{
    //     var tempText = addInput.textContent
    //     console.log('inputChanged... tempText is ',tempText)
    // },false)

    return (
        <div className='todo-add-bg'>
            <span className="icon iconfont icon-xiajiantou jiantou" onClick={selectAll}></span>
            <input id="add-input"  placeholder='What needs to be done?' onChange={inputChanged} onKeyDown={inputKeyDown} ></input>
        </div>
    )
}