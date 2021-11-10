import articleTeaser from '../../data/articleTeasers';
import LandingArticle from './LandingArticle';

const Archive = () => {
  return (
    <section>
      <h2>From the Archive</h2>

      <div className="grid-wrapper articles">
        {articleTeaser.map((teaser) => {
          return <LandingArticle title={teaser.title} body={teaser.content} img={teaser.img} />;
        })}
      </div>
    </section>
  );
};

export default Archive;
