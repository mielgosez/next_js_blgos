import { createBlog } from "@/app/actions/blogs"

const NewNote = () => {
  return (
    <div>
      <h2>Create a new blog</h2>
      <form action={createBlog}>
        <div>
          <label>
            Title
            <input type="text" name="title" required />
          </label>
        </div>
        <div>
          <label>
            Author
            <input type="text" name="author" />
          </label>
        </div>
        <div>
          <label>
            URL
            <input type="text" name="url" />
          </label>
        </div>
        <div>
          <label>
            Likes
            <input type="text" name="likes" />
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default NewNote