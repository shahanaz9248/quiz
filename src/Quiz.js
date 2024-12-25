import React,{useState} from 'react'
import './quiz.css'
function Quiz() {
    const quiz=[
        {question:"what is the capital city of India?",
         image:"",
         options:["Mumbai","New Delhi","Kolkatha","Hyderabad"]
        },
        {question:"Which City is Known as Pink city of India",
         image:"https://www.nativeplanet.com/img/2023/07/untitleddesign-2023-07-22t135020-390-1690278461.jpg?21122024182846",
         options:["Jai salmer","Vizag","Jaipur","Raipur"]
        },
        {question:"What is the capital city of Andhra Pradesh",
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEx0flEPxLBhA3HOnKRX4hhOBi-fSFdqjmrXyGXbcq52h-EPsi3OIH6l1qrgxNha5XqM&usqp=CAU",
         options:["New Delhi","Mumbai","Kolkatha","Amaravathi"]
        },
        {question:"Guess country by flag",
         image:"https://maps-italy.com/img/1200/blank-map-of-italy.jpg",
         options:["Italy","India","Turkey","Iran"]
        }
      ]

      const [count,setCount]=useState(0)
      const [score,setScore]=useState(0)


      function checkAnswer(index){
          if(quiz[0].options[index]==="New Delhi" || quiz[1].options[index]==="Jaipur" || quiz[2].options[index]==="Amaravathi" || quiz[3].options[index]==="Italy"){
             setScore(score+1)
          }
      }
      
       
      
      function change(index){
          checkAnswer(index)       
          setCount(count+1)     
      }
  if(count<=3){
  return (
    <div className="card">
        <h2>question number:{count+1}</h2>
        <h3 style={{marginBottom:"5px"}}>{quiz[count].question}</h3>
        <img src={quiz[count].image} alt="" style={{width:"300px",height:"150px",marginBottom:"5px"}}></img>
        <div className="opts">{quiz[count].options.map((x,index)=><div className="opt" key={index} onClick={()=>change(index)}>{x}</div>)}</div>     
    </div>
  )
 }else{
   return(
    <div className="card">
       <h2>Quiz completed</h2>
       <h1 id="sco">your score is {score} /4</h1>
    </div>
   )
 }
}

export default Quiz


/*<div className="btns"><button onClick={previous} className="btn">Previous</button><button onClick={next} className="btn">Next</button></div>*/