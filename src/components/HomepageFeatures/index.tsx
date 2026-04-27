import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '100 % auto-hébergé',
    emoji: '🔒',
    description: (
      <>
        Vos campagnes, fiches et lore restent sur votre machine. Aucun cloud,
        aucune télémétrie, aucun compte à créer.
      </>
    ),
  },
  {
    title: 'IA locale ou distante',
    emoji: '🧠',
    description: (
      <>
        Faites tourner Ollama en local pour une confidentialité totale, ou
        branchez OpenAI / Anthropic pour plus de puissance.
      </>
    ),
  },
  {
    title: 'Multi-systèmes JDR',
    emoji: '🎲',
    description: (
      <>
        Gérez plusieurs campagnes avec leurs propres règles, fiches de
        personnages, lore et mémoire IA contextuelle.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx(styles.featureCard, 'text--center')}>
        <div className={styles.featureEmoji} role="img" aria-label={title}>
          {emoji}
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
