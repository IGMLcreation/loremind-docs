import type {ReactNode} from 'react';
import {useEffect, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {Download as DownloadIcon} from 'lucide-react';

import styles from './download.module.css';

const REPO = 'IGMLcreation/LoreMind';
const RELEASES_URL = `https://github.com/${REPO}/releases`;

type Asset = {name: string; browser_download_url: string; size: number};
type Release = {tag_name: string; html_url: string; assets: Asset[]};
type Status = 'loading' | 'ok' | 'error';

function findAsset(rel: Release | undefined, ext: string): Asset | undefined {
  // On exige "loremind" dans le nom : une release peut contenir d'autres .AppImage
  // (ex. appimagetool-x86_64.AppImage, l'outil de packaging) qu'il ne faut PAS proposer.
  return rel?.assets.find(
    (a) => a.name.toLowerCase().endsWith(ext) && a.name.toLowerCase().includes('loremind'),
  );
}
function mb(bytes?: number): string {
  return bytes ? `${Math.round(bytes / 1048576)} Mo` : '';
}

type Platform = {key: string; glyph: string; name: ReactNode; desc: ReactNode; ext: string};

const PLATFORMS: Platform[] = [
  {
    key: 'win',
    glyph: '🪟',
    name: <Translate id="download.win.name">Windows</Translate>,
    desc: <Translate id="download.win.desc">Installeur .msi — double-clic, rien d'autre à installer.</Translate>,
    ext: '.msi',
  },
  {
    key: 'linux',
    glyph: '🐧',
    name: <Translate id="download.linux.name">Linux</Translate>,
    desc: <Translate id="download.linux.desc">AppImage portable — toutes distros : chmod +x puis double-clic.</Translate>,
    ext: '.appimage',
  },
];

export default function DownloadPage(): ReactNode {
  const [rel, setRel] = useState<Release | undefined>();
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    // Appel côté navigateur : CORS OK sur api.github.com, et le rate limit (60/h)
    // est PAR visiteur — non bloquant pour un site vitrine.
    let alive = true;
    fetch(`https://api.github.com/repos/${REPO}/releases/latest`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: Release) => {
        if (alive) { setRel(data); setStatus('ok'); }
      })
      .catch(() => { if (alive) setStatus('error'); });
    return () => { alive = false; };
  }, []);

  return (
    <Layout
      title={translate({id: 'download.meta.title', message: 'Télécharger'})}
      description={translate({
        id: 'download.meta.desc',
        message: "Téléchargez la dernière version de DM Loremind pour Windows et Linux.",
      })}>
      <main className={styles.wrap}>
        <Heading as="h1" className={styles.title}>
          <Translate id="download.title">Télécharger DM Loremind</Translate>
        </Heading>
        <p className={styles.subtitle}>
          <Translate id="download.subtitle">Gratuit et open source. Choisissez votre plateforme.</Translate>
        </p>

        {status === 'ok' && rel && (
          <Link className={styles.versionBadge} href={rel.html_url}>
            <Translate id="download.latest">Dernière version</Translate> · {rel.tag_name}
          </Link>
        )}

        <div className={styles.cards}>
          {PLATFORMS.map((p) => {
            const asset = findAsset(rel, p.ext);
            return (
              <div className={styles.card} key={p.key}>
                <div className={styles.glyph} aria-hidden>{p.glyph}</div>
                <Heading as="h2" className={styles.cardName}>{p.name}</Heading>
                <p className={styles.cardDesc}>{p.desc}</p>
                {status === 'ok' && asset ? (
                  <Link className={clsx('button button--lg', styles.dlBtn)} href={asset.browser_download_url}>
                    <DownloadIcon size={18} aria-hidden />
                    <Translate id="download.btn">Télécharger</Translate>
                    <span className={styles.size}>{mb(asset.size)}</span>
                  </Link>
                ) : (
                  <Link className={clsx('button button--lg', styles.dlBtnGhost)} href={RELEASES_URL}>
                    {status === 'loading' ? (
                      <Translate id="download.loading">Recherche de la dernière version…</Translate>
                    ) : (
                      <Translate id="download.fallback">Voir les versions sur GitHub</Translate>
                    )}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <p className={styles.note}>
          <Translate id="download.help">Besoin d'aide pour installer ? Consultez le</Translate>{' '}
          <Link to="/docs/intro"><Translate id="download.help.link">guide d'installation</Translate></Link>.
        </p>
      </main>
    </Layout>
  );
}
