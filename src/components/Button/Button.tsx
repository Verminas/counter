type Props = {
  title: string
  disabled: boolean
  onClick: () => void
};
export const Button = ({title, disabled, onClick}: Props) => {
  return (
    <button onClick={onClick} disabled={disabled}>{title}</button>
  );
};