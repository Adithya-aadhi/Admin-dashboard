export default function View({view,setShowview}){
    
    return (
        <div className="modal-overlay" onClick={() => setShowview(false)}>
            <div className="modal-card" onClick={e => e.stopPropagation()}>
              <img src={view.img} alt="profile" />
              <h3>{view.name}</h3>
              <p>{view.email}</p>
              <button onClick={() => setShowview(false)}>Close</button>
            </div>
          </div>
    )
}