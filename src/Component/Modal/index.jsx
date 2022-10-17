import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { use100vh } from "react-div-100vh";
import { FiX } from "react-icons/fi";
import Close from '../../assets/icons/close.svg'

const Modal = ({
  disableCloseModal = false,
  hasFooter = false,
  footerContent,
  isOpen,
  onClose,
  fullWidth = false,
  closemodal = () => {()=>onClose()},
  children,
  title = false,
  modalCss = "",
  autoWidth = false,
  fullScreen = false,
  style = {},
  name = "",
}) => {
  const height = use100vh();

  const focusButton = useRef(null);
  return (
    <Transition appear show={isOpen} as="div">
      <button
        ref={focusButton}
        tabIndex={0}
        className="opacity-0 absolute bottom-0"
      />
      <Dialog
        initialFocus={focusButton}
        as="div"
        style={{ maxHeight: height, height: height - 0.5, zIndex: 50 }}
        className={`fixed inset-0 flex justify-center items-center ${
          fullScreen
            ? `w-screen h-full ${fullWidth ? "w-full" : "md:w-4/5"}`
            : "w-screen"
        } flex items-center justify-center  overflow-auto `}
        onClose={() => {}}
      >
        <div
          className={`${
            fullScreen
              ? "w-full h-full "
              : `${
                  fullWidth
                    ? "w-full"
                    : autoWidth
                    ? "w-auto max-w-[95vw]"
                    : "w-11/12 max-w-[95vw]"
                } `
          }   max-h-full absolute z-40`}
        >
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              onClick={closemodal}
              className={`${disableCloseModal ? "pointer-events-none" : ""} ${
                fullScreen ? "fixed md:absolute" : "fixed"
              }  top-0 left-0 w-full inset-0 bg-gray-300 opacity-30`}
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              style={style}
              className={`flex flex-col w-full p-4 md:p-6 ${
                fullScreen ? "" : "shadow-xl rounded-2xl my-4"
              }  text-left align-middle max-h-screen md:max-h-[95vh] transition-all transform bg-white ${modalCss}`}
            >
              {title && (
                <Dialog.Title
                  className="sticky top-0 z-50 sm:static flex items-center justify-between py-3 px-4
                backdrop-blur sm:backdrop-filter-none  text-black gap-x-12"
                >
                          <h1 className="font-bold  text-xl">Add a technecian</h1>.
                  <p className="font-normal text-sm">{name}</p>
                  <button onClick={onClose}>
                    <FiX
                      title="Close"
                      className="transform scale-150 transition duration-100 hover:opacity-80"
                    />
                  </button>
                </Dialog.Title>
              )}
              <div className="flex-1 overflow-y-auto">{children}</div>
              {hasFooter && (
                <Dialog.Title className="bottom-0 z-50 static">
                  {footerContent}
                </Dialog.Title>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
