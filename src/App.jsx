import React from 'react'

const App = () => {
  return (
    <div className="container">
      <div>
        <div>
          <h1>Validation Form</h1>
          <form>
              <div className="form-group">
              <label>Name:</label>
              <input
              type="text"
              className="form-control"/>
              <small className="text-danger">Required</small>
              </div>
              
            <div className="form-group">
              <label>Age:</label>
              <input
                type="text"
                className="form-control" />
              <small className="text-danger">Required</small>
            </div>

            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                className="form-control" />
              <small className="text-danger">Required</small>
            </div>

            <div className="form-group">
              
            </div>
            <label className="col-form-label">Message:</label>
            <textarea
              className="form-control"
            />
            <input
              type="submit"
              className="btn-submit"
              value="Send message"
            />
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
