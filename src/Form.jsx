export default function Form({
  user,
  setUser,
  handleChange,
  handleSubmit,
  setShow
}){
    return (
        <div className="modal-overlay" onClick={() => setShow(false)}>
              <div className="modal-card" onClick={e => e.stopPropagation()}>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setUser(prev => ({ ...prev, img: reader.result }));
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                  <input 
                    type="text" 
                    name="name"
                    value={user.name}
                    placeholder="enter name .."
                    onChange={handleChange}
                  />
                  <input 
                    type="text" 
                    name="email"
                    value={user.email}
                    placeholder="enter email .."
                    onChange={handleChange}
                  />
                  <button>Submit</button>
                </form>
              </div>
            </div>
    )
}