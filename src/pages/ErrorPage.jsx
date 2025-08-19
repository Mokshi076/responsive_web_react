import { useRouteError , NavLink }  from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>oops! An error occured.</h1>
      {error && <p>
        {error.data}
        </p>}
        <NavLink to="/"> go home </NavLink>
    </div>
  );
};

