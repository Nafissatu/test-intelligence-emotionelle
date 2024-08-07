import React, { useState } from 'react';
import './App.css';
import logo from './logo.png'


function App() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleChange = (question, value) => {
    setAnswers({
      ...answers,
      [question]: parseInt(value, 10),
    });
  };
 
  const calculateScore = () => {
    const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
    setScore(totalScore);
  };

  return (
    <div className="App">
      <main>
      <header className ="App-header">
        <p>Ecole du LEADERSHIP</p>
        <h1>Test d’Intelligence Émotionnelle </h1>
        <p>Sous chaque affirmation, Selectionnez 1. pour Souvent 2. pour Parfois 3. pour Rarement et 4. Exceptionnellement.</p>
      </header>
      <form>
        <fieldset>
          <legend>Question 1 : Je sens que la colère monte rapidement lorsque l’on m’attaque verbalement.</legend>
          <label>
            <input
              type="radio"
              name="q1"
              value="1"
              checked={answers.q1 === 1}
              onChange={() => handleChange('q1', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="2"
              checked={answers.q1 === 2}
              onChange={() => handleChange('q1', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="3"
              checked={answers.q1 === 3}
              onChange={() => handleChange('q1', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q1"
              value="4"
              checked={answers.q1 === 4}
              onChange={() => handleChange('q1', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 2 : J’ai beaucoup de difficulté à recevoir les critiques, même constructives, qui viennent des autres</legend>
          <label>
            <input
              type="radio"
              name="q2"
              value="1"
              checked={answers.q2 === 1}
              onChange={() => handleChange('q2', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="2"
              checked={answers.q2 === 2}
              onChange={() => handleChange('q2', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="3"
              checked={answers.q2 === 3}
              onChange={() => handleChange('q2', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q2"
              value="4"
              checked={answers.q2 === 4}
              onChange={() => handleChange('q2', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 3 : Je panique lorsque je dois faire face à un conflit interpersonnel.</legend>
          <label>
            <input
              type="radio"
              name="q3"
              value="1"
              checked={answers.q3 === 1}
              onChange={() => handleChange('q3', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="2"
              checked={answers.q3 === 2}
              onChange={() => handleChange('q3', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="3"
              checked={answers.q3 === 3}
              onChange={() => handleChange('q3', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q3"
              value="4"
              checked={answers.q3 === 4}
              onChange={() => handleChange('q3', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 4 : Quand j’ai un problème professionnel ou personnel, je ne peux penser à rien d’autre.</legend>
          <label>
            <input
              type="radio"
              name="q4"
              value="1"
              checked={answers.q4 === 1}
              onChange={() => handleChange('q4', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="2"
              checked={answers.q4 === 2}
              onChange={() => handleChange('q4', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="3"
              checked={answers.q4 === 3}
              onChange={() => handleChange('q4', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q4"
              value="4"
              checked={answers.q4 === 4}
              onChange={() => handleChange('q4', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 5 : J’ai tendance à ruminer les difficultés que j’ai vécues dans le passé.</legend>
          <label>
            <input
              type="radio"
              name="q5"
              value="1"
              checked={answers.q5 === 1}
              onChange={() => handleChange('q5', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="2"
              checked={answers.q5 === 2}
              onChange={() => handleChange('q5', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="3"
              checked={answers.q5 === 3}
              onChange={() => handleChange('q5', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q5"
              value="4"
              checked={answers.q5 === 4}
              onChange={() => handleChange('q5', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 6 : Je ressens parfois de l’angoisse sans savoir véritablement pourquoi.</legend>
          <label>
            <input
              type="radio"
              name="q6"
              value="1"
              checked={answers.q6 === 1}
              onChange={() => handleChange('q6', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q6"
              value="2"
              checked={answers.q6 === 2}
              onChange={() => handleChange('q6', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q6"
              value="3"
              checked={answers.q6=== 3}
              onChange={() => handleChange('q6', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q6"
              value="4"
              checked={answers.q6 === 4}
              onChange={() => handleChange('q6', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 7 : J’ai de la difficulté à nommer plusieurs émotions, surtout lorsque je les vis.</legend>
          <label>
            <input
              type="radio"
              name="q7"
              value="1"
              checked={answers.q7 === 1}
              onChange={() => handleChange('q7', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q7"
              value="2"
              checked={answers.q7 === 2}
              onChange={() => handleChange('q7', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q7"
              value="3"
              checked={answers.q7 === 3}
              onChange={() => handleChange('q7', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q7"
              value="4"
              checked={answers.q7 === 4}
              onChange={() => handleChange('q7', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 8 : Je trouve difficile les occasions où je dois exprimer mes émotions (ex.: de l’affection). </legend>
          <label>
            <input
              type="radio"
              name="q8"
              value="1"
              checked={answers.q8 === 1}
              onChange={() => handleChange('q8', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q8"
              value="2"
              checked={answers.q8 === 2}
              onChange={() => handleChange('q8', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q8"
              value="3"
              checked={answers.q8 === 3}
              onChange={() => handleChange('q8', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q8"
              value="4"
              checked={answers.q8 === 4}
              onChange={() => handleChange('q8', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 9 : Peu importe ce que j’accomplis, j’ai toujours l’impression que j’aurais pu faire plus.</legend>
          <label>
            <input
              type="radio"
              name="q9"
              value="1"
              checked={answers.q9 === 1}
              onChange={() => handleChange('q9', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q9"
              value="2"
              checked={answers.q9 === 2}
              onChange={() => handleChange('q9', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q9"
              value="3"
              checked={answers.q9 === 3}
              onChange={() => handleChange('q9', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q9"
              value="4"
              checked={answers.q9 === 4}
              onChange={() => handleChange('q9', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 10 : Je fais de mon mieux surtout lorsqu’il y a quelqu’un pour voir les résultats.</legend>
          <label>
            <input
              type="radio"
              name="q10"
              value="1"
              checked={answers.q10 === 1}
              onChange={() => handleChange('q10', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q10"
              value="2"
              checked={answers.q10 === 2}
              onChange={() => handleChange('q10', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q10"
              value="3"
              checked={answers.q10 === 3}
              onChange={() => handleChange('q10', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q10"
              value="4"
              checked={answers.q10 === 4}
              onChange={() => handleChange('q10', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 11 : Je fais habituellement tout ce que je peux pour me retenir de pleurer en public.</legend>
          <label>
            <input
              type="radio"
              name="q11"              value="1"
              checked={answers.q11 === 1}
              onChange={() => handleChange('q11' ,'1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q11"              value="2"
              checked={answers.q11 === 2}
              onChange={() => handleChange('q11' ,'2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q11"              value="3"
              checked={answers.q11 === 3}
              onChange={() => handleChange('q11', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q11"              value="4"
              checked={answers.q11 === 4}
              onChange={() => handleChange('q11','4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 12 : Lorsque les autres vivent des difficultés, je ne sais pas quoi leur dire.</legend>
          <label>
            <input
              type="radio"
              name="q12"
              value="1"
              checked={answers.q12 === 1}
              onChange={() => handleChange('q12', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q12"
              value="2"
              checked={answers.q12 === 2}
              onChange={() => handleChange('q12', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q12"
              value="3"
              checked={answers.q12 === 3}
              onChange={() => handleChange('q12', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q12"
              value="4"
              checked={answers.q12 === 4}
              onChange={() => handleChange('q12', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 13 : Quand j’échoue quelque chose, je me tiens un discours intérieur auto dénigrant (ex.: « Je n'y arriverai jamais ).</legend>
          <label>
            <input
              type="radio"
              name="q13"
              value="1"
              checked={answers.q13 === 1}
              onChange={() => handleChange('q13', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q13"
              value="2"
              checked={answers.q13 === 2}
              onChange={() => handleChange('q13', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q13"
              value="3"
              checked={answers.q13 === 3}
              onChange={() => handleChange('q13', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q13"
              value="4"
              checked={answers.q13 === 4}
              onChange={() => handleChange('q13', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 14 : Je trouve qu’il y a plusieurs choses qui clochent en moi et j’ai peur du jugement des autres. 
          </legend>
          <label>
            <input
              type="radio"
              name="q14"
              value="1"
              checked={answers.q14 === 1}
              onChange={() => handleChange('q14', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q14"
              value="2"
              checked={answers.q14 === 2}
              onChange={() => handleChange('q14', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q14"
              value="3"
              checked={answers.q14 === 3}
              onChange={() => handleChange('q14', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q14"
              value="4"
              checked={answers.q14 === 4}
              onChange={() => handleChange('q14', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 15 : Selon moi, il est préférable de rester neutre et détaché envers les autres tant que je ne les connais pas suffisamment</legend>
          <label>
            <input
              type="radio"
              name="q15"
              value="1"
              checked={answers.q15 === 1}
              onChange={() => handleChange('q15', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q15"
              value="2"
              checked={answers.q15 === 2}
              onChange={() => handleChange('q15', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q15"
              value="3"
              checked={answers.q15 === 3}
              onChange={() => handleChange('q15', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q15"
              value="4"
              checked={answers.q15 === 4}
              onChange={() => handleChange('q15', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 16 : Lorsqu’une personne me partage ses difficultés, j’ai tendance à vouloir l’aider à régler ses problèmes plutôt que de seulement l'écouter. </legend>
          <label>
            <input
              type="radio"
              name="q16"
              value="1"
              checked={answers.q16 === 1}
              onChange={() => handleChange('q16', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q16"
              value="2"
              checked={answers.q16 === 2}
              onChange={() => handleChange('q16', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q16"
              value="3"
              checked={answers.q16 === 3}
              onChange={() => handleChange('q16', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q16"
              value="4"
              checked={answers.q16 === 4}
              onChange={() => handleChange('q16', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 17 : J’ai souvent de la difficulté à comprendre le langage non verbal des autres.</legend>
          <label>
            <input
              type="radio"
              name="q17"
              value="1"
              checked={answers.q17 === 1}
              onChange={() => handleChange('q17', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q17"
              value="2"
              checked={answers.q17 === 2}
              onChange={() => handleChange('q17', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q17"
              value="3"
              checked={answers.q17 === 3}
              onChange={() => handleChange('q17', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q17"
              value="4"
              checked={answers.q17 === 4}
              onChange={() => handleChange('q17', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 18 : J’ai besoin que les autres m’encouragent pour rester motivé(e).</legend>
          <label>
            <input
              type="radio"
              name="q18"
              value="1"
              checked={answers.q18 === 1}
              onChange={() => handleChange('q18', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q18"
              value="2"
              checked={answers.q18 === 2}
              onChange={() => handleChange('q18', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q18"
              value="3"
              checked={answers.q18 === 3}
              onChange={() => handleChange('q18', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q18"
              value="4"
              checked={answers.q18 === 4}
              onChange={() => handleChange('q18', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 19 : Je réagis très fortement à la suite de problèmes mineurs.</legend>
          <label>
            <input
              type="radio"
              name="q19"
              value="1"
              checked={answers.q19  === 1}
              onChange={() => handleChange('q19', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q19"
              value="2"
              checked={answers.q19 === 2}
              onChange={() => handleChange('q19', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q19"
              value="3"
              checked={answers.q19 === 3}
              onChange={() => handleChange('q19', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q19"
              value="4"
              checked={answers.q19 === 4}
              onChange={() => handleChange('q19', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 20 : Les obstacles qui se dressent sur ma route m’empêchent souvent de réaliser mes objectifs.</legend>
          <label>
            <input
              type="radio"
              name="q20"
              value="1"
              checked={answers.q20 === 1}
              onChange={() => handleChange('q20', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q20"
              value="2"
              checked={answers.q20 === 2}
              onChange={() => handleChange('q20', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q20"
              value="3"
              checked={answers.q20 === 3}
              onChange={() => handleChange('q20', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q20"
              value="4"
              checked={answers.q20 === 4}
              onChange={() => handleChange('q20', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 21 : Je ne suis pas satisfait(e) de mon travail tant qu’une autre personne ne m’a pas félicité(e).</legend>
          <label>
            <input
              type="radio"
              name="q21"
              value="1"
              checked={answers.q21 === 1}
              onChange={() => handleChange('q21', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q21"
              value="2"
              checked={answers.q21 === 2}
              onChange={() => handleChange('q21', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q21"
              value="3"
              checked={answers.q21 === 3}
              onChange={() => handleChange('q21', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q21"
              value="4"
              checked={answers.q21 === 4}
              onChange={() => handleChange('q21', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 22 : Je me sens coupable à propos des choses que je ne fais pas parfaitement même lorsque je fais de mon mieux</legend>
          <label>
            <input
              type="radio"
              name="q22"
              value="1"
              checked={answers.q22 === 1}
              onChange={() => handleChange('q22', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q22"
              value="2"
              checked={answers.q22 === 2}
              onChange={() => handleChange('q22', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q22"
              value="3"
              checked={answers.q22 === 3}
              onChange={() => handleChange('q22', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q22"
              value="4"
              checked={answers.q22 === 4}
              onChange={() => handleChange('q22', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 23 : Je ressens souvent une bonne dose d’anxiété. </legend>
          <label>
            <input
              type="radio"
              name="q23"
              value="1"
              checked={answers.q23 === 1}
              onChange={() => handleChange('q23', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q23"
              value="2"
              checked={answers.q23 === 2}
              onChange={() => handleChange('q23', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q23"
              value="3"
              checked={answers.q23 === 3}
              onChange={() => handleChange('q23', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q23"
              value="4"
              checked={answers.q23 === 4}
              onChange={() => handleChange('q23', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 24 : Le contact avec certaines personnes me porte à me sentir mal, peu importe les événements ou ce que je fais</legend>
          <label>
            <input
              type="radio"
              name="q24"
              value="1"
              checked={answers.q24 === 1}
              onChange={() => handleChange('q24', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q24"
              value="2"
              checked={answers.q24 === 2}
              onChange={() => handleChange('q24', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q24"
              value="3"
              checked={answers.q24 === 3}
              onChange={() => handleChange('q24', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q24"
              value="4"
              checked={answers.q24 === 4}
              onChange={() => handleChange('q24', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 25 : Quand je veux quelque chose, j’essaie de l’obtenir le plus rapidement possible.</legend>
          <label>
            <input
              type="radio"
              name="q25"
              value="1"
              checked={answers.q25 === 1}
              onChange={() => handleChange('q25', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q25"
              value="2"
              checked={answers.q25 === 2}
              onChange={() => handleChange('q25', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q25"
              value="3"
              checked={answers.q25 === 3}
              onChange={() => handleChange('q25', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q25"
              value="4"
              checked={answers.q25 === 4}
              onChange={() => handleChange('q25', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 26 : Les personnes qui expriment ouvertement leurs émotions me font sentir mal à l’aise. </legend>
          <label>
            <input
              type="radio"
              name="q26"
              value="1"
              checked={answers.q26 === 1}
              onChange={() => handleChange('q26', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q26"
              value="2"
              checked={answers.q26 === 2}
              onChange={() => handleChange('q26', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q26"
              value="3"
              checked={answers.q26 === 3}
              onChange={() => handleChange('q26', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q26"
              value="4"
              checked={answers.q26 === 4}
              onChange={() => handleChange('q26', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 27 : J’ai me sens plus souvent déprimé(e) qu’heureux (se).</legend>
          <label>
            <input
              type="radio"
              name="q27"
              value="1"
              checked={answers.q27 === 1}
              onChange={() => handleChange('q27', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q27"
              value="2"
              checked={answers.q27 === 2}
              onChange={() => handleChange('q27', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q27"
              value="3"
              checked={answers.q27 === 3}
              onChange={() => handleChange('q27', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q27"
              value="4"
              checked={answers.q27 === 4}
              onChange={() => handleChange('q27', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 28 : Lorsque j’ai un problème avec une personne, je vis longtemps de la rancune envers elle.</legend>
          <label>
            <input
              type="radio"
              name="q28"
              value="1"
              checked={answers.q28 === 1}
              onChange={() => handleChange('q28', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q28"
              value="2"
              checked={answers.q28 === 2}
              onChange={() => handleChange('q28', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q28"
              value="3"
              checked={answers.q28 === 3}
              onChange={() => handleChange('q28', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q28"
              value="4"
              checked={answers.q28 === 4}
              onChange={() => handleChange('q28', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 29 : J’ai de la difficulté à accepter les choses que je ne peux pas changer. </legend>
          <label>
            <input
              type="radio"
              name="q29"
              value="1"
              checked={answers.q29 === 1}
              onChange={() => handleChange('q29', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q29"
              value="2"
              checked={answers.q29 === 2}
              onChange={() => handleChange('q29', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q29"
              value="3"
              checked={answers.q29 === 3}
              onChange={() => handleChange('q29', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q29"
              value="4"
              checked={answers.q29 === 4}
              onChange={() => handleChange('q29', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <fieldset>
          <legend>Question 30 : J’ai l’impression que mes émotions négatives (tristesse, colère, etc.) sont impossibles à contrôler </legend>
          <label>
            <input
              type="radio"
              name="q30"
              value="1"
              checked={answers.q30 === 1}
              onChange={() => handleChange('q30', '1')}
            />
            Souvent
          </label>
          <label>
            <input
              type="radio"
              name="q30"
              value="2"
              checked={answers.q30 === 2}
              onChange={() => handleChange('q30', '2')}
            />
            Parfois
          </label>
          <label>
            <input
              type="radio"
              name="q30"
              value="3"
              checked={answers.q30 === 3}
              onChange={() => handleChange('q30', '3')}
            />
            Rarement
          </label>
          <label>
            <input
              type="radio"
              name="q30"
              value="4"
              checked={answers.q30 === 4}
              onChange={() => handleChange('q30', '4')}
            />
            Exceptionnellement
          </label>
        </fieldset>
        <button type="button" onClick={calculateScore}>
          Obtenir le score
        </button>
      </form>
      {score !== null && <div className="result">Votre score est : {score}</div>}
    </main>
    <footer className="App-footer">
      <p>Ecole du LEADERSHIP / Avec Romuald KABORE,<br/>Psychologue & Coach <br/>Tél: 226 76 22 81 01.</p>
  </footer>
    </div>
  );
}

export default App;
