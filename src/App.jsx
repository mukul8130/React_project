import { act, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import TrainerForm from './forms/trainerForm';
import MemberForm from './forms/memberForm';

function App() {
  const [active, setActive] = useState("trainer")
  const [allNames, setAllNames] = useState([])
  const [activeForm, setActiveForm] = useState(null)

  useEffect(() => {

    //get all members
    if (active == 'member') {
      const members = JSON.parse(localStorage.getItem('members'))
      if (members)
        setAllNames(members)
      else 
        setAllNames([])

    }
    //get all trainers
    else if (active == 'trainer') {
      const trainers = JSON.parse(localStorage.getItem('trainers'))
      if (trainers)
        setAllNames(trainers)
      else 
        setAllNames([])
    }
  }, [active])


  function onSubmission() {
    setActive("trainer")
    setActiveForm(null)
  }

  return (
    <>
      <Container fluid>
        <Row >
          <Col md={6} lg={2}>
            <Stack gap={3}>
              <Button variant="primary" onClick={() => {
                setActive('trainer')
                setActiveForm(null)
              }}>Trainers</Button>
              <Button variant="primary" onClick={() => {
                setActive('member')
                setActiveForm(null)
              }}>Members</Button>
            </Stack>
          </Col>
          {!activeForm && (
            <>
              <Col md={6} lg={5}>

                {allNames.length > 0 ? allNames.map(({ fname,lname }) =>
                  (<p className='text-success'>{fname} {lname}</p>))
                  :
                  <p className='text-primary'>No names here</p>
                }

              </Col>
              <Col md={12} lg={5}>
                <Button variant="danger" onClick={() => {
                  setActiveForm(active)
                  setActive(null)
                }
                }>ADD {active.toUpperCase()}</Button>
              </Col>
            </>
          )}

          {activeForm == 'trainer' && <TrainerForm onSubmission={onSubmission} />}
          {activeForm == 'member' && <MemberForm onSubmission={onSubmission} />}

        </Row>
      </Container>

    </>
  )
}

export default App
