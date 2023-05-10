import { Container, Title, Accordion, createStyles, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

export function FAQ() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control> What is a virtual assistant?</Accordion.Control>
          <Accordion.Panel>A virtual assistant (VA) is a professional who provides remote administrative, creative, or technical support to individuals, entrepreneurs, or businesses. They utilize technology to deliver their services, working remotely from their own location.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>What are the payment arrangements for virtual assistant services?</Accordion.Control>
          <Accordion.Panel>Payment arrangements for virtual assistant services can vary. Some virtual assistants charge an hourly rate, while others offer package deals or project-based pricing. The payment terms and methods should be discussed and agreed upon with the virtual assistant before starting the engagement.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>What if I am not satisfied with the services provided by a virtual assistant?</Accordion.Control>
          <Accordion.Panel>It's important to establish clear expectations and maintain open communication with your virtual assistant from the beginning. If any issues arise, address them promptly and discuss possible solutions. If the situation cannot be resolved, it may be necessary to explore other options, such as finding a new virtual assistant or revisiting the terms of the engagement.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control> How do I communicate and collaborate with my virtual assistant?</Accordion.Control>
          <Accordion.Panel>Communication and collaboration with a virtual assistant can be easily done through various online tools and platforms. You can use email, instant messaging apps, project management software, and video conferencing tools to stay connected, share files, and delegate tasks effectively.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>Can virtual assistants handle industry-specific tasks and specialized projects?</Accordion.Control>
          <Accordion.Panel>Yes, virtual assistants can often handle industry-specific tasks and specialized projects. Many virtual assistants have diverse skill sets and experience in various domains. It's important to communicate your specific requirements and assess their expertise during the hiring process to ensure they can meet your unique needs.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}