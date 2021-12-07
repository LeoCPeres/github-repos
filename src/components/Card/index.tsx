import "./styles.css";

export function Card() {
  return (
    <div className="card">
      <img src="../../images/baixados.png" alt="" className="user-icon" />
      <div className="card-body">
        <section>
          <h3>tiagoluchtenberg/repo</h3>
          <span>Descrição do repo</span>
        </section>
        <button type="button" className="go-button">
          <img src="../../images/seta.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
