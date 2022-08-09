import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { supabase } from '../util/client'

const Home: NextPage = () => {
  const [posts, setPosts] = useState<any[]>([])
  const [post, setPost] = useState({title: "", content: ""})
  const {title, content} = post
  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const {data}: any = await supabase
      .from("posts")
      .select()
    setPosts(data)
    console.log("data:", data)
  }
  async function createPost() {
    await supabase
      .from("posts")
      .insert([
        {title, content}
      ])
      .single()
    setPost({title: "", content: ""})
    fetchPosts()
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className='flex gap-4'>
        <input
          className='border border-black rounded'
          placeholder='Title'
          value={title}
          onChange={e => setPost({ ...post, title: e.target.value })}
        />
        <input
          className='border border-black rounded'
          placeholder='Content'
          value={content}
          onChange={e => setPost({ ...post, content: e.target.value })}
        />
      </div>
      <button className='bg-gray-400 p-2 rounded-full' onClick={createPost}>Create Post</button>
      {
        posts.map(post => (
          <div key={post.id} className="text-center text-xl">
            <h3 className='font-bold text-2xl'>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Home
