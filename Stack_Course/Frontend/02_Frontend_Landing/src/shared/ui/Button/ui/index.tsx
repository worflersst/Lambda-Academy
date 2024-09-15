type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {};

export const Button = ({ className }: ButtonProps) => {
	return <button className={className}></button>;
};
