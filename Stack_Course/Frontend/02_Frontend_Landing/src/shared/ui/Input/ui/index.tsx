import styles from './index.module.scss';

export type InputTupe = {
	errorMessage?: string;
	error?: boolean;
	labelText: string;
} & JSX.IntrinsicElements['input'];

export const Input = (props: InputTupe) => {
	const {
		labelText,
		placeholder,
		errorMessage,
		error = false,
		type,
		...rest
	} = props;

	return (
		<div className={styles.inputContainer}>
			<label className={styles.inputLabel}>{labelText}</label>
			<input
				className={styles.input}
				type={type || 'text'}
				autoComplete='off'
				placeholder={placeholder}
				{...rest}
				data-error={error}
			/>
			{error && <p className={styles.inputError}>{errorMessage}</p>}
		</div>
	);
};
