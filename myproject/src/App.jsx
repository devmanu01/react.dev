import './App.css'
import Card from './components/card'


function App() {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 48,
    location: "Bangalore"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Data Analyst",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: 42,
    location: "Hyderabad"
  }, 
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    name: "Apple",
    datePosted: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 55,
    location: "Pune"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 60,
    location: "Mumbai"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "6 days ago",
    post: "Machine Learning Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 72,
    location: "Gurgaon"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer Intern",
    tag1: "Part-time",
    tag2: "Intern Level",
    pay: 28,
    location: "Noida"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    name: "Amazon",
    datePosted: "8 days ago",
    post: "Cloud Support Associate",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 38,
    location: "Chennai"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    name: "Meta",
    datePosted: "10 days ago",
    post: "Data Scientist",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 70,
    location: "Pune"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Content Operations Specialist",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay:"$70",
    location: "Mumbai"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    name: "Google",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay:"$50",
    location: "Bangalore"
  }
];
  


  return (
    <div>
      {jobOpenings.map(function(elem,idx){
      return<div key={idx}> {/*key=is uniquelly identify the element inn reach*/}
      <Card campany={elem.name} datePosted={elem.brandLogo} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
      </div>
      })}
    </div>
    
  )
}

export default App
  