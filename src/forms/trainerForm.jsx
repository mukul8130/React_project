import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';

function TrainerForm({ onSubmission }) {

    const [info, setInfo] = useState({})
    const [smShow, setSmShow] = useState(false);

    function submitForm()
    {
        let trainers= JSON.parse(localStorage.getItem('trainers'))

        if(trainers)
        trainers.push(info)
        
        else
        trainers= [ info ]

        localStorage.setItem('trainers', JSON.stringify(trainers))

        setInfo({})    
        onSubmission()
    }
    return (
        <>
            <Col>
                <input className='form-control mt-2' type='text' placeholder='Firt Name' onChange={e => setInfo({ ...info, 'fname': e.target.value })} />
                <input className='form-control mt-2' type='text' placeholder='Last Name' onChange={e => setInfo({ ...info, 'lname': e.target.value })} />
            </Col>
            <Col>
                <input className='form-control mt-2' type='email' placeholder='Email' onChange={e => setInfo({ ...info, 'email': e.target.value })} />
                <input className='form-control mt-2' type='mobile' placeholder='Mobile' onChange={e => setInfo({ ...info, 'mobile': e.target.value })} />
            </Col>
            <Col>
                <input className='form-control mt-2' type='text' placeholder='Fathers Name' onChange={e => setInfo({ ...info, 'mname': e.target.value })} />
                <input className='form-control mt-2' type='text' placeholder='Mothers Name' onChange={e => setInfo({ ...info, 'faname': e.target.value })} />
                <br />
                <Button onClick={() => setSmShow(true)} className='mt-2' variant='danger'>ADD</Button>
            </Col>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Trainer Form
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input className='form-control mt-2' type='text' placeholder='Experience' onChange={e => setInfo({ ...info, 'mname': e.target.value })} />
                    <input className='form-control mt-2' type='text' placeholder='Education' onChange={e => setInfo({ ...info, 'faname': e.target.value })} />
                    <input className='form-control mt-2' type='text' placeholder='Address' onChange={e => setInfo({ ...info, 'faname': e.target.value })} />

                    <Button className='mt-2' onClick={submitForm} variant='success'>Submit Form</Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default TrainerForm
