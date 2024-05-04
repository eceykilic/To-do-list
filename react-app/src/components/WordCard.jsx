import axios from "axios";

const WordCard = (props) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:9000/api/v1/workintech/word/${props.word.id}`)
      .then(() => {
        props.onDelete(props.word.id);
      })
      .catch(error => {
        console.error('Error deleting word:', error);
      });
  };

  return (
    <div className="bg-amber-200 shadow-md rounded-lg overflow-hidden flex flex-row justify-between mx-auto">
      <div className="p-4 flex justify-between gap-10">
        <p className="text-teal-900 text-lg w-20 font-medium">{props.word.writer}</p>
        <p className="text-lg text-teal-900 w-40 font-medium">{props.word.description}</p>
      </div>
      <div className="p-3">
        <button
          className="bg-[#C391E8] hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Yaptım
        </button>
      </div>
    </div>
  );
};

export default WordCard;
