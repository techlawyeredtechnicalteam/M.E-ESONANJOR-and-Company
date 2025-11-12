import Head from "next/head";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          M.E ESONANJOR and Company | WHERE LEGAL STRATEGY IS PRECISION-BUILT.
        </title>
        <meta
          name="description"
          content="M.E ESONANJOR and Company offers top-tier legal services across multiple practice areas including Corporate Law, Real Estate, and Litigation. Tailored legal solutions for your business and personal needs."
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="M.E ESONANJOR and Company | WHERE LEGAL STRATEGY IS PRECISION-BUILT."
        />
        <meta
          property="og:description"
          content="M.E ESONANJOR and Company offers expert legal services across Corporate Law, Real Estate, Litigation, and more. Get tailored legal solutions today."
        />
        <meta
          property="og:image"
          content="https://m-e-esonanjor-and-company.vercel.app/hero.png"
        />
        <meta
          property="og:url"
          content="https://m-e-esonanjor-and-company.vercel.app"
        />
        <meta property="og:site_name" content="M.E ESONANJOR and Company" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="M.E ESONANJOR and Company | WHERE LEGAL STRATEGY IS PRECISION-BUILT."
        />
        <meta
          name="twitter:description"
          content="M.E ESONANJOR and Company offers expert legal services in various fields, providing clients with solutions tailored to their needs."
        />
        <meta
          name="twitter:image"
          content="https://m-e-esonanjor-and-company.vercel.app/hero.png"
        />
        <meta name="twitter:site" content="@MEESONANJOR" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "M.E ESONANJOR and Company",
              url: "https://m-e-esonanjor-and-company.vercel.app",
              logo: "https://m-e-esonanjor-and-company.vercel.app/logo.png",
              description: "WHERE LEGAL STRATEGY IS PRECISION-BUILT.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
                postalCode: "101001"
              },
              sameAs: [
                "https://twitter.com/M.E ESONANJOR and Company",
                "https://www.linkedin.com/company/m-e-esonanjor-and-company",
                "https://www.facebook.com/m-e-esonanjor-and-company"
              ]
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
