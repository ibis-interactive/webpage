import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import Layout from '../components/Layout'

const imagePath = `${import.meta.env.BASE_URL}images/main-game/`
const gallery = ['gameplay_01.jpg', 'gameplay_02.jpg', 'gameplay_03.jpg', 'cover_horizontal.jpg']

export default function DonPepePage() {
  const { t } = useTranslation()
  const features = translatedArray(t, 'donPepe.features.items')

  return <Layout><main className="game-detail">
    <section className="game-detail-hero">
      <img className="game-detail-hero-background" src={`${imagePath}pepe_header.jpg`} alt="" />
      <div className="container game-detail-hero-content">
        <img className="game-detail-logo" src={`${imagePath}library_logo.png`} alt={t('donPepe.title')} />
        <p>{t('donPepe.summary')}</p>
        <div className="game-detail-actions">
          <a className="btn game-detail-primary" href="https://store.steampowered.com/app/4079810/Don_Pepe_y_sus_globos/" target="_blank" rel="noreferrer">{t('donPepe.actions.steam')}</a>
          <a className="btn game-detail-secondary" href="https://press.ibisinteractive.cl/sheet.php?p=don_pepe_y_sus_globos" target="_blank" rel="noreferrer">{t('donPepe.actions.presskit')}</a>
        </div>
      </div>
    </section>

    <section className="container game-detail-overview">
      <div className="row g-5">
        <article className="col-lg-8">
          <h1>{t('donPepe.title')}</h1>
          <p className="game-detail-lead">{t('donPepe.description')}</p>
          <h2>{t('donPepe.features.title')}</h2>
          <ul className="game-detail-features">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </article>
        <aside className="col-lg-4">
          <div className="game-detail-facts">
            <h2>{t('donPepe.facts.title')}</h2>
            <dl>
              {/* <div><dt>{t('donPepe.facts.developer')}</dt><dd>Ibis Interactive</dd></div> */}
              <div><dt>{t('donPepe.facts.release')}</dt><dd>2026</dd></div>
              <div><dt>{t('donPepe.facts.players')}</dt><dd>{t('donPepe.facts.playersValue')}</dd></div>
              <div><dt>{t('donPepe.facts.platform')}</dt><dd>Windows</dd></div>
              <div><dt>{t('donPepe.facts.languages')}</dt><dd>{t('donPepe.facts.languagesValue')}</dd></div>
            </dl>
          </div>
        </aside>
      </div>
    </section>

    <section className="game-detail-gallery" aria-labelledby="gallery-title">
      <div className="container">
        <h2 id="gallery-title">{t('donPepe.gallery')}</h2>
        <div className="row g-4 justify-content-center">{gallery.map((image, index) => <div className="col-md-4" key={image}>
          <img src={`${imagePath}${image}`} alt={t('donPepe.screenshotAlt', { number: index + 1 })} loading="lazy" />
        </div>)}</div>
      </div>
    </section>
  </main></Layout>
}

function translatedArray(t: TFunction, key: string): string[] {
  const value = t(key, { returnObjects: true })
  return Array.isArray(value) ? value as string[] : []
}
