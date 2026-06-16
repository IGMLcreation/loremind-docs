import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import {ShieldCheck, Sparkles, Dices, type LucideIcon} from 'lucide-react';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Icon: LucideIcon;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: (
      <Translate id="homepage.feature.selfhosted.title" description="Feature card title">
        100 % auto-hébergé
      </Translate>
    ),
    Icon: ShieldCheck,
    description: (
      <Translate id="homepage.feature.selfhosted.description" description="Feature card description">
        Vos campagnes, fiches et lore restent sur votre machine. Aucun cloud, aucune télémétrie, aucun compte à créer.
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.ai.title" description="Feature card title">
        IA locale ou distante
      </Translate>
    ),
    Icon: Sparkles,
    description: (
      <Translate id="homepage.feature.ai.description" description="Feature card description">
        Faites tourner Ollama en local pour une confidentialité totale, ou branchez une IA distante (actuellement 1min.ai supporté).
      </Translate>
    ),
  },
  {
    title: (
      <Translate id="homepage.feature.multisystem.title" description="Feature card title">
        Multi-systèmes JDR
      </Translate>
    ),
    Icon: Dices,
    description: (
      <Translate id="homepage.feature.multisystem.description" description="Feature card description">
        Gérez plusieurs campagnes avec leurs propres règles, fiches de personnages, lore et mémoire IA contextuelle.
      </Translate>
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
