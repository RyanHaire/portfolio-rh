import { Link } from "react-router-dom";

export default function RecentPostsGrid() {
  const posts = [
    { title: "Beginners Guide for this website", slug: "beginners-guide", pinned: true, date: "2024-02-07" },
    { title: "Introduction to Web Development", slug: "intro-to-web-development", pinned: false, date: "2024-02-07" },
    
  ];

  const sortedPosts = [...posts].sort((a, b) => {
    if (a.pinned === b.pinned) {
    var dateA = new Date(a.date);
    var dateB = new Date(a.date);
      return dateB.getMilliseconds() - dateA.getMilliseconds();
    }
    return a.pinned ? -1 : 1;
  });

  return (
    <div className="max-w-2xl mx-auto p-3">
      <h2 className="text-2xl font-bold mb-4">📜 Recent Posts</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedPosts.map((post, index) => (
          <div key={index} className="">
            <Link to={`/tutorials/${post.slug}`} className="p-4 border rounded shadow hover:bg-gray-100 flex flex-col items-center justify-center">
                { post.pinned && <span className="text-2xl">📌</span>}
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm">{post.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
