import { useParams, useSearchParams } from "react-router-dom"
const Post = () => {
  let {Category , id} = useParams()

  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('price'));
  console.log(searchParams.get('sort'));
  return (
    <>
      <h1>Post Page - {Category}</h1>
      <h1>Post Page - {id}</h1>
    </>
  )
}

export default Post
