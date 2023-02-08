import React ,{useState,} from "react";


function Adder(props){

    const{handleSubmitCb}=props;
 


const  [user,setUser]=useState({isim:"",email:"",meslek:""});

const changeHandler=(event)=>{
    const{value,id}=event.target
    console.log(event.target.value);
    const newState={  
        ...user,[id]:value,
    }
    setUser(newState);
  };
  
  const handleSubmit=(id)=>{
    id.preventDefault();
    console.log(id)
    return handleSubmitCb(user)
  }
   

    return(
     
        <form className="form-list" onSubmit={handleSubmit}>
            <label>
                İsim:
                <input
                type="text"
                name="isim"
                id="isim"
                onChange={changeHandler}
               value={user.isim}
                />
            </label>
            <label>
                email:
                <input type="text"
                name="mail"
                id="email"
                onChange={changeHandler}
               value={user.email}
               />
            </label>
            <label>
                Meslek:
                <input type="text"
                name="meslek"
                id="meslek"
                onChange={changeHandler}
               value={user.meslek}/>
            </label>
            <button  type="submit" name="kayıt" id="submit">Kayıt Ol</button>
          
          

        </form>
     
    )
}
export default Adder;