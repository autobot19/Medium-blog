import { useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { Fullblog } from "../components/Fullblog";


const Blog = () => {
  const {id} = useParams();
const {loading , blog} = useBlog({
  id: id || ""
});
if(loading){
  return <div>
    loading...
  </div>
}
return <div>
 {blog?  <Fullblog blog={blog}/> : <div>Blog not found</div>}
</div>
}

export default Blog