import Navbar from "../components/Navbar"
interface IDashboard{
    name: string
}

const Dashboard:React.FC<IDashboard> = () => {
  return (
    <>
      <Navbar name={""}/>
      <h1 className="text-2xl">Dashboard</h1>
    </>
  )
}

export default Dashboard