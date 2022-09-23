import {useState, useEffect} from "react";

const API = "http://localhost:5000";

const SalvarPerguntas = () => {
    
  const [value, setQuestion] = useState("")
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Loads todos on page load
  useEffect(() => {

  const loadData = async () => {

    setLoading(true);

    const res = await fetch(API + "/custom-questions")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));

    setLoading(false);
    setQuestions(res);
  };

  loadData();
  }, []);
    
  const handleSubmit = async (e) => {
    e.preventDefault();

    const question = {
      id: Math.random(),
      value,
    }
    
    await fetch(API + "/custom-questions", {
      method: "POST",
      body: JSON.stringify(question),
      headers: {
        "Content-Type": "application/json"
      },
    });
    setQuestions((prevState) => [...prevState, question]);
    setQuestion("");
  }
    
  if (loading) {
    return <p>Carregando...</p>
  }

  return (
      <div className="AreaPerguntas">
        <div className="BotaoSalvarPerguntas">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="value"
              onChange={(e) => setQuestion(e.target.value)}
              value={value || ""}
              required
              />
            <input type="submit" value="Salvar"/>
          </form>
        </div>
          <div className='ListaPerguntas'>
            <div>
              <h2>Perguntas Customizadas:</h2>
              {questions.length === 0 && <p>Não há perguntas!</p>}
              {questions.map((question) => (
              <div className='Pergunta' key={question.id}>
                  <p>{question.value}</p>
              </div>
              ))}
            </div>
          </div>
      </div>
  );
}

export default SalvarPerguntas;