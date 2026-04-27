import type {ReactNode} from 'react';
import type {LucideIcon} from 'lucide-react';
import styles from './styles.module.css';

type IconFeatureProps = {
  Icon: LucideIcon;
  title: string;
  children: ReactNode;
};

export default function IconFeature({Icon, title, children}: IconFeatureProps) {
  return (
    <li className={styles.item}>
      <span className={styles.iconWrap}>
        <Icon size={18} strokeWidth={1.75} aria-hidden />
      </span>
      <span>
        <strong>{title}</strong> — {children}
      </span>
    </li>
  );
}

export function IconFeatureList({children}: {children: ReactNode}) {
  return <ul className={styles.list}>{children}</ul>;
}
