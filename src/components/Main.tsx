import { Helmet } from "react-helmet";

export const Main = () => {
  return (
    <div>
      <Helmet>
        <title>Main page</title>
        <meta name="description" content="Это описание главной страницы" />
      </Helmet>
      <h1>Main page</h1>
    </div>
  );
};
