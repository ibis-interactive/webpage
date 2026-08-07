import { useTranslation } from 'react-i18next'
import type { TFunction } from 'i18next'
import Layout from '../components/Layout'

const sections = ['collection', 'use', 'security', 'rights', 'changes'] as const

export default function PrivacyPage() {
  const { t } = useTranslation()
  return <Layout><main id="privacy-policy" className="container my-5"><div className="row justify-content-center"><article className="col-lg-10">
    <h1 className="mb-4">{t('privacy.title')}</h1><p dangerouslySetInnerHTML={{ __html: t('privacy.intro') }} />
    {sections.map((section) => <section key={section}>
      <h2 className="mt-5">{t(`privacy.${section}.title`)}</h2>
      <p dangerouslySetInnerHTML={{ __html: t(`privacy.${section}.text`) }} />
      {i18nArray(t, `privacy.${section}.items`).length > 0 && <ul>{i18nArray(t, `privacy.${section}.items`).map((item) => <li key={item}>{item}</li>)}</ul>}
      {section === 'rights' && <p><a href="mailto:contacto@ibisinteractive.cl" className="fw-bold text-decoration-none">contacto@ibisinteractive.cl</a></p>}
    </section>)}
  </article></div></main></Layout>
}

function i18nArray(t: TFunction, key: string): string[] {
  const value = t(key, { returnObjects: true })
  return Array.isArray(value) ? value as string[] : []
}
