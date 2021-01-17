import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import HomeSection from '../components/HomeSection';
import NavBar from '../components/NavBar';
import ProjectSection from '../components/ProjectsSection';
import { Container } from '../styles';
import { Project } from './api/projects';

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
      </main>

      <footer>@2021 Powered by Team 64</footer>
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
