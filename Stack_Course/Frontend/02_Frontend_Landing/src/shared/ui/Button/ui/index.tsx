import React from 'react';
import styles from './index.module.scss';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	size?: 'small' | 'medium' | 'large';
	type: 'button' | 'reset' | 'submit';
	version: 'second' | 'primary';
	children?: React.ReactNode;
};

export const Button = ({
	size = 'medium',
	type = 'button',
	children,
	version = 'second',
}: ButtonProps) => {
	return (
		<button
			type={type}
			className={` ${styles.button} ${styles[size]} ${styles[version]}`}
		>
			{children}
		</button>
	);
};

// Короче, сделай чтобы у тебя в хедере была ещё одна кнопка, в отрисовку при проверке засунь 3 спана которые ты будешь крутить чтобы получить картинку меню либо крестик. Далее в хедере второй кнопке добавь мобайл визибл класс, а первой класс чтобы на телефоне видно не было. Если будет ломаться вёрстка будем делать на костылях,но чтобы заработало ))) Далее нужно будет popup сделать, сделай чтобы в кнопку можно было передавать функции.
