export default function PropertyFlow() {
return (
<div style={{
fontFamily: ‘-apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, sans-serif’,
background: ‘linear-gradient(135deg, #667eea 0%, #764ba2 100%)’,
minHeight: ‘100vh’,
padding: ‘20px’
}}>
<div style={{
maxWidth: ‘1200px’,
margin: ‘0 auto’,
background: ‘white’,
borderRadius: ‘20px’,
boxShadow: ‘0 20px 40px rgba(0,0,0,0.1)’,
overflow: ‘hidden’
}}>

```
    {/* Header */}
    <div style={{
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '3em', 
        margin: '0 0 15px 0', 
        fontWeight: 'bold' 
      }}>
        🏠 PropertyFlow
      </h1>
      <p style={{ 
        fontSize: '1.3em', 
        margin: 0,
        opacity: 0.9 
      }}>
        Automated Property Management System
      </p>
      <div style={{
        marginTop: '20px',
        padding: '10px 20px',
        background: 'rgba(255,255,255,0.2)',
        borderRadius: '25px',
        display: 'inline-block'
      }}>
        ✅ LIVE SYSTEM - Vercel Hosted
      </div>
    </div>

    {/* Main Content */}
    <div style={{ padding: '50px' }}>
      
      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginBottom: '50px'
      }}>
        {[
          { title: 'Total Orders', value: '0', color: '#007bff', icon: '📋' },
          { title: 'Active Contractors', value: '1', color: '#28a745', icon: '👷' },
          { title: 'Pending Tasks', value: '0', color: '#ffc107', icon: '⏳' },
          { title: 'System Status', value: 'ONLINE', color: '#17a2b8', icon: '🟢' }
        ].map((stat, index) => (
          <div key={index} style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            padding: '30px',
            borderRadius: '15px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: `3px solid ${stat.color}`
          }}>
            <div style={{ fontSize: '3em', marginBottom: '15px' }}>
              {stat.icon}
            </div>
            <div style={{
              fontSize: '2.5em',
              fontWeight: 'bold',
              color: stat.color,
              marginBottom: '10px'
            }}>
              {stat.value}
            </div>
            <div style={{
              fontSize: '1.1em',
              color: '#6c757d',
              fontWeight: '600'
            }}>
              {stat.title}
            </div>
          </div>
        ))}
      </div>

      {/* Success Message */}
      <div style={{
        background: 'linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%)',
        border: '2px solid #28a745',
        borderRadius: '15px',
        padding: '30px',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: '#155724',
          fontSize: '2em',
          marginBottom: '15px'
        }}>
          🎉 PropertyFlow Successfully Deployed!
        </h2>
        <p style={{
          color: '#155724',
          fontSize: '1.2em',
          lineHeight: '1.6',
          margin: 0
        }}>
          Your property management system is now <strong>LIVE</strong> and ready for configuration.
          <br />
          Next: Add Gmail integration, SMS automation, and AI parsing.
        </p>
      </div>

      {/* Features Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '30px'
      }}>
        
        {/* Contractors Card */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e9ecef'
        }}>
          <h3 style={{
            color: '#1e3c72',
            fontSize: '1.5em',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            👷 Active Contractors
          </h3>
          
          <div style={{
            background: 'white',
            borderRadius: '10px',
            padding: '20px',
            border: '2px solid #007bff'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '15px',
              fontSize: '0.95em'
            }}>
              <div><strong>Name:</strong> Mario (TEST)</div>
              <div><strong>Phone:</strong> 07308141302</div>
              <div><strong>Email:</strong> mario.grimsby@gmail.com</div>
              <div><strong>City:</strong> Grimsby</div>
              <div><strong>Specialty:</strong> Handyman</div>
              <div>
                <strong>Status:</strong>{' '}
                <span style={{
                  background: '#d4edda',
                  color: '#155724',
                  padding: '4px 12px',
                  borderRadius: '15px',
                  fontSize: '0.9em',
                  fontWeight: 'bold'
                }}>
                  Available
                </span>
              </div>
            </div>
          </div>
          
          <button style={{
            background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
            color: 'white',
            border: 'none',
            padding: '12px 25px',
            borderRadius: '25px',
            fontSize: '1em',
            cursor: 'pointer',
            marginTop: '20px',
            fontWeight: '600'
          }}>
            ➕ Add New Contractor
          </button>
        </div>

        {/* Integration Status */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e9ecef'
        }}>
          <h3 style={{
            color: '#1e3c72',
            fontSize: '1.5em',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🔗 Integration Status
          </h3>
          
          {[
            { name: 'Vercel Hosting', status: 'Connected', color: '#28a745', icon: '✅' },
            { name: 'Gmail API', status: 'Ready', color: '#ffc107', icon: '📧' },
            { name: 'OpenAI Parser', status: 'Pending', color: '#6c757d', icon: '🤖' },
            { name: 'SMS Integration', status: 'Pending', color: '#6c757d', icon: '📱' }
          ].map((integration, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '10px',
              padding: '15px',
              marginBottom: '15px',
              borderLeft: `4px solid ${integration.color}`,
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <div style={{ fontSize: '1.5em' }}>{integration.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: '600', marginBottom: '5px' }}>
                  {integration.name}
                </div>
                <div style={{
                  color: integration.color,
                  fontSize: '0.9em',
                  fontWeight: '600'
                }}>
                  {integration.status}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: '15px',
          padding: '30px',
          border: '2px solid #e9ecef',
          gridColumn: 'span 2'
        }}>
          <h3 style={{
            color: '#1e3c72',
            fontSize: '1.5em',
            marginBottom: '30px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            🚀 Next Steps - Phase 2 Implementation
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            {[
              {
                title: '📧 Gmail Integration',
                description: 'Automatic email receiving from ana.borcan@insightlettings.co.uk',
                action: 'Configure API'
              },
              {
                title: '🤖 AI Work Parser',
                description: 'OpenAI analysis of work order content and automatic categorization',
                action: 'Add OpenAI Key'
              },
              {
                title: '📱 SMS Automation',
                description: 'Twilio integration for contractor and tenant communication',
                action: 'Setup Twilio'
              },
              {
                title: '💾 Database Setup',
                description: 'PostgreSQL for persistent data storage and work order history',
                action: 'Deploy Database'
              }
            ].map((step, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '12px',
                padding: '25px',
                border: '1px solid #dee2e6',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '1.3em',
                  fontWeight: '600',
                  marginBottom: '15px',
                  color: '#1e3c72'
                }}>
                  {step.title}
                </div>
                <p style={{
                  color: '#6c757d',
                  fontSize: '0.95em',
                  lineHeight: '1.5',
                  marginBottom: '20px'
                }}>
                  {step.description}
                </p>
                <button style={{
                  background: 'linear-gradient(135deg, #17a2b8 0%, #138496 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9em',
                  cursor: 'pointer',
                  fontWeight: '600'
                }}>
                  {step.action}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
```

)
}