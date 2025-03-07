import React from 'react';
import styles from './Botao.module.scss';

interface BotaoProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children?: React.ReactNode;
}

class Botao extends React.Component<BotaoProps> {
  render() {
    const { type = "button",onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={styles.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;