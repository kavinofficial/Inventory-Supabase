import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const Logout = () => {
  const navigate = useNavigate()

  useEffect(() => {
    async function signOut() {
      const { error } = await supabase.auth.signOut()
    }
    localStorage.clear()
    navigate('/')
    // FIXME: Executes two times on logout
    toast.success('Logged out successfully')
  }, [])

  return <div>Logging out..</div>
}

export default Logout
