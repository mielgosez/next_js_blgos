import { notFound } from "next/navigation"
import { getBlogById } from "../../services/blogs"
import { increaseBlogLikes } from "../../actions/blogs"

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const blog = getBlogById(Number(id))

  if (!blog) {
    notFound()
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>This is a movie by {blog.author}, watch it on {blog.url}. It has {blog.likes} likes</p>
      <form action={increaseBlogLikes}>
        <input type="hidden" name="id" value={blog.id} />
        <button type="submit">
          {blog.likes} Likes
        </button>
      </form>
    </div>
  )
}

export default BlogPage