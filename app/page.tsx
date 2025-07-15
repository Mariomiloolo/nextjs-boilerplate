'use client'

import { useState, useEffect } from 'react'

export default function PropertyFlow() {
  const [contractors, setContractors] = useState([])
  const [workOrders, setWorkOrders] = useState([])
  const [activeTab, setActiveTab] = useState('dashboard')

  useEffect(() => {
    loadContractors()
    loadWorkOrders()
  }, [])

  const loadContractors = async () => {
    const res = await fetch('/api/contractors')
    const data = await res.json()
    setContractors(data)
  }

  const loadWorkOrders = async () => {
    const res = await fetch('/api/workorders')
    const data = await res.json()
    setWorkOrders(data)
  }

  const addContractor = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const contractor = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      city: formData.get('city'),
      specialty: formData.get('specialty')
    }

    await fetch('/api/contractors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contractor)
    })

    loadContractors()
    e.target.reset()
    alert('Contractor added successfully!')
  }

  return (
    <div>
      <h1>PropertyFlow Dashboard</h1>
      {/* Add basic form and display here */}
    </div>
  )
}