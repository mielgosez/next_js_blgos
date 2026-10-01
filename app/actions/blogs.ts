"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlogs, increaseLikes } from "@/app/services/blogs"

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string
  const author = formData.get("author") as string
  const url = formData.get("url") as string
  const likesRaw = formData.get("likes")
  const likes = likesRaw ? Number(likesRaw) : 0
  addBlogs(title, author, url, likes)

  revalidatePath("/blogs")
  redirect("/blogs")
}

export const increaseBlogLikes = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  increaseLikes(id)
  revalidatePath(`/blogs/${id}`)
  revalidatePath("/blogs")
}