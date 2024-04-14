import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig'; // Make sure to import AppConfig

const Banner = () => (
  <Section>
    <CTABanner
      title="Gift your little one a great future!"
      subtitle={`Enroll Today! Contact : ${AppConfig.enquiry_number}`} // Use template literals
      button={<Button formId="contact-form-section">Start Learning</Button>}
    />
  </Section>
);

export { Banner };
