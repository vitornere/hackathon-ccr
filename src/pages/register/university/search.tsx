import { useRouter } from 'next/router';
import { Container } from '../../../styles/register/university/search';

export default function Search() {
  const router = useRouter();

  return (
    <Container>
      <h1>RESULTADOS</h1>
      <div className="school">
        <h2>E.E. DR. GENEROSO ALVES DE SIQUEIRA - SANTO ANDRÉ - SP</h2>
        <p>ENDEREÇO: Av. Dom Pedro II , 1067 - 09170-600 - Santo André - SP</p>
        <p>
          Áreas de interesse: Ciencias Humanas e tecnologia / Matemática e suas
          tecnologias
        </p>
        <p>Responsável - Simone Siqueira </p>
        <p>Cargo: Diretora pedagógica</p>
        <p>Contato : (11) 4438 -6787 (11)9876 - 6543</p>
        <p>email: genereso@org.com.br</p>

        <div>
          <button type="button">CONTRATAR ESCOLA</button>
        </div>
      </div>
      <div className="submit">
        <button type="button" onClick={() => router.push('/register/success')}>
          Concluir cadastro
        </button>
      </div>
    </Container>
  );
}
