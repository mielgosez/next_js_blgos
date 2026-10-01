import { getBlogs } from "@/app/services/blogs"
import BlogList from "./blogList"

const Blogs = () => {
  const blogs = getBlogs()
  return (
    <div>
      <h2>Blogs</h2>
       <BlogList blogs={blogs} />
    </div>
  )
}
export default Blogs
