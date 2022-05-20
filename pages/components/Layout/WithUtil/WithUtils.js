import { useRouter } from "next/router";
import Cookies from "js-cookie";
// eslint-disable-next-line react/display-name
const WithUtils = (WrappedComponent) => {
  const Router = useRouter();
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {

      const accessToken = Cookies.get("jwt");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        Router.replace("/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default WithUtils;