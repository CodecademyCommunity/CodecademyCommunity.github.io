export const ResourceLink = (props) => {
  const { title, url, author, tags } = props;

  return (
    <div>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      {author && <p>Author: {author}</p>}
      {tags && (
        <div>
          {tags.map((tag, index) => (
            <span key={index}>#{tag} </span>
          ))}
        </div>
      )}
    </div>
  );
};
