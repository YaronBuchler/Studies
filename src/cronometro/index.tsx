
import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../common/utils/time';
import Botao from '../components/botao';
import { ITarefa } from '../types/tarefa';
import Relogio from './relogio';
import styles from './relogio/Cronometro.module.scss'


interface Props{
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void
}
export default function Cronometro({selecionado,finalizarTarefa}: Props){
  const [tempo, setTempo]=useState<number>();
  useEffect(()=>{
   if(selecionado?.tempo){
    setTempo(tempoParaSegundos(selecionado.tempo))
   }
  },[selecionado])
  function regressiva(contador:number=0){
  setTimeout(()=>{
    if(contador>0){
      setTempo(contador-1);
      return regressiva(contador-1);
    }
    finalizarTarefa();
   },1000);
  }

  return (
   <div className={styles.cronometro}>
 <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>

  <div className={styles.relogioWrapper}>
<Relogio tempo={tempo} />
  </div>
 <button onClick={()=>regressiva(tempo)}>
    Começar!    
 </button>
   </div>

    )
}
export {};