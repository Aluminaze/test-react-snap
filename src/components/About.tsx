import { Helmet } from "react-helmet";

export const About = () => {
  return (
    <div>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="Это страница с метатэгом About" />
      </Helmet>
      <h1>About page</h1>
    </div>
  );
};
