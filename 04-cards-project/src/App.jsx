import Card from './components/card'

const App = () => {

  const jobs = [
  {
    brandlogo: "https://img.freepik.com/premium-photo/google-logo-is-shown-white-background_1315971-720.jpg",
    name: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 42,
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.mfjIDgZfzL5i-BViz7SCnwHaD4?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer II",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 38,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.dndhmFc559rrXNAjPWGBeQHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Microsoft",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 40,
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.5MoH8qTW_swxJ-jDBlOd8QHaFj?w=193&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Meta",
    datePosted: "2 weeks ago",
    post: "Software Engineer, Product",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.srZPPEjkkzxd7wwXNkuCMQHaE8?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Apple",
    datePosted: "4 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 44,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.rePCYv0Kgsqp5hdsUrrKxAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Netflix",
    datePosted: "3 weeks ago",
    post: "Senior Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.X9Hd098FZkEPuR0mpRLKnAHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 48,
    location: "Pune, India"
  },
  {
    brandlogo: "data:image/webp;base64,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",
    name: "Adobe",
    datePosted: "10 days ago",
    post: "UI Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 32,
    location: "Noida, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.jNy5QTzPKI3BJewZ_2OStQHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Salesforce",
    datePosted: "2 weeks ago",
    post: "Backend Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: 39,
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://www.bing.com/th/id/OIP.SNKIAoEN_4hBknqP-0YX8wHaHa?w=193&h=193&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=ImgAns&rm=2",
    name: "Oracle",
    datePosted: "10 weeks ago",
    post: "Cloud Infrastructure Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 41,
    location: "Bengaluru, India"
  }
];

  return (
    <div className='parent'>
      {jobs.map(function(elem, idx){
        return <div key={idx}>
            <Card company={elem.name} logo={elem.brandlogo} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location}/>
          </div>
      })}
    </div>
  )
}

export default App