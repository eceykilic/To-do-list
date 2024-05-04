import './reset.css';
import './App.css';
import WordCard from './components/WordCard';
import WordForm from './components/WordForm';
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [words, setWords] = useState([]);

  const fetchData = () => {
    axios.get('http://localhost:9000/api/v1/workintech/word/')
      .then(response => {
        setWords(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleSubmit = (writer, description) => {
    const data = {
      id: Date.now(),
      writer: writer,
      description: description
    };
  
    axios.post('http://localhost:9000/api/v1/workintech/word/', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      setWords([...words, response.data]);
    })
    .catch(error => {
      console.error('Error submitting data:', error);
    });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:9000/api/v1/workintech/word/${id}`);
    setWords(prevWords => prevWords.filter(word => word.id !== id));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mx-auto">
        <WordForm handleSubmit={handleSubmit} />
      </div>
      <div className="flex flex-col max-w-md mx-auto gap-4">
        {words.map(word => (
          <div key={word.id}>
            <WordCard word={word} onDelete={handleDelete} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
