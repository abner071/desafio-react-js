import React from 'react';
import './styles.css';

function Servers() {
  const servers = [
    {
      host: 'server 1',
      memoria: '10 GB',
      vcpu: '4 vCPUS',
      disco: '200 GB',
      ip: '10.0.0.1',
    },
    {
      host: 'server 2',
      memoria: '10 GB',
      vcpu: '4 vCPUS',
      disco: '200 GB',
      ip: '10.0.0.1',
    },
  ];

  return (
    <>
      <div className="servers">
        <div className="label">
          <p>Tabela de servidores</p>
        </div>

        <div className="content">
          <table className="sv-table-bordered">
            <tr>
              <td className="sv-table-header">Select</td>
              <td className="sv-table-header">Hostname</td>
              <td className="sv-table-header">Memória</td>
              <td className="sv-table-header">vCPUs</td>
              <td className="sv-table-header">Disco</td>
              <td className="sv-table-header">IP</td>
            </tr>

            {
              servers.map((server) => (
                <tr>
                  <td>
                    <input type="checkbox" name="check-server" value="" />
                  </td>
                  <td>{server.host}</td>
                  <td>{server.memoria}</td>
                  <td>{server.vcpu}</td>
                  <td>{server.disco}</td>
                  <td>{server.ip}</td>
                </tr>
              ))
            }
          </table>
        </div>
      </div>
    </>
  );
}

export default Servers;
