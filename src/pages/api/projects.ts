import { NextApiRequest, NextApiResponse } from 'next';

export interface Project {
  logo: string;
  title: string;
  field: string;
  solvedProblem: string;
  mentors: string[];
  mentored: string[];
  link: string;
}

export default (_req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;

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
  res.json(projects);
};
