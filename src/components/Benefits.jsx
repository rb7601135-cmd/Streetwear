import React from 'react';
import { ShoppingBag, ShieldCheck, Award, BadgePercent } from 'lucide-react';
import { benefits } from '../data/products';

const iconMap = {
  Truck: ShoppingBag,
  ShieldCheck: ShieldCheck,
  Award: Award,
  Coins: BadgePercent
};

const Benefits = () => {
  return (
    <section className="benefits-section" id="benefits">
      <div className="benefits-container">
        {benefits.map((item) => {
          const IconComponent = iconMap[item.icon] || ShoppingBag;
          return (
            <div className="benefit-card" key={item.id} id={`benefit-${item.id}`}>
              <div className="benefit-icon-wrapper">
                <IconComponent size={26} strokeWidth={1.5} className="benefit-icon" />
              </div>
              <h3 className="benefit-title">{item.title}</h3>
              <p className="benefit-desc">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Benefits;
