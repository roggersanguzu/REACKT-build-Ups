import React, { useState } from 'react' // The use of the use States
import data from './data'

function Explanation(){
    const[selected,setSelected]=useState(null);
   function HandleSingleSelection(getCurrentId){
    console.log(getCurrentId)
    setSelected(getCurrentId===selected?null:getCurrentId)
   }
    return (
            <div className='wrapper'>
                <h1>ACCORDIAN SINGLE MANAGEMENT</h1>
                <div className='accordian'>
                    {
                        data&&data.length>0?
                        data.map((dataItem)=><div className='item'>
                            <div className='title' onClick={()=>HandleSingleSelection(dataItem.id)}>
                                <h3>{dataItem.title}</h3>
                                <span>+</span>
                            </div>
                            {
                                        selected===dataItem.id?
                                        <div className='content'>
                                            {dataItem.information}
                                        </div>
                                        :null
                                    }
                        </div>)
                        :<div>No Data Present</div>
                    }
                </div>
            </div>
    )
}
export default Explanation;
