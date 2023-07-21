import React from 'react'
import Payment from './Payment'
import { useRouter } from "next/router";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  return (
    <Payment id={id}/>
  )
}

export default index