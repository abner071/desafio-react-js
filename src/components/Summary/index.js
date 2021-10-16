import React from 'react';
import './styles.css';

function Summary() {
  return (
    <>
      <div className="summary">
        <div className="label">
          <p>Sumário dos recursos dos servidores</p>
        </div>

        <div className="content">
          <table className="sm-table-bordered">
            <tr>
              <td className="sm-table-header">Servidores Selecionados</td>
              <td></td>
            </tr>
            <tr>
              <td className="sm-table-header">Total de Memória</td>
              <td></td>
            </tr>
            <tr>
              <td className="sm-table-header">Total de CPUs</td>
              <td></td>
            </tr>
            <tr>
              <td className="sm-table-header">Total de Discos</td>
              <td></td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Summary;
