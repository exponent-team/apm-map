import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Emoji from "../util/Emoji";
import Link from "@material-ui/core/Link";

import CreatorProfile from "./CreatorProfile";

const useStyles = makeStyles((theme) => ({
  aboutText: {
    padding: theme.spacing(2, 5, 2),
  },
  title: {
    fontWeight: 900,
    padding: theme.spacing(2, 0, 2),
    width: "75%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Creators({ context }) {
  const classes = useStyles();

  const aboutMima = (
    <>
      <Typography variant="h5" className={classes.aboutText}>
        Michelle Ma
      </Typography>
      <Typography className={classes.aboutText}>
        Hey, I'm Michelle <Emoji symbol="🍵" label="matcha" />, one of the
        co-creators behind APM Map. I'm an Associate Product Manager @ Yahoo
        (Verizon Media). On the side, I'm also writing{" "}
        <Link target="_blank" href="https://techcare.substack.com/welcome">
          Tech Care
        </Link>
        , a newsletter that unpacks the intersection of tech {"&"} self
        care/community care/structural care. If you have any questions about APM
        Recruiting, APM Map, or Tech Care, DM me on{" "}
        <Link target="_blank" href="https://twitter.com/musingsbymima">
          Twitter
        </Link>{" "}
        and let's chat!
      </Typography>
      <Typography className={classes.aboutText}>
        APM Map is the result of one of the <em> hardest </em>
        recruiting seasons I've ever had to go through. APM recruiting is
        already notoriously competitive, and on top of that, I constantly felt
        like I was behind, didn't have all the resources at hand, and was
        generally really lost. There were so many times where I would find a
        golden resource days before an interview, knowing that if I had found it
        maybe a week earlier, the interview outcome might have been different.
      </Typography>
      <Typography className={classes.aboutText}>
        The <strong>idea</strong> behind APM Map is that you can start the
        recruiting season with as many resources available to you as possible —
        so you can hit the ground running, wherever you are in your prep
        process.
      </Typography>
    </>
  );

  const aboutJeff = (
    <>
      <Typography variant="h5" className={classes.aboutText}>
        Jeffrey Fabian
      </Typography>
      <Typography className={classes.aboutText}>
        Hey, my name is Jeff <Emoji symbol="👋🏼" label="hand-wave" />. I'm a{" "}
        QuestBridge alum, Software Engineer at Mailchimp, amateur writer of{" "}
        <Link href="https://secondgen.substack.com/welcome">
          Second Generation
        </Link>{" "}
        and technical co-creator of APM Map.
      </Typography>
      <Typography className={classes.aboutText}>
        Like many others, I've had my fair share of frustrations with the
        recruiting process. I was spending countless hours applying to every
        tech company under the sun and working through{" "}
        <Link href="https://leetcode.com/"> trivial interview questions </Link>
        all while trying to keep my grades afloat, working a part-time job and
        just trying to figure out whether the path I was on was right for me to
        begin with.
      </Typography>
      <Typography className={classes.aboutText}>
        I'm helping build APM Map in hopes to simplify and <em> humanize </em>{" "}
        the recruiting process — sharing the tools we all need to bring our best
        selves to that interview and creating a supportive community that'll
        remind us that we're not alone in this journey.
      </Typography>
    </>
  );

  return (
    <Container className={classes.container}>
      <Typography
        className={classes.title}
        variant="h3"
        align="center"
        color="textPrimary"
      >
        {"The Creators"}
      </Typography>
      <CreatorProfile
        invert={context.isMobile}
        content={aboutMima}
        avatarSrc="https://storage.googleapis.com/mentors-pics/mima-profile-pic.jpg"
        twitter="https://twitter.com/musingsbymima"
        substack="https://techcare.substack.com/welcome"
      />
      <CreatorProfile
        invert
        content={aboutJeff}
        avatarSrc="https://storage.googleapis.com/mentors-pics/jeff-3.jpg"
        linkedIn="https://www.linkedin.com/in/jf2978/"
        github="https://github.com/jf2978"
        substack="https://secondgen.substack.com/welcome"
      />
    </Container>
  );
}
