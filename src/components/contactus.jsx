import React, { useState,useRef } from 'react';


function Contactus() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        reason: '',
        message: '',
        hear: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const formRef = useRef(null);
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbwjVjmYx2eH3-Yi5CSj_77A838emigolbp6nxaJhW3c3mOD2YBeN7pqh5ThXKDVmf5S/exec";
  
    const handleSubmit = (e) => {
      e.preventDefault();
     
      fetch(scriptUrl, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        body: new FormData(formRef.current)
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          alert("Form Submited Successfully");
    })
    };
    return (
        <div className="containerX">
            <h1>Get In Touch <span>With Us</span></h1>
            <p>We're excited to hear from you! Whether you have questions, feedback, or are interested in partnership opportunities, please fill out the form below, and we'll get back to you as soon as possible.</p>
            <form 
            ref={formRef}
            onSubmit={handleSubmit}>
                <div className="form-group row">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group row">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <select 
                        name="reason" 
                        value={formData.reason} 
                        onChange={handleChange} 
                        required
                    >
                        <option value="" disabled selected>Reason For Contact</option>
                        <option value="question">Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="partnership">Partnership</option>
                    </select>
                </div>
                <div className="form-group">
                    <textarea 
                        name="message" 
                        rows="4" 
                        placeholder="Message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <input 
                        className="hear" 
                        type="text" 
                        name="hear" 
                        placeholder="How did you hear about us?" 
                        value={formData.hear} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Contactus;
