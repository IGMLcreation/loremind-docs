import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import {ShieldCheck, Sparkles, Dices, type LucideIcon} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Icon: LucideIcon;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '100 % auto-hébergé',
    Icon: ShieldCheck,
    description: (
      <>
        Vos campagnes, fiches et lore restent sur votre machine. Aucun cloud,
        aucune télémétrie, aucun compte à créer.
      </>
    ),
  },
  {
    title: 'IA locale ou distante',
    Icon: Sparkles,
    description: (
      <>
        Faites tourner Ollama en local pour une confidentialité totale, ou
        branchez une IA distante (actuellement 1min.ai supporté).
      </>
    ),
  },
  {
    title: 'Multi-systèmes JDR',
    Icon: Dices,
    description: (
      <>
        Gérez plusieurs campagnes avec leurs propres règles, fiches de
        personnages, lore et mémoire IA contextuelle.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.featureCard, 'text--center')}>
        <div className={styles.featureIconWrap}>
          <Icon className={styles.featureIcon} strokeWidth={1.5} aria-hidden />
        </div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
