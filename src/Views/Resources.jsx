import { ResourceLink } from '../Components/ResourceLink';
import data from '../data/resources.json';

export const Resources = () => {
  return (
    <main className="has-text-centered">
      <div className="container p-2">
        <h1 className="is-size-1 is-size-2-mobile mb-3">Helpful Resources</h1>
        <p className="mb-6">
          A list of resources surrounding the topic of programming and
          programming-related skills
        </p>
      </div>
      <section className="container has-background-white mb-6 p-6">
        {data.resources
          .sort((a, b) => {
            return a.title.toUpperCase().replace('THE', '').trim() <
              b.title.toUpperCase().replace('THE', '').trim()
              ? -1
              : 1;
          })
          .map((resource, index) => (
            <ResourceLink
              title={resource.title}
              url={resource.url}
              author={resource.author}
              tags={resource.tags}
              key={index}
            />
          ))}
      </section>
    </main>
  );
};
