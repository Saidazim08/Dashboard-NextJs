import { Button, TextField } from '@material-ui/core'
import { Add, Cancel } from '@material-ui/icons'
import Dashboard from '../../container/Dashboard'

const AddPage = () => {
    return (
        <Dashboard>
            <form noValidate autoComplete="off">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                        <TextField label="Username" className="w-100" variant="filled" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                        <TextField label="Email" className="w-100" variant="filled" />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 mb-3">
                        <TextField label="Phone" className="w-100" variant="filled" />
                    </div>
                </div>
                <div>
                    <Button variant="contained" color="primary" className="me-2"><Add />Add</Button>
                    <Button variant="contained" color="secondary"><Cancel />Cancel</Button>
                </div>
            </form>
        </Dashboard >
    )
}

export default AddPage
