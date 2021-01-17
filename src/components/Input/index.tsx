import { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
}

export default function Input({ label = null, id, ...rest }: Props) {
  return (
    <Container className="input">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
    </Container>
  );
}
