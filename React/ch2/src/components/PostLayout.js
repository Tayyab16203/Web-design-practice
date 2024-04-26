import { Outlet } from "react-router-dom"

const PostLayout = () => {
  return (
    <>
      <h1>This is Post layout</h1>
      <Outlet/>
    </>
  )
}

export default PostLayout
