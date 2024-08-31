import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';

function MemberForm({ onSubmission }) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [info,setInfo]= useState({})

    function nextHandler(formData) {
        if (activeIndex < forms.length - 1)
        {
            setActiveIndex(activeIndex+1)
            setInfo({...info,...formData})
        }
        else
        {
            let members= JSON.parse(localStorage.getItem('members'))

            if(members)
            members.push(info)
            
            else
            members= [ info ]
    
            localStorage.setItem('members', JSON.stringify(members))
    
            setInfo({})    
            onSubmission()
        }
    }


    const forms = [
        <FirstForm onNext={nextHandler} />,
        <SecondForm onNext={nextHandler} />,
        <ThirdForm onNext={nextHandler} />,
        <FourthForm onNext={nextHandler}/>
    ]




    return (
        <>
            <Col>
                {forms[activeIndex]}
            </Col>
        </>
    )
}

const FirstForm = ({ onNext }) => {
    const [info,setInfo]= useState({})

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>First Form</Card.Title>
                <Card.Text>
                    <input className='form-control mt-2' type='text' placeholder='Firt Name' onChange={e => setInfo({ ...info, 'fname': e.target.value })} />
                    <input className='form-control mt-2' type='text' placeholder='Last Name' onChange={e => setInfo({ ...info, 'lname': e.target.value })} />
                </Card.Text>
                <Button variant="primary" onClick={()=> onNext(info)}>Next</Button>
            </Card.Body>
        </Card>
    )
}

const SecondForm = ({ onNext }) => {
    const [info,setInfo]= useState({})

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Second Form</Card.Title>
                <Card.Text>
                    <input className='form-control mt-2' type='email' placeholder='Email' onChange={e => setInfo({ ...info, 'email': e.target.value })} />
                    <input className='form-control mt-2' type='mobile' placeholder='Mobile' onChange={e => setInfo({ ...info, 'mobile': e.target.value })} />     </Card.Text>
                <Button variant="primary"  onClick={()=> onNext(info)}>Next</Button>
            </Card.Body>
        </Card>
    )
}

const ThirdForm = ({ onNext }) => {
    const [info,setInfo]= useState({})

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Third Form</Card.Title>
                <Card.Text>
                    <input className='form-control mt-2' type='text' placeholder='Fathers Name' onChange={e => setInfo({ ...info, 'mname': e.target.value })} />
                    <input className='form-control mt-2' type='text' placeholder='Mothers Name' onChange={e => setInfo({ ...info, 'faname': e.target.value })} />
                </Card.Text>
                <Button variant="primary" onClick={()=> onNext(info)}>Next</Button>
            </Card.Body>
        </Card>
    )
}

const FourthForm = ({ onNext }) => {
    const [info,setInfo]= useState({})

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Fourth Form</Card.Title>
                <Card.Text>
                    <input className='form-control mt-2' type='text' placeholder='Experience' onChange={e => setInfo({ ...info, 'mname': e.target.value })} />
                    <input className='form-control mt-2' type='text' placeholder='Education' onChange={e => setInfo({ ...info, 'faname': e.target.value })} />
                    <input className='form-control mt-2' type='text' placeholder='Address' onChange={e => setInfo({ ...info, 'faname': e.target.value })} />
                </Card.Text>
                <Button variant="primary"  onClick={()=> onNext(info)}>Submit</Button>
            </Card.Body>
        </Card>
    )
}




export default MemberForm
