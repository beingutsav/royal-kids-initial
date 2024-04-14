import { onValue } from 'firebase/database';
import { useEffect, useState } from 'react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { featuresRef } from '../firebase/firebaseconfig';
import { Section } from '../layout/Section';

const VerticalFeatures = () => {
  const [features, setFeatures] = useState<{ [key: string]: any }[]>([]);
  const bgColors = ['bg-red-600', 'bg-green-600', 'bg-yellow-600'];

  useEffect(() => {
    const fetchData = () => {
      onValue(featuresRef, (snapshot) => {
        const featuresData = snapshot.val();
        if (featuresData) {
          // Convert object to array for mapping
          const featuresArray: { [key: string]: any }[] = Object.keys(
            featuresData,
          ).map((key) => ({
            id: key,
            ...featuresData[key],
          }));
          setFeatures(featuresArray);
        }
      });
    };

    fetchData();
  }, []);

  // Calculate the reverse prop value outside of the map function
  const reverseValue = features.map((_, index) => index % 2 === 0);

  return (
    <Section
      logo="/logo1.webp"
      description="Welcome to Royal Kids - a vibrant and nurturing play school offering education from preschool to class 8. At Royal Kids, we provide a stimulating environment where children can explore, learn, and grow while having fun."
    >
      {features.map((feature, index) => (
        <VerticalFeatureRow
          key={index}
          bgColorClassName={bgColors[index % bgColors.length]}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          imageAlt={feature.imageAlt}
          reverse={reverseValue[index]} // Pass the pre-calculated reverse prop
        />
      ))}
    </Section>
  );
};

export { VerticalFeatures };
