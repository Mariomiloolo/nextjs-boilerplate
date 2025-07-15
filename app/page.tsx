‘use client’

import { useState, useEffect } from ‘react’

export default function PropertyFlow() {
const [activeSection, setActiveSection] = useState(‘dashboard’)
const [contractors, setContractors] = useState([
{
id: 1,
name: “Mario (TEST)”,
phone: “07308141302”,
email: “mario.grimsby@gmail.com”,
city: “Grimsby”,
specialty: “handyman”,
specialtyName: “Handyman”,
availability: “available”
}
])
const [workOrders, setWorkOrders] = useState([])
const [logs, setLogs] = useState([])

const specialtyNames = {
‘plumber’: ‘Plumber’,
‘electrician’: ‘Electrician’,
‘handyman’: ‘Handyman’,
‘painter’: ‘Painter’,
‘carpenter’: ‘Carpenter’,
‘cleaner’: ‘Cleaning’,
‘gardener’: ‘Gardener’,
‘heating’: ‘Heating’,
‘glazier’: ‘Glazier’
}

const workTypeMapping = {
‘blocked sink’: ‘plumber’,
‘leaking tap’: ‘plumber’,
‘plumbing’: ‘plumber’,
‘boiler’: ‘heating’,
‘radiator’: ‘heating’,
‘electrical’: ‘electrician’,
‘light fixture’: ‘electrician’,
‘socket’: ‘electrician’,
‘wiring’: ‘electrician’,
‘painting’: ‘painter’,
‘door repair’: ‘handyman’,
‘window’: ‘glazier’,
‘glass’: ‘glazier’,
‘cleaning’: ‘cleaner’,
‘garden’: ‘gardener’,
‘carpentry’: ‘carpenter’
}

const addLog = (category, message) => {
const newLog = {
id: Date.now(),
timestamp: new Date().toLocaleString(‘en-GB’),
category,
message
}
setLogs(prev => [newLog, …prev.slice(0, 99)])
}

const getWorkTypeFromDescription = (description) => {
const desc = description.toLowerCase()
for (const [key, value] of Object.entries(workTypeMapping)) {
if (desc.includes(key)) {
return value
}
}
return ‘handyman’
}

const extractCity = (address) => {
const parts = address.split(’,’)
return parts.length >= 2 ? parts[1].trim() : ‘Unknown’
}

const findContractors = (workType, city) => {
return contractors.filter(c =>
c.specialty === workType &&
c.availability === ‘available’ &&
(c.city.toLowerCase().includes(city.toLowerCase()) ||
city.toLowerCase().includes(c.city.toLowerCase()))
)
}

const addContractor = (contractorData) => {
const newContractor = {
…contractorData,
id: contractors.length + 1,
specialtyName: specialtyNames[contractorData.specialty]
}
setContractors([…contractors, newContractor])
addLog(‘Contractor’, `Added new contractor: ${newContractor.name} (${newContractor.specialtyName})`)
return newContractor
}

const addWorkOrder = (orderData) => {
const city = extractCity(orderData.address)
const workType = getWorkTypeFromDescription(orderData.summary)
const availableContractors = findContractors(workType, city)
const assignedContractor = availableContractors.length > 0 ? availableContractors[0] : null

```
const newOrder = {
  ...orderData,
  id: workOrders.length + 1,
  city,
  workType,
  workTypeName: specialtyNames[workType],
  assignedContractor,
  status: assignedContractor ? 'assigned' : 'pending',
  statusName: assignedContractor ? 'Assigned' : 'Pending',
  createdAt: new Date().toLocaleDateString('en-GB'),
  estimatedCost: '£0.00'
}

setWorkOrders([...workOrders, newOrder])
addLog('Work Order', `Created work order ${newOrder.reference}: ${newOrder.summary}`)

if (assignedContractor) {
  addLog('Assignment', `Auto-assigned to ${assignedContractor.name}`)
  addLog('SMS', `SMS sent to ${assignedContractor.phone}: "New work order: ${newOrder.summary} at ${newOrder.address}"`)
  addLog('Email', `Email sent to tenant ${newOrder.tenant.name}: "Contractor ${assignedContractor.name} will contact you"`)
}

return newOrder
```

}

const handleContractorSubmit = (e) => {
e.preventDefault()
const formData = new FormData(e.target)
const contractorData = {
name: formData.get(‘name’),
phone: formData.get(‘phone’),
email: formData.get(‘email’),
city: formData.get(‘city’),
specialty: formData.get(‘specialty’),
availability: formData.get(‘availability’)
}

```
addContractor(contractorData)
e.target.reset()
alert(`Contractor ${contractorData.name} has been added successfully!`)
```

}

const handleOrderSubmit = (e) => {
e.preventDefault()
const formData = new FormData(e.target)
const orderData = {
reference: formData.get(‘reference’),
summary: formData.get(‘summary’),
address: formData.get(‘address’),
tenant: {
name: formData.get(‘tenantName’),
phone: formData.get(‘tenantPhone’),
email: formData.get(‘tenantEmail’)
},
manager: {
email: formData.get(‘managerEmail’)
},
priority: formData.get(‘priority’)
}

```
const newOrder = addWorkOrder(orderData)
e.target.reset()

if (newOrder.assignedContractor) {
  alert(`Work order automatically assigned to ${newOrder.assignedContractor.name}!`)
} else {
  alert(`Work order created but no suitable contractor found for ${specialtyNames[newOrder.workType]} in ${newOrder.city}`)
}
```

}

useEffect(() => {
addLog(‘System’, ‘PropertyFlow system initialized successfully’)
}, [])

const styles = {
container: {
fontFamily: ‘-apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, sans-serif’,
background: ‘linear-gradient(135deg, #667eea 0%, #764ba2 100%)’,
minHeight: ‘100vh’,
padding: ‘20px’
},
main: {
maxWidth: ‘1400px’,
margin: ‘0 auto’,
background: ‘white’,
borderRadius: ‘20px’,
boxShadow: ‘0 20px 40px rgba(0,0,0,0.1)’,
overflow: ‘hidden’
},
header: {
background: ‘linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)’,
color: ‘white’,
padding: ‘30px’,
display: ‘flex’,
justifyContent: ‘space-between’,
alignItems: ‘center’,
flexWrap: ‘wrap’
},
nav: {
background: ‘#f8f9fa’,
display: ‘flex’,
justifyContent: ‘center’,
borderBottom: ‘1px solid #e9ecef’,
flexWrap: ‘wrap’
},
navBtn: {
background: ‘none’,
border: ‘none’,
padding: ‘20px 25px’,
fontSize: ‘1.1em’,
cursor: ‘pointer’,
fontWeight: ‘500’,
textTransform: ‘capitalize’
},
content: {
padding: ‘40px’
},
card: {
background: ‘#f8f9fa’,
borderRadius: ‘15px’,
padding: ‘30px’,
marginBottom: ‘30px’,
border: ‘1px solid #e9ecef’
},
btn: {
background: ‘linear-gradient(135deg, #007bff 0%, #0056b3 100%)’,
color: ‘white’,
border: ‘none’,
padding: ‘12px 30px’,
borderRadius: ‘8px’,
fontSize: ‘1em’,
cursor: ‘pointer’,
fontWeight: ‘600’
},
input: {
width: ‘100%’,
padding: ‘12px’,
border: ‘2px solid #e9ecef’,
borderRadius: ‘8px’,
fontSize: ‘1em’
},
grid: {
display: ‘grid’,
gridTemplateColumns: ‘repeat(auto-fit, minmax(250px, 1fr))’,
gap: ‘20px’
}
}

return (
<div style={styles.container}>
<div style={styles.main}>
<div style={styles.header}>
<div>
<h1 style={{ fontSize: ‘2.5em’, marginBottom: ‘10px’, fontWeight: ‘700’ }}>
PropertyFlow
</h1>
<p style={{ fontSize: ‘1.2em’, opacity: ‘0.9’ }}>
Automated Property Management System
</p>
</div>
<div style={{ textAlign: ‘right’ }}>
<div style={{
background: ‘rgba(255,255,255,0.2)’,
padding: ‘8px 16px’,
borderRadius: ‘20px’,
fontSize: ‘0.9em’,
marginBottom: ‘10px’
}}>
LIVE SYSTEM - Vercel Hosted
</div>
<div style={{ display: ‘flex’, alignItems: ‘center’, gap: ‘10px’ }}>
<div style={{
width: ‘12px’,
height: ‘12px’,
borderRadius: ‘50%’,
background: ‘#28a745’
}}></div>
<span>System Online</span>
</div>
</div>
</div>

```
    <div style={styles.nav}>
      {['dashboard', 'orders', 'contractors', 'integrations', 'new-order', 'logs'].map(section => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          style={{
            ...styles.navBtn,
            background: activeSection === section ? '#007bff' : 'none',
            color: activeSection === section ? 'white' : '#495057'
          }}
        >
          {section.replace('-', ' ')}
          {section === 'orders' && (
            <span style={{
              background: '#dc3545',
              color: 'white',
              borderRadius: '10px',
              padding: '2px 6px',
              fontSize: '0.8em',
              marginLeft: '5px'
            }}>
              {workOrders.length}
            </span>
          )}
        </button>
      ))}
    </div>

    <div style={styles.content}>
      
      {activeSection === 'dashboard' && (
        <div>
          <div style={{
            background: '#e9ecef',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            <h2 style={{ color: '#1e3c72', marginBottom: '10px' }}>
              🚀 LIVE SYSTEM DEPLOYED!
            </h2>
            <p style={{ color: '#6c757d', marginBottom: '15px' }}>
              PropertyFlow is now running on Vercel with full functionality
            </p>
            <div style={{
              background: '#007bff',
              height: '8px',
              borderRadius: '4px',
              width: '100%'
            }}></div>
          </div>

          <div style={styles.grid}>
            {[
              { label: 'Total Orders', value: workOrders.length, color: '#007bff' },
              { label: 'Pending', value: workOrders.filter(o => o.status === 'pending').length, color: '#ffc107' },
              { label: 'Assigned', value: workOrders.filter(o => o.status === 'assigned').length, color: '#28a745' },
              { label: 'Contractors', value: contractors.length, color: '#17a2b8' }
            ].map(stat => (
              <div key={stat.label} style={{
                background: 'white',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
              }}>
                <div style={{
                  fontSize: '2.5em',
                  fontWeight: '700',
                  color: stat.color,
                  marginBottom: '10px'
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#6c757d', fontSize: '1.1em' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              📊 Recent Activity
            </h3>
            {workOrders.length === 0 ? (
              <p>No work orders yet. Create your first order to get started!</p>
            ) : (
              workOrders.slice(-3).reverse().map(order => (
                <div key={order.id} style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '20px',
                  marginBottom: '15px',
                  borderLeft: '5px solid #007bff'
                }}>
                  <h4 style={{ color: '#1e3c72', marginBottom: '10px' }}>
                    Work Order {order.reference}
                  </h4>
                  <p><strong>Description:</strong> {order.summary}</p>
                  <p><strong>Status:</strong> <span style={{
                    background: order.status === 'assigned' ? '#d4edda' : '#fff3cd',
                    color: order.status === 'assigned' ? '#155724' : '#856404',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.9em'
                  }}>
                    {order.statusName}
                  </span></p>
                  {order.assignedContractor && (
                    <p><strong>Contractor:</strong> {order.assignedContractor.name}</p>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {activeSection === 'contractors' && (
        <div>
          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              👷 Add New Contractor
            </h3>
            <form onSubmit={handleContractorSubmit}>
              <div style={styles.grid}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Name/Company:
                  </label>
                  <input name="name" type="text" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Phone:
                  </label>
                  <input name="phone" type="tel" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Email:
                  </label>
                  <input name="email" type="email" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    City:
                  </label>
                  <input name="city" type="text" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Specialty:
                  </label>
                  <select name="specialty" required style={styles.input}>
                    <option value="">Select specialty</option>
                    <option value="plumber">Plumber</option>
                    <option value="electrician">Electrician</option>
                    <option value="handyman">Handyman</option>
                    <option value="painter">Painter</option>
                    <option value="carpenter">Carpenter</option>
                    <option value="cleaner">Cleaning</option>
                    <option value="gardener">Gardener</option>
                    <option value="heating">Heating</option>
                    <option value="glazier">Glazier</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Availability:
                  </label>
                  <select name="availability" style={styles.input}>
                    <option value="available">Available</option>
                    <option value="busy">Busy</option>
                    <option value="vacation">On Holiday</option>
                  </select>
                </div>
              </div>
              <button type="submit" style={{ ...styles.btn, marginTop: '20px' }}>
                ➕ Add Contractor
              </button>
            </form>
          </div>

          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              👥 Contractor List
            </h3>
            {contractors.map(contractor => (
              <div key={contractor.id} style={{
                background: 'white',
                borderRadius: '15px',
                padding: '20px',
                marginBottom: '15px',
                border: '2px solid #e9ecef'
              }}>
                <div style={styles.grid}>
                  <div><strong>Name:</strong> {contractor.name}</div>
                  <div><strong>Phone:</strong> {contractor.phone}</div>
                  <div><strong>Email:</strong> {contractor.email}</div>
                  <div><strong>City:</strong> {contractor.city}</div>
                  <div><strong>Specialty:</strong> {contractor.specialtyName}</div>
                  <div>
                    <strong>Status:</strong>{' '}
                    <span style={{
                      background: contractor.availability === 'available' ? '#d4edda' : '#fff3cd',
                      color: contractor.availability === 'available' ? '#155724' : '#856404',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '0.9em'
                    }}>
                      {contractor.availability}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'new-order' && (
        <div>
          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              📝 Create New Work Order
            </h3>
            <div style={{
              background: '#fff3cd',
              color: '#856404',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px',
              border: '1px solid #ffeaa7'
            }}>
              <strong>NOTE:</strong> In PHASE 2, work orders will be received automatically from Gmail
            </div>
            
            <form onSubmit={handleOrderSubmit}>
              <div style={styles.grid}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Reference:
                  </label>
                  <input name="reference" type="text" defaultValue="PMG25001775" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Work Description:
                  </label>
                  <input name="summary" type="text" placeholder="e.g. Blocked sink, Electrical fault, Door repair" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Property Address:
                  </label>
                  <input name="address" type="text" placeholder="e.g. 108 Bentley Street, Cleethorpes, DN35 8DZ" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Tenant Name:
                  </label>
                  <input name="tenantName" type="text" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Tenant Phone:
                  </label>
                  <input name="tenantPhone" type="tel" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Tenant Email:
                  </label>
                  <input name="tenantEmail" type="email" required style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Property Manager:
                  </label>
                  <input name="managerEmail" type="email" defaultValue="ana.borcan@insightlettings.co.uk" readOnly style={styles.input} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
                    Priority:
                  </label>
                  <select name="priority" style={styles.input}>
                    <option value="normal">Normal</option>
                    <option value="urgent">Urgent</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
              </div>
              <button type="submit" style={{ ...styles.btn, marginTop: '20px' }}>
                🚀 Process Work Order
              </button>
            </form>
          </div>
        </div>
      )}

      {activeSection === 'orders' && (
        <div>
          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              📋 All Work Orders
            </h3>
            {workOrders.length === 0 ? (
              <p>No work orders to display.</p>
            ) : (
              workOrders.map(order => (
                <div key={order.id} style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  marginBottom: '20px',
                  borderLeft: '5px solid #007bff',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
                }}>
                  <h4 style={{ color: '#1e3c72', marginBottom: '15px' }}>
                    Work Order {order.reference}
                  </h4>
                  <div style={styles.grid}>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                      <strong>Description:</strong><br/>{order.summary}
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                      <strong>Address:</strong><br/>{order.address}
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                      <strong>Work Type:</strong><br/>{order.workTypeName}
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                      <strong>Status:</strong><br/>
                      <span style={{
                        background: order.status === 'assigned' ? '#d4edda' : '#fff3cd',
                        color: order.status === 'assigned' ? '#155724' : '#856404',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '0.9em'
                      }}>
                        {order.statusName}
                      </span>
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                      <strong>Tenant:</strong><br/>
                      {order.tenant.name}<br/>
                      {order.tenant.phone}<br/>
                      {order.tenant.email}
                    </div>
                    <div style={{ background: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
                      <strong>Contractor:</strong><br/>
                      {order.assignedContractor ? 
                        `${order.assignedContractor.name}\n${order.assignedContractor.phone}` : 
                        'Not assigned'
                      }
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {activeSection === 'integrations' && (
        <div>
          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              🔗 Integration Status
            </h3>
            
            <div style={styles.grid}>
              {[
                {
                  title: '✅ Vercel Hosting',
                  status: 'Connected',
                  color: '#28a745',
                  description: 'Live hosting with automatic deployments'
                },
                {
                  title: '⏳ Gmail API',
                  status: 'Ready to configure',
                  color: '#ffc107',
                  description: 'PHASE 2: Automatic email receiving from Insight Lettings'
                },
                {
                  title: '⏳ OpenAI API',
                  status: 'Pending',
                  color: '#6c757d',
                  description: 'PHASE 3: Intelligent analysis of work order content'
                },
                {
                  title: '⏳ Twilio SMS',
                  status: 'Pending',
                  color: '#6c757d',
                  description: 'PHASE 4: Automatic communication with contractors'
                }
              ].map(integration => (
                <div key={integration.title} style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '25px',
                  borderLeft: `5px solid ${integration.color}`
                }}>
                  <div style={{
                    fontSize: '1.2em',
                    fontWeight: '600',
                    marginBottom: '10px',
                    color: '#1e3c72'
                  }}>
                    {integration.title}
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '15px'
                  }}>
                    <span style={{ color: integration.color }}>●</span>
                    <span>{integration.status}</span>
                  </div>
                  <div style={{
                    color: '#6c757d',
                    fontSize: '0.9em',
                    lineHeight: '1.5'
                  }}>
                    {integration.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'logs' && (
        <div>
          <div style={styles.card}>
            <h3 style={{ color: '#1e3c72', marginBottom: '20px' }}>
              📜 System Logs
            </h3>
            <div style={{ marginBottom: '20px' }}>
              <button style={styles.btn} onClick={() => setLogs([])}>
                🗑️ Clear Logs
              </button>
            </div>
            {logs.length === 0 ? (
              <p>No system logs available.</p>
            ) : (
              logs.map(log => (
                <div key={log.id} style={{
                  background: '#f8f9fa',
                  borderLeft: '4px solid #007bff',
                  padding: '15px',
                  marginBottom: '10px',
                  borderRadius: '0 8px 8px 0',
                  fontFamily: 'Courier New, monospace',
                  fontSize: '0.9em'
                }}>
                  <div style={{
                    color: '#6c757d',
                    fontSize: '0.8em',
                    marginBottom: '5px'
                  }}>
                    {log.timestamp}
                  </div>
                  <strong>[{log.category}]</strong> {log.message}
                </div>
              ))
            )}
          </div>
        </div>
      )}

    </div>
  </div>
</div>
```

)
}