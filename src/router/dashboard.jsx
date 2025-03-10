


import './dashboard1.css';

export function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

     
     
            <div className="row">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <h5 className="card-title">Followers</h5>
         
         
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <h5 className="card-title">Following</h5>
           
           
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <h5 className="card-title">Repositories</h5>
       
       
          </div>
        </div>
      </div>

      {/* Second Row - Account Created and Updated At */}
      <div className="row">
        <div className="col-md-6">
          <div className="card full-width-card shadow-sm">
            <h5 className="card-title">Account Created At</h5>
          
          
          </div>
        </div>

        <div className="col-md-6">
          <div className="card full-width-card shadow-sm">
            <h5 className="card-title">Updated At</h5>
         
         
          </div>
        </div>
      </div>

      {/* Third Row - Top Languages */}
      <div className="row">
        <div className="col-12">
          <div className="card full-width-card shadow-sm">
            <h5 className="card-title">Top Languages</h5>
         
         
          </div>
        </div>
      </div>
    </div>
  );
}
