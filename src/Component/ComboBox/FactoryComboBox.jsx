import { Fragment, useState } from 'react'
import { Combobox, Transition,Listbox } from '@headlessui/react'

import { FcCheckmark  as CheckIcon} from "react-icons/fc";
import { FiChevronDown as ChevronUpDownIcon } from "react-icons/fi";


const people = [
  { id: 1, name: 'Factory 12',city:'LA' },
  { id: 2, name: 'Factory 10' ,city:'USA'},
  { id: 3, name: 'Factory 11' ,city:'LA'},
  
]

export function FactoryComboBox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [selected, setSelected] = useState(people[0])

  return (
    <div className="w-full  text-black border rounded-md border-white/70 ">
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative mt-1 z-150 ">
        <Listbox.Button className="relative  w-full cursor-default rounded-lg
          py-2 pl-3 pr-10 text-left shadow-md focus:outline-none
           focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
          <span className="block truncate">{selected.name} </span>
          <span className="block truncate">{selected.city} </span>
          
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 z-[200] max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {people.map((person, personIdx) => (
              <Listbox.Option
                key={personIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
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
                      {person.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  </div>
  )
}