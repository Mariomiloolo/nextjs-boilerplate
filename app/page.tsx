export default function Home() {
return (
<div style={{fontFamily: 'Arial', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', minHeight: '100vh', padding: '20px'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)'}}>
<div style={{background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', color: 'white', padding: '40px', textAlign: 'center'}}>
<h1 style={{fontSize: '3em', margin: '0 0 15px 0', fontWeight: 'bold'}}>🏠 PropertyFlow</h1>
<p style={{fontSize: '1.3em', margin: 0, opacity: 0.9}}>Automated Property Management System</p>
<div style={{marginTop: '20px', padding: '10px 20px', background: 'rgba(255,255,255,0.2)', borderRadius: '25px', display: 'inline-block'}}>✅ LIVE SYSTEM - Vercel Hosted</div>
</div>
<div style={{padding: '50px'}}>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginBottom: '40px'}}>
<div style={{background: '#f8f9fa', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '3px solid #007bff'}}>
<div style={{fontSize: '3em', marginBottom: '15px'}}>📋</div>
<div style={{fontSize: '2.5em', fontWeight: 'bold', color: '#007bff', marginBottom: '10px'}}>0</div>
<div style={{fontSize: '1.1em', color: '#6c757d', fontWeight: '600'}}>Total Orders</div>
</div>
<div style={{background: '#f8f9fa', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '3px solid #28a745'}}>
<div style={{fontSize: '3em', marginBottom: '15px'}}>👷</div>
<div style={{fontSize: '2.5em', fontWeight: 'bold', color: '#28a745', marginBottom: '10px'}}>1</div>
<div style={{fontSize: '1.1em', color: '#6c757d', fontWeight: '600'}}>Active Contractors</div>
</div>
<div style={{background: '#f8f9fa', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '3px solid #ffc107'}}>
<div style={{fontSize: '3em', marginBottom: '15px'}}>⏳</div>
<div style={{fontSize: '2.5em', fontWeight: 'bold', color: '#ffc107', marginBottom: '10px'}}>0</div>
<div style={{fontSize: '1.1em', color: '#6c757d', fontWeight: '600'}}>Pending Tasks</div>
</div>
<div style={{background: '#f8f9fa', padding: '30px', borderRadius: '15px', textAlign: 'center', border: '3px solid #17a2b8'}}>
<div style={{fontSize: '3em', marginBottom: '15px'}}>🟢</div>
<div style={{fontSize: '2.5em', fontWeight: 'bold', color: '#17a2b8', marginBottom: '10px'}}>ONLINE</div>
<div style={{fontSize: '1.1em', color: '#6c757d', fontWeight: '600'}}>System Status</div>
</div>
</div>
<div style={{background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)', border: '2px solid #28a745', borderRadius: '15px', padding: '30px', textAlign: 'center'}}>
<h2 style={{color: '#155724', fontSize: '2em', marginBottom: '15px'}}>🎉 PropertyFlow Successfully Deployed!</h2>
<p style={{color: '#155724', fontSize: '1.2em', margin: 0}}>Your property management system is now <strong>LIVE</strong> and ready for Gmail integration, SMS automation, and AI parsing.</p>
</div>
</div>
</div>
</div>
)
}