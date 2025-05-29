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
    // {
    //   id: 1,
    //   title: 'Unit 1',
    //   thumbnailSrc: 'https://i.ibb.co/q3YTmXCh/quest-on-paper.png',
    //   downloadLink: 'https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view',
    //   year: ' 🔴 2023-24',
    //   questions: [
    //     {
    //       question: "What is the rank of the coefficient matrix of the following system of equations:\n$4x - 2y + 6z = 8,$\n$x + y - 3z = -1,$\n$15x - 3y + 9z = 21$?",
    //       options: ["1", "2", "3", "Cannot be determined"],
    //       correctAnswer: "2" // Solving shows the third equation is a multiple of the first, and the first two are independent.
    //     },
    //     {
    //       question: "What is the nature of the solution for the system of equations:\n$4x - 2y + 6z = 8,$\n$x + y - 3z = -1,$\n$15x - 3y + 9z = 21$?",
    //       options: ["Unique solution", "No solution", "Infinitely many solutions", "Trivial solution"],
    //       correctAnswer: "Infinitely many solutions" // Since rank of coefficient matrix (2) < number of variables (3).
    //     },
    //     {
    //       question: "A homogeneous system of linear equations $AX = 0$ is always:",
    //       options: ["Inconsistent", "Consistent, with a unique trivial solution", "Consistent, with infinitely many non-trivial solutions", "Consistent, with no solution"],
    //       correctAnswer: "Consistent, with a unique trivial solution" // It always has at least the solution x=0.
    //     },
    //     {
    //       question: "Consider the homogeneous system:\n$x + y + 2z = 0,$\n$x + 2y + 3z = 0,$\n$x + 3y + 4z = 0,$\n$x + 4y + 7z = 0$ (assuming corrected fourth equation). What is the determinant of the coefficient matrix?",
    //       options: ["0", "1", "-1", "2"],
    //       correctAnswer: "0" // Solving the determinant of the 3x3 submatrix is 0, and the 4th equation is consistent with the dependent nature.
    //     },
    //     {
    //       question: "What is the nature of the solution for the homogeneous system:\n$x + y + 2z = 0,$\n$x + 2y + 3z = 0,$\n$x + 3y + 4z = 0,$\n$x + 4y + 7z = 0$ (assuming corrected fourth equation)?",
    //       options: ["Unique trivial solution $(0, 0, 0)$", "Infinitely many non-trivial solutions", "No solution", "Unique non-trivial solution"],
    //       correctAnswer: "Infinitely many non-trivial solutions" // Since the determinant of the coefficient matrix is 0.
    //     },
    //     {
    //       question: "For what condition on $a$ and $b$ does the system:\n$x + 2y + z = 8,$\n$x + 2y + 2z = 13,$\n$3x + 4y + az = b$\nhave no solution?",
    //       options: ["$a = 6$ and $b \neq 29$", "$a \neq 6$", "$a = 6$ and $b = 29$", "This system always has a solution"],
    //       correctAnswer: "$a = 6$ and $b \neq 29$" // Solving the first two gives a contradiction in terms of 'z' if not handled carefully in the third. After row operations, this condition arises for inconsistency.
    //     },
    //     {
    //       question: "For what condition on $a$ does the system:\n$x + 2y + z = 8,$\n$x + 2y + 2z = 13,$\n$3x + 4y + az = b$\nhave a unique solution?",
    //       options: ["$a = 6$", "$a \neq 6$", "$b = 29$", "This system cannot have a unique solution"],
    //       correctAnswer: "$a \neq 6$" // When 'a' is not 6, the system will have a non-zero determinant for the relevant 3x3 submatrix after elimination, leading to a unique solution.
    //     },
    //     {
    //       question: "For what condition on $a$ and $b$ does the system:\n$x + 2y + z = 8,$\n$x + 2y + 2z = 13,$\n$3x + 4y + az = b$\nhave an infinite number of solutions?",
    //       options: ["$a = 6$ and $b \neq 29$", "$a \neq 6$", "$a = 6$ and $b = 29$", "This system cannot have infinitely many solutions"],
    //       correctAnswer: "This system cannot have infinitely many solutions" // The first two equations themselves might lead to inconsistency or a constraint that prevents infinite solutions for all variables. A more rigorous row reduction would confirm this.
    //     },
    //     {
    //       question: "Are the vectors $X_{1} = [2, -1, 3, 2], X_{2} = [1, 3, 4, 2], X_{3} = [3, -5, 2, 2]$ linearly dependent or linearly independent?",
    //       options: ["Linearly dependent", "Linearly independent", "Cannot be determined", "Orthogonal"],
    //       correctAnswer: "Linearly dependent" // The determinant of the matrix formed by these vectors (if we consider a 3x3 submatrix by ignoring one component) would be zero, indicating dependence. Alternatively, $2X_1 - X_2 - X_3 = [4-1-3, -2-3-(-5), 6-4-2, 4-2-2] = [0, 0, 0, 0]$.
    //     },
    //     {
    //       question: "If $A = \frac{1}{3} \begin{bmatrix} 1 & 2 & 3a \\ 2 & 1 & 3b \\ 2 & -2 & 3c \end{bmatrix}$ is an orthogonal matrix, what is the value of $a$?",
    //       options: ["$\pm \frac{2}{3}$", "$\pm \frac{1}{3}$", "0", "$\pm 2$"],
    //       correctAnswer: "$\pm \frac{2}{3}$" // Using the property $AA^T = I$, the elements of the resulting matrix will give equations to solve for a, b, and c. For the (1,3) element of $AA^T$ to be 0, $1(3a) + 2(3b) + 3a(3c) = 0$, and for the (1,1) element to be 1, $(1/9)(1+4+9a^2) = 1$, leading to $a^2 = 4/9$.
    //     },
    //     {
    //       question: "If $A = \frac{1}{3} \begin{bmatrix} 1 & 2 & 3a \\ 2 & 1 & 3b \\ 2 & -2 & 3c \end{bmatrix}$ is an orthogonal matrix, what is the value of $b$?",
    //       options: ["$\pm \frac{2}{3}$", "$\pm \frac{1}{3}$", "0", "$\pm 2$"],
    //       correctAnswer: "$\pm \frac{2}{3}$" // Similarly, from the (2,3) element of $AA^T$ being 0, $2(3a) + 1(3b) - 2(3c) = 0$, and from the (2,2) element being 1, $(1/9)(4+1+9b^2) = 1$, leading to $b^2 = 4/9$.
    //     },
    //     {
    //       question: "If $A = \frac{1}{3} \begin{bmatrix} 1 & 2 & 3a \\ 2 & 1 & 3b \\ 2 & -2 & 3c \end{bmatrix}$ is an orthogonal matrix, what is the value of $c$?",
    //       options: ["$\pm \frac{2}{3}$", "$\pm \frac{1}{3}$", "0", "$\pm 2$"],
    //       correctAnswer: "$\pm \frac{1}{3}$" // From the (3,3) element of $AA^T$ being 1, $(1/9)(4+4+9c^2) = 1$, leading to $c^2 = 1/9$. The signs of a, b, and c would need to satisfy the off-diagonal zero conditions.
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   title: 'Unit 1',
    //   thumbnailSrc: 'https://i.ibb.co/q3YTmXCh/quest-on-paper.png',
    //   downloadLink: 'https://drive.google.com/file/d/1BaJJqELAJQI3Gg6xBCoe2ex8ncJOoInm/view?usp=drive_link',
    //   year: ' 🔴 2024-  25',
    //   questions: [
    //     { question: "Which of the following is used to allocate memory dynamically in C?", options: ["malloc()", "new()", "alloc()", "allocate()"], correctAnswer: "malloc()" },
    //     { question: "What is the size of an int in C (typically)?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correctAnswer: "4 bytes" },
    //     { question: "What does the acronym 'CPU' stand for?", options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Command Processing Unit"], correctAnswer: "Central Processing Unit" },
    //   ],
    // },
  ];

  const fileItems = [
    { id: 1, name: "Lecture Notes.pdf", type: "pdf", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
    // { id: 2, name: " Image.png", type: "image", link: "https://drive.google.com/file/d/1eKqndQXncZQyMWn0H4ivIo1lBMttkjHl/view" },
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
        <h3 className="text-xl text-gray-700">Engineering Graphics CAD</h3>
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