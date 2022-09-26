import { Fragment, useState } from 'react'
import { Combobox, Transition,Listbox as HeadList } from '@headlessui/react'

import { FcCheckmark  as CheckIcon} from "react-icons/fc";
import { FiChevronDown as ChevronUpDownIcon } from "react-icons/fi";



 function ListBox({className,label,items,dataId,dataLabel,selected,onChange}) {

  const onChangeItem=(data)=>{

    
    if (onChange)
     onChange(data[dataId]);
 }
 
 const getValue=(value)=>{
 
   return items.filter(d=>d[dataId]==value)[0]
 }

const getSelected=()=>
{
  
  if (selected)
  return items.filter(d=>d[dataId]===selected)[0];
  else
  {
    console.log(items[0]);

  return items[0];
  }
  
}
console.log(className)

  return (
    <div className={`${className} z-50 `}>
    
    <HeadList value={getSelected()} onChange={onChangeItem}>
      <div className="relative z-50 ">
        <HeadList.Button className="relative  w-full cursor-default 

rounded-3xl group   relative    box-border py-3
 
focus-within:border-sky-500  border border-gray-200 
focus-within:border-textSelectColor focus-within:shadow-[0px_0px_5px_rgba(10,95,89,1)]

          py-2 pl-3 pr-10 text-left shadow-md focus:outline-none
           focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selected?getSelected()[dataLabel]:'please Choice '+label} </span>
          <span className="pointer-events-none absolute z-[500] inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </HeadList.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <HeadList.Options className="absolute z-50	  mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {items.map((person, personIdx) => (
              <HeadList.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default z-50 select-none py-2 pl-10 pr-4 ${
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value={person}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {person[dataLabel]}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </HeadList.Option>
            ))}
          </HeadList.Options>
        </Transition>
      </div>
    </HeadList>
  </div>
  )
}


export default ListBox;