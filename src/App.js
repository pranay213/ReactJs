import React,{useState}from 'react';
let App=()=>
{

    let [fullName,setFullname]=useState(
        {
            
                fname:'',
                lname:'',
                mname:'',
            

        }
    );
    let fullname=(event)=>
    {
     
      setFullname((fullName)=>
      {
          return{
              ...fullName,
              [event.target.name]:event.target.value
          }
      })
    }
    

    let submitdata=(e)=>
    {
        e.preventDefault();
        console.log(fullName)
        
    }
    
    return(
        <React.Fragment>
            <div className="container m-5">
                <h5 className="text-danger">{fullName.fname}{fullName.lname}{fullName.mname}</h5>
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <form onSubmit={submitdata}>
                            <div className="card shadow-lg">
                                <div className="card-head text-center">

                                </div>
                                <div className="card-body">
                                    <label htmlFor="">FirstName:</label>
                                    <div className="form-group">
                                        <input name="fname"onChange={fullname} type="text" className="form-control"value={fullname.fname}/>
                                    </div>
                                    <label htmlFor="">LastName:</label>
                                    <div className="form-group">
                                        <input name="lname"onChange={fullname} type="text" className="form-control"value={fullname.lname}/>
                                    </div><label htmlFor="">MiddleName:</label>
                                    <div className="form-group">
                                        <input name="mname"onChange={fullname}type="text" className="form-control"value={fullname.mname}/>
                                    </div>
                                    <br/>
                                    <button type="submit" className="btn btn-outline-success">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default App;