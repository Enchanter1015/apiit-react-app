import React from 'react';
 
const VERSION     = process.env.REACT_APP_VERSION     || 'local';
const TEAM        = process.env.REACT_APP_TEAM        || 'Development';
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'dev';
const CATALOG_VER = process.env.REACT_APP_CATALOG_VER || 'unknown';
 
function App() {
  return (
    <div style={{ fontFamily:'Arial', maxWidth:600, margin:'60px auto',
                  padding:40, border:'1px solid #ddd', borderRadius:8 }}>
      <h1 style={{ color:'#1A3F6B' }}>APIIT React APP V2</h1>

      <p style={{ color:'#2E5B8A', fontSize:14 }}>
        AWS Golden Path — SaaS Platform
      </p>
      <hr />
      <table style={{ width:'100%', borderCollapse:'collapse' }}>
        <tbody>
          <tr><td><strong>Version</strong></td><td>{VERSION}</td></tr>
          <tr><td><strong>Team</strong></td><td>{TEAM}</td></tr>
          <tr><td><strong>Environment</strong></td><td>{ENVIRONMENT}</td></tr>
          <tr><td><strong>Catalog</strong></td><td>{CATALOG_VER}</td></tr>
          <tr><td><strong>Status</strong></td>
              <td style={{ color:'green' }}>&#9679; Live</td></tr>
        </tbody>
      </table>
      <hr />
      <p style={{ fontSize:12, color:'#888' }}>
        Deployed via AWS Golden Path &mdash; Infrastructure as Code
      </p>
    </div>
  );
}
 
export default App;
