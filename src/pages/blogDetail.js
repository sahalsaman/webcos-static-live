import React, { useState, useEffect } from 'react';
import bannerimg from '../../src/assets/images/web6.png';
import { useParams } from 'react-router-dom';
import { blogs } from '../constents';

export default function BlogDetail() {
  const [blog, setBlog] = useState(null); // Initialize as null
  const { id } = useParams();



  useEffect(() => {
    // Find the blog by its _id and set the blog state
    const selectedBlog = blogs.find((item) => item._id === id);
    if (selectedBlog) {
      setBlog(selectedBlog);
    }
  }, [id]); // Dependency on id

  if (!blog) {
    return <p>Loading...</p>; // Render a loading state while blog is being set
  }

  return (
    <div>
      <img src={bannerimg} className="w-full" alt="Banner" />
      <div className="md:container mx-auto px-6 py-16">
        <div className="overflow-x-auto md:mt-10">
          <img src={blog.image} alt={blog.title} />
          <h2 className="mt-10 text-2xl md:text-5xl font-semibold text-black dark:text-black">
            {blog.title}
          </h2>
          <div className='flex flex-col gap-5'>
            <p className="mt-10 text-gray-600 dark:text-gray-300 bg-slate-200 p-6 text-xl leading-10 ">
              {blog.summary}
            </p>
            <p className="mt-10 text-gray-600 dark:text-gray-300 text-xl leading-10">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
