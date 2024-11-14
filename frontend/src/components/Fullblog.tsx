import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

export const Fullblog = ({ blog }: { blog?: Blog }) => {
  if (!blog) {
    return <div>Blog data not found</div>;
  }
  return (
    <div>
      <div className="flex justify-center">
        <Appbar />
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Posted on 2nd dec</div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            Author
            <div className="text-lg font-bold">
              {blog.author.name || "Anonymous"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
