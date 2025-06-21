import ListGroup from 'react-bootstrap/ListGroup';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoRow = () => {
    return (
        <ListGroup.Item>
            <article className='row'>
                <div className='col-12 col-md-3 border border-warning'><EmpleadoAvatar/></div>
                <div className='col-12 col-md-9 border border-danger'>
                    <h4>fullName</h4>
                    <div className='row justify-content-start'>
                        <p className='col-6'>title</p>
                        <p className='col-6'>department</p>
                    </div>
                </div>
            </article>
        </ListGroup.Item>
    );
};

export default EmpleadoRow;