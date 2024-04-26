import { useParams} from "react-router-dom"
const PostDetail = () => {
    let {category} = useParams();
    return (
      <>
        <h1>{category} Post Detail</h1>
        <h3>{category} is Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus neque eaque nisi ipsum a rerum sed repellat eligendi molestias porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, qui.</h3>
      </>
    )
  }
  
  export default PostDetail
  