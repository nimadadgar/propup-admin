import React, { useEffect, useState } from "react";
import { Combobox } from "@headlessui/react";
import { FcCheckmark } from "react-icons/fc";
import { FiChevronDown } from "react-icons/fi";
import { FcHighPriority } from "react-icons/fc";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ComboBox = ({ items = [],dataLabel,hasError,msg,dataId,onChange,value,label = "", className = "" }) => {
  const [query, setQuery] = useState("");

const onChangeItem=(data)=>{
   if (onChange)
    onChange(data[dataId]);
}

const getValue=(value)=>{

  return items.filter(d=>d[dataId]==value)[0]
}

  const filteredItems =
    query === ""
      ? items
      : items.filter((item) => {
          return item[dataLabel].includes(query);
        });


  return (
    <Combobox
      as="div"
      className={className}
      value={getValue(value)}
      onChange={(data)=>onChangeItem(data)}>

      <div className={`relative  rounded-xl focus-within:border-sky-500 ${hasError?'border-red-500':'border-gray-500'}   border   outline-1 group justify-between`}>
        <Combobox.Input
          className="h-12  pr-8 w-full font-semibold text-gray-800 appearance-none focus:outline-none bg-transparent rounded-xl "
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(item) =>item!=null?item[dataLabel]:""}
        />
        <label className="text-sm text-gray-800 font-semibold group-focus-within:text-persian-blue-700 absolute top-0.5 rounded-xl bg-white right-0 pointer-events-none transform -z-1 origin-0 scale-75 -translate-y-5 z-0 ml-3 px-3 py-1.5">
          {label}
        </label>
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <FiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        {filteredItems.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItems.map((item, index) => (
              <Combobox.Option
                key={item[dataId]}
                value={item}
                className={({ active }) =>
                  classNames(
                    "relative cursor-default select-none py-2 pl-3 pr-9",
                    active ? "bg-indigo-600 text-white" : "text-gray-900"
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        "block truncate",
                        selected ? "font-semibold" : "font-normal"
                      )}
                    >
                      {item[dataLabel]}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          "absolute inset-y-0 -right-1 flex items-center pr-4",
                          active ? "text-white" : "text-indigo-600"
                        )}
                      >
                        <FcCheckmark
                          className="h-5 w-5 mb-1.5"
                          aria-hidden="true"
                        />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
      {hasError && msg.trim() !== "" && (
        <div
          className={
            "min-h-9 py-2 rounded-lg bg-alizarin-crimson-100 text-error font-semibold text-xs flex items-center mt-2 text-right p-1"
          }
        >
          <FcHighPriority className="h-6 w-6 ml-1" />
          {msg}
        </div>
      )}

    </Combobox>
  );
};

export default ComboBox;
