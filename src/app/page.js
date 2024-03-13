import Home from './home/home'
import './page.scss'
import '@/styles/pages/home.scss'

export default function DefaultPage() {
  return (
    <div className='pageContainer'>
      <Home></Home>
    </div>
  )
}

