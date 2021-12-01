import React, {useState} from 'react';
let TodoList =()=>
{  let [items,setItems]=useState([]);

    let itemsInput=(event)=>
    {
        setItem(event.target.value)
    }
    let [item,setItem]=useState('');
    let updateItemlist=()=>
    {
        setItems((oldItems)=>
        {
            if(item!=='')
            {
                return [...oldItems,item]

            }
            else
            {
                return [...oldItems]
            }

        })
        setItem('')
    }
    let deleteItem=(id)=>
    {

       setItems((items)=>
       {
           return items.filter((arrElem,index)=>
           {
               return index!==id;
           })
       })

    }
    return(
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 m-auto text-center">
                        <div className="card shadow-lg ">
                            <div className="card-head bg-primary ">
                                <h4 className="text-white p-2">TO-DO LIST</h4>
                            </div>
                            <div className="card-body"style={{height:"450px"}}>
                                <div className="col-md-6 m-auto">
                                    <div className="form-group ">
                                        <input type="text" className="form-control my-2" onChange={itemsInput} value={item} />
                                       <button className="btn btn-success btn-sm shadow-sm" onClick={updateItemlist}>Add</button>
                                    </div>
                                    <br/>
                                    <br/>
                                    <ol>
                                        {
                                            items.map((itemName,index)=>{
                                                return <li key={index}> <span className=" mx-3"><i className="fas fa-minus-circle text-danger" onClick={()=>{deleteItem(index)}}></i></span>{itemName}</li>
                                            })
                                        }

                                    </ol>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default TodoList;