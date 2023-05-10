import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import heroImage from '../assets/heroImage.svg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HeroHeader() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Welcome to [Company Name]
            </Title>
            <Text color="dimmed" mt="md">
              Redefine Efficiency with Virtual Assistant Services. A Personalized Approach to Optimize Your Workflow.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Increased Productivity</b> – Enhance productivity in various areas such as administrative support, social media management, or content creation, ensuring tasks are completed efficiently.
              </List.Item>
              <List.Item>
                <b>Access to Diverse Skillsets</b> – Tap into our experience in areas such as customer support, graphic design, bookkeeping, or marketing, benefiting from their specialized knowledge without having to hire multiple full-time employees.
              </List.Item>
              <List.Item>
                <b>Improved Work-Life Balance</b> – By offloading administrative burdens, you can devote more time to personal commitments, hobbies, and spending quality time with family and friends.
                keyboard
              </List.Item>
            </List>

            <Group  mt={30}>
              <Button radius="xl" size="md" className={classes.control} fullWidth>
                Get In Touch Now
              </Button>
             
            </Group>
          </div>
          <Image src={heroImage.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
