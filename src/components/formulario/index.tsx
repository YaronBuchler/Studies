import React from "react";
import Botao from "../botao";
import styles from './Formulario.module.scss';
import { ITarefa } from "../../types/tarefa";
import { v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
  setTarefas:React.Dispatch<React.SetStateAction<ITarefa[]>>
  }> {
  state = {
    tarefa:"",
    tempo:"00:00",
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    this.props.setTarefas( tarefasAntigas=>
      [
        ...tarefasAntigas,
        {
          ...this.state,
          selecionado: false,
          completado: false, 
          id: uuidv4()
        }
      ]
    );  
    this.setState({
      tarefa:"",
      tempo:"00:00"
    })
  }
  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={styles.inputCointainer}>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento=>this.setState({...this.state,tarefa:evento.target.value})}
            placeholder="o que voce quer estudar"
            required
          />
        </div>
        <div className={styles.inputCointainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state,tempo:evento.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <button type="submit">

          Adicionar
        </button>
      </form>
    );
  }
}

export default Formulario;
