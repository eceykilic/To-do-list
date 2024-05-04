import { useState } from 'react';


const WordForm = (props) => {

  const [writer, setWriter] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    props.handleSubmit(writer, description);
    setWriter("");
    setDescription("");
  }

  return (
    <>
    <div className='mb-5 flex mx-auto bg-[#C391E8]'>
        <img src="./pixel.png" alt="" className='max-w-sm mx-auto'/>
      </div>
    <div className="max-w-md mx-auto mt-5">
      <p className='font-bold text-center m-4 text-4xl text-[#FD5DA9] font-custom'>Bugün Ne Yapmalı?</p>
      <div className="bg-[#C391E8] shadow-md rounded p-4 mb-4">
        <div className="mb-4">
          <label className="block text-stone-50 text-lg font-bold mb-2" htmlFor="writer">
            İsim:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="writer"
            type="text"
            placeholder="Kim yapacak?"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-stone-50 text-lg font-bold mb-2" htmlFor="description">
            Yapılacak:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Ne yapılacak?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-end">
          <button
            className="bg-[#FD5DA9] hover:bg-teal-400 hover:text-teal-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default WordForm;