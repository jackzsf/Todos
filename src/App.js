// import logo from './logo.svg';
import React, { useState , useEffect} from 'react'
import './App.css';
import TodoAdd from "./components/todo-add"
import TodoFilter from "./components/todo-filter"
import TodoItem from "./components/todo-item"
import './css/iconfont.css'

function App() {
  //item:{content, isCompleted, itemId}  itemId:时间戳
  const [items, setItems] = useState([])
  const [activedItems, setActivedItems] = useState([])
  const [completedItems, setCompletedItems] = useState([])
 
  const [filterBtnIndex, setFilterBtnIndex] = useState(0)
  const [isSelectAll, setIsSelectAll] = useState(false)

  //todo must 为什么不能直接写calculateItems
  useEffect(()=>{calculateItems()},[items])

  //item : index, item, content, isCompleted selectAction deleteAction

  function clearCompleted(){
    console.log('clearCompleted...')
    var tempArr =  items.filter(item=>(item.isCompleted !== true))
    setItems([...tempArr])
  }

  function filterAction(filterIndex){
    console.log('filterAction... index is ' , filterIndex)
    if(filterIndex !== filterBtnIndex){
      setFilterBtnIndex(filterIndex)
      calculateItems()
    }
  }

  function getShowedItems(){
    
    var temp = []
    switch (filterBtnIndex)
    {
      case 0:
        temp =  items;
        break;
      case 1:
        temp =  activedItems;
        break;
      case 2:
        temp =  completedItems;
        break;
      default:
        temp =  items;
    }

    // console.log('getShowedItems... btnIndex is ' , filterBtnIndex , ', arr is ' , temp)
    return temp
  }

  function calculateItems(){
    console.log('calculateItems...')
    setActivedItems(items.filter(item => (item.isCompleted === false)))
    setCompletedItems(items.filter(item => (item.isCompleted === true)))
  }

  function addItem(content){
    var itemId = new Date().getTime()
    items.push({'content':content,'isCompleted':false,'itemId':itemId})
    setItems([...items])
  }

  function allAction(){
    console.log('allAction...')
    items.map(item=>item.isCompleted = !isSelectAll)
    setIsSelectAll(!isSelectAll)
    setItems([...items])
  }

  function clickItemAction(item,index){
    console.log('clickItemAction...')

    items.map(indexItem=>(indexItem.itemId === item.itemId)?(indexItem.isCompleted = !indexItem.isCompleted):indexItem)

    setItems([...items])
  }

  function deleteItemAction(item,index){
    var tempArr =  items.filter(indexItem=>(indexItem.itemId !== item.itemId))
    
    setItems([...tempArr])
  }
  

  var showedItems = getShowedItems()

  return (
    <div className="App">
      <header className="App-header">
        <TodoAdd allMethod={allAction} addMethod={addItem}/>
        <div>
          {showedItems.map((item,index) => (
            <TodoItem 
              key={index}
              item = {item}
              index={index} 
              content={item.content} 
              isCompleted={item.isCompleted}
              selectAction = {clickItemAction}
              deleteAction = {deleteItemAction}
              />
          ))}
        </div>
        <TodoFilter 
          activeCount={activedItems.length} 
          completedCount={completedItems.length}
          selectedBtnIndex={filterBtnIndex} 
          clearAllMethod={clearCompleted} 
          filterActionMethod={filterAction}>
        </TodoFilter>
      </header>
    </div>
  );
}

export default App;
