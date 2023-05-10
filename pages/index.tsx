import { Welcome } from '../components/Welcome/Welcome';
import { ContactUsBox } from '../components/ContactUsBox';
import { HeroHeader } from '../components/HeroHeader';

export default function HomePage() {
  return (
    <>
      <HeroHeader />
      <ContactUsBox />
    </>
  );
}
