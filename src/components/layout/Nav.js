import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";

import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Link from "../util/Link";
import MobileNav from "./MobileNav";

// "a11y" = accessibility
// ARIA = Accessible Rich Internet Application and the set of attributes
// help describe the web content for screen readers
function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: 5,
    left: 5,
    padding: theme.spacing(2),

    "&:hover": {
      cursor: "pointer",
    },
  },
  productHunt: {
    position: "absolute",
    top: 5,
    right: 5,
    padding: theme.spacing(2),

    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export default function Nav({ context }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <>
      {context.isMobile ? (
        <nav className={classes.nav}>
          <MobileNav context={context} classes={classes} />
        </nav>
      ) : (
        <nav className={classes.nav}>
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            onClick={(event) => context.changeNav(event, 0)}
          >
            <motion.div
              className={classes.logo}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.3 }}
            >
              <Img fixed={data.file.childImageSharp.fixed} alt="APM Map logo" />
            </motion.div>
          </Link>
          <Tabs
            className={classes.tabs}
            value={context.currentPage}
            onChange={context.changeNav}
          >
            {context.routes.map((route, idx) => (
              <Tab label={route.name} key={route.link} {...a11yProps(idx)} />
            ))}
          </Tabs>
          <div className={classes.productHunt}>
            <a
              href="https://www.producthunt.com/posts/apm-map?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-apm-map"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=271828&theme=light"
                alt="APM Map - Discover resources to help you navigate your journey into PM | Product Hunt"
                style={{ width: "250px", height: "54px" }}
                width="250"
                height="54"
              />
            </a>
          </div>
        </nav>
      )}
    </>
  );
}
