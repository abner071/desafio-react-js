import React, { useState, useEffect } from 'react';
import './styles.css';

import { useData } from '../../hooks/data';

function Servers() {
  const { servers, handleSelectServer } = useData();

  const [ serversList, setServersList ] = useState();
  const [ orderList, setOrderList ] = useState({
    hostname: 'asc',
    memoryProvisioned: 'asc',
    cpuProvisioned: 'asc',
    totalDiskGB: 'asc',
    ip: 'asc',
  });

  function handleOrderServers(field){
    const result = serversList.slice().sort(function compare(a, b) {
      var alpha = (field === 'hostname') ? a[field] : a['configuracao'][field];
      var beta = (field === 'hostname') ? b[field] : b['configuracao'][field];

      if(orderList[field] === 'asc'){
        if (alpha < beta) return -1;
        if (alpha > beta) return 1;
      }else{
        if (alpha > beta) return -1;
        if (alpha < beta) return 1;
      }

      return 0;
    });
    
    setServersList(() => result);

    setOrderList({
      ...orderList,
      [field]: (orderList[field] === 'asc') ? 'desc' : 'asc'
    });
  }

  useEffect(() => {
    setServersList(servers);
  }, [servers]);

  return (
    <>
      <div className="servers">
        <div className="label">
          <p>Tabela de servidores</p>
        </div>

        <div className="content">
          <table className="sv-table-bordered">
            <thead>
              <tr>
                <td className="sv-table-header">Select</td>
                <td className="sv-table-header cursor-pointer" onClick={() => handleOrderServers('hostname')}>Hostname</td>
                <td className="sv-table-header cursor-pointer" onClick={() => handleOrderServers('memoryProvisioned')} >Memória</td>
                <td className="sv-table-header cursor-pointer" onClick={() => handleOrderServers('cpuProvisioned')} >vCPUs</td>
                <td className="sv-table-header cursor-pointer" onClick={() => handleOrderServers('totalDiskGB')} >Disco</td>
                <td className="sv-table-header cursor-pointer" onClick={() => handleOrderServers('ip')} >IP</td>
              </tr>
            </thead>
            <tbody>
              {
                serversList && serversList.map((server) => {
                  return (
                    <tr key={server.id_vm}>
                      <td>
                        <input type="checkbox" name="check-server" value={server.id_vm} onChange={(event) => handleSelectServer(event.target.checked, server)} />
                      </td>
                      <td>{server.hostname}</td>
                      <td>{server.configuracao.memoryProvisioned} GB</td>
                      <td>{server.configuracao.cpuProvisioned} vCPUs</td>
                      <td>{server.configuracao.totalDiskGB} GB</td>
                      <td>{server.configuracao.ip}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Servers;
