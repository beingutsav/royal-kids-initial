import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import ContactForm from './ContactForm';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    {/* <Sponsors /> */}
    <div id="features-section">
      <VerticalFeatures />
    </div>
    <Banner />
    <div id="contact-form-section">
      <ContactForm />
    </div>
    <Footer />
  </div>
);

export { Base };
