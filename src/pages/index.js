import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Prestashop from "@site/static/img/prestashop.svg";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="py-24">
      <div className="container">
        <h1 className="font-normal text-8xl text-center mb-8">
          Ector Theme and modules ecosystem
        </h1>
        <p className="justify-center flex items-center gap-2">
          <span className="text-xl text-orange-600 dark:text-orange-400">
            Built and optimized for
          </span>
          <span className="w-48 dark:fill-white leading-none">
            <Prestashop />
          </span>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
      wrapperClassName="pb-48"
    >
      <HomepageHeader />
      <main>
        <div className="grid grid-cols-4 gap-8 container max-w-4xl">
          {["Performance", "Accessibility", "SEO", "Best practices"].map(
            (item) => (
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="border-8 border-solid border-green-500 flex items-center justify-center bg-green-100 rounded-full w-32 h-32">
                  <span className="text-green-500 text-3xl font-bold">100</span>
                </div>
                <span className="text-xl">{item}</span>
              </div>
            )
          )}
        </div>
        <div className="mt-24 flex justify-center">
          <Link className="button button--primary" to="/docs/introduction">
            Jump to documentation
          </Link>
        </div>
      </main>
    </Layout>
  );
}
