import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container-about">
			<Head>
        <title>Carvoeiros Who Design | Sobre</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>
			<div className="content">

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="Carvoeiros*who&nbsp;design&nbsp;é&nbsp;um"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>projeto que serve de</motion.span>{" "}
          <motion.span variants={item}>vitrine para designers</motion.span>{" "}
          <motion.span variants={item}>da cidade de Criciúma</motion.span>{" "}
          <motion.span variants={item}>e região que estão</motion.span>{" "}
          <motion.span variants={item}>espalhados pelo mundo. O objetivo do</motion.span>{" "}
          <motion.span variants={item}>projeto é reunir os</motion.span>{" "}
          <motion.span variants={item}>designers da região</motion.span>{" "}
          <motion.span variants={item}>carbonífera para gerar uma comunidade e facilitar o encontro com possíveis clientes.</motion.span>
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>Como posso indicar alguém?</h3>
          <p>
					Você pode indicar alguem{" "}
            <Link href="https://forms.gle/PbR7tGuHYQEve6hY8">
              <a target="_blank" className="link"> através deste formulário  </a>
            </Link>{" "}
						com as informações necessárias 
					sobre seu trabalho, e o porque você está indicando esta pessoa.
						Nós decidimos não coletar fotos de perfil, assim como o projeto que nos inspirou,
						por concordar que este projeto deve ser sobre o trabalho dos designers e não sobre suas aparências.
          </p>

          <h3>Como vocês tiveram essa ideia?</h3>
          <p>
					Não tivemos. Este é um projeto que possui diversas vertentes pelo mundo.
					<ul>
					<li>
              <a className="link" href="https://brazilianswho.design/">
                Brazilians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://womenwho.design/">
                Women Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://queerdesign.club/">
                Queer Design Club
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/"
              >
                Filipinos Who Design
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/"
              >
                People Of Craft
              </a>
            </li>
            <li>
              <a className="link" href="https://indianswhodesign.in/">
                Indians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apiwho.design/">
                Asian & Pacific Islanders Who Design
              </a>
            </li>
          </ul>
          </p>

          <h3>Como vocês construíram isso?</h3>
          <p>
					Carvoeiros Who Design é baseado em um projeto open source para você criar a sua própria vitrine.
					Nosso site foi inspirado pelo site{" "}            
					<Link href="https://brazilianswho.design/">
              <a target="_blank" className="link"> Brazillians Who Design  </a>
            </Link>{" "}
          </p>

          <h3>Quem esta por trás deste projeto?</h3>
          <ul>
            <li>
              <a className="link" href="https://www.behance.net/caiouws">
                Caio Silva
              </a>
            </li>
            <li>
              <a className="link" href="https://github.com/brunoleitem">
                Bruno Leite
              </a>
            </li>
            
          </ul>
        </div>
        <div className="col-right">
          <h3>Como posso remover meu nome?</h3>
          <p>
					Se você gostaria de alterar alguma informação ou remover seu nome da lista, por favor mande um email para contato@carvoeiroswho.design
          </p>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 18ch;
        }

        .moreabout {
          font-weight: normal;
          font-size: 1.5rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }

        .moreabout p {
          margin: 0;
          padding: 0;
        }

        .moreabout h3 {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
        }

        .moreabout h3 {
          margin: 4rem 0 0 0;
        }

        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
			</div>
    </div>
  );
}
