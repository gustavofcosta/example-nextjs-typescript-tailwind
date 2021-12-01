import { NextPage } from 'next';

const Index: NextPage = () => {
  return <div>Hello, World!</div>;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   return { props: { endpoint: process.env.VERCEL_URL } };
// };

export default Index;
