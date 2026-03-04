import "../styles/clientsStrip.css";

export default function ClientsStrip() {
  return (
    <section className="clients-section fade-up visible">

      <h2 className="section-title section-title-center">
        Our Valuable Clients
      </h2>

      {/* Row 1 */}
      <div className="marquee">
        <div className="track-wrapper">
          <div className="track left">

            <img src="/clients/hinduja.png" alt="Hinduja" />
            <img src="/clients/renault.png" alt="Renault" />
            <img src="/clients/tvs.png" alt="TVS" />
            <img src="/clients/philips.png" alt="Philips" />
            <img src="/clients/john.png" alt="John Deere" />
            <img src="/clients/mahindra.png" alt="Mahindra" />
            <img src="/clients/jbm.png" alt="JBM" />

            {/* duplicate for seamless loop */}

            <img src="/clients/hinduja.png" alt="Hinduja" />
            <img src="/clients/renault.png" alt="Renault" />
            <img src="/clients/tvs.png" alt="TVS" />
            <img src="/clients/philips.png" alt="Philips" />
            <img src="/clients/john.png" alt="John Deere" />
            <img src="/clients/mahindra.png" alt="Mahindra" />
            <img src="/clients/jbm.png" alt="JBM" />

          </div>
        </div>
      </div>

      {/* Row 2 */}

      <div className="marquee">
        <div className="track-wrapper">
          <div className="track right">

            <img src="/clients/3dp.png" alt="3DPD" />
            <img src="/clients/avl.png" alt="AVL" />
            <img src="/clients/cummins.png" alt="Cummins" />
            <img src="/clients/suzuki.png" alt="Suzuki" />
            <img src="/clients/magna.png" alt="Magna" />
            <img src="/clients/eka.png" alt="EKA" />
            <img src="/clients/ather.png" alt="Ather" />

            {/* duplicate */}

            <img src="/clients/3dp.png" alt="3DPD" />
            <img src="/clients/avl.png" alt="AVL" />
            <img src="/clients/cummins.png" alt="Cummins" />
            <img src="/clients/suzuki.png" alt="Suzuki" />
            <img src="/clients/magna.png" alt="Magna" />
            <img src="/clients/eka.png" alt="EKA" />
            <img src="/clients/ather.png" alt="Ather" />

          </div>
        </div>
      </div>

    </section>
  );
}