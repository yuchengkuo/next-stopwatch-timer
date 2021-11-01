import { Stopwatch } from 'components/stopwatch/Stopwatch';
import { Timer } from 'components/timer/Timer';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useTab } from 'utils/useTab';

const Home: NextPage = () => {
  const { tabState } = useTab();
  return (
    <>
      <Head>
        <title>Next Timer Stopwatch</title>
      </Head>
      {tabState === 'Timer' && <Timer />}
      {tabState === 'Stopwatch' && <Stopwatch />}
    </>
  );
};

export default Home;
