import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Gift your little one a great future!"
      subtitle="Enroll Today! Contact : 9990961898"
      button={<Button formId="contact-form-section">Start Learning</Button>}
    />
  </Section>
);

export { Banner };
