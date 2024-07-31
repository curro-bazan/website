import { NextPage } from 'next';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostListItem = styled.li`
  margin: 20px 0;
`;

const Blog: NextPage = () => {
  return (
    <Layout>
      <h1>Blog Posts</h1>
      <PostList>
        <PostListItem>
          <Link href="/posts/first-post">First Blog Post</Link>
        </PostListItem>
      </PostList>
    </Layout>
  );
};

export default Blog;
