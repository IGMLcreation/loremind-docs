import type {ReactNode} from 'react';
import {useEffect, useRef} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {
  Network,
  FileText,
  MessagesSquare,
  Users,
  ScrollText,
  Map as MapIcon,
  Download,
  PlayCircle,
  Heart,
  BookOpen,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// Liens canoniques (cf. docusaurus.config.ts).
const LINKS = {
  download: '/download',
  docs: '/docs/intro',
  demo: 'https://loremind-demo.igmlcreation.fr',
  github: 'https://github.com/IGMLcreation/LoreMind',
  patreon: 'https://www.patreon.com/c/IGMLCreation',
};

// Runes du Futhark ancien — décor de l'anneau (cercle magique).
const RUNES = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛟᛞ';

/** Fond animé : graphe de connaissances (nœuds + arêtes) — écho au graphe de lore. */
function Constellation(): ReactNode {
  const nodes = [
    [12, 22], [28, 64], [20, 84], [42, 38], [55, 72],
    [68, 30], [80, 60], [88, 82], [62, 14], [38, 12],
  ];
  const edges = [
    [0, 3], [3, 9], [3, 5], [5, 8], [5, 6],
    [1, 0], [1, 4], [4, 6], [6, 7], [7, 2], [4, 2],
  ];
  return (
    <svg className={styles.constellation} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
      <g className={styles.edges}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      <g className={styles.nodes}>
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={0.7} style={{animationDelay: `${(i % 5) * 0.6}s`}} />
        ))}
      </g>
    </svg>
  );
}

/** Sceau : anneau runique rotatif autour du logo (CSS/SVG, sans JS). */
function Sigil(): ReactNode {
  return (
    <div className={styles.sigil} aria-hidden>
      <svg viewBox="0 0 240 240" className={styles.runeRing}>
        <defs>
          <path id="runePath" d="M120,120 m-94,0 a94,94 0 1,1 188,0 a94,94 0 1,1 -188,0" />
        </defs>
        <circle cx="120" cy="120" r="110" className={styles.ringOuter} />
        <circle cx="120" cy="120" r="76" className={styles.ringInner} />
        <text className={styles.runeText}>
          <textPath href="#runePath" startOffset="0">{RUNES + RUNES}</textPath>
        </text>
      </svg>
      <img src="/img/app-logo.png" alt="DM Loremind" className={styles.sigilLogo} />
    </div>
  );
}

function HomepageHeader(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <Constellation />
      <div className={clsx('container', styles.heroInner)}>
        <Sigil />
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          <Translate id="home.hero.tagline" description="Hero subtitle">
            Le codex numérique du Maître de Jeu
          </Translate>
        </p>
        <p className={styles.heroPitch}>
          <Translate id="home.hero.pitch" description="Hero one-liner">
            Campagnes, lore, fiches et règles réunis dans un seul atelier en local sur votre PC —
            avec une IA en locale ou en cloud qui connaît votre univers.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to={LINKS.download}>
            <Download size={18} aria-hidden />
            <Translate id="home.hero.cta.download" description="Download CTA">Télécharger</Translate>
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} to={LINKS.docs}>
            <BookOpen size={18} aria-hidden />
            <Translate id="home.hero.cta.docs" description="Docs CTA">Documentation</Translate>
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} href={LINKS.demo}>
            <PlayCircle size={18} aria-hidden />
            <Translate id="home.hero.cta.demo" description="Demo CTA">Voir la démo</Translate>
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} href={LINKS.github}>
            <Translate id="home.hero.cta.github" description="GitHub CTA">Code source</Translate>
          </Link>
        </div>
        <p className={styles.trustline}>
          <span>✦ <Translate id="home.hero.trust.selfhosted">100 % auto-hébergé</Translate></span>
          <span>✦ <Translate id="home.hero.trust.oss">Open source (AGPL-3.0)</Translate></span>
          <span>✦ <Translate id="home.hero.trust.ai">IA locale ou cloud</Translate></span>
        </p>
        <button
          type="button"
          className={styles.scrollCue}
          aria-label={translate({id: 'home.hero.scroll.aria', message: 'Faire défiler vers le bas'})}
          onClick={() => window.scrollTo({top: window.innerHeight * 0.85, behavior: 'smooth'})}>
          <span><Translate id="home.hero.scroll" description="Scroll cue label">Découvrir</Translate></span>
          <ChevronDown size={22} aria-hidden />
        </button>
      </div>
    </header>
  );
}

type Capability = {Icon: LucideIcon; title: ReactNode; desc: ReactNode};

const CAPABILITIES: Capability[] = [
  {
    Icon: ScrollText,
    title: <Translate id="home.cap.lore.t">Le lore, votre base de connaissances</Translate>,
    desc: <Translate id="home.cap.lore.d">Pages, dossiers et templates pour bâtir votre univers. Tout relié dans un graphe navigable.</Translate>,
  },
  {
    Icon: MapIcon,
    title: <Translate id="home.cap.campaign.t">Campagnes & sessions</Translate>,
    desc: <Translate id="home.cap.campaign.d">Arcs, chapitres, scènes et parties suivies, avec une mémoire IA propre à chaque table.</Translate>,
  },
  {
    Icon: Users,
    title: <Translate id="home.cap.npc.t">Fiches & PNJ</Translate>,
    desc: <Translate id="home.cap.npc.d">Personnages, ennemis, objets, tables aléatoires — chaque système avec ses propres règles.</Translate>,
  },
  {
    Icon: Network,
    title: <Translate id="home.cap.graph.t">Le graphe de connaissances</Translate>,
    desc: <Translate id="home.cap.graph.d">Vos personnages et votre lore s'interconnectent en fonction des pages que vous avez liés.</Translate>,
  },
  {
    Icon: FileText,
    title: <Translate id="home.cap.rules.t">Import de règles ou d'une campagne PDF</Translate>,
    desc: <Translate id="home.cap.rules.d">Grâce à l'IA, digérez un livre de règles en quelques minutes afin de batir votre système de jeu. Vous pouvez également importer une campagne pour la créer en moins de temps.</Translate>,
  },
  {
    Icon: MessagesSquare,
    title: <Translate id="home.cap.chat.t">Chat ancré sur vos sources</Translate>,
    desc: <Translate id="home.cap.chat.d">Posez vos questions ; les réponses citent vos documents et prend en compte le contexte de votre lore et de votre campagne.</Translate>,
  },
];

function Grimoire(): ReactNode {
  return (
    <section className={styles.grimoire}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>
            <Translate id="home.grimoire.kicker">Qu'est-ce que DM Loremind ?</Translate>
          </span>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.grimoire.title">Un atelier complet pour mener vos parties</Translate>
          </Heading>
        </div>
        <div className="row">
          {CAPABILITIES.map(({Icon, title, desc}, i) => (
            <div className="col col--4" key={i}>
              <div className={styles.spellCard}>
                <div className={styles.spellIcon}><Icon size={26} strokeWidth={1.5} aria-hidden /></div>
                <Heading as="h3" className={styles.spellTitle}>{title}</Heading>
                <p className={styles.spellDesc}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// `src` (capture) et/ou `video` (mp4) : si une vidéo est fournie, lecture auto
// muette/bouclée à l'écran ; sinon la capture. Sans AUCUN des deux → placeholder
// « Aperçu à venir » (pas d'image cassée tant que le média n'est pas déposé).
type Shot = {src?: string; video?: string; title: ReactNode; desc: ReactNode};

const SHOWCASE: Shot[] = [
  {
    src: '/img/screenshots/dashboard.png',
    video: '/video/dashboard.mp4',
    title: <Translate id="home.shot.dash.t">Votre univers, d'un coup d'œil</Translate>,
    desc: <Translate id="home.shot.dash.d">Un tableau de bord qui rassemble campagnes, lore et raccourcis — pensé pour préparer vite et improviser sereinement.</Translate>,
  },
  {
    src: '/img/screenshots/lore/Lore_accueil.png',
    video: '/video/Lore_demo.mp4',
    title: <Translate id="home.shot.lore.t">Un espace pour les gouverner tous, et dans les ténèbres les lier</Translate>,
    desc: <Translate id="home.shot.lore.d">A partir des templates, organisez votre lore en pages liées les unes aux autres. L'IA s'appuie dessus pour répondre à vos questions dans votre univers.</Translate>,
  },
  {
    video: '/video/PNJ_PJ_demo.mp4',
    title: <Translate id="home.shot.npc.t">Des PNJ prêts à entrer en scène</Translate>,
    desc: <Translate id="home.shot.npc.d">Personnages, ennemis et objets structurés par système — créés de toute pièce par vous, toujours à portée de main en pleine partie.</Translate>,
  },
  {
    video: '/video/Import.mp4',
    title: <Translate id="home.shot.import.t">Un livre de règles digéré par l'IA</Translate>,
    desc: <Translate id="home.shot.import.d">Importez un PDF de règles ou de campagne : l'IA en extrait la structure en quelques minutes pour bâtir votre système de jeu.</Translate>,
  },
  {
    video: '/video/campagne_loremind.mp4',
    title: <Translate id="home.shot.sessions.t">Menez vos parties, gardez le fil</Translate>,
    desc: <Translate id="home.shot.sessions.d">Arcs, chapitres, scènes et sessions suivies : préparez, jouez, et retrouvez chaque détail d'une partie à l'autre.</Translate>,
  },
  {
    video: '/video/chat.mp4',
    title: <Translate id="home.shot.chat.t">Une IA qui maîtrise votre univers</Translate>,
    desc: <Translate id="home.shot.chat.d">Discutez avec un assistant ancré sur VOS sources — règles, lore, campagne. Il s'appuie sur vos documents et reste dans le ton de votre monde.</Translate>,
  },
];

/** Média du showcase : vidéo (autoplay muet, joue à l'écran seulement) ou capture. */
function ShowcaseMedia({src, video}: {src?: string; video?: string}): ReactNode {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Pas d'autoplay si l'utilisateur a demandé moins d'animations.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    // Joue quand le clip entre dans le viewport, met en pause quand il en sort.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      }),
      {threshold: 0.25},
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Aucun média encore fourni → placeholder discret (évite l'image cassée).
  if (!src && !video) {
    return (
      <div className={styles.shotPlaceholder}>
        <Translate id="home.showcase.pending">Aperçu à venir</Translate>
      </div>
    );
  }
  if (!video) return <img src={src} alt="" loading="lazy" />;
  return (
    <video ref={ref} muted loop playsInline preload="metadata" poster={src} aria-hidden>
      <source src={video} type="video/mp4" />
    </video>
  );
}

function Showcase(): ReactNode {
  return (
    <section className={styles.showcase}>
      <div className="container">
        <div className={styles.sectionHead}>
          <span className={styles.kicker}>
            <Translate id="home.showcase.kicker">Aperçu</Translate>
          </span>
          <Heading as="h2" className={styles.sectionTitle}>
            <Translate id="home.showcase.title">L'atelier en images</Translate>
          </Heading>
        </div>
        <div className={styles.shotList}>
          {SHOWCASE.map(({src, video, title, desc}, i) => (
            <div className={clsx(styles.shotRow, i % 2 === 1 && styles.shotRowAlt)} key={i}>
              <div className={styles.shotText}>
                <Heading as="h3" className={styles.shotTitle}>{title}</Heading>
                <p className={styles.shotDesc}>{desc}</p>
              </div>
              <div className={styles.shotFrame}>
                <span className={styles.shotDots}><i /><i /><i /></span>
                <ShowcaseMedia src={src} video={video} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta(): ReactNode {
  return (
    <section className={styles.finalCta}>
      <div className={clsx('container', styles.finalInner)}>
        <Heading as="h2" className={styles.finalTitle}>
          <Translate id="home.final.title">Ouvrez le codex</Translate>
        </Heading>
        <p className={styles.finalText}>
          <Translate id="home.final.text">
            Installable en un double-clic (bureau) ou via Docker (homelab). Gratuit et open source —
            soutenez le développement sur Patreon pour les bêtas et les coulisses.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link className={clsx('button button--lg', styles.btnPrimary)} to={LINKS.download}>
            <Download size={18} aria-hidden />
            <Translate id="home.final.cta.install">Installer maintenant</Translate>
          </Link>
          <Link className={clsx('button button--lg', styles.btnGhost)} href={LINKS.patreon}>
            <Heart size={18} aria-hidden />
            <Translate id="home.final.cta.patreon">Soutenir sur Patreon</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: 'home.meta.description',
        message:
          "DM Loremind : l'atelier auto-hébergé du Maître de Jeu — lore, campagnes, fiches et IA ancrée sur vos propres règles.",
        description: 'Homepage <meta> description for SEO',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Grimoire />
        <Showcase />
        <FinalCta />
      </main>
    </Layout>
  );
}
