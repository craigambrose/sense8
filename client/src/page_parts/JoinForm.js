import React from "react"
import { Wave } from "better-react-spinkit"

const JoinForm = ({ user, loading, onRequestJoin }) => {
  return (
    <section className="dark-section join-form-section">
      <div className="container">
        <h2>Hi {user.name}, here's how it works...</h2>
        <p className="lead">
          We match you up with 8 other people, based on these two areas.
        </p>
        <div className="row">
          <div className="col-sm">
            <h3>Similar age</h3>
            <p>
              Exact same birthday is an automatic match, but otherwise we
              balance trying to get your birthdays close and your age within a
              few years of each other.
            </p>
          </div>
          <div className="col-sm">
            <h3>Diverse background</h3>
            <p>
              We prioritise diversity of home country and gender to ensure the
              sensates in your cluster are spread around the world.
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <h2>Ready to try it?</h2>
        <p>If you're sure, lets hit the button below.</p>
        <p>
          {loading ? (
            <Wave size={50} color="#77bfa0" reverse />
          ) : (
            <button
              className="btn btn-primary btn-on-dark btn-lg"
              onClick={() => onRequestJoin(user)}
            >
              Connect me to a Cluster
            </button>
          )}
        </p>
      </div>
    </section>
  )
}

export default JoinForm
