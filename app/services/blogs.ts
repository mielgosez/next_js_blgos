const blogs = [
  { id: 1, title: "title 1", author: "author 1", url: "url 1", likes: 3 },
  { id: 2, title: "title 2", author: "author 2", url: "url 2", likes: 2 },
  { id: 3, title: "title 3", author: "author 3", url: "url 3", likes: 6 },
]

let nextId = 4

export const getBlogs = () => {
  return blogs
}

export const addBlogs = (title: string, author: string, url: string, likes: number) => {
  blogs.push({ id: nextId++, title, author, url, likes })
}

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id)
}

export const increaseLikes = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id)
  if (blog) {
    blog.likes++
  }
}