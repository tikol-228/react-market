import React, { JSX } from 'react';

interface TitleProps {
  type?: 1 | 2 | 3 | 4 | 5 | 6; // Уровень заголовка
  children: React.ReactNode; // Содержимое заголовка
  className?: string; // Дополнительные классы для стилизации
}

const Title: React.FC<TitleProps> = ({ type = 1, children, className }) => {
  const Tag = `h${type}` as keyof JSX.IntrinsicElements; // Определяем тег заголовка

  return <Tag className={className}>{children}</Tag>;
};

export default Title;