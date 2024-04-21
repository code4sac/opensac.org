import Home from './home/home'
import '../../styles/main.scss'
import '@/styles/pages/home.scss'

export default function DefaultPage() {
  return (
    <div className='pageContainer'>
      <Home></Home>
    </div>
  )
}

