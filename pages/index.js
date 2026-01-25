import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <section>
        {/* Блок ключевых компетенций с новым стилем */}
        <div className={utilStyles.skillsContainer}>
          <h3 className={utilStyles.skillsTitle}>Ключевые компетенции</h3>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>
              <strong>Tech:</strong> Python, Go, PostgreSQL, Docker, C4 Model (Architecture).
            </li>
            <li className={utilStyles.listItem}>
              <strong>Management:</strong> Engineering Management, Kanban/Scrum, Hiring & Mentoring, Product Strategy.
            </li>
            <li className={utilStyles.listItem}>
              <strong>Security:</strong> DevSecOps, SAST (Semgrep, Trivy, DefectDojo).
            </li>
          </ul>
        </div>

        <div className={utilStyles.headingMd} style={{ marginBottom: '2rem' }}>
          <p style={{ lineHeight: '1.6', color: '#333' }}>
            Технический менеджер с более чем 15-летним опытом в IT. Специализируюсь на разработке сложных 
            инфраструктурных решений, выстраивании процессов в распределенных командах и внедрении практик 
            безопасного программирования как части системных процессов.
          </p>
        </div>

        {/* Опыт работы */}
        <div>
          <h3 className={utilStyles.headingLg}>Опыт работы</h3>
          
          <div className={utilStyles.experienceBlock}>
            <div className={utilStyles.jobTitle}>Technical Team Lead / Engineering Manager</div>
            <div className={utilStyles.companyInfo}>ДАКОМ М (Space VDI) | 2023 — Настоящее время</div>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Трансформировал процессы разработки: переход к прозрачному Kanban, внедрение DoD/ACC и плейбуков.</li>
              <li className={utilStyles.listItem}>Руковожу кросс-функциональной командой из 10 человек (Python, Go, C/C++, DevOps).</li>
              <li className={utilStyles.listItem}>Внедрил проектирование через C4 model и автоматизированную систему SAST (Semgrep, Trivy, DefectDojo).</li>
              <li className={utilStyles.listItem}>Обеспечил успешное прохождение сертификации продукта по безопасности.</li>
            </ul>
          </div>

          <div className={utilStyles.experienceBlock}>
            <div className={utilStyles.jobTitle}>Python Developer</div>
            <div className={utilStyles.companyInfo}>X5 Tech | 2021 — 2023</div>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Разрабатывал backend для систем закупок и аукционов со сложной бизнес-логикой и финансовыми расчетами.</li>
              <li className={utilStyles.listItem}>Восстановил и стабилизировал систему электронных командировок, переданную без документации.</li>
            </ul>
          </div>

          <div className={utilStyles.experienceBlock}>
            <div className={utilStyles.jobTitle}>Team Lead команды разработки</div>
            <div className={utilStyles.companyInfo}>НИИ Масштаб | 2019 — 2021</div>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Выпустил несколько мажорных релизов системного продукта и систематизировал общие наработки.</li>
              <li className={utilStyles.listItem}>Проектировал и поддерживал асинхронные сервисы на Tornado и AIOHTTP.</li>
            </ul>
          </div>

          <div className={utilStyles.experienceBlock}>
            <h4 className={utilStyles.headingSm}>Ранее</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}><strong>Яндекс Практикум (2022-2023):</strong> Ревьюер курсов Python/Python+.</li>
              <li className={utilStyles.listItem}><strong>100инг (2018-2019):</strong> Backend Developer (Django), миграция инфраструктуры.</li>
              <li className={utilStyles.listItem}><strong>ЦИТ Мурманской области (2017-2018):</strong> Руководитель разработки.</li>
              <li className={utilStyles.listItem}><strong>Ростелеком (2009-2017):</strong> Ведущий инженер, автоматизация и SQL-аналитика.</li>
            </ul>
          </div>
        </div>

        {/* Образование */}
        <div style={{ marginTop: '3rem' }}>
          <h3 className={utilStyles.headingLg}>Образование</h3>
          <div className={utilStyles.experienceBlock}>
            <div className={utilStyles.jobTitle}>Магистратура: Кибербезопасность</div>
            <div className={utilStyles.companyInfo}>НИУ ВШЭ | 2024 — 2026 (ожидается)</div>
          </div>
          <div className={utilStyles.experienceBlock}>
            <div className={utilStyles.jobTitle}>Управление IT-проектами</div>
            <div className={utilStyles.companyInfo}>НИЯУ МИФИ | 2025 (Профессиональная переподготовка)</div>
          </div>
          <div className={utilStyles.experienceBlock}>
            <div className={utilStyles.jobTitle}>Информатика и ВТ (Диплом с отличием)</div>
            <div className={utilStyles.companyInfo}>Современная гуманитарная академия | 2010</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
