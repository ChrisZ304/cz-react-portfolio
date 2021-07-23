import React from "react";
import "../../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function body(props) {
    return (
        <div className="aboutApp">

            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h3>
                            About Me
         </h3>
            </div>
            <div className="card-body">
                        <blockquote className="blockquote mb-0">
          <div className="row">
         <div className="col-md-3">
       <img id="pic" src="hw20-react-portfolio/Assets/76_pp.jpg" alt="profile pic" width="100%" height="auto%" />
      </div>

    <div className="col-md-8">

     <p>My name is Christopher Zacharias. I was born in S. Korea and adopted by an American couple around the age of two. After my parents brought me to the US, we lived for about a year in Maryland, before moving to Virginia, where I grew up in the city of Charlottesville. I attended both public and private gradeschools, and graduated from Albemarle High School in 2009.</p>
    
    <p>After highschool, I went on to attend Piedmont Va Community College where I took a series of general studies classes before deciding to save money and switch to full time work. After several years of working in a number of positions, I decided I was ready to get back into my studies. I tried a few single classes in subjects such as psychology and foreign language, but eventually found my way here to this bootcamp.</p>
        
    <p>I have no previous experience or background in coding, but I finally became interested in the subject because my dad used to be a programmer for the Richmond Railroad when he was young. I'm not sure if I want to be a programmer specifically, but he suggested to me that computer coding may be something I'd enjoy and a field in which I could potentially excel, given my love and knack for languages in general. I have found, so far that I enjoy it very much, and I'm thankful that my dad was right (even though, admittedly, it's taken me a literal decade to be open to that possibility.) I like it because it is very mentally stimulating and challenging, and I especially like that it's very cut and dry. It either works or it doesn't, and to work it needs to be thoroughly correct. I've found it seems to be an ideal fit for my unreasonably perfectionistic nature, and although my dad passed a few years back, I think it also allows me to feel somewhat connected to him as odd as that may seem.

</p>
 </div>
  </div>
   </blockquote>
   </div>
 </div>
            </div>

        </div>
            )
    }
export default body