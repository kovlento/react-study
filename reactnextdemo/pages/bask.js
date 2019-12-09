import { WithRouter, withRouter } from 'next/router'
import Link from 'next/link'

const Bask = ({router})=>{
  return(
    <>
      <div>{router.query.name}来打球</div>
      <Link href="/">返回首页</Link>
    </>
  )
}

export default withRouter(Bask)
