import React from "react";
import Botao from "../botao";
import './styles.scss';
class Formulario extends React.Component {
  render() {
    return (
      <form className="novaTarefa">
        <div className="inputCointainer">
          <label htmlFor="tarefa">Tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="o que voce quer estudar"
            required
          />
        </div>
        <div className="inputCointainer">
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;
