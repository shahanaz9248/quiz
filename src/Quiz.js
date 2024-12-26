import React,{useState} from 'react'
import './quiz.css'
function Quiz() {
    const quiz=[
        {question:"what is the capital city of India?",
         image:"https://s7ap1.scene7.com/is/image/incredibleindia/india-gate-delhi-4-attr-hero?qlt=82&ts=1727351885876",
         options:["Mumbai","New Delhi","Kolkatha","Hyderabad"],
        },
        {question:"Which City is Known as Pink city of India",
         image:"https://www.nativeplanet.com/img/2023/07/untitleddesign-2023-07-22t135020-390-1690278461.jpg?21122024182846",
         options:["Jai salmer","Vizag","Jaipur","Raipur"],
        },
        {question:"What is the capital city of Andhra Pradesh",
         image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBEx0flEPxLBhA3HOnKRX4hhOBi-fSFdqjmrXyGXbcq52h-EPsi3OIH6l1qrgxNha5XqM&usqp=CAU",
         options:["Chennai","Mumbai","Kolkatha","Amaravathi"],
        },
        {question:"Guess the country by map",
         image:"https://maps-italy.com/img/1200/blank-map-of-italy.jpg",
         options:["Italy","India","Turkey","Iran"],
        },
        {question:"Guess the country by flag",
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",
          options:["USA","Canada","UAE","Switzerland"],
         },
         {question:"Guess the state  by it's map",
          image:"https://media.istockphoto.com/id/1227491675/vector/%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C2%B5-rgb.jpg?s=612x612&w=0&k=20&c=Z6JymY4aPwBkGqL3rBxf1blux04PVDCRW27XW2G8aZM=",
          options:["Tamil Nadu","Maharashra","Kerala","Gujarat"],
         },
         {question:"Which language is known as Italian of the east?",
          image:"https://upload.wikimedia.org/wikipedia/commons/d/df/Word_cloud_of_Indian_languages_and_scripts.png",
          options:["Tamil","Malayalam","Kannada","Telugu"],
         }
      ]

      const [count,setCount]=useState(0)
      const [score,setScore]=useState(0)


      function checkAnswer(index){
          if(quiz[count].options[index]==="New Delhi" || quiz[count].options[index]==="Jaipur" || quiz[count].options[index]==="Amaravathi" || quiz[count].options[index]==="Italy" ||  quiz[count].options[index]==="Canada" ||  quiz[count].options[index]==="Kerala" ||  quiz[count].options[index]==="Telugu"){
             setScore(score+1)
          }
      }
      
       
      
      function change(index){
          checkAnswer(index)       
          setCount(count+1)     
      }

      
      function feedback(score){
        if(score>=6){
           return <span>Great Job &#x1F60A;</span>
        }else if(score>=3 && score<=5){
          return <span>you could do better &#x1F642;</span>
        }else{
          return <span>Try Again &#x1F641;</span>
        }
      }
  if(count<=quiz.length-1){
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
    <div className="card2">
       <h2>Quiz completed</h2>
       <h1 id="sco">your score is {score} /{quiz.length}</h1>
       <h4 id="feed" style={{marginTop:"0px"}}>{feedback(score)}</h4>
       <button id="retake" onClick={()=>window.location.reload()}>Retake Quiz</button>
       <img src="https://media.istockphoto.com/id/1292897490/vector/human-hands-clapping-people-crowd-applaud-to-congratulate-success-job-hand-thumbs-up.jpg?s=612x612&w=0&k=20&c=lKsAJ5LyWerjNH1wxid61_mZP9ZebAEFRbfZgic26hs=" style={{width:"400px",height:"200px"}} alt=""></img>
       
    </div>
   )
 }
}

export default Quiz


/*<div className="btns"><button onClick={previous} className="btn">Previous</button><button onClick={next} className="btn">Next</button></div>*/