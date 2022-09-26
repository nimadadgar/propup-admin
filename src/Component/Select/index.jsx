import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

const Select = ({
  onBottom = false,
  value = 10,
  title = "نمایش در هر صفحه",
  onSelectChange = () => {},
  className = "",
  items = [10, 20, 30, 40, 50],
  addTitleToItems = true,
}) => {
  return (
    <div className={`w-56 font-normal ${className}`}>
      <Listbox value={value} onChange={(value) => onSelectChange(value)}>
        <div className="relative">
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={`absolute ${
                onBottom ? "top-10" : "bottom-10"
              } border mt-1 w-full rounded-md bg-white text-sm`}
            >
              {items.map((item, id) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-sky-100 text-sky-400" : "text-title"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={` ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {item}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-accept">
                          <FiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
          <Listbox.Button
            className="flex w-full cursor-default rounded-lg bg-white border p-2 pl-0
          shadow-md text-sm"
          >
            <span className="pointer-events-none pl-2">
              <FiChevronDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
            <span className="text-title">
              {" "}
              {value}{" "}
              <span className="mr-1">
                {(addTitleToItems || !value) ? title : ""}
              </span>{" "}
            </span>
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
