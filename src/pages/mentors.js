import React from "react";

import Layout from "../components/layout/Layout";
import MentorsGrid from "../components/mentors/MentorsGrid";
import SEO from "../components/util/seo";

const keywords = [
  "apm",
  "APM",
  "A/PM",
  "product",
  "management",
  "recruiting",
  "mentors",
  "michelle ma",
  "Katie Goldstein",
  "Shruti Ramanathan",
  "Dasani Madipalli ",
  "Lisa Huang-North",
  "Nancy Wang",
  "Kelly Luo",
  "Charlene Wang",
  "David Cai",
  "Nelly Lin",
  "Adam Chow",
  "Priyanka Maskar",
  "Nimalen (Nim) Sivapalan",
  "Aditi Priya",
  "David Lietjauw",
  "Umesh Khanna",
  "Sandra Luo",
  "Mahmoud Alzaghari",
  "Emmett Chen-Ran",
  "Johnathan Zhou",
  "Frank Dong",
  "Sari Abukhadra",
  "Roshni Rawal",
  "Joel Montano",
  "Max Beech",
  "Nelli Petikyan",
  "Keerthi Pradaa Balajee",
];

export default function MentorsPage({ location }) {
  return (
    <Layout location={location}>
      <SEO lang={"en"} title={"Mentors"} keywords={keywords} />
      <MentorsGrid />
    </Layout>
  );
}
