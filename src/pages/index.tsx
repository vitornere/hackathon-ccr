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
      title:
        'DecoreUX — Design de Serviços na Arquitetura e Decoração de Ambientes',
      field: 'Arquitetura',
      solvedProblem: 'Propor nova arquitetura para a Universidade do ABC',
      mentors: ['Matias da Silva Gomes - Universidade Federal do ABC'],
      mentored: ['EE PS, Generoso Alves de Siqueira'],
      link: '/projects/0',
    },
    {
      logo: 'https://i.imgur.com/a7kmUdW.png',
      title: 'Incenticida do Bem — Um incenticida não tóxico',
      field: 'Quimica',
      solvedProblem: 'Desenvolver um novo incenticida não tóxico',
      mentors: ['Laura Freitas - Universidade Federal do CBA'],
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
