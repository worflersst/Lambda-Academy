import { Hands } from '@/shared/assets/home-page-picture/RegistrFormBlock';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { ChangeEvent, useState } from 'react';
import { configHomeP, configHomePState } from '../Configs/configHomeP';
import styles from './index.module.scss';

export const FormRegistr = () => {
	const [formState, setFormState] = useState(configHomePState);
	const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormState(prev => ({ ...prev, [name]: value }));
		setTouched(prev => ({ ...prev, [name]: true }));
	};

	const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormState(configHomePState);
		setTouched({});
	};

	const validateField = (item: any, value: string) => {
		if (!touched[item.name]) return false;
		if (item.validate) {
			return !item.validate(formState);
		}
		if (item.pattern) {
			return !new RegExp(item.pattern).test(value);
		}
		return false;
	};

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<p className={styles.formTitle}>
				Hi, we’re <span>Tinvio!</span> And you?
			</p>
			<div className={styles.formInputWrapper}>
				{configHomeP.map(item => (
					<Input
						key={item.key}
						{...item}
						value={formState[item.name]}
						onChange={onChange}
						error={validateField(item, formState[item.name])}
					/>
				))}
			</div>
			<div className={styles.formButtonWrapper}>
				<Button size='medium' version='primary' type='submit'>
					Submit
				</Button>
				<div className={styles.formFooter}>
					<p>No spam, promise</p>
					<img src={Hands} alt='Hand image' />
				</div>
			</div>
		</form>
	);
};
