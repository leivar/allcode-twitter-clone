export default function Post({ post }: any) {
  return (
    <section className="flex flex-col gap-2 p-4 border-b-2 border-gray-300">
      <section className="flex gap-2">
        <img src={post.user.image} className="w-14 h-14 rounded-full"/>
        <section className="flex flex-col">
          <h3 className="font-semibold text-lg">{post.user.name}</h3>
          <h4 className="text-sm text-gray-600">{post.user.email}</h4>
        </section>
      </section>
      <section className="py-4">
        <p>{post.content}</p>
      </section>
      <section className="flex justify-between items-center px-4">
        <p>Reply</p>
        <p>Like</p>
        <p>Share</p>
      </section>
    </section> 
  );
}