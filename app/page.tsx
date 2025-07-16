‘use client
import { useState } from ‘react’
export default function PropertyFlow() {
const [activeTab, setActiveTab] = useState(‘dashboard’)
return (
<div style={{padding: '50px', textAlign: 'center', background: '#f0f0f0', minHeight: '100vh'}}>
<h1 style={{color: '#1e3c72', fontSize: '3em', marginBottom: '30px'}}>PropertyFlow</h1>
<div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginBottom: '40px'}}>
<button 
onClick={() => setActiveTab('dashboard')}
style={{padding: '20px 40px', fontSize: '1.2em', background: activeTab === 'dashboard' ? '#007bff' : '#ccc', color: 'white', border: 'none', borderRadius: '10px'}}
>
Dashboard
</button>
<button 
onClick={() => setActiveTab('contractors')}
style={{padding: '20px 40px', fontSize: '1.2em', background: activeTab === 'contractors' ? '#28a745' : '#ccc', color: 'white', border: 'none', borderRadius: '10px'}}
>
Contractors
</button>
</div>
<div style={{background: 'white', padding: '30px', borderRadius: '15px', maxWidth: '600px', margin: '0 auto'}}>
{activeTab === 'dashboard' && <h2>Dashboard Content - Active!</h2>}
{activeTab === 'contractors' && <h2>Contractors Content - Active!</h2>}
</div>
</div>
)
}