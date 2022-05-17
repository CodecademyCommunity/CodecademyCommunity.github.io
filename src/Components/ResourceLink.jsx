export const ResourceLink = (props) => {
  const { title, url, author, tags } = props;

  return (
    <div className="resource-link">
      <h3>
        <a href={url}>{title}</a>
      </h3>
      {author && (
        <p className="resource-author">
          <strong>Author:</strong> {author}
        </p>
      )}
      {tags && (
        <div>
          {tags.map((tag, index) => (
            <span key={index} className="resource-tag">
              #{tag}{' '}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
