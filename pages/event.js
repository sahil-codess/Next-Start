import { useState } from "react"

const event = ({ evenList }) => {
    const [events, setEvents] = useState(evenList)

    const fetchSportEvents = async () => {
        const response = await fetch(`http://localhost:4000/events?category=sports`)
        const data = await response.json()
        setEvents(data)
    }

  return (
    <>
        <button onClick={fetchSportEvents}>Sport Events</button>
        <h1>Event list</h1>
        {
            events.map(event => {
                return(
                    <div key={event.id}>
                        <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                        <p>{event.description}</p>
                        <hr />
                    </div> 
                )
            })
        }
    </>
  )
}

export default event


export async function getServerSideProps () {
    const response = await fetch(`http://localhost:4000/events`)
    const data = await response.json()


    return {
        props: {
            evenList: data,
        }
    }
}