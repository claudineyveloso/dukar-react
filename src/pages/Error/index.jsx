import React from 'react';
import { Link  } from "react-router-dom";

const Error = () => {
  return(
    <>
			<div className="authentication-bg min-vh-100">
			  <div className="bg-overlay bg-white"></div>
			  <div className="container">
			    <div className="row">
			      <div className="col-md-12">
			        <div className="text-center py-5">
			          <h1 className="display-1 fw-normal error-text">404</h1>
			          <h4 className="text-uppercase text-muted">Opps, página não encontrada</h4>
			          <div className="mt-5 text-center">
									<Link className='btn btn-primary' to='/'>Retornar ao Dashboard</Link>
			          </div>
			        </div>
			      </div>
			      {/* <!-- end col --> */}
			    </div>		
			    {/* <!-- end row --> */}
			  </div>
			  {/* <!-- end container --> */}
			</div>

    </>
  )
}

export default Error;
