import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import HomeSection from '../components/HomeSection';
import HowSection from '../components/HowSection';
import NavBar from '../components/NavBar';
import ProjectSection from '../components/ProjectsSection';
import { Container } from '../styles';
import { Project } from './api/projects';
import logoImg from '../assets/images/logo.svg';
import instagramImg from '../assets/images/instagram.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import twitterImg from '../assets/images/twitter.svg';

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      <Head>
        <title>Mentorando</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <HomeSection />
        <AboutSection />
        <ProjectSection projects={projects} />
        <HowSection />
      </main>

      <footer>
        <img src={logoImg} alt="Logo" />
        <div>
          <img src={instagramImg} alt="Instagram" />
          <img src={linkedinImg} alt="LinkedIn" />
          <img src={twitterImg} alt="Twitter" />
        </div>
        <span>© 2021 Mentorando, Inc.</span>
      </footer>
    </Container>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  const projects: Project[] = await res.json();

  return {
    props: {
      projects,
    },
  };
};
