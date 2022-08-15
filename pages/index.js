import Center from "../components/Center"
import Sidebar from "../components/Sidebar"
const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden ">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
    </div>
  )
}

export default Home
