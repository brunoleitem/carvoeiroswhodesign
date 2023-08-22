export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="Carvoeiros Who Design" />
      <meta
        name="description"
        content="Um repositório para para designers da cidade de Criciúma e região que estão espalhados pelo mundo."
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://carvoeiroswho.design" />
      <meta property="og:title" content="Carvoeiros Who Design" />
      <meta
        property="og:description"
        content="Um repositório para designers da cidade de Criciúma e região que estão espalhados pelo mundo."
      />
      <meta
        property="og:image"
        content="https://carvoeiroswho.design/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://carvoeiroswho.design" />
      <meta property="twitter:title" content="Carvoeiros Who Design" />
      <meta
        property="twitter:description"
        content="Um repositório para para designers da cidade de Criciúma e região que estão espalhados pelo mundo."
      />
      <meta
        property="twitter:image"
        content="https://carvoeiroswho.design/img/preview.png"
      />
    </>
  );
}
