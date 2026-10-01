import { getBlogs } from "@/app/services/blogs"

const Blogs = () => {
  const blogs = getBlogs()
  return (
    <div>
      <h2>Blogs</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            {blog.title}: Author is {blog.author}, url is {blog.url} with {blog.likes} likes
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Blogs
