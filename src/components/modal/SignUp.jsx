import React, { useState } from 'react';

const AuthModal = ({ setShowModal }) => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  LOGIN LOGIC
    if (isLogin) {
      const isAlreadyRegister = JSON.parse(localStorage.getItem('userData')) || [];
      const isMatched = isAlreadyRegister.find((detail)=> detail.email === formData.email && detail.password===formData.password)
      if(isMatched){
        alert("Logged In Successfully")
        setShowModal(false)
        sessionStorage.setItem('loginDetail',JSON.stringify(isMatched))
      }else {
        alert('Invalid Credentials')
      }
  
    } else {
      // SIGNUP LOGIC
      alert('Registered Successfully!');
      const existingData = JSON.parse(localStorage.getItem('userData')) || [];
      const updated = [...existingData, formData];
      localStorage.setItem('userData', JSON.stringify(updated));
      setShowModal(false);
    }

    // Clear form
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 font-[cursive] relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-4xl text-gray-500 cursor-pointer hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition-all duration-200"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-4 text-center">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
