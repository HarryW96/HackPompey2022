import type { NextPage } from 'next'
import { Menu } from '../components/menu'

const Home: NextPage = () => {

  return (
    <div className={`flex min-h-screen flex-col items-center justify-center bg-white md:px-28 lg:px-32 h-screen`}>
      <Menu />
      <div className="flex-1 flex flex-col justify-center items-center text-4xl font-serif font-bold text-violet-800 lowercase mt-10">
        <p>Home</p>
        <p className="text-xs">By Dior</p>
      </div>
      <img className="hidden lg:block h-8 w-auto mb-10" src="https://www.denofgeek.com/wp-content/uploads/2021/11/Power-Rangers-Reboot-Universe-Netflix.jpg?resize=768%2C432" alt="Workflow"/>
    </div>
  )
}

export default Home
