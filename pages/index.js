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
        <div className={utilStyles.currentInfo}>
          <ul className={utilStyles.list}>
            <li className={utilStyles.listItem}>Руковожу командой разработки платформы управления виртуальных рабочих столов Space VDI.</li>
            <li className={utilStyles.listItem}>Пишу <a href="https://github.com/devalv">код</a> на Python и Go.</li>
            <li className={utilStyles.listItem}>Систематизирую и улучшаю процессы.</li>
          </ul>
        </div>
        <div>
          <h3 className={utilStyles.headingMd}>Ранее</h3>
          <div>
            <h4 className={utilStyles.headingSm}>Разработчик в X5 Tech (2021-2023)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>
                Писал новый и поддерживал старый backend на <a href="https://www.django-rest-framework.org">DRF</a>
                &nbsp;и&nbsp;<a href="https://fastapi.tiangolo.com">FastAPI</a>
              </li>
              <li className={utilStyles.listItem}>Помогал другим продуктам в доработке решений принятых на поддержку</li>
              <li className={utilStyles.listItem}>Активно участвовал в code-review и scrum-ритуалах</li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Ревьюер в Практикуме (2022-2023)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Помогал студентам освоить курсы Python-разработчик и Python-разработчик плюс</li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Тимлид команды разработки в НИИ Масштаб (2019-2021)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Выпустил несколько мажорных релизов нового продукта</li>
              <li className={utilStyles.listItem}>Систематизировал общие наработки</li>
              <li className={utilStyles.listItem}>Писал новый и поддерживал старый backend на <a href="https://www.tornadoweb.org/">Tornado</a> и <a href="https://docs.aiohttp.org">AIOHTTP</a></li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Разработчик в 100инг (2018-2019)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Писал новый и поддерживал старый backend на <a href="https://www.djangoproject.com">Django</a></li>
              <li className={utilStyles.listItem}>Мигрировал и поддерживал инфраструктуру</li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Руководил разработкой в <a href="https://cit.gov-murman.ru">ЦИТ Мурманской области</a> (2017-2018)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Совместно с бизнесом выстроил процесс разработки в компании</li>
              <li className={utilStyles.listItem}>Подготовил и поддерживал инфраструктуру</li>
              <li className={utilStyles.listItem}>Писал backend и frontend на <a href="https://www.djangoproject.com">Django</a></li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Ведущий инженер в Ростелеком (2009-2017)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Поддерживал много разных и сложных информационных систем</li>
              <li className={utilStyles.listItem}>Помогал аналитикам формировать отчёты на SQL</li>
              <li className={utilStyles.listItem}>Запускал новые системы и услуги на уровне филиала</li>
              <li className={utilStyles.listItem}>Разрабатывал автоматизированные системы для нужд филиала</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className={utilStyles.headingMd}>Образование</h3>
          <div>
            <h4 className={utilStyles.headingSm}>Управление IT-проектами (2025)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Национальный исследовательский ядерный университет `МИФИ`</li>
              <li className={utilStyles.listItem}>Диплом о профессиональной переподготовке</li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Информатика и ВТ (2010)</h4>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem}>Диплом с отличием</li>
              <li className={utilStyles.listItem}>Современная гуманитарная академия</li>
              <li className={utilStyles.listItem}>Бакалавр</li>
            </ul>
          </div>
          <div>
            <h4 className={utilStyles.headingSm}>Автоматизированные системы обработки информации и управления (2006)</h4>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>Диплом с отличием</li>
                <li className={utilStyles.listItem}>Мурманский морской рыбопромышленный колледж</li>
                <li className={utilStyles.listItem}>Техник</li>
              </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
