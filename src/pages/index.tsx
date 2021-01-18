import { InferGetStaticPropsType } from 'next';

import AboutSection from '../components/AboutSection';
import HomeSection from '../components/HomeSection';
import HowSection from '../components/HowSection';
import ProjectSection from '../components/ProjectsSection';

export default function Home({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <ProjectSection projects={projects} />
      <HowSection />
    </>
  );
}

export interface Project {
  logo: string;
  title: string;
  field: string;
  solvedProblem: string;
  mentors: string[];
  mentored: string[];
  link: string;
}

export const getStaticProps = async () => {
  const projects: Project[] = [
    {
      logo: 'https://i.imgur.com/9pxbWwU.png',
      title: 'Tconstruindo - Conecta profissionais da construção ',
      field: 'Tecnologia',
      solvedProblem:
        'Ajuda a comunidade conectar profissionais da contrução civil',
      mentors: ['Metodista - SP'],
      mentored: ['EE PS, Cloves Bevilaque'],
      link: '/projects/0',
    },
    {
      logo: 'https://i.imgur.com/a7kmUdW.png',
      title: 'Examesok - Gerenciador de exames para mulheres',
      field: 'Tecnologia / Ciência / Saúde',
      solvedProblem: 'Ajuda mulheres a manter sua rotina de exames em sia',
      mentors: ['Universidade Federal do ABC - SP'],
      mentored: ['Ana Clara, Arthur Lima'],
      link: '/projects/1',
    },
  ];

  return {
    props: {
      projects,
    },
  };
};
