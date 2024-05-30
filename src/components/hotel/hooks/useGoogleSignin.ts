import { auth } from '@/remote/firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useCallback } from 'react'

function useGoogleSignin() {
  const signin = useCallback(async () => {
    const provider = new GoogleAuthProvider()

    try {
      const { user } = await signInWithPopup(auth, provider)
      console.log('user', user)
    } catch (error) {}
  }, [])

  const signout = useCallback(() => {
    signOut(auth)
  }, [])

  return { signin, signout }
}

export default useGoogleSignin
