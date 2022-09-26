import { Fragment, useState } from 'react'
import { Combobox, Transition,Listbox as HeadList } from '@headlessui/react'

import { FcCheckmark  as CheckIcon} from "react-icons/fc";
import { FiChevronDown as ChevronUpDownIcon } from "react-icons/fi";
import CustomeInput from '../CustomeInput'


const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]




 function CheckedListBox({className,label,items,dataId,dataLabel,checked,onChange}) {
 
    

  const onChangeItem=(data)=>{
    if (onChange)
    {    
     onChange(data);
    }
 }



 const handleCheck = (event) => {

  var current=items.filter(d=>d[dataId]===event.target.value)[0];
  var updatedList = [...checked];

  if (event.target.checked) {
    updatedList = [...checked, current];
  } 
  else
  {

   updatedList= updatedList.filter(d=>d[dataId]!==current[dataId]);
    console.log("UnChecked");
  }

  if (onChange)
  {    
   onChange(updatedList);
  }
  
};

const checkedItems=()=>{
return "Checked Items";
return "Checked"
  return checked.length
  ? checked.reduce((total, item) => {
      return total + ", " + item;
    })
  : "";

}
 
 
 const getValue=(value)=>{
 
   return items.filter(d=>d[dataId]==value)[0]
 }

const getSelected=()=>
{  

 
return [];
  if (selected)
  return items.filter(d=>d[dataId]===selected);
  else
  {
    console.log(items[0]);

  return items[0];
  }
  
}
const isChecked=(current)=>{
  return checked.findIndex(d=>d[dataId]===current[dataId])>=0;
}

  return (
    <div className={`${className} related overflow-hidden py-1 	 `}>
    
    <HeadList value={checked} onChange={onChangeItem}  multiple>
    
   
    <HeadList.Button className="w-full">
    <CustomeInput
            label={label}
            className=""
            msg="Sure name is required"
            name="sureName"
            value={checked.length<=0?'Please Choice Access Levels':
            checked.map((person) => person[dataLabel]).join(', ')
            
            }
            autoComplete="off"
          />
         </HeadList.Button>

       
        <HeadList.Options className="   box-border  border  
        shadow-lg 
         py-1   overflow-auto
        rounded-lg  focus:outline-none sm:text-sm
        ">
        {items.map((p,index) => (
          <HeadList.Option className="relative   cursor-default z-50 select-none py-1 pl-10 pr-4" key={p[dataId]} value={p}>

<div className="flex">
                  <div > <input value={p[dataId]} checked={isChecked(p)}  type="checkbox"  className="px-4"/></div>
                  <span className="block truncate px-4">   {p[dataLabel]}</span>
                  </div>


          
          </HeadList.Option>
        ))}
      </HeadList.Options>

     
    </HeadList>
  </div>
  )
}


export default CheckedListBox;