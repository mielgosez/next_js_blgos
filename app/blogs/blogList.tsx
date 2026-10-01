"use client"

import Link from "next/link"
import { useMemo } from "react"

type Blog = {
  id: number
  title: string
  author: string
  url: string
  likes: number
}

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => b.likes - a.likes)
  }, [blogs])

  return (
    <div>
      <ul>
        {sortedBlogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            {blog.author} {blog.likes} likes
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogList