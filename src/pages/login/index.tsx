import Input from '../../components/Input';
import { Container } from '../../styles/login';

export default function Login() {
  return (
    <Container>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <fieldset>
          <Input
            id="email"
            name="email"
            type="email"
            label="e-mail"
            placeholder="email@email.com"
            autoComplete="email"
          />

          <Input
            id="password"
            name="password"
            type="password"
            label="senha"
            placeholder="************"
            autoComplete="password"
          />

          <div>
            <a href="#forget-password">Esqueceu sua senha?</a>
            <button type="submit">Entrar</button>
          </div>
        </fieldset>
      </form>
      <div className="signup-buttoms">
        <button type="button">cadastrar universtários</button>
        <button type="button">cadastrar escolas</button>
        <button type="button">cadastrar empresa</button>
      </div>
    </Container>
  );
}
