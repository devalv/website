import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Девяткин Алексей';
const telegram = 'tg://resolve?domain=dal_dev';
const mail = 'mailto:devyatkin.av@ya.ru'
export const siteTitle = 'Девяткин Алексей';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Краткое описание обо мне и чем я занимаюсь"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/userpic.jpg"
              className={utilStyles.borderCircle}
              height={200}
              width={200}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
            <div>
              <a href={telegram}>
                <Image
                src="/images/telegram-logo.svg"
                className={utilStyles.borderCircle}
                height={32}
                width={32}
                alt="Телеграм"
                />
              </a>
              <a href={mail}>
                <Image
                src="/images/mailbox.svg"
                className={utilStyles.borderCircle}
                height={32}
                width={32}
                alt="Почта"
                />
              </a>
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/userpic.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Назад</Link>
        </div>
      )}
    </div>
  );
}
