import React from "react";
import { useHandleMemo } from "../hooks/useHandleMemo";

//react icons imports
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";

const Form = () => {
  const {
    text,
    router,
    handleChange,
    handleSubmit,
    handleClickUpdate,
    handleClickDelete,
  } = useHandleMemo();

  if (router.pathname === "/notes") {
    return (
      <div className="h-full w-[370px]  rounded-xl mx-auto sm:border sm:w-2/3 sm:m-2.5">
        <div className="text-center">
          <button
            className={
              "border font-bold px-6 py-2 rounded-xl mx-8  my-6 hover:text-blue-500 "
            }
            onClick={handleSubmit}
          >
            <div className="flex">
              <h1 className="my-auto mr-1">
                <MdOutlineSaveAlt />
              </h1>
              <p>Save</p>
            </div>
          </button>
        </div>

        <textarea
          type="text"
          value={text}
          onChange={handleChange}
          className="block w-full h-4/5  border-2 rounded-xl mx-auto sm:w-3/4 sm:h-4/5"
        />
      </div>
    );
  }

  return (
    <div className="h-full w-[370px]  rounded-xl mx-auto sm:border sm:w-2/3 sm:m-2.5">
      <div className="flex justify-center">
        <button
          className={
            "border font-bold px-6 py-2 rounded-xl mx-8  my-6 hover:text-blue-500 "
          }
          onClick={handleClickUpdate}
        >
          <div className="flex">
            <h1 className="my-auto mr-1">
              <GrUpdate />
            </h1>
            <p>Update</p>
          </div>
        </button>
        <button
          className={
            "border font-bold px-6 py-2 rounded-xl mx-8 my-6 hover:text-blue-500 "
          }
          onClick={handleClickDelete}
        >
          <div className="flex">
            <h1 className="my-auto mr-1">
              <MdDelete />
            </h1>
            <p>Delete</p>
          </div>
        </button>
      </div>

      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="block w-full h-4/5  border-2 rounded-xl mx-auto sm:w-3/4 sm:h-4/5"
      />
    </div>
  );
};

export default Form;
