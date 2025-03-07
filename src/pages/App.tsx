import React,{useState} from 'react';
import Cronometro from '../cronometro';
import Formulario from '../components/formulario';
import Lista from '../components/lista';
import style from './App.module.scss';
import { ITarefa } from '../types/tarefa';



function App() {
  const [tarefas, setTarefas]= useState<ITarefa[]|[]>([])
  const [selecionado, setSelecionado]= useState<ITarefa>();
  
  function selecionaTarefa(tarefaSelecionada: ITarefa){
     setSelecionado(tarefaSelecionada);
     setTarefas(tarefasAnteriores=>tarefasAnteriores.map(tarefa=> ({
      ...tarefa,
      selecionado: tarefa.id===tarefaSelecionada.id ? true : false
     }

     )))
     function finalizarTarefa(){
      if(selecionado){
        setSelecionado(undefined);
        setTarefas(tarefasAnteriores=>tarefasAnteriores.map(tarefa =>{
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            
                      }            } 
            return tarefa;
          
        }))
      }
    }
  }
    
  
  function finalizarTarefa(): void {
    throw new Error('Function not implemented.');
  }

    return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}  />
      <Lista 
      tarefas={tarefas} 
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro 
      selecionado={selecionado}
      finalizarTarefa={finalizarTarefa}
      />
     </div>
  );
}
export default App;