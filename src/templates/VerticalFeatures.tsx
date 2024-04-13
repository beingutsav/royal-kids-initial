import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    logo="/logo1.webp"
    description="Welcome to Royal Kids - a vibrant and nurturing play school offering education from preschool to class 8. At Royal Kids, we provide a stimulating environment where children can explore, learn, and grow while having fun."
  >
    <VerticalFeatureRow
      title="Creative Learning"
      description="At Royal Kids, we foster creativity and imagination through hands-on learning activities. Our curriculum encourages exploration and experimentation, helping children develop problem-solving skills and unleash their creative potential."
      image="/creative-learning.jpg"
      imageAlt="Creative Learning"
      bgColorClassName="bg-red-600"
    />
    <VerticalFeatureRow
      title="Holistic Development"
      description="We believe in holistic development, focusing on the physical, emotional, social, and cognitive growth of each child. Our dedicated educators provide personalized attention, nurturing every aspect of a child's development."
      image="/holistic-development.jpg"
      imageAlt="Holistic Development"
      bgColorClassName="bg-green-600"
      reverse
    />
    <VerticalFeatureRow
      title="Safe and Supportive Environment"
      description="At Royal Kids, safety is our top priority. We maintain a secure and supportive environment where children feel valued, respected, and encouraged to explore and express themselves freely."
      image="safe.jpg"
      imageAlt="Safe and Supportive Environment"
      bgColorClassName="bg-yellow-600"
    />
  </Section>
);

export { VerticalFeatures };
