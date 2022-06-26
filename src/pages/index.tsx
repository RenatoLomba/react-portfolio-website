import type { NextPage } from 'next';
import Head from 'next/head';

import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Experience } from '../components/experience';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Nav } from '../components/nav';
import { Portfolio } from '../components/portfolio';
import { Services } from '../components/services';
import { Testimonials } from '../components/testimonials';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ultimate React Personal Portfolio Website</title>
      </Head>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
