import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import axios from 'axios'




const Home=()=>(
  <>
      <h1>我是首页</h1>
      <div>
        <Link href="/bask?name=kobe"><a>kobe</a></Link>
        <br/>
        <Link href="/bask?name=james"><a>james</a></Link>
      </div>
  </>
)

export default Home