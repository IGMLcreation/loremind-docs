import type {ReactNode} from 'react';
import clsx from 'clsx';
import {Info, AlertTriangle, Lightbulb, ShieldAlert, type LucideIcon} from 'lucide-react';
import styles from './styles.module.css';

type CalloutType = 'info' | 'tip' | 'warning' | 'danger';

type CalloutProps = {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
};

const ICONS: Record<CalloutType, LucideIcon> = {
  info: Info,
  tip: Lightbulb,
  warning: AlertTriangle,
  danger: ShieldAlert,
};

export default function Callout({type = 'info', title, children}: CalloutProps) {
  const Icon = ICONS[type];
  return (
    <aside className={clsx(styles.callout, styles[type])}>
      <div className={styles.iconWrap}>
        <Icon size={18} strokeWidth={2} aria-hidden />
      </div>
      <div className={styles.content}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </aside>
  );
}
