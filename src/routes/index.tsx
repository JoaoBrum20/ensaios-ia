import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  faqs,
  heroImage,
  packages,
  portfolioStyles,
  whatsappLink,
  type PortfolioStyle,
} from "../lib/config";
import { PortfolioLightbox } from "../components/PortfolioLightbox";

export const Route = createFileRoute("/")({
  component: Index,
});

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Index() {
  const [activeStyle, setActiveStyle] = useState<PortfolioStyle | null>(null);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ensaios com IA — início">
          <span className="brand-mark">EI</span>
          <span>ENSAIOS COM IA</span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#portfolio">Portfólio</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
          Quero meu ensaio <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Fotografia reinventada</p>
          <h1>
            Seu ensaio<br />
            profissional. <em>Sem sair</em><br />
            de casa.
          </h1>
          <p className="hero-description">
            Transformamos suas fotos em um ensaio único, realista e feito para você —
            sem fotógrafo, estúdio ou complicação.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
              Criar meu ensaio <ArrowIcon />
            </a>
            <a className="text-link" href="#portfolio">Ver resultados <span>↓</span></a>
          </div>
          <div className="trust-row" aria-label="Informações principais">
            <div><strong>12h</strong><span>prazo de entrega</span></div>
            <div><strong>R$ 9,90</strong><span>valor inicial</span></div>
            <div><strong>100%</strong><span>personalizado</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Exemplo de ensaio editorial com inteligência artificial">
          <div className="hero-frame">
            <img src={heroImage} alt="Mulher em retrato editorial sofisticado" />
            <span className="image-tag">EDITORIAL · IA</span>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>ANIVERSÁRIO</span><i>✦</i><span>PROFISSIONAL</span><i>✦</i>
          <span>INFANTIL</span><i>✦</i><span>CASAL</span><i>✦</i>
          <span>GESTANTE</span><i>✦</i><span>EDITORIAL</span><i>✦</i>
          <span>ANIVERSÁRIO</span><i>✦</i><span>PROFISSIONAL</span><i>✦</i>
        </div>
      </div>

      <section className="section portfolio-section" id="portfolio">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow dark"><span /> Portfólio</p>
            <h2>Você, em cenários<br />que antes eram <em>imaginação.</em></h2>
          </div>
          <p>
            Cada imagem nasce da sua história e do estilo que você escolher.
            O resultado é uma fotografia com identidade, intenção e acabamento profissional.
          </p>
        </div>

        <div className="portfolio-grid">
          {portfolioStyles.map((item, index) => (
            <button
              type="button"
              className={`portfolio-card ${item.className ?? ""}`}
              key={item.id}
              onClick={() => setActiveStyle(item)}
              aria-label={`Ver ensaios de ${item.label}`}
            >
              <img src={item.cover} alt={item.coverAlt} />
              <div className="portfolio-overlay">
                <span>0{index + 1}</span>
                <h3>{item.label}</h3>
                <p>Ensaio personalizado</p>
                <span className="portfolio-more">Ver mais <i aria-hidden="true">↗</i></span>
              </div>
            </button>
          ))}
        </div>
        <p className="demo-caption">Imagens demonstrativas criadas com inteligência artificial.</p>
      </section>

      <section className="process-section">
        <div className="process-intro">
          <p className="eyebrow"><span /> Simples do início ao fim</p>
          <h2>Três passos.<br /><em>Um resultado incrível.</em></h2>
          <p>Você não precisa entender de fotografia ou de inteligência artificial. A gente cuida de cada detalhe.</p>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div><h3>Envie suas fotos</h3><p>Escolha fotos nítidas e naturais. Nós orientamos você pelo WhatsApp.</p></div>
          </li>
          <li>
            <span>02</span>
            <div><h3>Escolha seu estilo</h3><p>Conte sua ideia, envie uma referência ou deixe a direção criativa com a gente.</p></div>
          </li>
          <li>
            <span>03</span>
            <div><h3>Receba seu ensaio</h3><p>Suas imagens chegam prontas, em alta qualidade, dentro do prazo combinado.</p></div>
          </li>
        </ol>
      </section>

      <section className="section packages-section" id="pacotes">
        <div className="section-heading centered-heading">
          <p className="eyebrow dark"><span /> Escolha seu ensaio</p>
          <h2>Um pacote para<br /><em>cada momento.</em></h2>
          <p>Sem mensalidade. Você escolhe, envia suas fotos e acompanha tudo pelo WhatsApp.</p>
        </div>

        <div className="package-grid">
          {packages.map((item) => (
            <article className={`package-card ${item.featured ? "featured" : ""}`} key={item.name}>
              {item.featured && <span className="popular-tag">Mais escolhido</span>}
              <div className="package-top">
                <span>{item.name}</span>
                <strong>{item.amount}</strong>
              </div>
              <div className="price"><sup>R$</sup><strong>{item.price}</strong></div>
              <p>{item.description}</p>
              <ul>
                <li><span>✓</span> Alta resolução</li>
                <li><span>✓</span> Cenário personalizado</li>
                <li><span>✓</span> Entrega em até 12h</li>
              </ul>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Escolher este pacote <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
        <div className="premium-note">
          <span>✦</span>
          <p><strong>Quer um resultado ainda mais exclusivo?</strong> O Ensaio Premium inclui direção artística avançada e 5 fotos por R$ 39,90.</p>
          <a href={whatsappLink} target="_blank" rel="noreferrer">Conhecer o Premium <ArrowIcon /></a>
        </div>
      </section>

      <section className="social-proof">
        <div className="rating-block">
          <p className="stars" aria-label="Cinco estrelas">★★★★★</p>
          <strong>2.587</strong>
          <span>clientes satisfeitos</span>
        </div>
        <blockquote>
          “Uma experiência simples, rápida e feita para transformar sua ideia em fotos que você vai querer mostrar para todo mundo.”
        </blockquote>
        <div className="proof-points">
          <span>Identidade preservada</span>
          <span>Direção personalizada</span>
          <span>Atendimento próximo</span>
        </div>
      </section>

      <section className="section faq-section" id="duvidas">
        <div className="faq-intro">
          <p className="eyebrow dark"><span /> Perguntas frequentes</p>
          <h2>Tudo o que você<br />precisa <em>saber.</em></h2>
          <p>Ainda ficou com alguma dúvida? Chame no WhatsApp e conte o ensaio que você está imaginando.</p>
          <a className="text-link dark-link" href={whatsappLink} target="_blank" rel="noreferrer">
            Falar com a gente <ArrowIcon />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <details key={item.question} open={index === 0}>
              <summary><span>0{index + 1}</span>{item.question}<i>+</i></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="cta-orbit orbit-one" />
        <div className="cta-orbit orbit-two" />
        <p className="eyebrow"><span /> Seu momento merece</p>
        <h2>Pronto para se ver<br />de um jeito <em>novo?</em></h2>
        <p>Conte sua ideia. Em poucos minutos, você dá o primeiro passo para o seu próximo ensaio.</p>
        <a className="button button-primary" href={whatsappLink} target="_blank" rel="noreferrer">
          Começar pelo WhatsApp <ArrowIcon />
        </a>
        <span className="cta-microcopy">Sem compromisso · Resposta rápida</span>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark">EI</span>
          <span>ENSAIOS COM IA</span>
        </a>
        <p>Fotografias que parecem sonho. Feitas para serem suas.</p>
        <div>
          <a href="#portfolio">Portfólio</a>
          <a href="#pacotes">Pacotes</a>
          <a href="#duvidas">FAQ</a>
        </div>
        <span>© 2026 Ensaios com IA</span>
      </footer>

      <a className="mobile-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Começar ensaio pelo WhatsApp">
        <span>WhatsApp</span><ArrowIcon />
      </a>

      <PortfolioLightbox style={activeStyle} onClose={() => setActiveStyle(null)} />
    </main>
  );
}
