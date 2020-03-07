import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Bootstrapped with CRA</>,
    imageUrl: "img/illustrations/bootstrapped-with-cra.svg",
    description: (
      <>
        Same tooling works out of the box for that instant web development
        gratification.
      </>
    )
  },
  {
    title: <>Based on Firebase</>,
    imageUrl: "img/illustrations/based-on-firebase.svg",
    description: (
      <>
        Built on top of a Firebase back-end with most of their products for the
        web included, e.g. Authentication and Cloud Firestore.
      </>
    )
  },
  {
    title: <>Google’s Material Design</>,
    imageUrl: "img/illustrations/google-material-design.svg",
    description: (
      <>
        Scaffolding incorporates Google’s Material Design through the
        Material-UI framework.
      </>
    )
  }
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title="Documentation" description="Documentation for RMUIF">
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
