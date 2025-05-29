import React, { useState, useEffect } from 'react';

// Reusable FileCard component
const FileCard = ({ file, openPdfModal }) => {
  const getFileIcon = (type) => {
    const icons = {
      pdf: 'https://cdn-icons-png.flaticon.com/512/337/337946.png',
      image: 'https://tse1.mm.bing.net/th/id/OIP.a9RaVvLglrHkAtqRTwue3QHaHa?rs=1&pid=ImgDetMain',
      ppt: 'https://th.bing.com/th/id/OIP.Ctd_cSe_7xpi6CmBu9E5zwHaHa?rs=1&pid=ImgDetMain',
      doc: 'https://play-lh.googleusercontent.com/l-JVRfLKIS3VhM-iJ_4W_-kzCdd2uwTWr5eNtBiejB5yZNPqdUWxgzcwwqAAeAtxCuo',
    };
    return icons[type] || '';
  };

  return (
    <div key={file.id} className="flex flex-col items-center bg-white shadow-md rounded-lg p-2 hover:shadow-xl transition-all">
      <div className="w-20 h-20 flex items-center justify-center mb-3">
        <img src={getFileIcon(file.type)} alt={file.type} className="w-full h-full object-contain" />
      </div>
      <p className="text-sm font-semibold text-gray-700 text-center mb-2">{file.name}</p>
      <button
        onClick={() => openPdfModal(file.link)}
        className="bg-blue-500 hover:bg-green-600 text-white text-xs py-1 px-3 rounded-md"
      >
        Open
      </button>
    </div>
  );
};

const DownloadNotesSection = () => {
  const [isTestOpen, setIsTestOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [timer, setTimer] = useState(600); // 10 minutes
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isPdfOpen, setIsPdfOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [allAnswered, setAllAnswered] = useState(false);

  const notesCategories = [
    {
      id: 1,
      title: 'Unit 3-6',
      thumbnailSrc: 'https://i.ibb.co/q3YTmXCh/quest-on-paper.png',
      downloadLink: 'https://drive.google.com/file/d/1A62mg4Pp9NYv_R2m-bUlNWEKLhgaY6OW/view?usp=sharing',
      year: ' 🔴 (2023 PATTERN)',
      questions: [
        [
          
         
         
          {
            "question": "Question 1 asks to solve any how many of the following?",
            "options": ["One", "Two", "Three", "Four"],
            "correctAnswer": "Three"
          },
          {
            "question": "Question 2 asks to solve any how many of the following?",
            "options": ["One", "Two", "Three", "Four"],
            "correctAnswer": "Three"
          },
          {
            "question": "Question 3 asks to solve any how many of the following?",
            "options": ["One", "Two", "Three", "Four"],
            "correctAnswer": "Three"
          },
          {
            "question": "Question 4 asks to solve any how many of the following?",
            "options": ["One", "Two", "Three", "Four"],
            "correctAnswer": "Three"
          },
          {
            "question": "What type of transform is used in Question 1 (a)?",
            "options": ["Laplace transform", "Fourier sine transform", "Z-transform", "Wavelet transform"],
            "correctAnswer": "Fourier sine transform"
          },
          {
            "question": "Question 1 (b) is an example of:",
            "options": ["Differential equation", "Integral equation", "Algebraic equation", "Trigonometric equation"],
            "correctAnswer": "Integral equation"
          },
          {
            "question": "In Question 1 (c), what is being defined and found?",
            "options": ["Laplace transform", "Fourier transform", "Z-transform", "Hankel transform"],
            "correctAnswer": "Z-transform"
          },
          {
            "question": "Question 1 (d) asks to find the:",
            "options": ["Inverse Laplace transform", "Inverse Fourier transform", "Inverse Z-transform", "Inverse Hankel transform"],
            "correctAnswer": "Inverse Z-transform"
          },
           {
            "question": "Question 2 (a) involves:",
            "options": ["Definite Integral", "Indefinite Integral", "Gamma Function", "Beta Function"],
            "correctAnswer": "Gamma Function"
          },
          {
            "question": "Question 2 (b) requires defining and evaluating:",
            "options": ["Beta function", "Gamma function", "Error function", "Zeta function"],
            "correctAnswer": "Gamma function"
          },
          {
            "question": "Question 2 (c) involves:",
            "options": ["Beta Function", "Gamma Function", "Error Function", "Bessel Function"],
            "correctAnswer": "Beta Function"
          },
          {
            "question": "Question 2 (d) requires to show a specific integral relation involving:",
            "options": ["Exponential functions", "Trigonometric functions", "Logarithmic functions", "Polynomial functions"],
            "correctAnswer": "Logarithmic functions"
          },
          {
            "question": "Question 3 (a) asks to sketch a curve in:",
            "options": ["Cartesian coordinates", "Polar coordinates", "Parametric form", "Vector form"],
            "correctAnswer": "Polar coordinates"
          },
          {
            "question": "Question 3 (b) asks to sketch a curve in:",
            "options": ["Cartesian coordinates", "Polar coordinates", "Parametric form", "Vector form"],
            "correctAnswer": "Parametric form"
          },
          {
            "question": "Question 4 (a) requires evaluation of a:",
            "options": ["Single integral", "Double integral", "Triple integral", "Line integral"],
            "correctAnswer": "Double integral"
          },
          {
            "question": "Question 4 (d) utilizes triple integration to find the:",
            "options": ["Area", "Volume", "Surface area", "Length"],
            "correctAnswer": "Volume"
          }
        ]
      ],
    },
    {
      id: 2,
      title: 'Unit 3-6',
      thumbnailSrc: 'https://i.ibb.co/q3YTmXCh/quest-on-paper.png',
      downloadLink: 'https://drive.google.com/file/d/1A62mg4Pp9NYv_R2m-bUlNWEKLhgaY6OW/view?usp=sharing',
      year: ' 🔴 (2022 PATTERN)',
      questions: [
        { question: "Which of the following is used to allocate memory dynamically in C?", options: ["malloc()", "new()", "alloc()", "allocate()"], correctAnswer: "malloc()" },
        { question: "What is the size of an int in C (typically)?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correctAnswer: "4 bytes" },
        { question: "What does the acronym 'CPU' stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Command Processing Unit"], correctAnswer: "Central Processing Unit" },
      ],
    },

  ];

  const fileItems = [
    // { id: 1, name: "Lecture Notes.pdf", type: "pdf", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    // { id: 2, name: "Graph Image.png", type: "image", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    // { id: 3, name: "Presentation.pptx", type: "ppt", link: "/notes/presentation.pptx" },
    // { id: 4, name: "Chapter Summary.docx", type: "doc", link: "/notes/summary.docx" },
  ];

  const resetTest = () => {
    setSelectedCategory(null);
    setUserAnswers({});
    setTimer(120); // Reset timer to initial test duration
    setShowResult(false);
    setScore(0);
    setCurrentQuestionIndex(0); // Reset question index
    setAllAnswered(false);
  };

  const handleAnswer = (questionIndex, option) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const submitTest = () => {
    if (!allAnswered) {
      alert("Please answer all the questions before submitting.");
      return;
    }
    const questions = selectedCategory?.questions || [];
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (userAnswers[index] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResult(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openTestModal = (category) => {
    setSelectedCategory(category);
    setIsTestOpen(true);
    setTimer(120);
    setUserAnswers({});
    setShowResult(false);
    setCurrentQuestionIndex(0); // Start from the first question
    setAllAnswered(false);
  };

  const closeTestModal = () => {
    setIsTestOpen(false);
    resetTest();
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const openPdfModal = (url) => {
    const isDriveLink = url.includes('drive.google.com');
    const formattedUrl = isDriveLink ? url.replace('/view', '/preview') : url;
    setPdfUrl(formattedUrl);
    setIsPdfOpen(true);
  };

  const closePdfModal = () => {
    setPdfUrl('');
    setIsPdfOpen(false);
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNextQuestion = () => {
    if (selectedCategory?.questions && currentQuestionIndex < selectedCategory.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    if (isTestOpen && timer > 0 && !showResult) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !showResult && isTestOpen) {
      submitTest();
    }
  }, [isTestOpen, timer, showResult]);

  useEffect(() => {
    if (selectedCategory?.questions) {
      const allQuestionsAnswered = Object.keys(userAnswers).length === selectedCategory.questions.length;
      setAllAnswered(allQuestionsAnswered);
    }
  }, [userAnswers, selectedCategory]);

  const currentQuestion = selectedCategory?.questions?.[currentQuestionIndex];
  const totalQuestions = selectedCategory?.questions?.length || 0;

  return (
    <div className="bg-gradient-to-r from-white  via-gray-300 animate-gradient bg-cover py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Semester-I</h2>
        <h3 className="text-xl text-gray-700">Mathematics-I</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-3 px-4">
        {notesCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 flex flex-col items-center">
              <div className="w-full h-auto bg-gray-100 flex items-center justify-center mb-4 overflow-hidden rounded-md">
                <img
                  src={category.thumbnailSrc}
                  alt={`${category.title} Thumbnail`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.title}</h3>
              <div className="bg-red-100 text-black text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {category.year}
              </div>
              <div className="flex space-x-4 sm:flex sm:space-x-4">
                <button onClick={() => openPdfModal(category.downloadLink)} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-xs ">
                  View PDF
                </button>
                <button onClick={() => openTestModal(category)} className="bg-gray-300 hover:bg-gray-400 text-gray-900 py-2 px-4 rounded-md text-xs">
                  Test MCQ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* File Explorer Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 text-center">📂 Study Notes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-3 px-4">
          {fileItems.map((file) => (
            <FileCard key={file.id} file={file} openPdfModal={openPdfModal} />
          ))}
        </div>
      </div>

      {/* PDF Modal */}
      {isPdfOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
          <div className="bg-white w-full max-w-4xl h-[90%] rounded-lg overflow-hidden relative">
            <button
              onClick={closePdfModal}
              className="absolute top-3 right-3 w-14 h-14 bg-gray-200 text-black hover:bg-gray-300 text-4xl font-bold rounded-lg transition-all transform hover:scale-105 hover:shadow-xl focus:outline-none"
            >
              ×
            </button>
            <iframe src={pdfUrl} title="PDF Viewer" className="w-full h-full" />
          </div>
        </div>
      )}
      {/* Test Modal */}
      {isTestOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50 p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-4xl mx-auto rounded-lg p-6 relative overflow-y-auto">
            {!showResult ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{selectedCategory?.title} - Mock Test</h2>
                  <div className="text-xl font-semibold text-red-600">⏳ {formatTime(timer)}</div>
                </div>

                {currentQuestion && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {currentQuestionIndex + 1}. {currentQuestion.question}
                    </h3>
                    <div className="flex flex-col space-y-3">
                      {currentQuestion.options.map((option, idx) => {
                        const isSelected = userAnswers[currentQuestionIndex] === option;
                        return (
                          <label
                            key={idx}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-md border hover:bg-blue-50 border-gray-300 transition duration-200 cursor-pointer ${
                              isSelected ? 'bg-blue-100 border-blue-500 font-semibold' : ''
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question_${currentQuestionIndex}`}
                              value={option}
                              checked={isSelected}
                              onChange={() => handleAnswer(currentQuestionIndex, option)}
                              className="form-radio text-blue-600 focus:ring-blue-500"
                            />
                            <span>{option}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8">
                  <button
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span>{currentQuestionIndex + 1} / {totalQuestions}</span>
                  <button
                    onClick={goToNextQuestion}
                    disabled={currentQuestionIndex === totalQuestions - 1}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>

                <div className="flex justify-center mt-8">
                  <button
                    onClick={submitTest}
                    disabled={!allAnswered}
                    className={`bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-md ${!allAnswered ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Submit
                  </button>
                  <button onClick={closeTestModal} className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-6 rounded-md ml-4">
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center p-6 rounded-lg shadow-md">
                {/* Attractive Score Display */}
                <div className="bg-gradient-to-br from-green-400 to-blue-500 text-white p-8 rounded-xl mb-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-4">🎉 Your Test Result 🎉</h2>
                  <p className="text-xl">
                    You scored{' '}
                    <span className="font-extrabold text-4xl">{score}</span> out of{' '}
                    <span className="font-semibold text-xl">{totalQuestions}</span>
                  </p>
                  <p className="mt-2 text-sm italic text-gray-200">Keep practicing to improve!</p>
                </div>

                {/* Split Answer Key */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Detailed Answer Key</h3>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-2 text-left">
                  {(selectedCategory?.questions || []).map((q, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border">
                      <p className="font-semibold text-gray-800">{index + 1}. {q.question}</p>
                      <p className={`text-${userAnswers[index] === q.correctAnswer ? 'green' : 'red'}-600`}>
                        Your Answer: {userAnswers[index] || 'Not answered'}
                      </p>
                      <p className="text-green-600">Correct Answer: {q.correctAnswer}</p>
                    </div>
                  ))}
                </div>
                <button onClick={closeTestModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md mt-6">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadNotesSection;