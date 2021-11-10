const LandingArticle = (props) => {
  return (
    <article className="col-third">
      <img src={props.img} alt="" />
      <div>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <button>Read More</button>
      </div>
    </article>
  );
};

export default LandingArticle;
