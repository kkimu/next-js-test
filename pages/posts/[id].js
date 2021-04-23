import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { id, foo } = router.query


  return <div>
    <h1>Post</h1>
    <p>id: {id}</p>
    <p>foo: {foo}</p>
  </div>
}

export default Post
