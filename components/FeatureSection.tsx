import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem } from '@mantine/core';
import { IconGauge, IconWallpaper, IconUser, IconMessage2, IconLock, IconPlane, IconDeviceLaptop } from '@tabler/icons-react';
import {Slide} from "react-awesome-reveal";

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Administrative Support',
    description:
      'Delegate your administrative tasks to our virtual assistants. From managing emails and calendars to organizing documents and conducting research, we handle the essential administrative duties, allowing you to focus on more strategic aspects of your business.',
  },
  {
    icon: IconDeviceLaptop,
    title: 'Data Entry and Management',
    description:
      'Streamline your data entry and management processes with our skilled virtual assistants. We assist in organizing, updating, and maintaining your databases, ensuring data accuracy and accessibility for your business operations.',
  },
  {
    icon: IconWallpaper,
    title: 'Content Writing and Editing',
    description:
      'Deliver compelling content with the help of our virtual assistants. We provide professional writing and editing services, crafting engaging blog posts, articles, website content, and more, tailored to your target audience and business objectives.',
  },
  {
    icon: IconUser,
    title: 'Social Media Management',
    description:
      'Maximize your online presence with our social media management services. Our virtual assistants handle content creation, scheduling posts, engaging with your audience, and monitoring analytics to help you build a strong social media presence.',
  },
  {
    icon: IconPlane,
    title: 'Travel Planning and Coordination',
    description:
      'Save time and reduce travel-related stress with our virtual assistants. We take care of travel arrangements, including booking flights, accommodations, and transportation, ensuring smooth and efficient business trips.',
  },
  {
    icon: IconMessage2,
    title: 'Email and Calendar Management',
    description:
      'Stay organized and never miss an important appointment or deadline. Our virtual assistants efficiently manage your email inbox and calendar, categorizing and prioritizing messages, scheduling meetings, and sending reminders.',
  }
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));

interface FeaturesGridProps {
  title: React.ReactNode;
  description: React.ReactNode;
  data?: FeatureProps[];
}

export function FeatureSection({ title, description, data = MOCKDATA }: FeaturesGridProps) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Our Services</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          Expert Support Tailored to Your Unique Needs. Elevate Your Productivity with Our Virtual Assistant Solutions.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        <Slide>
        {features}
        </Slide>
      </SimpleGrid>
    </Container>
  );
}
