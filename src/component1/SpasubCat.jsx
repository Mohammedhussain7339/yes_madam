import { useState } from 'react';

export default function SpasubCat() {
    const faqData = [
        {
          question: "What is React?",
          answer: "React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
        },
        {
          question: "Why use React?",
          answer: "React allows developers to create large web applications that can change data, without reloading the page."
        },
        {
          question: "How does React work?",
          answer: "React creates a virtual DOM in memory, instead of manipulating the browser's DOM directly."
        }
      ];
      const [activeIndex, setActiveIndex] = useState(null); // To track the active question

      const toggleFAQ = (index) => {
        // Toggle between showing and hiding the answer, or closing it if it's already open
        setActiveIndex(activeIndex === index ? null : index);
      };
          
  return (
    <>    
    <div className='subspacat'>
        <div className="subspabox">
            <div className="subspasidebar">
            {faqData.map((faq, index) => (
        <div key={index}>
          <button onClick={() => toggleFAQ(index)} style={{ width: '100%', textAlign: 'left',height:'60px',background:'white' }}>
            {faq.question}
          </button>
          {activeIndex === index ? <p>{faq.answer}</p> : null}
        </div>
      ))}

            </div>
            <div className="subspacontainer">
                <div className="subcart">
                    <div className="imgbox">
                        <img src="https://cdn.yesmadam.com/images/live/iDescription/1604039272080.jpg" alt="" />
                    </div>
                    <div className="pretext">
                        <h3>Fruit Facial</h3><br />
                        <ul>
                            <li>Biotanica - Brand By Yes Madam</li>
                            <li>Biotanica - Brand By Yes Madam</li>
                            <li>Biotanica - Brand By Yes Madam</li>
                            <li>Biotanica - Brand By Yes Madam</li>
                            <a href="">View Details</a>

                        </ul><br /><br />
                        <div style={{display:'flex',alignItems:'center'}}>
                        <br /><br /><h3 >699/-</h3><button className="cartbtn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </>

  )
}
