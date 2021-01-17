import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import AboutSection from '../components/AboutSection';
import HomeSection from '../components/HomeSection';
import HowSection from '../components/HowSection';
import NavBar from '../components/NavBar';
import ProjectSection from '../components/ProjectsSection';
import { Container } from '../styles';
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Criamos a Mentorando para unir universitários, jovens de escolas públicas e empresas, para desenvolver novos projetos e crescerem juntos"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="keywords"
          content="Projetos Sociais, Horas Complementares, Escola Pública, Universitários, Empresas"
        />
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
