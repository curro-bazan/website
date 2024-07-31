import { NextPage } from 'next';
import Layout from '../../components/Layout';
import styled from 'styled-components';

const PostContainer = styled.div`
  margin: 50px 0;
`;

const FirstPost: NextPage = () => {
  return (
    <Layout>
      <PostContainer>
        <h1>First Blog Post</h1>
        <p>This is the content of the first blog post.</p>
      </PostContainer>
    </Layout>
  );
};

export default FirstPost;
