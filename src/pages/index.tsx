import { Field, RouteData } from "@sitecore-jss/sitecore-jss-react";
import { GetServerSideProps } from "next";
import { getRouteData } from "../services/sitecore";
import { DefaultLayout } from "../layouts/DefaultLayout";

interface HomeProps {
  sitecore: {
    route: Omit<RouteData, "fields"> & {
      fields: {
        pageTitle: Field<string>;
      };
    };
  };
}

export default function Home(props: HomeProps) {
  return <DefaultLayout route={props.sitecore.route} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { sitecore } = await getRouteData("/");

  return {
    props: {
      sitecore,
    },
  };
};
