import React from 'react'
import Card from './components/Card';

const App = () => {
  const students = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Satyam Kumar",
    rollNo: 101,
    branch: "Computer Science",
    college: "ABC Engineering College",
    semester: 6,
    year: 3,
    course: "B.Tech",
    location: "Bhopal"
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Anjali Sharma",
    rollNo: 102,
    branch: "Information Technology",
    college: "XYZ Institute of Technology",
    semester: 4,
    year: 2,
    course: "B.Tech",
    location: "Indore"
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Rahul Verma",
    rollNo: 103,
    branch: "Mechanical",
    college: "LNCT",
    semester: 8,
    year: 4,
    course: "B.Tech",
    location: "Bhopal"
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    name: "Priya Singh",
    rollNo: 104,
    branch: "Civil",
    college: "UIT RGPV",
    semester: 6,
    year: 3,
    course: "B.Tech",
    location: "Gwalior"
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    name: "Aman Gupta",
    rollNo: 105,
    branch: "Electronics",
    college: "NIT Bhopal",
    semester: 2,
    year: 1,
    course: "B.Tech",
    location: "Bhopal"
  },
  {
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Neha Patel",
    rollNo: 106,
    branch: "Computer Science",
    college: "IIST",
    semester: 8,
    year: 4,
    course: "B.Tech",
    location: "Jabalpur"
  },
  {
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Vikas Yadav",
    rollNo: 107,
    branch: "Information Technology",
    college: "SGSITS",
    semester: 6,
    year: 3,
    course: "B.Tech",
    location: "Indore"
  },
  {
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Kajal Mishra",
    rollNo: 108,
    branch: "Electrical",
    college: "MANIT",
    semester: 4,
    year: 2,
    course: "B.Tech",
    location: "Bhopal"
  },
  {
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Rohit Jain",
    rollNo: 109,
    branch: "Mechanical",
    college: "VIT",
    semester: 8,
    year: 4,
    course: "B.Tech",
    location: "Vellore"
  },
  {
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Pooja Agarwal",
    rollNo: 110,
    branch: "Computer Science",
    college: "Amity University",
    semester: 2,
    year: 1,
    course: "B.Tech",
    location: "Noida"
  }
];

  return (
    <div className='card-container'>
      {students.map((stu, index) => {
        return <div key={index}>
          <Card img={stu.image} name={stu.name} 
        rollNo={stu.rollNo} branch={stu.branch}
        course={stu.course} semester={stu.semester} year={stu.year} college={stu.college} 
        location={stu.location} />
        </div>
      })}
    </div>
  )
}

export default App;