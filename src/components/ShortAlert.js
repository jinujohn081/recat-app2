import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Axios from 'axios'

function LongAlert() {
  const [data, setData] = useState({
    symbol: '',
    company: '',
    exchange: '',
    sector: '',
    industry: '',
    price: '',
    signals: '',

    timeframe: '',
  })

  function handleChange(e) {
    const newData = { ...data }
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData)
  }
  function submitData(e) {
    e.preventDefault()
    let formData = new FormData()
    formData.append('symbol', data.symbol)
    formData.append('company', data.company)
    formData.append('exchange', data.exchange)
    formData.append('sector', data.sector)
    formData.append('industry', data.industry)
    formData.append('price', data.price)
    formData.append('signals', data.signal)

    formData.append('timeframe', data.timeframe)
    Axios({
      method: 'post',
      url: 'http://localhost/react-app/insertShortAlert.php',
      data: formData,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    }).then((res) => {
      alert('Data Inserted successfully')
    })
  }

  return (
    <div>
      <Form onSubmit={submitData}>
        <Form.Group
          className='mb-3'
          name='symbol'
          controlId='formBasicPassword'
        >
          <Form.Label>Symbol</Form.Label>
          <Form.Control
            type='text'
            name='symbol'
            onChange={handleChange}
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Company</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='company'
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Exchange</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='exchange'
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Sector</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='sector'
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Industry</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='industry'
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='price'
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Signal</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='signal'
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Timeframe</Form.Label>
          <Form.Control
            type='text'
            onChange={handleChange}
            name='timeframe'
            placeholder='Password'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default LongAlert
