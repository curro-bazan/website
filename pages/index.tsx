import { NextPage } from 'next';
import styled from 'styled-components';
import Layout from '../components/Layout';

const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  margin-top: 50px;
`;

const Home: NextPage = () => {
  return (
    <>
      <VideoBackground autoPlay loop muted>
        <source src="/space-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Layout>
        <ContentWrapper>
          <Title>Welcome to My Space</Title>
          <p>Explore the universe through our articles!</p>
        </ContentWrapper>
      </Layout>
    </>
  );
};

export default Home;
