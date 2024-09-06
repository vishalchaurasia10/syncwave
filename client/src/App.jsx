import { Routes, Route } from 'react-router-dom'
// import Room from './pages/Room'
// import Dashboard from './pages/Dashboard'
// import SignUp from './components/Auth/Signup'
// import OAuthCallback from './components/Auth/OAuthCallback'
import SignInPage from './pages/sign-in/SignInPage'
import SignUpPage from './pages/sign-up/SignUpPage'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <div className="">
      <Toaster />
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        {/* <Route path="/oauth/callback" element={<OAuthCallback />} /> */}
        <Route path='/sign-up' element={<SignUpPage />} />
        {/* <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/room' element={<Room />} /> */}
      </Routes>
    </div>
  )
}

export default App
