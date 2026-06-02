import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <section
      className="
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        gap-4
      "
    >
      <h1
        className="
          text-display-xl
          font-bold
        "
      >
        404
      </h1>

      <p>Page not found.</p>

      <Link
        to="/"
        className="
          text-primary
          font-semibold
        "
      >
        Back Home
      </Link>
    </section>
  );
};

export default NotFoundPage;
