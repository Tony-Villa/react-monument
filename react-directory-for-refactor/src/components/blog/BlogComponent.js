import '../../Blog.css';
import BlogArticle from './BlogArticle';
import BlogHeader from './BlogHeader';
import Sidebar from './Sidebar';
import Comment from './Comment';

const BlogComponent = () => {
  return (
    <div>
      <BlogHeader />
      <div className="wrap grid-wrapper">
        <BlogArticle />
        <Sidebar />
        <Comment />
      </div>
    </div>
  );
};

export default BlogComponent;
