import { Background1 } from '../background/Background1';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background1 imageUrl="/motherdaybanner.jpeg">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl imageUrl="/logo1.webp" />}>
        <li>
          <Button formId="contact-form-section"> Contact Us </Button>
        </li>
        <li>
          <Button formId="features-section"> Features </Button>
        </li>
        <li>
          <Button linkTo="https://www.instagram.com/royalkidsschool_rajnagar">
            Instagram
          </Button>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {/* 'The modern landing page for\n' */}
            <span className="text-blue-500">
              Mother&apos;s Day Celebration at Royal Kids! Register Below
            </span>
          </>
        }
        description="Raj Nagar, Ghaziabad"
        button={
          <Button xl linkTo="/eventform">
            Mother&apos;s day Registration
          </Button>
        }
      />
    </Section>
  </Background1>
);

export { Hero };
