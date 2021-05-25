import './article.css';

export function Article({ article }) {
  const { header, text, img_url, alt } = article;

  return (
    <article className='article'>
      <img
        className='article__poster'
        src={img_url}
        alt={alt}
        width='292'
        height='242'
      />
      <div className='article__wrapper'>
        <h2 className='article__title'>{header}</h2>
        <p className='article__text'>{text}</p>
      </div>
    </article>
  );
}
