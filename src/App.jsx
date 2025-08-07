// App.jsx
import React, { use, useRef } from "react";
import "./App.css";
import bannerImg from "./assets/Banner1.jpg"; // Usa la imagen que quieras
import { FaFacebook, FaInstagram } from "react-icons/fa"; // Importamos los íconos

export default function App() {
  const MisionVisionRef = useRef(null);
  const ObjetivosEstRef = useRef(null);
  const PoliticasOrgRef = useRef(null);
  const ValoresRef = useRef(null);
  const ContactoRef = useRef(null); // El ref ahora apunta al footer

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar">
        <nav>
          <ul>
            <li onClick={() => scrollToSection(MisionVisionRef)}>Mision Y Vision</li>
            <li onClick={() => scrollToSection(ObjetivosEstRef)}>Objetivos Organizacionales</li>
            <li onClick={() => scrollToSection(PoliticasOrgRef)}>Politicas Organizacionales</li>
            <li onClick={() => scrollToSection(ValoresRef)}>Valores</li>
            <li onClick={() => scrollToSection(ContactoRef)}>Contactenos</li>
          </ul>
        </nav>
      </header>

      {/* Banner */}
      <section
        className="banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1>Bienvenido a Propiette S.A.S</h1>
      </section>

      {/* Secciones */}
      <section ref={MisionVisionRef} className="section">
        <h2>Mision y Vision</h2>
        <h3>Misión</h3>
        <p>Propiette es una inmobiliaria comprometida con conectar personas y espacios que transforman vidas, lo hacemos para facilitar la compra, venta, arriendo y administración de inmuebles de forma segura, y eficiente, actuamos así porque creemos en el valor de construir confianza y tranquilidad en cada transacción inmobiliaria, siendo aliados reales de nuestros clientes, se busca lograrlo mediante un equipo humano capacitado, procesos responsables y el uso de herramientas tecnológicas adaptadas al mercado actual. Nuestros  servicios están dirigidos a personas, familias, propietarios e inversionistas que buscan soluciones inmobiliarias confiables y accesibles.</p>
        <h3>Visión</h3>
        <p> Buscamos ser una inmobiliaria líder en el mercado local, reconocida por su excelencia en el servicio al cliente y su capacidad para innovar y adaptarse a las necesidades cambiantes del mercado, inspirando confianza y lealtad en nuestros clientes y contribuyendo al bienestar de su comunidad.</p>
      </section>

      <section ref={ObjetivosEstRef} className="section">
        <h2>Objetivos Organizacionales</h2>
        <p>Consolidar a Propiette S.A.S como una empresa líder en el mercado inmobiliario local en los próximos 3 años, aumentando nuestra cartera de propiedades en un 30%, optimizando la experiencia del cliente mediante el uso de tecnologías digitales y fortaleciendo alianzas estratégicas para ofrecer soluciones integrales y personalizadas que generen confianza y valor sostenible para nuestros clientes y accionistas</p>
      </section>

      <section ref={PoliticasOrgRef} className="section">
        <h2>Politicas Organizacionales</h2>
        <p>Esta politica busca garantizar servicios inmobiliarios eficientes, confiables y enfocados en la satisfacción del cliente. <br />
        Propiette se compromete a cumplir los requisitos legales, técnicos y del cliente, manteniendo altos estándares en cada gestión (compra, venta, arriendo o administración de inmuebles). Además, fomenta una cultura de mejora continua para optimizar sus procesos, resultados y experiencia del cliente. <br /> <br />
        <strong>Política de Comunicación Interna y Externa</strong><br />
        Objetivo: Asegurar la fluidez y claridad de la información dentro de la empresa y hacia los clientes. <br />
        Se implementan canales formales de comunicación (correo, CRM, WhatsApp empresarial, reuniones periódicas) para garantizar que todos los involucrados tengan acceso a la información relevante en tiempo real, reduciendo errores y malentendidos. <br /> <br />
        <strong>Política de Atención al Cliente</strong><br />
        Brindar una atención cercana, clara y respetuosa a todos los usuarios. <br />
        Se establece que cada asesor debe mantener una comunicación empática, responder a las solicitudes con oportunidad y acompañar al cliente en todo el proceso inmobiliario. Se prioriza la honestidad, transparencia y cumplimiento de los acuerdos pactados. <br /> <br />
        <strong>Política de Transparencia en la Información Inmobiliaria</strong> <br />
        Garantizar que toda oferta de inmuebles sea clara, veraz y actualizada. <br />
        La empresa solo divulgará inmuebles que cuenten con documentación completa y autorización del propietario. Toda publicación debe reflejar las condiciones reales del inmueble (ubicación, precio, estado, condiciones legales). <br /><br />
        <strong>Política de Competencia del Personal</strong>
        Garantizar que el equipo de trabajo esté capacitado y calificado para prestar un servicio profesional. <br />
        El personal recibirá formación continua en normativa inmobiliaria, servicio al cliente, resolución de conflictos, herramientas tecnológicas y procesos internos. Se harán evaluaciones periódicas para asegurar el cumplimiento del perfil de cada cargo</p>
      </section>

      <section ref={ValoresRef} class="valores-section">
        <h2>Valores</h2>
        <div class="valores-container">
          <div class="valor-box">
            <h3>Integridad</h3>
            <p>Actuar con transparencia y honestidad en todas nuestras acciones y decisiones.</p>
          </div>
          <div class="valor-box">
            <h3>Responsabilidad</h3>
            <p>Asumir la responsabilidad de nuestras acciones y decisiones, y cumplir con nuestros compromisos.</p>
          </div>
          <div class="valor-box">
            <h3>Respeto</h3>
            <p>Tratar a nuestros clientes, empleados y socios con respeto y dignidad.</p>
          </div>
          <div class="valor-box">
            <h3>Innovación</h3>
            <p>Buscar constantemente nuevas formas de mejorar nuestros servicios y productos.</p>
          </div>
          <div class="valor-box">
            <h3>Calidad</h3>
            <p>Entregar servicios y productos de alta calidad que superen las expectativas de nuestros clientes.</p>
          </div>
          <div class="valor-box">
            <h3>Empatía</h3>
            <p>Entender y satisfacer las necesidades y expectativas de nuestros clientes.</p>
          </div>

        </div>
      </section>

      {/* FOOTER ahora con el ref de Contacto */}
      <footer ref={ContactoRef} className="footer">
        {/* Contenedor para el texto y los íconos de redes sociales */}
        <div className="social-media-container">
          <h3>Síguenos en</h3>
          <div className="social-media">
            <a href="https://www.facebook.com/Propiettemedellin?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/propiette?igsh=OHNuc28wNG44d3E0" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <h3>Contáctenos</h3>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="tel" placeholder="Número de teléfono" />
          <textarea placeholder="Sugerencias" rows="4"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </>
  );
}