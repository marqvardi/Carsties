import EmptyFilter from '@/app/components/EmptyFilter'
import React from 'react'

const SignIn = ({searchParams} : {searchParams: {callbackUrl : string}}) => {
  return (
    <EmptyFilter title='You need to be logged in to do that' subtitle='Please click below to log in' showLogin callbackUrl={searchParams.callbackUrl} />
  )
}

export default SignIn