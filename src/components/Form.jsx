import React, { useRef } from "react";
import { useHandleMemo } from "../hooks/useHandleMemo";
import { useTextAreaFocus } from "../hooks/useTextAreaFocus";

//react icons imports
import { MdOutlineUpdate } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineSaveAlt } from "react-icons/md";

const Form = () => {
  const textAreaRef = useRef(null);
  const inputFileRef = useRef(null);

  const {
    text,
    file,
    img,
    router,
    loadong,
    handleChange,
    handleSelectFile,
    handleDeleteFile,
    handleSubmit,
    handleClickUpdate,
    handleClickDelete,
  } = useHandleMemo(inputFileRef);

  useTextAreaFocus(textAreaRef);

  if (router.pathname === "/notes") {
    return (
      <div className="h-full w-[370px]  rounded-xl mx-auto sm:border sm:w-2/3 sm:m-2.5">
        <div className="h-20 flex justify-center items-center">
          <button
            className="block h-12 w-24 border font-bold rounded-xl mx-2 hover:text-blue-500 "
            onClick={handleSubmit}
            disabled={loadong}
          >
            <div className="flex justify-center">
              <h1 className="my-auto mr-1">
                <MdOutlineSaveAlt />
              </h1>
              <p>Save</p>
            </div>
          </button>
          <label>
            <p className=" h-12 w-24 ml-2 flex justify-center items-center cursor-pointer border rounded-xl font-bold text-white bg-blue-500 hover:shadow-lg hover:transition active:opacity-70">
              Add file
            </p>
            <input
              type="file"
              ref={inputFileRef}
              accept=".png, .jpg, .jpeg, .pdf, .doc"
              className="hidden"
              onChange={handleSelectFile}
            />
          </label>
          <div className={file ? "border rounded-md" : "hidden"}>
            <button onClick={handleDeleteFile} className="inline text-xl mx-1">
              ×
            </button>
            <img src={img ? img : ""} alt="r" className="inline mx-1 h-6 w-6" />
            <p className={"inline"}>{file?.name}</p>
          </div>
        </div>

        <textarea
          type="text"
          value={text}
          onChange={handleChange}
          ref={textAreaRef}
          className="block w-full h-4/5  resize-none focus:outline-none  mx-auto sm:w-3/4 sm:h-4/5"
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
            <p className="my-auto mr-1">
              <MdOutlineUpdate />
            </p>
            <p>Update</p>
          </div>
        </button>
        <button
          className={
            "border font-bold px-6 py-2 rounded-xl mx-8 my-6 hover:text-blue-500 "
          }
          onClick={handleClickDelete}
          disabled={loadong}
        >
          <div className="flex">
            <p className="my-auto mr-1">
              <MdDelete />
            </p>
            <p>Delete</p>
          </div>
        </button>
      </div>

      <textarea
        type="text"
        value={text}
        onChange={handleChange}
        className="block w-full h-4/5 mx-auto resize-none focus:outline-none sm:w-3/4 sm:h-4/5"
      />
    </div>
  );
};

export default Form;
