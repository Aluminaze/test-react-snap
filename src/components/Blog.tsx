import { Helmet } from "react-helmet";

export const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Blog page</title>
        <meta name="description" content="Description of blog page" />
      </Helmet>
      <h1>Blog page</h1>
    </div>
  );
};
