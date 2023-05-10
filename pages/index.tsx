import { createStyles, Container, Space } from '@mantine/core';
import { ContactUsBox } from '../components/ContactUsBox';
import { HeroHeader } from '../components/HeroHeader';
import { FeatureSection } from '../components/FeatureSection';
import { StatBox } from '../components/StatBox';
import { FAQ } from '../components/FAQ';
const useStyles = createStyles((theme) => ({
  root: {
    margin: '0 auto',
    maxWidth: '1000px',
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.root}>
        <HeroHeader />
        <Space h="md" />
        <StatBox />
        <Space h="md" />
        <FeatureSection title={undefined} description={undefined} />
        <Space h="md" />
        <StatBox />
        <Space h="md" />
        <FAQ />
        <Space h="md" />
        <ContactUsBox />
        <Space h="md" />
      </Container>
    </>
  );
}
