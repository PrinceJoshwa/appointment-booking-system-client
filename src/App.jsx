import Header from "./components/Header"
import AppointmentForm from "./components/AppointmentForm"
import AppointmentList from "./components/AppointmentList"

function App() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-2xl">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
        <AppointmentForm />
        {/* <AppointmentList /> */}
      </div>
      </div>
    </div>
  )
}

export default App

