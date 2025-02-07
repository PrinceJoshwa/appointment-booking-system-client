"use client"

import { useState, useEffect } from "react"
import axios from "axios"

function AppointmentList() {
  const [appointments, setAppointments] = useState([])

  useEffect(() => {
    fetchAppointments()
  }, [])

  const fetchAppointments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/appointments")
      setAppointments(response.data)
    } catch (error) {
      console.error("Error fetching appointments:", error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/appointments/${id}`)
      fetchAppointments()
    } catch (error) {
      console.error("Error deleting appointment:", error)
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id} className="mb-4 p-4 border rounded">
            <p>
              <strong>Name:</strong> {appointment.name}
            </p>
            <p>
              <strong>Email:</strong> {appointment.email}
            </p>
            <p>
              <strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Time:</strong> {appointment.time}
            </p>
            <p>
              <strong>Service:</strong> {appointment.service}
            </p>
            <button
              onClick={() => handleDelete(appointment._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mt-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppointmentList

