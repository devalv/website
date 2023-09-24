import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Руковожу командой разработки платформы управления виртуальных рабочих столов Space VDI. 
          Пишу <a href="https://github.com/devalv">код</a> на Python Go.
          Систематизирую и улучшаю процессы.
        </p>
        <div>
          <h3 className={utilStyles.headingMd}>Ранее</h3>
          {/* TODO: актуализировать - чего добился */}
          <ul>
            <li>Работал ревьюером в Яндекс.Практикуме </li>
            <li>Работал разработчиком в X5 Tech</li>
            <li>Руководил командой разработки в НИИ Масштаб</li>
            <li>Работал разработчиком в 100инг</li>
            <li>Руководил разработкой в Центре информационных технологий Мурманской области</li>
            <li>Много лет был Ведущим инженером в Ростелеком.</li>
          </ul>
        </div>
        <div>
          <h3 className={utilStyles.headingMd}>Учился</h3>
          {/* TODO: актуализировать - описать курсы и краткую характеристику */}
          <ul>
            <li>Тут</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}