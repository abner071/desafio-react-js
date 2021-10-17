import React, { useState, useEffect } from 'react';
import './styles.css';

import { useData } from '../../hooks/data';

function Summary() {
  const [ state, setState ] = useState({
    selected: 0,
    memory: 0,
    cpu: 0,
    disk: 0
  });
  
  const { serversSelected } = useData();

  useEffect(() => {
    var selected = 0
    var memory = 0;
    var cpu = 0 ;
    var disk = 0;

    serversSelected.forEach((server) => {
      selected += 1;
      memory += server.configuracao.memoryProvisioned;
      cpu += server.configuracao.cpuProvisioned;
      disk += server.configuracao.totalDiskGB; 
    });

    setState({
      selected,
      memory,
      cpu,
      disk,
    });


  }, [serversSelected]);


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
              <td>
                {
                  state.selected > 0 
                    ?
                      state.selected === 1 ?
                        state.selected + ' servidor selecionado' :
                        state.selected + ' servidores selecionados' 
                    :
                      'Nenhum servidor selecionado'
                }
              </td>
            </tr>
            <tr>
              <td className="sm-table-header">Total de Memória</td>
              <td>
                {
                  state.memory > 0 && state.memory + ' GB'
                }
              </td>
            </tr>
            <tr>
              <td className="sm-table-header">Total de CPUs</td>
              <td>
                {
                  state.cpu > 0 && state.cpu + ' vCPUs'
                }
              </td>
            </tr>
            <tr>
              <td className="sm-table-header">Total de Discos</td>
              <td>
                {
                  state.disk > 0 && state.disk + ' GB'
                }
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Summary;
