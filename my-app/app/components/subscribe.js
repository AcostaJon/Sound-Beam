// subscribe section of the page
// bootstrap component
import Button from 'react-bootstrap/Button';

export default function Subscribe(params) {
    return (
        <div className=" subscribe bg-dark d-flex flex-column flex-lg-row align-items-lg-center  justify-content-center py-5">
            <h6 className="text-light ms-3 mb-4 mb-lg-0"> Stay Connnected</h6>
            <form className="d-flex ms-3 me-3 me-lg-0 ms-lg-5">
                <div className="w-100">
                    <label className="form-label text-light mb-0 fw-lighter">Email*</label>
                    <div className="d-lg-flex align-items-center">
                        <input type="email" placeholder='you@email.com' className="form-control my-2 p-3 bg-transparent border-warning text-light" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <Button className="btn col-12 col-lg-4  ms-lg-3  " variant="warning">Subscribe</Button>{' '}
                    </div>
                </div>
            </form>
        </div>
    )
} 